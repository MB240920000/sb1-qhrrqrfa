import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Sparkles,
  Users,
  Globe2,
  Target,
  Award,
  Rocket,
  Heart,
  Code2,
  Laptop,
  BrainCircuit,
  ChevronRight
} from 'lucide-react';

function About() {
  const team = [
    {
      name: "Moncef Buri",
      role: "CEO & Founder",
      description: "Former AI researcher at MIT, passionate about transforming business communication"
    },
    {
      name: "Michael Park",
      role: "CTO",
      description: "15 years of experience in AI and machine learning systems"
    },
    {
      name: "Emma Thompson",
      role: "Head of Product",
      description: "Product visionary with a focus on user experience and innovation"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Customer First",
      description: "Every decision we make starts with our customers' needs"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with AI"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence",
      description: "Striving for perfection in every interaction"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description: "Started with a vision to revolutionize call management"
    },
    {
      year: "2024",
      title: "Series A Funding",
      description: "$10M raised to accelerate development and expansion"
    },
    {
      year: "2025",
      title: "Global Launch",
      description: "Expanded to serve customers worldwide"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6 animate-float">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
                Transforming
              </span>
              <br />
              <span className="text-white">The Future of Communication</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're on a mission to revolutionize how businesses connect with their customers through AI-powered conversations
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 h-full hover:bg-white/10 transition-all duration-500">
                <div className="relative mb-6">
                  <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-md animate-pulse-slow"></div>
                  <Rocket className="w-12 h-12 text-purple-400 relative z-10" />
                </div>
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-gray-400">
                  To empower businesses with AI-driven communication solutions that create meaningful connections and drive growth
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 h-full hover:bg-white/10 transition-all duration-500">
                <div className="relative mb-6">
                  <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-md animate-pulse-slow"></div>
                  <Globe2 className="w-12 h-12 text-purple-400 relative z-10" />
                </div>
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Our Vision
                </h2>
                <p className="text-gray-400">
                  To lead the future of business communication, where every interaction is personalized, efficient, and human-centric
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Our Values
              </h2>
              <p className="text-gray-400">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:bg-white/10 transition-all duration-500">
                    <div className="relative mb-4">
                      <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md animate-pulse-slow"></div>
                      <div className="relative z-10 text-purple-400">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Meet Our Team
              </h2>
              <p className="text-gray-400">The innovators behind Calliri</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:bg-white/10 transition-all duration-500">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-md"></div>
                      <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Users className="w-10 h-10 text-purple-400" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                        {member.name}
                      </h3>
                      <p className="text-purple-400 mb-2">{member.role}</p>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Our Journey
              </h2>
              <p className="text-gray-400">Key milestones in our story</p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-purple-500/20"></div>
              
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className="w-1/2 flex justify-end">
                      <div className="relative group max-w-md">
                        <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:bg-white/10 transition-all duration-500">
                          <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-white">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-400">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 glow-pulse"></div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="relative inline-block group">
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <Link
                to="/contact"
                className="relative inline-flex items-center gap-2 px-8 py-4 bg-purple-600 rounded-lg text-lg font-medium transition-all duration-300 group-hover:bg-purple-500"
              >
                Join Our Journey
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;