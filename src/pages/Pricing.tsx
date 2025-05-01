import React from  'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles,
  Check,
  ChevronRight,
  Shield,
  Zap,
  Headphones,
  Mail,
  HelpCircle,
  Calendar,
  BrainCircuit,
  MessageSquare,
  Globe2,
  Bell,
  BarChart,
  Users,
  ArrowRight,
  Phone
} from 'lucide-react';

function Pricing() {
  const plans = [
    {
      name: "Starter Plan",
      price: "1,500",
      billing: "one-time",
      description: "Perfect for small businesses ready to automate their call handling",
      highlight: "One-time payment, lifetime value",
      features: [
        "AI agent creation",
        "AI training with business information",
        "Basic Call Analytics Dashboard",
        "Call reviews & transcripts",
        "Basic Calendar Integration",
        "Automated appointment scheduling",
        "Instant email confirmations",
        "Personalized AI voice"
      ],
      metrics: [
        { label: "ROI", value: "3x" },
        { label: "Cost Reduction", value: "40%" },
        { label: "Efficiency", value: "+65%" }
      ],
      icon: <Zap className="w-6 h-6" />,
      link: "https://buy.stripe.com/28o9DndsZ8TIcrC9AA"
    },
    {
      name: "Growth Plan",
      price: "2,300",
      billing: "monthly",
      description: "Ideal for growing businesses needing advanced automation",
      highlight: "Most popular for growing businesses",
      popular: true,
      features: [
        "Everything in Starter Plan PLUS:",
        "Advanced Analytics Dashboard",
        "Advanced Calendar & CRM Integration",
        "Intelligent AI learning system",
        "Lead Capture & Email campaigns",
        "Upsell & Cross-Sell Automation",
        "Multi-Language Capability",
        "Custom Brand Voice",
        "Monthly reporting",
        "Performance monitoring"
      ],
      metrics: [
        { label: "ROI", value: "5x" },
        { label: "Revenue Boost", value: "+75%" },
        { label: "Conversion", value: "85%" }
      ],
      icon: <Shield className="w-6 h-6" />,
      link: "https://buy.stripe.com/14k16R3Spb1Q2R27st"
    },
    {
      name: "Premium Plan",
      price: "3,200",
      billing: "monthly",
      description: "Complete automation solution for established businesses",
      highlight: "Full-service outbound capabilities",
      features: [
        "Everything in Growth Plan PLUS:",
        "Automated reminder calls",
        "Customer re-engagement calls",
        "Win-back campaign calls",
        "Promotional & upsell calls",
        "Post-appointment feedback",
        "Custom integration options",
        "Targeted email campaigns",
        "Outbound calling agent",
        "Performance monitoring"
      ],
      metrics: [
        { label: "ROI", value: "8x" },
        { label: "Growth Rate", value: "+120%" },
        { label: "Retention", value: "96%" }
      ],
      icon: <Headphones className="w-6 h-6" />,
      link: "https://buy.stripe.com/bIY6rb3Sp6LA0IUeUW"
    }
  ];

  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "Automated appointment management with intelligent scheduling logic"
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "AI Learning",
      description: "Continuously improving AI that adapts to your business needs"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Natural Conversations",
      description: "Human-like interactions that maintain professionalism"
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Multi-Language",
      description: "Support for multiple languages to serve diverse customers"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Smart Notifications",
      description: "Automated reminders and confirmations to reduce no-shows"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Detailed insights and reporting on all interactions"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 circuit-background opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Simple Pricing</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
                Choose Your Success Path
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your business communication with our powerful AI solutions
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="relative flex-shrink-0">
                      <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-md"></div>
                      <div className="relative z-10 text-purple-400">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-1 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 overflow-hidden transition-all duration-300 hover:bg-white/10">
                  <div className="p-8">
                    <div className="relative mb-6">
                      <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-md"></div>
                      <div className="relative z-10 inline-flex p-3 rounded-xl bg-white/5 text-purple-400">
                        {plan.icon}
                      </div>
                    </div>

                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                        {plan.name}
                      </h3>
                      {plan.popular && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          Most Popular
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400">/{plan.billing}</span>
                    </div>
                    
                    <p className="text-sm text-gray-400 mb-4">
                      {plan.description}
                    </p>

                    <div className="bg-purple-500/10 rounded-lg p-3 mb-6 border border-purple-500/20">
                      <p className="text-purple-400 text-sm font-medium">
                        {plan.highlight}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {plan.metrics.map((metric, i) => (
                        <div 
                          key={i}
                          className="text-center p-2 rounded-lg bg-white/5 transform transition-transform duration-300 group-hover:scale-105"
                        >
                          <div className="text-lg font-bold text-purple-400">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-400">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={plan.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full group relative px-6 py-3 bg-purple-600 rounded-lg font-medium text-center transition-all duration-300 mb-8"
                    >
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative flex items-center justify-center gap-2">
                        Get Started
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </a>

                    <div className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-purple-500/50 via-indigo-500/50 to-purple-500/50 mt-6 transition-all duration-700"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-20 text-center">
            <div className="relative group inline-block">
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Need a Custom Plan?
                  </h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Contact our team for custom enterprise solutions
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-lg text-white font-medium hover:bg-purple-500 transition-colors"
                >
                  Contact Sales
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;