import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VapiCall from '../components/VapiCall';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Users, 
  Phone, 
  Sparkles,
  BarChart,
  Mic,
  MessageSquare,
  Star,
  Quote,
  ChevronRight,
  Building2,
  Headphones,
  BrainCircuit
} from 'lucide-react';

function CaseStudy() {
  const [showCallDemo, setShowCallDemo] = useState(false);

  const metrics = [
    {
      before: "42%",
      after: "5%",
      label: "No-Show Rate",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      before: "68 hrs/week",
      after: "12 hrs/week",
      label: "Staff Phone Time",
      icon: <Clock className="w-6 h-6" />
    },
    {
      before: "$4,200/mo",
      after: "$1,100/mo",
      label: "Reception Costs",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      before: "65%",
      after: "97%",
      label: "Appointment Rate",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      quote: "The AI receptionist has completely transformed our practice. Patients love how easy it is to schedule appointments, and our staff can focus on providing care instead of answering phones all day.",
      author: "Dr. Emily Chen",
      role: "Lead Dentist",
      company: "Brightsmile Dental"
    },
    {
      quote: "I was skeptical at first, but the AI sounds so natural that most patients don't even realize they're talking to an automated system. The reduction in no-shows alone has paid for the service many times over.",
      author: "Mark Johnson",
      role: "Practice Manager",
      company: "Brightsmile Dental"
    }
  ];

  const timeline = [
    {
      month: "Month 1",
      title: "Implementation & Training",
      description: "Integrated Calliri with existing systems and trained the AI on clinic-specific terminology and procedures."
    },
    {
      month: "Month 2",
      title: "Initial Results",
      description: "No-show rate dropped by 18% as automated reminders began working. Staff reported 30% less time on phones."
    },
    {
      month: "Month 3",
      title: "Optimization Phase",
      description: "Fine-tuned AI responses based on patient feedback. Added personalized follow-up capabilities."
    },
    {
      month: "Month 6",
      title: "Full Implementation",
      description: "AI now handling 92% of all incoming calls. No-show rate stabilized at 5%. Staff phone time reduced by 82%."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {showCallDemo && <VapiCall onClose={() => setShowCallDemo(false)} />}
      
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
              <Star className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Case Study</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
                Brightsmile Dental
              </span>
              <br />
              <span className="text-white">Success Story</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              How a busy dental practice eliminated no-shows and saved 56 hours per week with Calliri's AI receptionist
            </p>
          </div>

          {/* Clinic Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
                  alt="Brightsmile Dental Clinic"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                The Challenge
              </h2>
              <p className="text-gray-300">
                Brightsmile Dental, a growing practice with 5 dentists and 12 staff members, was struggling with:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-md"></div>
                    <CheckCircle2 className="w-5 h-5 text-purple-400 relative z-10" />
                  </div>
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">High no-show rate (42%)</span> costing the practice an estimated $12,000 per month in lost revenue
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-md"></div>
                    <CheckCircle2 className="w-5 h-5 text-purple-400 relative z-10" />
                  </div>
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Overwhelmed front desk staff</span> spending 68+ hours per week on phone calls
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-md"></div>
                    <CheckCircle2 className="w-5 h-5 text-purple-400 relative z-10" />
                  </div>
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Missed calls during peak hours</span> resulting in lost appointment opportunities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-md"></div>
                    <CheckCircle2 className="w-5 h-5 text-purple-400 relative z-10" />
                  </div>
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Inconsistent follow-up</span> with patients due to staff time constraints
                  </span>
                </li>
              </ul>

              <div className="pt-6">
                <button
                  onClick={() => setShowCallDemo(true)}
                  className="group flex items-center gap-2 px-6 py-3 rounded-lg text-lg font-medium border border-purple-500/30 hover:bg-purple-500/10 transition-colors duration-300"
                >
                  <Mic className="w-5 h-5" />
                  Try Their new AI Receptionist
                </button>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6">
                <BrainCircuit className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium">The Solution</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Calliri AI Implementation
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A comprehensive AI receptionist solution customized for dental practice needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 h-full hover:bg-white/10 transition-all duration-500">
                  <div className="relative mb-6">
                    <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-md animate-pulse-slow"></div>
                    <Phone className="w-12 h-12 text-purple-400 relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                    24/7 Call Handling
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    AI receptionist trained on dental terminology to handle appointment scheduling, rescheduling, and cancellations at any time of day.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 h-full hover:bg-white/10 transition-all duration-500">
                  <div className="relative mb-6">
                    <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-md animate-pulse-slow"></div>
                    <Calendar className="w-12 h-12 text-purple-400 relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                    Smart Scheduling
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Intelligent calendar integration that understands provider availability, procedure duration, and patient history to optimize scheduling.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 h-full hover:bg-white/10 transition-all duration-500">
                  <div className="relative mb-6">
                    <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-md animate-pulse-slow"></div>
                    <MessageSquare className="w-12 h-12 text-purple-400 relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                    Automated Reminders
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Multi-channel appointment reminders via phone, SMS, and email with confirmation requests to dramatically reduce no-shows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6">
                <BarChart className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium">The Results</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Transformative Outcomes
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Dramatic improvements across all key performance indicators
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {metrics.map((metric, index) => (
                <div key={index} className="relative group perspective-3d">
                  <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:bg-white/10 transition-all duration-500 hover-float">
                    <div className="flex justify-between items-center mb-4">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md"></div>
                        <div className="relative z-10 text-purple-400">
                          {metric.icon}
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">{metric.label}</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <div className="text-sm text-gray-500 mb-1">Before</div>
                        <div className="text-xl font-bold text-gray-400">{metric.before}</div>
                      </div>
                      
                      <ArrowRight className="w-5 h-5 text-purple-400 mx-2" />
                      
                      <div className="text-center">
                        <div className="text-sm text-gray-500 mb-1">After</div>
                        <div className="text-xl font-bold text-purple-400">{metric.after}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                  Financial Impact
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="relative flex-shrink-0 mt-1">
                      <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-md"></div>
                      <CheckCircle2 className="w-5 h-5 text-purple-400 relative z-10" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">$11,400 monthly savings</span>
                      <p className="text-gray-400">From reduced no-shows and optimized scheduling</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="relative flex-shrink-0 mt-1">
                      <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-md"></div>
                      <CheckCircle2 className="w-5 h-5 text-purple-400 relative z-10" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">$3,100 monthly staff cost reduction</span>
                      <p className="text-gray-400">By eliminating the need for dedicated phone staff</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="relative flex-shrink-0 mt-1">
                      <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-md"></div>
                      <CheckCircle2 className="w-5 h-5 text-purple-400 relative z-10" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">$8,500 additional monthly revenue</span>
                      <p className="text-gray-400">From increased appointment bookings and better schedule utilization</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="relative flex-shrink-0 mt-1">
                      <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-md"></div>
                      <CheckCircle2 className="w-5 h-5 text-purple-400 relative z-10" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">ROI: 8.7x</span>
                      <p className="text-gray-400">Total monthly benefit of $23,000 against Calliri investment of $2,650</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Timeline */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6">
                <Clock className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium">Implementation</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                The Journey
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                How Brightsmile Dental transformed their practice in just 6 months
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-purple-500/20"></div>
              
              <div className="space-y-16">
                {timeline.map((item, index) => (
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
                          <div className="text-lg font-bold mb-2 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                            {item.month}
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-white">
                            {item.title}
                          </h3>
                          <p className="text-gray-400">
                            {item.description}
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

          {/* Testimonials */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6">
                <Quote className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium">Testimonials</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                What They're Saying
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Hear directly from the Brightsmile Dental team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-colors duration-500">
                    <div className="absolute -top-4 -right-4 text-purple-400/20 rotate-12 scale-150">
                      <Quote size={48} />
                    </div>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div>
                        <h3 className="font-semibold text-lg bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                          {testimonial.author}
                        </h3>
                        <p className="text-sm text-purple-400/80">{testimonial.role}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className="w-5 h-5 fill-purple-400 text-purple-400"
                        />
                      ))}
                    </div>

                    <p className="text-gray-300 mb-6">
                      "{testimonial.quote}"
                    </p>

                    <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-purple-500/50 via-indigo-500/50 to-purple-500/50 mt-6 transition-all duration-700"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="relative inline-block group">
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <Link
                to="/book-demo"
                className="relative inline-flex items-center gap-2 px-8 py-4 bg-purple-600 rounded-lg text-lg font-medium transition-all duration-300 group-hover:bg-purple-500"
              >
                Transform Your Business
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="mt-6">
              <button
                onClick={() => setShowCallDemo(true)}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Headphones className="w-5 h-5" />
                Try the AI receptionist demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudy;