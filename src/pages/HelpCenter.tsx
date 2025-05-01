import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search,
  HelpCircle,
  Book,
  MessageSquare,
  Video,
  FileText,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  Globe2,
  Plus,
  Minus,
  Link2,
  CheckCircle2,
  Shield,
  Bell,
  Code,
  Zap,
  Settings,
  Users,
  Headphones,
  Laptop,
  BrainCircuit,
  Rocket,
  Workflow,
  Calendar,
  Bot,
  PlayCircle,
  BarChart,
  Lightbulb,
  PhoneCall,
  Clock,
  X,
  Lock,
  Eye,
  Cpu,
  Database,
  Network,
  Layers,
  Command,
  Terminal,
  Hexagon,
  CircuitBoard
} from 'lucide-react';

function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedResource, setSelectedResource] = useState<{
    title: string;
    content: string;
    type: string;
  } | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showComingSoon, setShowComingSoon] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(window.innerHeight - 200); // Adjust for header and padding
    }

    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(window.innerHeight - 200);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
          y: ((e.clientY - rect.top) / rect.height) * 2 - 1
        });
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All Resources', icon: <Database className="w-5 h-5" /> },
    { id: 'getting-started', name: 'Getting Started', icon: <Rocket className="w-5 h-5" /> },
    { id: 'guides', name: 'Product Guides', icon: <FileText className="w-5 h-5" /> },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: <Zap className="w-5 h-5" /> },
    { id: 'best-practices', name: 'Best Practices', icon: <Lightbulb className="w-5 h-5" /> },
    { id: 'api', name: 'API Reference', icon: <Code className="w-5 h-5" /> }
  ];

  const resources = [
    {
      title: "Getting Started",
      category: "getting-started",
      icon: <Rocket className="w-8 h-8" />,
      items: [
        {
          title: "Introduction to Calliri",
          description: "Overview of what Calliri does and its core features",
          icon: <Bot className="w-5 h-5" />,
          type: "guide",
          available: true
        },
        {
          title: "How to Set Up Your AI Assistant",
          description: "Step-by-step guide to onboarding",
          icon: <Settings className="w-5 h-5" />,
          type: "guide",
          available: true
        },
        {
          title: "Connecting Your Calendar & CRM",
          description: "Integration guides for Google Calendar, Outlook, and CRM platforms",
          icon: <Calendar className="w-5 h-5" />,
          type: "guide",
          available: false
        },
        {
          title: "Configuring AI Call Settings",
          description: "Setting up inbound and outbound call preferences",
          icon: <PhoneCall className="w-5 h-5" />,
          type: "guide",
          available: false
        },
        {
          title: "Customizing Your AI Voice & Tone",
          description: "Adjusting Calliri to match your brand identity",
          icon: <MessageSquare className="w-5 h-5" />,
          type: "guide",
          available: false
        }
      ]
    },
    {
      title: "Product Guides & Tutorials",
      category: "guides",
      icon: <Book className="w-8 h-8" />,
      items: [
        {
          title: "How to Manage Appointments with Calliri",
          description: "Guide to scheduling, rescheduling, and cancellations",
          icon: <Calendar className="w-5 h-5" />,
          type: "video",
          available: false
        },
        {
          title: "Using Calliri for Outbound Calls",
          description: "Setting up appointment reminders, follow-ups, and promotions",
          icon: <Phone className="w-5 h-5" />,
          type: "guide",
          available: false
        },
        {
          title: "Understanding Call Analytics & Insights",
          description: "How to access and interpret AI call data",
          icon: <BarChart className="w-5 h-5" />,
          type: "guide",
          available: false
        },
        {
          title: "Optimizing No-Show Reduction",
          description: "Best practices for using AI reminders and confirmations",
          icon: <Clock className="w-5 h-5" />,
          type: "guide",
          available: false
        },
        {
          title: "How Calliri Handles Customer FAQs",
          description: "Training AI to provide the right responses",
          icon: <MessageSquare className="w-5 h-5" />,
          type: "video",
          available: false
        }
      ]
    },
    {
      title: "Troubleshooting & FAQs",
      category: "troubleshooting",
      icon: <Zap className="w-8 h-8" />,
      items: [
        {
          title: "Common Setup Issues & Fixes",
          description: "Resolving calendar sync problems, AI response errors, and call routing issues",
          icon: <Settings className="w-5 h-5" />,
          type: "guide",
          available: false
        },
        {
          title: "AI Not Responding Correctly?",
          description: "How to retrain and refine responses",
          icon: <BrainCircuit className="w-5 h-5" />,
          type: "guide",
          available: false
        },
        {
          title: "Appointment Not Syncing?",
          description: "Troubleshooting calendar integration",
          icon: <Calendar className="w-5 h-5" />,
          type: "guide",
          available: false
        },
        {
          title: "Outbound Calls Not Triggering?",
          description: "Checking settings and automation workflows",
          icon: <Phone className="w-5 h-5" />,
          type: "guide",
          available: false
        },
        {
          title: "Calliri Call Recordings Not Available?",
          description: "Understanding data retention policies",
          icon: <FileText className="w-5 h-5" />,
          type: "guide",
          available: false
        }
      ]
    },
    {
      title: "Best Practices & Use Cases",
      category: "best-practices",
      icon: <Lightbulb className="w-8 h-8" />,
      items: [
        {
          title: "Maximizing Calliri for Your Business Type",
          description: "Tailored guides for dental clinics, salons, spas, and gyms",
          icon: <Users className="w-5 h-5" />,
          type: "guide",
          available: false
        },
        {
          title: "Reducing No-Shows with AI",
          description: "Best ways to leverage AI reminders",
          icon: <Bell className="w-5 h-5" />,
          type: "guide",
          available: false
        },
        {
          title: "How to Automate Follow-Ups",
          description: "Using AI calls to re-engage customers",
          icon: <Workflow className="w-5 h-5" />,
          type: "guide",
          available: false
        },
        {
          title: "Using Calliri for Upselling",
          description: "Driving revenue through AI phone engagement",
          icon: <BarChart className="w-5 h-5" />,
          type: "guide",
          available: false
        }
      ]
    },
    {
      title: "API Reference",
      category: "api",
      icon: <Code className="w-8 h-8" />,
      items: [
        {
          title: "API Authentication",
          description: "Secure your API requests with proper authentication",
          icon: <Lock className="w-5 h-5" />,
          type: "reference",
          available: false
        },
        {
          title: "Call Management API",
          description: "Endpoints for managing calls programmatically",
          icon: <Phone className="w-5 h-5" />,
          type: "reference",
          available: false
        },
        {
          title: "Analytics API",
          description: "Access call data and performance metrics",
          icon: <BarChart className="w-5 h-5" />,
          type: "reference",
          available: false
        },
        {
          title: "Webhooks Integration",
          description: "Set up event notifications for your application",
          icon: <Link2 className="w-5 h-5" />,
          type: "reference",
          available: false
        }
      ]
    }
  ];

  const resourceContents = {
    "Introduction to Calliri": `
# Introduction to Calliri

Calliri is a cutting-edge AI phone agent solution that transforms how businesses handle calls and appointments. This guide will introduce you to our core features and capabilities.

## What is Calliri?

Calliri is an AI-powered phone system that:
- Handles incoming and outgoing calls
- Manages appointments and schedules
- Provides natural, human-like conversations
- Integrates with your existing tools

## Core Features

### 1. Natural Language Processing
- Advanced AI understanding
- Context-aware responses
- Multi-language support

### 2. Smart Scheduling
- Automated appointment booking
- Calendar integration
- Conflict resolution

### 3. Custom Voice & Personality
- Branded voice options
- Adjustable conversation style
- Industry-specific terminology

## Getting Started

1. Initial Assessment
2. AI Voice Selection
3. Business Rules Setup
4. Integration Configuration
5. Testing & Optimization

Contact our team to begin your AI transformation journey.
    `,
    "How to Set Up Your AI Assistant": `
# Setting Up Your AI Assistant

This guide walks you through the process of configuring your Calliri AI assistant for optimal performance.

## Setup Process

### 1. Initial Configuration
- Business hours setup
- Call routing rules
- Voice selection

### 2. Personality Training
- Industry terminology
- Common scenarios
- Response templates

### 3. Integration Setup
- Calendar systems
- CRM connection
- Email notifications

### 4. Testing Phase
- Test calls
- Scenario validation
- Performance tuning

## Best Practices
- Start with basic scenarios
- Gradually add complexity
- Regular performance reviews
    `,
  };

  const filteredResources = resources.filter(section => 
    activeCategory === 'all' || section.category === activeCategory
  ).map(section => ({
    ...section,
    items: section.items.filter(item =>
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  const handleResourceClick = (title: string, type: string, available: boolean) => {
    if (!available) {
      setShowComingSoon(true);
      setTimeout(() => setShowComingSoon(false), 2000);
      return;
    }
    
    if (resourceContents[title as keyof typeof resourceContents]) {
      setSelectedResource({
        title,
        content: resourceContents[title as keyof typeof resourceContents],
        type
      });
    }
    
    // Scroll to top of content on mobile
    if (window.innerWidth < 1024) {
      contentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCardStyle = (index: number) => {
    if (hoveredCard === index) {
      return {
        transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg) translateZ(10px)`,
        transition: 'transform 0.2s ease-out'
      };
    }
    return {};
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 circuit-background opacity-10"></div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6">
              <Database className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Knowledge Base</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
                Calliri Help Center
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find guides, tutorials, and resources to help you get the most out of your AI agent
            </p>
          </div>

          {/* Search and Categories */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative mb-8 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/50 border border-purple-500/20 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 backdrop-blur-sm"
                />
                <div className="absolute inset-y-0 right-4 flex items-center">
                  <Command className="w-5 h-5 text-gray-500" />
                  <span className="text-xs text-gray-500 ml-1">K</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div ref={containerRef} className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Resources List - Scrollable */}
              <div className="lg:col-span-1 space-y-8 lg:max-h-[calc(100vh-200px)] lg:overflow-y-auto lg:pr-4 lg:sticky lg:top-24 perspective-3d">
                {filteredResources.map((section, sectionIndex) => (
                  <div 
                    key={sectionIndex} 
                    className="relative group"
                    style={getCardStyle(sectionIndex)}
                    onMouseEnter={() => setHoveredCard(sectionIndex)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative flex-shrink-0">
                          <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md"></div>
                          <div className="relative z-10 p-2 rounded-xl bg-white/5 text-purple-400">
                            {section.icon}
                          </div>
                        </div>
                        <h2 className="text-xl font-bold text-white">
                          {section.title}
                        </h2>
                      </div>

                      <div className="space-y-4">
                        {section.items.map((item, itemIndex) => {
                          const isAvailable = item.available;
                          
                          return (
                            <div
                              key={itemIndex}
                              className={`relative group rounded-lg transition-all duration-300 ${
                                !isAvailable ? 'opacity-80' : ''
                              }`}
                              onClick={() => handleResourceClick(item.title, item.type, item.available)}
                            >
                              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                              <div 
                                className={`relative rounded-lg p-4 transition-all duration-300 cursor-pointer ${
                                  selectedResource?.title === item.title 
                                    ? 'bg-purple-500/20 border-purple-500/40' 
                                    : 'bg-black/50 border-purple-500/20 hover:bg-white/5'
                                } border backdrop-blur-sm`}
                              >
                                <div className="flex items-start gap-3">
                                  <div className="relative flex-shrink-0">
                                    <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-md"></div>
                                    <div className="relative z-10 text-purple-400">
                                      {item.icon}
                                    </div>
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between gap-2 mb-1">
                                      <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                                        {item.title}
                                      </h3>
                                      {!isAvailable ? (
                                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/20 animate-pulse">
                                          Coming Soon
                                        </span>
                                      ) : item.type === 'video' ? (
                                        <PlayCircle className="w-4 h-4 text-purple-400" />
                                      ) : item.type === 'reference' ? (
                                        <Code className="w-4 h-4 text-purple-400" />
                                      ) : (
                                        <FileText className="w-4 h-4 text-purple-400" />
                                      )}
                                    </div>
                                    <p className="text-sm text-gray-400 group-hover:text-gray-300">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                                
                                {!isAvailable && (
                                  <div className="absolute inset-0 backdrop-blur-[2px] bg-black/10 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/30 border border-purple-500/40">
                                      <Lock className="w-3 h-3 text-purple-400" />
                                      <span className="text-xs font-medium text-purple-300">Coming Soon</span>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Content Display - Fixed */}
              <div 
                ref={contentRef}
                className="lg:col-span-2 lg:sticky lg:top-24 perspective-3d"
                style={{ height: `${contentHeight}px` }}
              >
                <div className="h-full overflow-y-auto">
                  <div className="relative group">
                    <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 h-full">
                      {selectedResource ? (
                        <>
                          <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-white">
                              {selectedResource.title}
                            </h2>
                            <div className="flex items-center gap-2">
                              {selectedResource.type === 'video' && (
                                <PlayCircle className="w-5 h-5 text-purple-400" />
                              )}
                              {selectedResource.type === 'reference' && (
                                <Code className="w-5 h-5 text-purple-400" />
                              )}
                            </div>
                          </div>
                          <div className="prose prose-invert max-w-none">
                            {selectedResource.content.split('\n').map((line, index) => {
                              if (line.startsWith('# ')) {
                                return <h1 key={index} className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">{line.substring(2)}</h1>;
                              } else if (line.startsWith('## ')) {
                                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-white">{line.substring(3)}</h2>;
                              } else if (line.startsWith('### ')) {
                                return <h3 key={index} className="text-xl font-bold mt-6 mb-3 text-purple-300">{line.substring(4)}</h3>;
                              } else if (line.startsWith('- ')) {
                                return (
                                  <div key={index} className="flex items-start gap-2 ml-4 mb-2">
                                    <div className="relative flex-shrink-0 mt-1.5">
                                      <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-sm"></div>
                                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full relative"></div>
                                    </div>
                                    <span className="text-gray-300">{line.substring(2)}</span>
                                  </div>
                                );
                              } else if (line.trim() !== '') {
                                return <p key={index} className="text-gray-300 mb-4">{line}</p>;
                              }
                              return null;
                            })}
                          </div>
                          
                          {/* Interactive elements */}
                          <div className="mt-8 pt-8 border-t border-purple-500/20">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="relative">
                                  <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-md"></div>
                                  <Eye className="w-5 h-5 text-purple-400 relative" />
                                </div>
                                <span className="text-sm text-gray-400">Last updated: March 15, 2025</span>
                              </div>
                              
                              <div className="flex gap-2">
                                <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-gray-300 transition-colors">
                                  <Sparkles className="w-4 h-4 text-purple-400" />
                                  <span>Helpful</span>
                                </button>
                                <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-gray-300 transition-colors">
                                  <Link2 className="w-4 h-4 text-purple-400" />
                                  <span>Share</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                          <div className="relative mb-6">
                            <div className="absolute -inset-8 bg-purple-500/10 rounded-full blur-lg animate-pulse-slow"></div>
                            <Database className="w-16 h-16 text-purple-400/50 relative" />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-400 mb-2">
                            Select a Resource
                          </h3>
                          <p className="text-gray-500 max-w-md">
                            Choose a guide or tutorial from the list to view its content. 
                            Many resources are coming soon as we expand our knowledge base.
                          </p>
                          
                          <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
                            <div className="relative group">
                              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <button 
                                onClick={() => handleResourceClick("Introduction to Calliri", "guide", true)}
                                className="w-full flex items-center gap-2 p-3 bg-black/50 border border-purple-500/20 rounded-lg hover:bg-white/5 transition-colors"
                              >
                                <Rocket className="w-5 h-5 text-purple-400" />
                                <span className="text-sm text-gray-300">Quick Start Guide</span>
                              </button>
                            </div>
                            
                            <div className="relative group">
                              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <button 
                                onClick={() => handleResourceClick("How to Set Up Your AI Assistant", "guide", true)}
                                className="w-full flex items-center gap-2 p-3 bg-black/50 border border-purple-500/20 rounded-lg hover:bg-white/5 transition-colors"
                              >
                                <Settings className="w-5 h-5 text-purple-400" />
                                <span className="text-sm text-gray-300">Setup Guide</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coming Soon Notification */}
            {showComingSoon && (
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-fade-in">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-indigo-500/30 to-purple-500/30 rounded-xl blur-lg animate-pulse"></div>
                  <div className="relative bg-black/80 backdrop-blur-md rounded-lg p-6 border border-purple-500/30 flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md animate-pulse"></div>
                      <Sparkles className="w-8 h-8 text-purple-400 relative" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Coming Soon!</h3>
                      <p className="text-gray-300">This resource is currently under development</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Support */}
            <div className="max-w-4xl mx-auto mt-16 text-center">
              <div className="relative group inline-block">
                <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
                  <div className="relative mb-4">
                    <div className="absolute -inset-6 bg-purple-500/10 rounded-full blur-lg animate-pulse-slow"></div>
                    <Headphones className="w-10 h-10 text-purple-400 mx-auto relative" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Need More Help?
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Our team is here to help you get the most out of your AI agent
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a 
                      href="mailto:calliriAi@gmail.com"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-colors"
                    >
                      Contact Support
                      <Mail className="w-5 h-5" />
                    </a>
                    <Link 
                      to="/book-demo"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium border border-purple-500/30 hover:bg-purple-500/10 transition-colors"
                    >
                      Schedule a Call
                      <Phone className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HelpCenter;