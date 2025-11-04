import { Link } from "react-router-dom";
import { Shield, Search, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Advanced Threat Detection</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Secure AI-Powered
              </span>
              <br />
              <span className="text-foreground">Fraud Ecosystem</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Protecting your digital world with cutting-edge AI technology. Detect phishing URLs, 
              analyze threats, and stay secure with real-time analysis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/phishing-detector">
                <Button size="lg" className="gap-2 shadow-glow hover:shadow-glow/50 transition-all">
                  Try Phishing Detector
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multi-Module Security Platform
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              S.A.F.E. provides comprehensive protection across multiple threat vectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-card hover:shadow-glow/20 transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Phishing URL Detection</CardTitle>
                <CardDescription>
                  AI-powered lexical analysis to identify malicious URLs in real-time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Random Forest & SVM classification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Instant URL structure analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Detailed threat breakdown</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card hover:shadow-glow/20 transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Email Analysis</CardTitle>
                <CardDescription>
                  Coming Soon: Advanced email threat detection and analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-muted mt-0.5 flex-shrink-0" />
                    <span>Header analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-muted mt-0.5 flex-shrink-0" />
                    <span>Attachment scanning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-muted mt-0.5 flex-shrink-0" />
                    <span>Sender verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card hover:shadow-glow/20 transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Fraud Prevention</CardTitle>
                <CardDescription>
                  Coming Soon: Multi-layered fraud detection system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-muted mt-0.5 flex-shrink-0" />
                    <span>Behavioral analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-muted mt-0.5 flex-shrink-0" />
                    <span>Transaction monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-muted mt-0.5 flex-shrink-0" />
                    <span>Risk scoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-hero text-primary-foreground shadow-glow border-0">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl md:text-4xl font-bold">
                Ready to Secure Your Digital World?
              </CardTitle>
              <CardDescription className="text-primary-foreground/80 text-lg">
                Start detecting threats with our AI-powered phishing URL detector
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="/phishing-detector">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="gap-2 hover:scale-105 transition-transform"
                >
                  Launch Detector
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>© 2025 S.A.F.E. - Secure AI-Powered Fraud Ecosystem. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
