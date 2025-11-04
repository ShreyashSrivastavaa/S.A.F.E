import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();

    if (!url) {
      throw new Error("URL is required");
    }

    console.log("Analyzing URL:", url);

    // Extract lexical features from URL
    const features = extractLexicalFeatures(url);
    console.log("Extracted features:", features);

    // Use AI to analyze the URL based on lexical features
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are a cybersecurity expert specializing in phishing URL detection. Analyze the provided URL and its lexical features to determine if it's a phishing attempt.

Lexical features to consider:
1. URL length (longer URLs are often suspicious)
2. Number of special characters (high count suggests obfuscation)
3. HTTPS protocol presence (lack of HTTPS is a red flag)
4. Number of subdomains (excessive subdomains are suspicious)
5. Presence of suspicious keywords (login, secure, verify, update, account, etc.)

Provide a classification and confidence score based on these features.`;

    const userPrompt = `Analyze this URL for phishing:

URL: ${url}

Lexical Features:
- Length: ${features.urlLength} characters
- Special Characters: ${features.specialCharCount}
- HTTPS: ${features.hasHttps ? 'Yes' : 'No'}
- Subdomains: ${features.subdomainCount}
- Suspicious Keywords: ${features.suspiciousKeywords.length > 0 ? features.suspiciousKeywords.join(', ') : 'None'}

Based on these features, classify this URL as "safe" or "scam" and provide:
1. Your verdict (safe or scam)
2. Confidence level (0-1)
3. A brief explanation

Respond in JSON format:
{
  "verdict": "safe" or "scam",
  "confidence": number between 0 and 1,
  "explanation": "your explanation"
}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const aiData = await response.json();
    console.log("AI response:", aiData);

    const aiContent = aiData.choices[0].message.content;
    
    // Parse the JSON response from AI
    let aiResult;
    try {
      // Try to extract JSON from markdown code blocks if present
      const jsonMatch = aiContent.match(/```json\s*([\s\S]*?)\s*```/) || 
                       aiContent.match(/```\s*([\s\S]*?)\s*```/);
      const jsonStr = jsonMatch ? jsonMatch[1] : aiContent;
      aiResult = JSON.parse(jsonStr);
    } catch (parseError) {
      console.error("Failed to parse AI response:", aiContent);
      // Fallback: use a simple heuristic if AI parsing fails
      aiResult = fallbackAnalysis(features);
    }

    const result = {
      verdict: aiResult.verdict,
      confidence: aiResult.confidence,
      features: features,
      explanation: aiResult.explanation
    };

    console.log("Analysis result:", result);

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error in analyze-phishing-url:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});

function extractLexicalFeatures(url: string) {
  const suspiciousKeywords = [
    'login', 'signin', 'account', 'verify', 'secure', 'update', 'confirm',
    'banking', 'paypal', 'password', 'suspended', 'locked', 'unusual',
    'click', 'urgent', 'immediately', 'expire'
  ];

  const urlLower = url.toLowerCase();
  const foundKeywords = suspiciousKeywords.filter(keyword => urlLower.includes(keyword));

  let hostname = '';
  try {
    const urlObj = new URL(url);
    hostname = urlObj.hostname;
  } catch {
    // Invalid URL, use full string for analysis
    hostname = url;
  }

  const subdomains = hostname.split('.').length - 2; // Subtract 2 for domain and TLD
  const specialChars = (url.match(/[^a-zA-Z0-9]/g) || []).length;
  const hasHttps = url.toLowerCase().startsWith('https://');

  return {
    urlLength: url.length,
    specialCharCount: specialChars,
    hasHttps: hasHttps,
    subdomainCount: Math.max(0, subdomains),
    suspiciousKeywords: foundKeywords
  };
}

function fallbackAnalysis(features: any) {
  let score = 0;
  
  // Simple heuristic scoring
  if (features.urlLength > 75) score += 0.2;
  if (features.specialCharCount > 10) score += 0.2;
  if (!features.hasHttps) score += 0.3;
  if (features.subdomainCount > 2) score += 0.2;
  if (features.suspiciousKeywords.length > 0) score += 0.3;

  const verdict = score > 0.5 ? "scam" : "safe";
  const confidence = verdict === "scam" ? score : (1 - score);

  return {
    verdict,
    confidence: Math.min(0.95, confidence),
    explanation: `Based on lexical analysis: ${features.suspiciousKeywords.length} suspicious keywords, ${features.hasHttps ? '' : 'no '}HTTPS, ${features.subdomainCount} subdomains. This URL appears ${verdict === "safe" ? "legitimate" : "suspicious"}.`
  };
}
