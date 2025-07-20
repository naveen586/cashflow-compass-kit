import { TrendingUp, DollarSign, PieChart, BarChart3, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                FinanceFlow
              </h1>
            </div>
            <Button variant="outline">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Financial Literacy for Small Businesses
            </Badge>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Empower Your Business with Smart Financial Tools
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Complete toolkit for small businesses, shopkeepers, and MSMEs to master budgeting, 
              secure funding, and plan for long-term growth.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Three Pillars of Financial Success</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach covers every aspect of your business financial journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Funding Insights */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Funding Insights</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get expert guidance on startup funding, grants, and investment opportunities tailored for your business size and industry.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Grant discovery & application help</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Investor pitch preparation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Loan comparison tools</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                  Explore Funding
                </Button>
              </CardContent>
            </Card>

            {/* Budgeting Tools */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Smart Budgeting</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Master daily cash flow management with intuitive tools designed for small business operations.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Daily cash flow tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Expense categorization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Budget vs actual analysis</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4 group-hover:bg-accent group-hover:text-accent-foreground">
                  Start Budgeting
                </Button>
              </CardContent>
            </Card>

            {/* Long-term Planning */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-info">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-info/10 rounded-lg">
                    <Target className="h-6 w-6 text-info" />
                  </div>
                  <CardTitle className="text-xl">Long-term Planning</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Strategic guidance for managing surplus funds, investments, and sustainable business growth.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-info rounded-full"></div>
                    <span>Investment recommendations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-info rounded-full"></div>
                    <span>Growth forecasting tools</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-info rounded-full"></div>
                    <span>Risk assessment guides</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4 group-hover:bg-info group-hover:text-info-foreground">
                  Plan Growth
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Everything You Need to Succeed</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed specifically for small business financial management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="p-4 bg-success/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-success" />
              </div>
              <h4 className="font-semibold mb-2">Cash Flow Management</h4>
              <p className="text-sm text-muted-foreground">Track daily income and expenses with ease</p>
            </div>
            
            <div className="text-center p-6">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <PieChart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Financial Analytics</h4>
              <p className="text-sm text-muted-foreground">Get insights into your business performance</p>
            </div>
            
            <div className="text-center p-6">
              <div className="p-4 bg-accent/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Growth Forecasting</h4>
              <p className="text-sm text-muted-foreground">Plan for future business expansion</p>
            </div>
            
            <div className="text-center p-6">
              <div className="p-4 bg-info/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-info" />
              </div>
              <h4 className="font-semibold mb-2">Decision Support</h4>
              <p className="text-sm text-muted-foreground">Make informed financial decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of small businesses that have improved their financial health with FinanceFlow
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/20 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg">FinanceFlow</span>
          </div>
          <p className="text-muted-foreground">
            Empowering small businesses with financial literacy and smart tools
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
