import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar,
  MessageSquare,
  Globe2,
  BrainCircuit,
  Bell,
  Shield,
  Sparkles,
  ChevronRight,
  Clock,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
  Laptop,
  Workflow,
  Code,
  Cpu,
  Network,
  LineChart,
  Layers,
  Settings2,
  Fingerprint,
  Wifi,
  Phone,
  Bot,
  Database,
  Lock,
  FileText,
  BarChart,
  Cloud,
  Headphones,
  VolumeX,
  Volume2,
  Mic,
  PhoneCall,
  CircuitBoard,
  Hexagon,
  Command,
  Terminal,
  GitBranch,
  GitMerge,
  GitPullRequest,
  Server,
  HardDrive,
  Cog,
  RefreshCw,
  Repeat,
  Infinity,
  Lightbulb,
  Target,
  Radar,
  Activity,
  TrendingUp,
  PieChart,
  Maximize,
  Minimize,
  Scale,
  Search,
  Filter,
  Share2,
  Eye,
  EyeOff,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  AlertCircle,
  Info,
  Wand2
} from 'lucide-react';

function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
          y: ((e.clientY - rect.top) / rect.height) * 2 - 1
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <BrainCircuit className="w-12 h-12" />,
      title: "Neural Processing",
      description: "Advanced AI models process natural language with human-like understanding",
      stats: [
        { label: "Accuracy", value: "99.9%" },
        { label: "Response Time", value: "10ms" },
        { label: "Languages", value: "12+" }
      ],
      capabilities: [
        "Context-aware conversations",
        "Natural language understanding",
        "Sentiment analysis",
        "Intent recognition",
        "Multi-turn dialogue"
      ]
    },
    {
      icon: <Wand2 className="w-12 h-12" />,
      title: "Smart Automation",
      description: "Intelligent workflows that adapt and learn from every interaction",
      stats: [
        { label: "Automation Rate", value: "95%" },
        { label: "Learning Speed", value: "Real-time" },
        { label: "Efficiency Gain", value: "10x" }
      ],
      capabilities: [
        "Automated scheduling",
        "Smart follow-ups",
        "Task prioritization",
        "Workflow optimization",
        "Custom automation rules"
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Enterprise Security",
      description: "Bank-grade security with advanced encryption and compliance",
      stats: [
        { label: "Encryption", value: "256-bit" },
        { label: "Compliance", value: "SOC2" },
        { label: "Uptime", value: "99.99%" }
      ],
      capabilities: [
        "End-to-end encryption",
        "Data privacy controls",
        "Access management",
        "Audit logging",
        "Compliance monitoring"
      ]
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: "Global Infrastructure",
      description: "Distributed system architecture for unmatched reliability",
      stats: [
        { label: "Data Centers", value: "12" },
        { label: "Network Speed", value: "<50ms" },
        { label: "Availability", value: "24/7" }
      ],
      capabilities: [
        "Load balancing",
        "Auto-scaling",
        "Geo-distribution",
        "Failover protection",
        "Real-time monitoring"
      ]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Smart Analytics",
      description: "Deep insights and predictive analytics for better decisions",
      stats: [
        { label: "Data Points", value: "1M+" },
        { label: "Accuracy", value: "97%" },
        { label: "Predictions", value: "Real-time" }
      ],
      capabilities: [
        "Performance tracking",
        "Trend analysis",
        "Predictive modeling",
        "Custom reporting",
        "Data visualization"
      ]
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: "Seamless Integration",
      description: "Connect with your existing tools and workflows effortlessly",
      stats: [
        { label: "Integrations", value: "50+" },
        { label: "Setup Time", value: "<1h" },
        { label: "API Calls", value: "10M+" }
      ],
      capabilities: [
        "API access",
        "Webhook support",
        "Custom endpoints",
        "Data syncing",
        "Event streaming"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 circuit-background opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_50%)]"></div>
          
          {/* Animated tech elements */}
          <div className="absolute inset-0 overflow-hidden">
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
              <Network className="w-20 h-20 text-purple-400" />
            </div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6 animate-float">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Next-Gen Technology</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
                Powered by Advanced
              </span>
              <br />
              <span className="text-white">AI Technology</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the future of communication with our state-of-the-art AI infrastructure
            </p>
          </div>

          <div 
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative perspective-3d"
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
                style={{
                  transform: activeFeature === index
                    ? `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`
                    : 'perspective(1000px)'
                }}
              >
                <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 h-full hover:bg-white/10 transition-all duration-500">
                  <div className="relative mb-6">
                    <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-md animate-pulse-slow"></div>
                    <div className="relative z-10 text-purple-400">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300">
                    {feature.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {feature.stats.map((stat, i) => (
                      <div 
                        key={i}
                        className="text-center p-2 rounded-lg bg-white/5 transform transition-transform duration-300 group-hover:scale-105"
                      >
                        <div className="text-lg font-bold text-purple-400">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-400">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {feature.capabilities.map((capability, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-purple-400/50 flex-shrink-0" />
                        <span className="text-sm">{capability}</span>
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 rounded-lg text-lg font-medium transition-all duration-300 group hover:bg-purple-500"
            >
              Experience the Technology
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;