import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { US, GB, FR, DE, IT, ES, CA, AU, JP, CN } from 'country-flag-icons/react/3x2';
import { 
  PhoneOutgoing,
  Bot,
  Loader2,
  CheckCircle2,
  Phone,
  Sparkles,
  Activity,
  Bell,
  Star,
  Calendar,
  UserCheck,
  Globe2,
  BrainCircuit,
  Target,
  Users,
  ArrowUpRight,
  Building2,
  Globe,
  ArrowRight,
  Headphones,
  BarChart,
  MessageSquare,
  PhoneCall,
  Clock,
  Zap,
  ChevronRight,
  DollarSign,
  Calculator,
  TrendingUp,
  Minus,
  Plus
} from 'lucide-react';
import SuccessModal from '../components/SuccessModal';

function OutboundCalls() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    country: '',
    phone: '',
    companyName: '',
    website: '',
    name: ''
  });

  // Calculator state
  const [calcData, setCalcData] = useState({
    salesReps: 5,
    avgSalary: 50000,
    workingHours: 40,
    callsPerHour: 10,
    conversionRate: 5,
    avgRevenue: 500
  });

  // Calculate potential savings
  const calculateSavings = () => {
    const annualCost = calcData.salesReps * calcData.avgSalary;
    const weeklyHours = calcData.workingHours;
    const weeklyCallCapacity = weeklyHours * calcData.callsPerHour * calcData.salesReps;
    const annualCallCapacity = weeklyCallCapacity * 52;
    const currentConversions = Math.floor((annualCallCapacity * calcData.conversionRate) / 100);
    
    const aiCallCapacity = annualCallCapacity * 3;
    const aiConversionRate = calcData.conversionRate * 1.2;
    const aiConversions = Math.floor((aiCallCapacity * aiConversionRate) / 100);
    
    const additionalConversions = aiConversions - currentConversions;
    const additionalRevenue = additionalConversions * calcData.avgRevenue;
    const costSavings = annualCost * 0.7;
    
    return {
      costSavings: Math.round(costSavings),
      additionalRevenue: Math.round(additionalRevenue),
      totalBenefit: Math.round(costSavings + additionalRevenue)
    };
  };

  const savings = calculateSavings();

  const valueProps = [
    {
      title: "Exponential Reach",
      description: "Our AI agents can handle thousands of simultaneous conversations, scaling your outreach without scaling costs.",
      metrics: [
        { label: "Concurrent Calls", value: "1000+" },
        { label: "Response Time", value: "0.1s" },
        { label: "Languages", value: "12+" }
      ],
      icon: <Target className="w-12 h-12" />
    },
    {
      title: "Intelligent Engagement",
      description: "Dynamic conversation flows that adapt in real-time, understanding context and objections like a seasoned sales pro.",
      metrics: [
        { label: "Conversion Rate", value: "+150%" },
        { label: "Lead Quality", value: "+85%" },
        { label: "Engagement", value: "92%" }
      ],
      icon: <BrainCircuit className="w-12 h-12" />
    },
    {
      title: "24/7 Operation",
      description: "Never miss an opportunity with round-the-clock outreach that spans time zones and peak hours.",
      metrics: [
        { label: "Availability", value: "24/7" },
        { label: "Coverage", value: "Global" },
        { label: "Uptime", value: "99.99%" }
      ],
      icon: <Clock className="w-12 h-12" />
    }
  ];

  const countries = [
    { code: 'US', name: 'United States', prefix: '+1', flag: US },
    { code: 'GB', name: 'United Kingdom', prefix: '+44', flag: GB },
    { code: 'FR', name: 'France', prefix: '+33', flag: FR },
    { code: 'DE', name: 'Germany', prefix: '+49', flag: DE },
    { code: 'IT', name: 'Italy', prefix: '+39', flag: IT },
    { code: 'ES', name: 'Spain', prefix: '+34', flag: ES },
    { code: 'CA', name: 'Canada', prefix: '+1', flag: CA },
    { code: 'AU', name: 'Australia', prefix: '+61', flag: AU },
    { code: 'JP', name: 'Japan', prefix: '+81', flag: JP },
    { code: 'CN', name: 'China', prefix: '+86', flag: CN }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const selectedCountry = countries.find(c => c.code === formData.country);
    const fullPhoneNumber = selectedCountry ? `${selectedCountry.prefix}${formData.phone}` : formData.phone;

    try {
      const response = await fetch('https://hook.us2.make.com/pf41e8xsigojj3c41ltfn4wnfh373rbc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: fullPhoneNumber,
          companyName: formData.companyName,
          website: formData.website,
          name: formData.name
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ country: '', phone: '', companyName: '', website: '', name: '' });
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {showSuccessModal && <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />}
      
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 circuit-background opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6 animate-float">
              <PhoneOutgoing className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">AI Sales Outreach</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
                Supercharge Your
              </span>
              <br />
              <span className="text-white">Sales Outreach</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your sales process with AI agents that never sleep, never tire, and consistently deliver results
            </p>
          </div>

          {/* Value Proposition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="relative group perspective-3d"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 h-full hover:bg-white/10 transition-all duration-500">
                  <div className="relative mb-6">
                    <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-md animate-pulse-slow"></div>
                    <div className="relative z-10 text-purple-400">
                      {prop.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                    {prop.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300">
                    {prop.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2">
                    {prop.metrics.map((metric, i) => (
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
                </div>
              </div>
            ))}
          </div>

          {/* ROI Calculator */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6">
                <Calculator className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium">ROI Calculator</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Calculate Your Potential Savings
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                See how much you could save and earn with AI-powered outbound calling
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg"></div>
              <div className="relative bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Calculator Inputs */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold mb-4">Current Setup</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Number of Sales Representatives
                      </label>
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => setCalcData(prev => ({...prev, salesReps: Math.max(1, prev.salesReps - 1)}))}
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-purple-400"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <input
                          type="number"
                          value={calcData.salesReps || ''}
                          onChange={(e) => {
                            const value = e.target.value === '' ? '' : parseInt(e.target.value);
                            setCalcData(prev => ({...prev, salesReps: value === '' ? 0 : value}));
                          }}
                          className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2 text-white text-center"
                        />
                        <button 
                          onClick={() => setCalcData(prev => ({...prev, salesReps: prev.salesReps + 1}))}
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-purple-400"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Average Annual Salary ($)
                      </label>
                      <input
                        type="number"
                        value={calcData.avgSalary || ''}
                        onChange={(e) => {
                          const value = e.target.value === '' ? '' : parseInt(e.target.value);
                          setCalcData(prev => ({...prev, avgSalary: value === '' ? 0 : value}));
                        }}
                        className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Weekly Working Hours
                      </label>
                      <input
                        type="number"
                        value={calcData.workingHours || ''}
                        onChange={(e) => {
                          const value = e.target.value === '' ? '' : parseInt(e.target.value);
                          setCalcData(prev => ({...prev, workingHours: value === '' ? 0 : value}));
                        }}
                        className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Calls Per Hour
                      </label>
                      <input
                        type="number"
                        value={calcData.callsPerHour || ''}
                        onChange={(e) => {
                          const value = e.target.value === '' ? '' : parseInt(e.target.value);
                          setCalcData(prev => ({...prev, callsPerHour: value === '' ? 0 : value}));
                        }}
                        className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Current Conversion Rate (%)
                      </label>
                      <input
                        type="number"
                        value={calcData.conversionRate || ''}
                        onChange={(e) => {
                          const value = e.target.value === '' ? '' : parseInt(e.target.value);
                          setCalcData(prev => ({...prev, conversionRate: value === '' ? 0 : value}));
                        }}
                        className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Average Revenue Per Conversion ($)
                      </label>
                      <input
                        type="number"
                        value={calcData.avgRevenue || ''}
                        onChange={(e) => {
                          const value = e.target.value === '' ? '' : parseInt(e.target.value);
                          setCalcData(prev => ({...prev, avgRevenue: value === '' ? 0 : value}));
                        }}
                        className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2 text-white"
                      />
                      <p className="text-sm text-gray-400 mt-1">
                        Example: Gym membership ($50/mo), Dental cleaning ($200), etc.
                      </p>
                    </div>

                    {/* Current Situation Summary */}
                    <div className="p-6 rounded-lg bg-white/5 border border-purple-500/20">
                      <h4 className="text-lg font-semibold mb-4">Current Situation</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Annual Staff Cost:</span>
                          <span className="text-white">${(calcData.salesReps * calcData.avgSalary).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Weekly Calls:</span>
                          <span className="text-white">
                            {(calcData.workingHours * calcData.callsPerHour * calcData.salesReps).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Monthly Conversions:</span>
                          <span className="text-white">
                            {Math.round((calcData.workingHours * calcData.callsPerHour * calcData.salesReps * 4 * calcData.conversionRate) / 100).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-4">
                    <div className="p-6 rounded-lg bg-white/5 border border-purple-500/20">
                      <div className="flex items-center gap-3 mb-2">
                        <DollarSign className="w-5 h-5 text-green-400" />
                        <h4 className="text-lg font-semibold">Cost Savings</h4>
                      </div>
                      <p className="text-sm text-gray-400 mb-4">
                        By automating outbound calls, you can reduce staffing costs by 70% while maintaining or increasing call volume. This accounts for the reduction in sales staff needed for routine calls while keeping key personnel for complex interactions.
                      </p>
                      <div className="text-3xl font-bold text-green-400">
                        ${savings.costSavings.toLocaleString()}
                      </div>
                      <p className="text-sm text-gray-400 mt-2">
                        Annual reduction in operational costs
                      </p>
                    </div>

                    <div className="p-6 rounded-lg bg-white/5 border border-purple-500/20">
                      <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="w-5 h-5 text-purple-400" />
                        <h4 className="text-lg font-semibold">Additional Revenue</h4>
                      </div>
                      <p className="text-sm text-gray-400 mb-4">
                        AI agents work 24/7, tripling your call capacity. With a 20% improvement in conversion rate due to consistent performance and optimized timing, this translates to significant revenue growth based on your average revenue per conversion.
                      </p>
                      <div className="text-3xl font-bold text-purple-400">
                        ${savings.additionalRevenue.toLocaleString()}
                      </div>
                      <p className="text-sm text-gray-400 mt-2">
                        Projected annual revenue increase
                      </p>
                    </div>

                    <div className="p-6 rounded-lg bg-gradient-to-r from-purple-500/20 to-green-500/20 border border-purple-500/20">
                      <div className="flex items-center gap-3 mb-2">
                        <BarChart className="w-5 h-5 text-white" />
                        <h4 className="text-lg font-semibold">Total Annual Benefit</h4>
                      </div>
                      <p className="text-sm text-gray-400 mb-4">
                        The combined impact of reduced operational costs and increased revenue through AI automation. This factors in both the 70% cost savings and the revenue boost from 3x call capacity with improved conversion rates.
                      </p>
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                        ${savings.totalBenefit.toLocaleString()}
                      </div>
                      <p className="text-sm text-gray-400 mt-2">
                        Combined impact of savings and revenue
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium">Experience It Live</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Experience Our AI Agent Live
              </h2>
              <p className="text-gray-400">
                Get a personal demo call from our AI sales agent
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg"></div>
              <div className="relative bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Country
                      </label>
                      <div className="relative">
                        <select
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full bg-white/5 border border-purple-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 appearance-none"
                          required
                        >
                          <option value="">Select country</option>
                          {countries.map((country) => (
                            <option key={country.code} value={country.code} className="bg-gray-900">
                              {country.name} ({country.prefix})
                            </option>
                          ))}
                        </select>
                        {formData.country && (
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-4">
                            {React.createElement(countries.find(c => c.code === formData.country)?.flag || 'div')}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                          placeholder="Enter phone number"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <Building2 className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-white/5 border border-purple-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                        placeholder="Enter company name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Website
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <Globe className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full bg-white/5 border border-purple-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                        placeholder="https://example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <UserCheck className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-purple-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20 mb-6">
                    <p className="text-purple-400 text-sm text-center">
                      This is a demo call - no data will be stored or used for any purpose.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || success}
                    className={`w-full group relative px-6 py-4 bg-purple-600 rounded-lg text-lg font-medium transition-all duration-300 ${
                      loading || success ? 'opacity-75 cursor-not-allowed' : 'hover:bg-purple-500'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : success ? (
                        <>
                          <CheckCircle2 className="w-5 h-5" />
                          Demo Scheduled!
                        </>
                      ) : (
                        <>
                          Get a Demo Call Now
                          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>

                  {success && (
                    <div className="mt-4 p-4 rounded-lg bg-purple-500/10 border border-purple-500/20 text-center">
                      <p className="text-purple-400">
                        Thank you! Our AI sales agent will reach out shortly.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OutboundCalls;
