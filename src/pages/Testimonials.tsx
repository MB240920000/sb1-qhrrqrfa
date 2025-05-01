import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star,
  Quote,
  Building2,
  Users,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  Search,
  Filter,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

function Testimonials() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          element.classList.add('animate-in');
          setTimeout(() => {
            setActiveIndex(index);
          }, index * 200);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const industries = [
    'All Industries',
    'Healthcare',
    'Technology',
    'Finance',
    'Education',
    'Retail',
    'Hospitality'
  ];

  const testimonials = [
    {
      text: "I was skeptical about AI handling our medical appointments, but Calliri has been a game-changer. The AI understands complex medical terminology and handles scheduling with such care that patients often don't realize they're talking to an AI. We've cut our no-show rate by 67% thanks to the smart reminder system, and our staff can finally focus on patient care instead of phone calls.",
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
      text: "Running a high-volume IT support desk was overwhelming until we implemented Calliri. The AI handles initial call routing and basic troubleshooting brilliantly. What impressed me most was how it learns from each interaction - it now handles 73% of Level 1 support calls without human intervention. The natural conversation flow and technical accuracy are spot-on.",
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
      text: "In wealth management, every client interaction matters. Calliri's AI has mastered the art of professional yet warm communication. It handles appointment scheduling for our 28 advisors flawlessly, even managing complex calendar conflicts and VIP client preferences. The compliance-aware conversations and detailed call logging have made our auditors very happy too.",
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
    },
    {
      text: "During peak admission seasons, our phone lines were constantly overwhelmed. Calliri now handles thousands of admission inquiries seamlessly. The AI's ability to speak multiple languages has been invaluable - it communicates fluently with international students in 12 languages! The smart qualification system helps identify high-potential candidates early in the process.",
      author: "Prof. James Wilson",
      role: "Dean of Admissions",
      company: "Global University",
      industry: "Education",
      rating: 5,
      stats: [
        { label: "Call Capacity", value: "10x" },
        { label: "Languages", value: "12" },
        { label: "Inquiry Conversion", value: "58%" }
      ],
      features: ["Multi-lingual", "Lead Scoring", "24/7 Availability"]
    },
    {
      text: "Managing appointments for our salon chain was a nightmare before Calliri. Now the AI handles everything - from booking specific stylists to managing last-minute cancellations and filling empty slots. It even suggests alternative times when preferred slots aren't available. The proactive reminder system has practically eliminated no-shows!",
      author: "Lisa Rodriguez",
      role: "Operations Manager",
      company: "StyleHub Salons",
      industry: "Retail",
      rating: 5,
      stats: [
        { label: "No-show Rate", value: "-82%" },
        { label: "Booking Rate", value: "+64%" },
        { label: "Staff Efficiency", value: "3x" }
      ],
      features: ["Smart Scheduling", "Stylist Matching", "Automated Reminders"]
    },
    {
      text: "The hospitality industry never sleeps, and neither does Calliri! The AI manages our restaurant reservations across 12 locations, handling everything from simple bookings to complex event planning. It understands and accommodates special requests, dietary restrictions, and even manages our waitlist during peak hours. The ROI has been incredible.",
      author: "David Chang",
      role: "Restaurant Group Director",
      company: "Fusion Dining Group",
      industry: "Hospitality",
      rating: 5,
      stats: [
        { label: "Table Utilization", value: "+47%" },
        { label: "Peak Hour Efficiency", value: "92%" },
        { label: "Monthly ROI", value: "312%" }
      ],
      features: ["Multi-location", "Waitlist Management", "Special Requests"]
    }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesIndustry = selectedIndustry === 'all' || 
      testimonial.industry.toLowerCase() === selectedIndustry.toLowerCase();
    
    const matchesSearch = searchQuery === '' || 
      testimonial.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.author.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesIndustry && matchesSearch;
  });

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
              <Star className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
                Trusted by Industry
              </span>
              <br />
              <span className="text-white">Leaders Worldwide</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See how businesses are transforming their operations with our AI-powered call management solution
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="relative group perspective-element">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-70"></div>
              <div className="relative flex flex-col items-center gap-4 py-6 px-8 hover-float">
                <div className="relative">
                  <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-md animate-pulse-slow"></div>
                  <Building2 className="w-8 h-8 text-purple-400 relative z-10 animate-float" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 mb-2">
                    1000+
                  </div>
                  <div className="text-gray-400">Businesses Automated</div>
                </div>
              </div>
            </div>

            <div className="relative group perspective-element">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-70"></div>
              <div className="relative flex flex-col items-center gap-4 py-6 px-8 hover-float">
                <div className="relative">
                  <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-md animate-pulse-slow"></div>
                  <MessageSquare className="w-8 h-8 text-purple-400 relative z-10 animate-float" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 mb-2">
                    5M+
                  </div>
                  <div className="text-gray-400">Calls Handled Monthly</div>
                </div>
              </div>
            </div>

            <div className="relative group perspective-element">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-70"></div>
              <div className="relative flex flex-col items-center gap-4 py-6 px-8 hover-float">
                <div className="relative">
                  <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-md animate-pulse-slow"></div>
                  <Users className="w-8 h-8 text-purple-400 relative z-10 animate-float" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 mb-2">
                    98%
                  </div>
                  <div className="text-gray-400">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search testimonials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-purple-500/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Filter className="w-5 h-5 text-gray-400" />
              </div>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value.toLowerCase())}
                className="appearance-none bg-white/5 border border-purple-500/20 rounded-lg pl-12 pr-10 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              >
                {industries.map((industry) => (
                  <option
                    key={industry}
                    value={industry.toLowerCase()}
                    className="bg-gray-900"
                  >
                    {industry}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group relative animate-on-scroll opacity-0 translate-y-10"
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
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i}
                        className="w-5 h-5 fill-purple-400 text-purple-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6">
                    "{testimonial.text}"
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {testimonial.stats.map((stat, i) => (
                      <div key={i} className="text-center p-3 rounded-lg bg-white/5">
                        <div className="text-lg font-semibold text-purple-400">
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
                        className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
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

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="relative inline-block group">
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <Link 
                to="/book-demo"
                className="relative inline-flex items-center gap-2 px-8 py-4 bg-purple-600 rounded-lg text-lg font-medium transition-all duration-300 group-hover:bg-purple-500"
              >
                Start Your Success Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;