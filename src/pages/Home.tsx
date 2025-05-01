import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import VapiCall from '../components/VapiCall';
import { 
  Phone, 
  Calendar, 
  Clock, 
  MessageSquare, 
  Globe2, 
  BrainCircuit,
  ChevronRight,
  Star,
  Mic,
  Bot,
  Wand2,
  Users,
  CheckCircle,
  Building2,
  PhoneCall,
  Sparkles,
  Quote,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Check,
  Zap,
  Shield,
  Headphones,
  ArrowRight,
  HelpCircle,
  Plus,
  Minus,
  Cpu,
  Network,
  Code,
  LineChart,
  Layers,
  Settings2,
  Fingerprint,
  Wifi,
  Lock,
  Database,
  CircuitBoard,
  PhoneOutgoing,
  CalendarCheck,
  Bell,
  UserCheck,
  BarChart3,
  ArrowUpRight,
  PhoneForwarded,
  Activity,
  Repeat,
  RefreshCcw
} from 'lucide-react';

function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showCallDemo, setShowCallDemo] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          element.classList.add('animate-in');
        }
      });

      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsStatsVisible(true);
        }
      }

      if (featuresRef.current) {
        const rect = featuresRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsFeaturesVisible(true);
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

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
        "Monthly Performance Optimization",
        "Monthly reporting"
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
        "Outbound calling agent",
        "Performance monitoring",
        "Targeted email campaigns"
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
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "Neural Processing",
      description: "Our advanced AI models process natural language with human-like understanding, enabling seamless conversations with callers.",
      metrics: ["99.9% Accuracy", "10ms Response"],
      techSpecs: ["GPT-4 Architecture", "Real-time Learning"],
      color: "from-purple-500 to-indigo-500",
      bgGlow: "from-purple-600/30 via-indigo-600/30 to-purple-600/30"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Quantum Processing",
      description: "Next-generation processing power delivers instantaneous response times and handles thousands of calls simultaneously.",
      metrics: ["1M QPS", "0.1ms Latency"],
      techSpecs: ["Distributed Computing", "Load Balancing"],
      color: "from-blue-500 to-cyan-500",
      bgGlow: "from-blue-600/30 via-cyan-600/30 to-blue-600/30"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Neural Network",
      description: "Our self-improving network adapts to your business needs, learning from each interaction to enhance future calls.",
      metrics: ["24/7 Learning", "98% Adaptation"],
      techSpecs: ["Deep Learning", "Pattern Recognition"],
      color: "from-pink-500 to-rose-500",
      bgGlow: "from-pink-600/30 via-rose-600/30 to-pink-600/30"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Smart Integration",
      description: "Seamlessly connects with your existing tech stack, including calendars, CRMs, and business management tools.",
      metrics: ["100+ APIs", "99.9% Uptime"],
      techSpecs: ["REST APIs", "WebSocket Support"],
      color: "from-emerald-500 to-green-500",
      bgGlow: "from-emerald-600/30 via-green-600/30 to-emerald-600/30"
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "AI-driven insights help optimize your business operations, from scheduling efficiency to customer engagement.",
      metrics: ["95% Accuracy", "Real-time"],
      techSpecs: ["Machine Learning", "Data Mining"],
      color: "from-amber-500 to-orange-500",
      bgGlow: "from-amber-600/30 via-orange-600/30 to-amber-600/30"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols ensure your business and customer data remains protected.",
      metrics: ["256-bit Encryption", "SOC 2 Compliant"],
      techSpecs: ["Zero Trust Architecture", "Continuous Monitoring"],
      color: "from-red-500 to-rose-500",
      bgGlow: "from-red-600/30 via-rose-600/30 to-red-600/30"
    }
  ];

  const FloatingCounter = ({ end, label, icon: Icon, delay = 0 }: { end: number, label: string, icon: React.ElementType, delay?: number }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (isStatsVisible) {
        let startTime: number;
        const duration = 2000; // 2 seconds

        setTimeout(() => {
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
              setCount(Math.floor(end * progress));
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }, delay);
      }
    }, [isStatsVisible, end, delay]);

    return (
      <div className="relative group perspective-element">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-70"></div>
        <div className="relative flex flex-col items-center gap-4 py-6 px-8 hover-float">
          <div className="relative">
            <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-md animate-pulse-slow"></div>
            <Icon className="w-10 h-10 text-purple-400 relative z-10 animate-float" />
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 mb-2 tracking-tight animate-float-delayed">
              {count >= 1000000 ? `${(count / 1000000).toFixed(1)}M` : count.toLocaleString()}
              {label.includes('%') && '%'}
            </div>
            <div className="text-gray-400 text-sm lg:text-base font-medium">{label}</div>
          </div>
        </div>
      </div>
    );
  };

  const testimonials = [
    {
      text: "I was skeptical about AI handling our medical appointments, but Calliri has been a game-changer. The AI understands complex medical terminology and handles scheduling with such care that patients often don't realize they're talking to an AI.",
      author: "Dr. Sarah Chen",
      role: "Medical Director",
      company: "HealthFirst Family Practice",
      industry: "Healthcare",
      rating: 5,
      stats: [
        { label: "No-show Reduction", value: "67%" },
        { label: "Staff Time Saved", value: "45hrs/week" },
        { label: "Patient Satisfaction", value: "98%" }
      ],
      features: ["Multi-language Support", "Medical Terminology", "HIPAA Compliant"]
    },
    {
      text: "Running a high-volume IT support desk was overwhelming until we implemented Calliri. The AI handles initial call routing and basic troubleshooting brilliantly. What impressed me most was how it learns from each interaction - it now handles 73% of Level 1 support calls without human intervention.",
      author: "Michael Park",
      role: "IT Operations Director",
      company: "TechFlow Solutions",
      industry: "Technology",
      rating: 5,
      stats: [
        { label: "First Call Resolution", value: "73%" },
        { label: "Response Time", value: "< 30sec" },
        { label: "Cost Savings", value: "52%" }
      ],
      features: ["24/7 Support", "Technical Accuracy", "Smart Routing"]
    },
    {
      text: "In wealth management, every client interaction matters. Calliri's AI has mastered the art of professional yet warm communication. It handles appointment scheduling for our 28 advisors flawlessly, even managing complex calendar conflicts and VIP client preferences.",
      author: "Emma Thompson",
      role: "Client Services Director",
      company: "Meridian Wealth Advisors",
      industry: "Finance",
      rating: 5,
      stats: [
        { label: "Advisor Efficiency", value: "+41%" },
        { label: "Client Retention", value: "96%" },
        { label: "Meeting Utilization", value: "89%" }
      ],
      features: ["Compliance Recording", "VIP Recognition", "Calendar Sync"]
    }
  ];

  const faqs = [
    {
      question: "How does the AI phone agent work?",
      answer: "Our AI phone agent uses advanced natural language processing to understand and respond to callers in a human-like manner. It integrates with your calendar and CRM systems to schedule appointments, answer questions, and provide information about your business."
    },
    {
      question: "Can the AI handle complex scheduling requirements?",
      answer: "Yes, our AI is designed to handle complex scheduling scenarios including multiple providers, varying appointment durations, specific resource requirements, and customer preferences. It can also manage rescheduling, cancellations, and waitlists."
    },
    {
      question: "How quickly can I get started?",
      answer: "Most businesses can be fully set up within 1-2 weeks. This includes AI training, integration with your existing systems, and customization to match your brand voice and specific business requirements."
    },
    {
      question: "What languages does the AI support?",
      answer: "Our AI currently supports over 12 languages including English, Spanish, French, German, Italian, Portuguese, Japanese, Chinese, Korean, Russian, Arabic, and Hindi. Additional languages can be added upon request."
    },
    {
      question: "How does the AI reduce no-shows?",
      answer: "The AI automatically sends appointment reminders via call, SMS, or email based on your preferences. It can confirm appointments, reschedule if needed, and follow up with no-shows to get them back on the calendar."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We implement bank-grade encryption, strict access controls, and regular security audits. All data is stored in SOC 2 compliant facilities, and we are fully GDPR and HIPAA compliant."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {showCallDemo && <VapiCall onClose={() => setShowCallDemo(false)} />}
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 circuit-background opacity-20"></div>
        <div className="absolute inset-0 noise-bg"></div>
        <div className="absolute inset-0 gradient-mesh"></div>
        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500/10 rounded-full pulse-ring"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-purple-500/20 rounded-full pulse-ring" style={{ animationDelay: '1s' }}></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-purple-500/30 rounded-full pulse-ring" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6">
              <Bot className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Never Miss Another Call</span>
            </div>

            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-400">
                  Your Perfect AI
                </span>
                <br />
                <div className="flex items-center justify-center gap-4 mt-2">
                  <span className="text-white">Receptionist</span>
                  <span className="relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">24/7</span>
                    <Wand2 className="absolute -right-8 -top-2 w-6 h-6 text-purple-400 wave-text" />
                  </span>
                </div>
              </h1>

              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                Let our AI handle your calls, schedule appointments, and delight your customers - while you focus on growing your business
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to="/book-demo"
                  className="group relative px-8 py-4 bg-purple-600 rounded-lg text-lg font-medium transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    Get Free Demo
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <button 
                  onClick={() => setShowCallDemo(true)}
                  className="group flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-medium border border-purple-500/30 hover:bg-purple-500/10 transition-colors duration-300"
                >
                  <Mic className="w-5 h-5" />
                  Try a Call
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="px-6 py-4 rounded-lg bg-white/5 backdrop-blur-sm border border-purple-500/20">
              <BrainCircuit className="w-6 h-6 text-purple-400 mx-auto mb-3" />
              <p className="text-sm text-gray-400">Speaks Just Like a Human</p>
            </div>
            <div className="px-6 py-4 rounded-lg bg-white/5 backdrop-blur-sm border border-purple-500/20">
              <Globe2 className="w-6 h-6 text-purple-400 mx-auto mb-3" />
              <p className="text-sm text-gray-400">Speaks Your Language</p>
            </div>
            <div className="px-6 py-4 rounded-lg bg-white/5 backdrop-blur-sm border border-purple-500/20">
              <Clock className="w-6 h-6 text-purple-400 mx-auto mb-3" />
              <p className="text-sm text-gray-400">Never Takes a Break</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_50%)]"></div>
          
          {/* Tech background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-purple-500/10 rounded-full animate-pulse-slow"></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-purple-500/20 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-48 h-48 border border-purple-500/15 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            
            <div className="absolute top-1/4 right-1/3 opacity-20">
              <CircuitBoard className="w-24 h-24 text-purple-400" />
            </div>
            <div className="absolute bottom-1/3 left-1/4 opacity-10">
              <Cpu className="w-32 h-32 text-purple-400" />
            </div>
            <div className="absolute top-2/3 right-1/4 opacity-15">
              <Database className="w-20 h-20 text-purple-400" />
            </div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6 animate-float">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Cutting-Edge Technology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
              Quantum AI Architecture
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Powered by next-generation technology that transforms how businesses communicate
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Feature Showcase */}
            <div className="relative perspective-3d h-[400px] sm:h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                {features.map((feature, index) => {
                  const isActive = index === activeFeature;
                  const xOffset = mousePosition.x * 10;
                  const yOffset = mousePosition.y * 10;
                  
                  return (
                    <div 
                      key={index}
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
                        isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-90'
                      }`}
                      style={{
                        transform: isActive ? `perspective(1000px) rotateY(${xOffset}deg) rotateX(${-yOffset}deg)` : 'perspective(1000px)'
                      }}
                    >
                      <div className="relative w-full max-w-md">
                        <div className={`absolute -inset-4 bg-gradient-to-r ${feature.bgGlow} rounded-3xl blur-xl`}></div>
                        <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-purple-500/30">
                          <div className="flex flex-col items-center text-center">
                            <div className={`relative p-4 rounded-full bg-gradient-to-r ${feature.color} mb-6 w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center`}>
                              <div className="absolute inset-0 rounded-full animate-pulse-slow"></div>
                              <div className="relative z-10 text-white">
                                {feature.icon}
                              </div>
                            </div>
                            
                            <h3 className="text-xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                              {feature.title}
                            </h3>
                            
                            <p className="text-sm sm:text-base text-gray-300 mb-6">
                              {feature.description}
                            </p>
                            
                            <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full mb-6">
                              {feature.metrics.map((metric, i) => (
                                <div 
                                  key={i}
                                  className="text-center p-2 sm:p-3 rounded-lg bg-white/5 border border-purple-500/20"
                                >
                                  <span className="text-sm sm:text-lg font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">{metric}</span>
                                </div>
                              ))}
                            </div>
                            
                            <div className="flex flex-wrap gap-2 justify-center">
                              {feature.techSpecs.map((spec, i) => (
                                <span 
                                  key={i}
                                  className="px-2 sm:px-3 py-1 text-xs rounded-full bg-white/5 border border-purple-500/20 text-gray-400"
                                >
                                  {spec}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Feature Navigation */}
            <div className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border-l-4 border-purple-500' 
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`relative p-2 rounded-lg ${
                      activeFeature === index ? 'bg-gradient-to-r from-purple-500 to-indigo-500' : 'bg-white/10'
                    } w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className={`font-semibold text-sm sm:text-base ${
                        activeFeature === index ? 'text-white' : 'text-gray-400'
                      }`}>
                        {feature.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 truncate">
                        {feature.techSpecs.join(' • ')}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
              
              <div className="pt-6">
                <Link
                  to="/features"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-sm sm:text-base text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-colors"
                >
                  Explore All Features
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outbound Calling Section */}
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 circuit-background opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6 animate-float">
              <PhoneForwarded className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Outbound AI Calls</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
                Your AI Agent Never Sleeps
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl">
              Automate your outbound calls with AI that sounds human, thinks smart, and works 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Smart Engagement",
                description: "Proactively reach customers at the perfect time",
                stat: "3x",
                statLabel: "Response Rate",
                color: "from-purple-500 to-indigo-500"
              },
              {
                icon: <Bell className="w-8 h-8" />,
                title: "Auto Reminders",
                description: "Reduce no-shows with intelligent follow-ups",
                stat: "-75%",
                statLabel: "No-shows",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Repeat className="w-8 h-8" />,
                title: "Re-engagement",
                description: "Win back inactive customers automatically",
                stat: "82%",
                statLabel: "Success Rate",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: <RefreshCcw className="w-8 h-8" />,
                title: "24/7 Operation",
                description: "Your AI agent works while you sleep",
                stat: "∞",
                statLabel: "Availability",
                color: "from-amber-500 to-orange-500"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="relative group perspective-3d"
                style={{
                  transform: `translateY(${index * 20}px)`,
                  animation: `float ${3 + index * 0.5}s infinite ${index * 0.2}s`,
                }}
              >
                <div className={`absolute -inset-px bg-gradient-to-r ${feature.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-700`} />
                <div className="relative bg-black/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                  <div className="relative mb-4">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="relative z-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div className="mt-auto">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-1">
                      {feature.stat}
                    </div>
                    <div className="text-sm text-gray-500">
                      {feature.statLabel}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/outbound-calls"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 rounded-lg text-lg font-medium hover:bg-purple-500 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">
                Explore All Features
                <ArrowUpRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 sm:py-24 md:py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 circuit-background opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6 animate-float">
              <BrainCircuit className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Real Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
              Numbers That Speak Volumes
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400">See why businesses trust Calliri to handle their most important calls</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            <FloatingCounter end={10000000} label="Calls Handled" icon={PhoneCall} delay={0} />
            <FloatingCounter end={99} label="Customer Satisfaction %" icon={CheckCircle} delay={200} />
            <FloatingCounter end={100} label="Businesses Automated" icon={Building2} delay={400} />
            <FloatingCounter end={40} label="Reduction in No-Shows %" icon={Users} delay={600} />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 md:py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6 animate-float">
              <Star className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Discover how businesses are transforming their operations with our AI solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group relative animate-on-scroll opacity-0 translate-y-10"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-colors duration-500 h-full">
                  <div className="absolute -top-4 -right-4 text-purple-400/20 rotate-12 scale-150">
                    <Quote size={48} />
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                        {testimonial.author}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                      <p className="text-xs sm:text-sm text-purple-400/80">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-purple-400 text-purple-400"
                      />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 mb-6">
                    "{testimonial.text}"
                  </p>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {testimonial.stats.map((stat, i) => (
                      <div 
                        key={i}
                        className="text-center p-2 rounded-lg bg-white/5 transform transition-transform duration-300 group-hover:scale-105"
                      >
                        <div className="text-sm font-bold text-purple-400">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-400">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {testimonial.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-white/5 border border-purple-500/20 text-gray-400"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-purple-500/50 via-indigo-500/50 to-purple-500/50 mt-6 transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 sm:mt-12 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base text-white font-medium border border-purple-500/30 hover:bg-purple-500/10 transition-colors"
            >
              View All Success Stories
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-24 md:py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Simple Pricing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
              Choose Your Success Path
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your business communication with our powerful AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative group animate-on-scroll opacity-0 translate-y-10 perspective-3d ${
                  index === 1 ? 'md:-mt-4 md:mb-4' : ''
                }`}
              >
                <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 overflow-hidden transition-all duration-500 hover:bg-white/10 h-full">
                  <div className="p-6 sm:p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-md animate-pulse-slow"></div>
                        <div className="relative z-10 inline-flex p-3 rounded-xl bg-white/5 text-purple-400">
                          {plan.icon}
                        </div>
                      </div>
                      
                      {plan.popular && (
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                          Most Popular
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                      {plan.name}
                    </h3>
                    
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-2xl sm:text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-sm sm:text-base text-gray-400">/{plan.billing}</span>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-gray-400 mb-4">
                      {plan.description}
                    </p>

                    <div className="bg-purple-500/10 rounded-lg p-3 mb-6 border border-purple-500/20">
                      <p className="text-xs sm:text-sm text-purple-400 font-medium">
                        {plan.highlight}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {plan.metrics.map((metric, i) => (
                        <div 
                          key={i}
                          className="text-center p-2 rounded-lg bg-white/5 transform transition-transform duration-300 group-hover:scale-105"
                        >
                          <div className="text-base sm:text-lg font-bold text-purple-400">
                            {metric.value}
                          </div>
                          <div className="text-2xs sm:text-xs text-gray-400">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={plan.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full group relative px-4 sm:px-6 py-2 sm:py-3 bg-purple-600 rounded-lg font-medium text-center transition-all duration-300 mb-6 sm:mb-8"
                    >
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative flex items-center justify-center gap-2 text-sm sm:text-base">
                        Get Started
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </a>

                    <div className="space-y-3 sm:space-y-4">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 sm:gap-3">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-purple-500/50 via-indigo-500/50 to-purple-500/50 mt-6 transition-all duration-700"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 md:py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6">
              <HelpCircle className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Common Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about our AI-powered call management system
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="group animate-on-scroll opacity-0 translate-y-10"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left p-4 sm:p-6 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-purple-500/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                      {faq.question}
                    </h3>
                    <div className="relative flex-shrink-0 ml-4">
                      <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {openFaqIndex === index ? (
                        <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 relative z-10" />
                      ) : (
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 relative z-10" />
                      )}
                    </div>
                  </div>
                  {openFaqIndex === index && (
                    <p className="mt-4 text-sm sm:text-base text-gray-400 animate-fade-in">
                      {faq.answer}
                    </p>
                  )}
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 sm:mt-16 text-center">
            <Link
              to="/book-demo"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 group hover:bg-purple-500"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;