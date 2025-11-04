import { useState } from "react";
import { Shield, AlertTriangle, CheckCircle, Loader2, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import { supabase } from "@/integrations/supabase/client";

interface AnalysisResult {
  verdict: "safe" | "scam";
  confidence: number;
  features: {
    urlLength: number;
    specialCharCount: number;
    hasHttps: boolean;
    subdomainCount: number;
    suspiciousKeywords: string[];
  };
  explanation: string;
}

const PhishingDetector = () => {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const analyzeUrl = async () => {
    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a URL to analyze",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke("analyze-phishing-url", {
        body: { url },
      });

      if (error) throw error;

      setResult(data);
      
      toast({
        title: "Analysis Complete",
        description: `URL classified as ${data.verdict.toUpperCase()}`,
        variant: data.verdict === "safe" ? "default" : "destructive",
      });
    } catch (error) {
      console.error("Analysis error:", error);
      toast({
        title: "Analysis Failed",
        description: "Unable to analyze URL. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Analysis</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Phishing URL Detector
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced lexical analysis using machine learning to detect malicious URLs
            </p>
          </div>

          {/* Input Section */}
          <Card className="mb-8 shadow-card">
            <CardHeader>
              <CardTitle>Enter URL to Analyze</CardTitle>
              <CardDescription>
                Paste any URL to check if it's potentially a phishing attempt
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <LinkIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="url"
                    placeholder="https://example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && analyzeUrl()}
                    className="pl-10"
                    disabled={isAnalyzing}
                  />
                </div>
                <Button 
                  onClick={analyzeUrl} 
                  disabled={isAnalyzing}
                  className="gap-2"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Analyzing
                    </>
                  ) : (
                    <>
                      <Shield className="w-4 h-4" />
                      Analyze
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          {result && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              {/* Verdict Card */}
              <Card className={`shadow-card border-2 ${
                result.verdict === "safe" 
                  ? "border-success/50 bg-success/5" 
                  : "border-destructive/50 bg-destructive/5"
              }`}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {result.verdict === "safe" ? (
                        <CheckCircle className="w-12 h-12 text-success" />
                      ) : (
                        <AlertTriangle className="w-12 h-12 text-destructive" />
                      )}
                      <div>
                        <h3 className="text-2xl font-bold">
                          {result.verdict === "safe" ? "Safe URL" : "Potential Scam"}
                        </h3>
                        <p className="text-muted-foreground">
                          Confidence: {(result.confidence * 100).toFixed(1)}%
                        </p>
                      </div>
                    </div>
                    <Badge 
                      variant={result.verdict === "safe" ? "default" : "destructive"}
                      className="text-lg px-4 py-2"
                    >
                      {result.verdict.toUpperCase()}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Features Analysis */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Lexical Features Analysis</CardTitle>
                  <CardDescription>
                    Detailed breakdown of URL characteristics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">URL Length</span>
                      <Badge variant="outline">{result.features.urlLength} characters</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">Special Characters</span>
                      <Badge variant="outline">{result.features.specialCharCount}</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">HTTPS Protocol</span>
                      <Badge variant={result.features.hasHttps ? "default" : "destructive"}>
                        {result.features.hasHttps ? "Yes" : "No"}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm font-medium">Subdomains</span>
                      <Badge variant="outline">{result.features.subdomainCount}</Badge>
                    </div>
                  </div>

                  {result.features.suspiciousKeywords.length > 0 && (
                    <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                      <p className="text-sm font-medium mb-2 text-destructive">
                        Suspicious Keywords Detected:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {result.features.suspiciousKeywords.map((keyword, idx) => (
                          <Badge key={idx} variant="destructive">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Explanation */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Analysis Explanation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {result.explanation}
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Info Card */}
          {!result && (
            <Card className="shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
                <CardDescription>
                  Our MVP uses lexical feature analysis to detect phishing URLs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">URL Structure Analysis</p>
                    <p>Examines length, special characters, and subdomain patterns</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Keyword Detection</p>
                    <p>Identifies suspicious words commonly used in phishing attacks</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">AI-Powered Classification</p>
                    <p>Uses machine learning to provide instant threat assessment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhishingDetector;
