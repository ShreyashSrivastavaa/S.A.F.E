import { Link, useNavigate } from "react-router-dom";
import { Shield, Search, AlertTriangle, CheckCircle, ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-pulse-glow">
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
              Enterprise-grade security platform built to protect your digital assets. Our advanced 
              machine learning models detect phishing URLs and analyze threats in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                onClick={() => navigate("/phishing-detector")}
                className="gap-2 shadow-glow hover:shadow-glow-lg transition-all"
              >
                Try Phishing Detector
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="text-center bg-gradient-card border-primary/20 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">99.8%</div>
                <p className="text-sm text-muted-foreground">Detection Accuracy</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-card border-primary/20 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">&lt;2s</div>
                <p className="text-sm text-muted-foreground">Average Analysis Time</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-card border-primary/20 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">10K+</div>
                <p className="text-sm text-muted-foreground">Daily Scans</p>
              </CardContent>
            </Card>
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
            <Card className="bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 border-primary/20 hover:scale-105 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle>Phishing URL Detection</CardTitle>
                  <Badge variant="default" className="text-xs">Active</Badge>
                </div>
                <CardDescription>
                  Advanced machine learning algorithms analyze URL patterns to identify potential threats
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
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
                <Button 
                  onClick={() => navigate("/phishing-detector")}
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Launch Module
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border/50 opacity-60 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="text-xs">Soon</Badge>
              </div>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-muted-foreground" />
                </div>
                <CardTitle className="text-muted-foreground">Email Analysis</CardTitle>
                <CardDescription>
                  Advanced email threat detection and analysis
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

            <Card className="bg-gradient-card shadow-card border-border/50 opacity-60 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="text-xs">Soon</Badge>
              </div>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-muted-foreground" />
                </div>
                <CardTitle className="text-muted-foreground">Fraud Prevention</CardTitle>
                <CardDescription>
                  Multi-layered fraud detection system
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
                Start protecting your organization with our phishing URL detection system
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate("/phishing-detector")}
                className="gap-2 hover:scale-105 transition-transform"
              >
                Launch Detector
                <ArrowRight className="w-4 h-4" />
              </Button>
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
