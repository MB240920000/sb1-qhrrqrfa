import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bot,
  Building2,
  Users,
  Globe2,
  Phone,
  Mail,
  Calendar,
  CheckCircle2,
  ArrowRight,
  BrainCircuit,
  MessageSquare,
  Check
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import SuccessModal from '../components/SuccessModal';
import { US, GB, FR, DE, IT, ES, CA, AU, JP, CN } from '../assets/flags';

type BusinessSize = 'small' | 'medium' | 'large' | 'enterprise';
type CurrentSolution = 'in-house' | 'call-center' | 'online' | 'mixed';
type CallVolume = '0-100' | '100-500' | '500-1000' | '1000+';
type OutboundPreference = 'reminders' | 'follow-ups' | 'promotions' | 'none';
type AiTone = 'professional' | 'friendly';

function BookDemo() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    businessSize: '' as BusinessSize,
    website: '',
    fullName: '',
    email: '',
    phone: '',
    currentSolution: '' as CurrentSolution,
    callVolume: '' as CallVolume,
    challenges: [] as string[],
    outbound_preference: '' as OutboundPreference,
    aiTone: '' as AiTone,
    integrations: [] as string[],
    otherChallenge: '',
    otherIntegration: '',
    customCrm: '',
    country: ''
  });
  const [bookingComplete, setBookingComplete] = useState(false);
  const calendlyContainerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Insert data into Supabase
      const { error } = await supabase
        .from('demo_schedule')
        .insert([
          {
            business_name: formData.businessName,
            industry: formData.industry,
            business_size: formData.businessSize,
            website: formData.website,
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            current_solution: formData.currentSolution,
            call_volume: formData.callVolume,
            challenges: formData.challenges,
            outbound_preference: formData.outbound_preference,
            ai_tone: formData.aiTone,
            integrations: formData.integrations
          }
        ]);

      if (error) {
        console.error('Error saving demo request:', error);
        throw error;
      }

      // If Supabase insert is successful, proceed with the Make.com webhook
      const selectedCountry = countries.find(c => c.code === formData.country);
      const fullPhoneNumber = selectedCountry ? `${selectedCountry.prefix}${formData.phone}` : formData.phone;

      const webhookResponse = await fetch('https://hook.us2.make.com/pf41e8xsigojj3c41ltfn4wnfh373rbc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: fullPhoneNumber,
          companyName: formData.businessName,
          website: formData.website,
          name: formData.fullName
        }),
      });

      if (!webhookResponse.ok) {
        throw new Error('Webhook failed');
      }

      setSuccess(true);
      setFormData({
        businessName: '',
        industry: '',
        businessSize: '' as BusinessSize,
        website: '',
        fullName: '',
        email: '',
        phone: '',
        currentSolution: '' as CurrentSolution,
        callVolume: '' as CallVolume,
        challenges: [] as string[],
        outbound_preference: '' as OutboundPreference,
        aiTone: '' as AiTone,
        integrations: [] as string[],
        otherChallenge: '',
        otherIntegration: '',
        customCrm: '',
        country: ''
      });
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReturnHome = () => {
    navigate('/');
  };

  useEffect(() => {
    if (step === 4) {
      // Clean up any existing Calendly scripts
      const existingScripts = document.querySelectorAll('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      existingScripts.forEach(script => script.remove());
      
      // Load Calendly script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      // Create Calendly inline widget
      const calendlyDiv = document.getElementById('calendly-inline-widget');
      if (calendlyDiv) {
        calendlyDiv.innerHTML = '';
        
        // Create the widget directly with the HTML structure
        calendlyDiv.innerHTML = `
          <div 
            class="calendly-inline-widget" 
            data-url="https://calendly.com/calliriai/30min?primary_color=b300ff" 
            style="min-width:320px;height:700px;">
          </div>
        `;

        // Add event listener for when booking is complete
        window.addEventListener('message', (e) => {
          if (e.data.event && e.data.event.indexOf('calendly') === 0) {
            if (e.data.event === 'calendly.event_scheduled') {
              setBookingComplete(true);
            }
          }
        });
      }

      return () => {
        // Clean up script when component unmounts
        const scripts = document.querySelectorAll('script[src="https://assets.calendly.com/assets/external/widget.js"]');
        scripts.forEach(script => script.remove());
        
        // Remove event listeners
        window.removeEventListener('message', () => {});
      };
    }
  }, [step]);

  const industries = [
    'Healthcare',
    'Technology',
    'Finance',
    'Education',
    'Retail',
    'Hospitality',
    'Professional Services',
    'Real Estate',
    'Automotive',
    'Other'
  ];

  const businessSizes = [
    { value: 'small', label: '1-10 employees' },
    { value: 'medium', label: '11-50 employees' },
    { value: 'large', label: '51-200 employees' },
    { value: 'enterprise', label: '200+ employees' }
  ];

  const challenges = [
    'High number of missed calls',
    'Too much time spent handling appointments',
    'High no-show or cancellation rates',
    'Difficulty following up with past clients',
    'Lack of integration with calendars/CRM'
  ];

  const outboundPreferences = [
    { value: 'reminders', label: 'Yes, for appointment reminders' },
    { value: 'follow-ups', label: 'Yes, for re-engagement/follow-ups' },
    { value: 'promotions', label: 'Yes, for promotions and upsells' },
    { value: 'none', label: 'No, only inbound scheduling' }
  ];

  const aiTones = [
    { value: 'professional', label: 'Professional & Formal' },
    { value: 'friendly', label: 'Friendly & Casual' }
  ];

  const integrationOptions = [
    'Google Calendar',
    'Outlook Calendar',
    'CRM (please specify)',
    'Other'
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, array: string) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [array]: checked 
        ? [...prev[array as keyof typeof prev] as string[], value]
        : (prev[array as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const handleNext = async () => {
    if (step === 3) {
      // Submit form data before moving to calendar step
      await handleSubmit(new Event('submit'));
    }
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.businessName && formData.industry && formData.businessSize;
      case 2:
        return formData.fullName && formData.email && formData.phone;
      case 3:
        return formData.currentSolution && formData.callVolume && formData.aiTone;
      default:
        return true;
    }
  };

  const renderProgressSteps = () => {
    const steps = [
      'Business Details',
      'Contact Info',
      'Requirements',
      'Schedule'
    ];

    return (
      <div className="flex justify-between items-center mb-12">
        {steps.map((stepLabel, index) => (
          <div key={index} className="flex items-center">
            <div className="relative">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center
                ${step > index + 1 ? 'bg-purple-600' : step === index + 1 ? 'bg-purple-600' : 'bg-white/5'}
                ${step === index + 1 ? 'ring-2 ring-purple-400 ring-offset-2 ring-offset-black' : ''}
              `}>
                {step > index + 1 ? (
                  <CheckCircle2 className="w-5 h-5 text-white" />
                ) : (
                  <span className="text-white">{index + 1}</span>
                )}
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-400 whitespace-nowrap">
                {stepLabel}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`
                w-full h-1 mx-4
                ${step > index + 1 ? 'bg-purple-600' : 'bg-white/5'}
              `} />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 circuit-background opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6 animate-float">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Book Your Demo</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
                Let's Transform Your
              </span>
              <br />
              <span className="text-white">Business Communication</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Help us understand your needs to personalize your demo experience
            </p>
          </div>

          {renderProgressSteps()}

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Business Details</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                      placeholder="Your business name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Industry *
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                      required
                    >
                      <option value="">Select industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry} className="bg-gray-900">
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Business Size *
                    </label>
                    <select
                      name="businessSize"
                      value={formData.businessSize}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                      required
                    >
                      <option value="">Select business size</option>
                      {businessSizes.map(size => (
                        <option key={size.value} value={size.value} className="bg-gray-900">
                          {size.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                      placeholder="https://"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone *
                    </label>
                    <div className="flex gap-4">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-1/3 bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                        required
                      >
                        <option value="">Select country</option>
                        {countries.map(country => (
                          <option key={country.code} value={country.code} className="bg-gray-900">
                            {country.name} ({country.prefix})
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-2/3 bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                        placeholder="Phone number"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold mb-6">Business Operations</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      How do you currently handle appointment scheduling? *
                    </label>
                    <select
                      name="currentSolution"
                      value={formData.currentSolution}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                      required
                    >
                      <option value="">Select current solution</option>
                      <option value="in-house" className="bg-gray-900">In-house staff</option>
                      <option value="call-center" className="bg-gray-900">Third-party call center</option>
                      <option value="online" className="bg-gray-900">Online booking only</option>
                      <option value="mixed" className="bg-gray-900">A mix of these</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      What is your estimated monthly call volume? *
                    </label>
                    <select
                      name="callVolume"
                      value={formData.callVolume}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                      required
                    >
                      <option value="">Select call volume</option>
                      <option value="0-100" className="bg-gray-900">0-100 calls</option>
                      <option value="100-500" className="bg-gray-900">100-500 calls</option>
                      <option value="500-1000" className="bg-gray-900">500-1,000 calls</option>
                      <option value="1000+" className="bg-gray-900">1,000+ calls</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      What challenges are you facing with scheduling?
                    </label>
                    <div className="space-y-3">
                      {challenges.map(challenge => (
                        <label key={challenge} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            value={challenge}
                            checked={formData.challenges.includes(challenge)}
                            onChange={(e) => handleCheckboxChange(e, 'challenges')}
                            className="w-4 h-4 rounded border-purple-500/20 bg-white/5 text-purple-600 focus:ring-purple-500/40"
                          />
                          <span className="text-gray-300">{challenge}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Would you be interested in AI-powered outbound calls? *
                    </label>
                    <select
                      name="outbound_preference"
                      value={formData.outbound_preference}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                      required
                    >
                      <option value="">Select preference</option>
                      {outboundPreferences.map(pref => (
                        <option key={pref.value} value={pref.value} className="bg-gray-900">
                          {pref.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Tone of AI Calls *
                    </label>
                    <select
                      name="aiTone"
                      value={formData.aiTone}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                      required
                    >
                      <option value="">Select tone</option>
                      {aiTones.map(tone => (
                        <option key={tone.value} value={tone.value} className="bg-gray-900">
                          {tone.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Which systems do you need Calliri to integrate with?
                    </label>
                    <div className="space-y-3">
                      {integrationOptions.map(integration => (
                        <label key={integration} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            value={integration}
                            checked={formData.integrations.includes(integration)}
                            onChange={(e) => handleCheckboxChange(e, 'integrations')}
                            className="w-4 h-4 rounded border-purple-500/20 bg-white/5 text-purple-600 focus:ring-purple-500/40"
                          />
                          <span className="text-gray-300">{integration}</span>
                        </label>
                      ))}
                    </div>
                    {formData.integrations.includes('CRM (please specify)') && (
                      <input
                        type="text"
                        name="customCrm"
                        value={formData.customCrm}
                        onChange={handleInputChange}
                        placeholder="Enter your CRM system"
                        className="mt-3 w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                      />
                    )}
                    {formData.integrations.includes('Other') && (
                      <input
                        type="text"
                        name="otherIntegration"
                        value={formData.otherIntegration}
                        onChange={handleInputChange}
                        placeholder="Please specify other integrations"
                        className="mt-3 w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                      />
                    )}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Schedule Your Demo</h2>
                  
                  {bookingComplete ? (
                    <div className="text-center py-12">
                      <div className="relative mb-6 mx-auto w-20 h-20">
                        <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg animate-pulse"></div>
                        <div className="relative z-10 flex items-center justify-center w-full h-full bg-purple-600 rounded-full">
                          <Check className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                        Booking Confirmed!
                      </h3>
                      <p className="text-gray-300 mb-8">
                        Thank you for scheduling a demo with us. We've sent a confirmation to your email with all the details.
                      </p>
                      <button
                        onClick={handleReturnHome}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-colors"
                      >
                        Return Home
                      </button>
                    </div>
                  ) : (
                    <div ref={calendlyContainerRef} className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-xl blur-lg"></div>
                      <div className="relative bg-black/50 backdrop-blur-sm rounded-lg border border-purple-500/30 overflow-hidden">
                        <div id="calendly-inline-widget"></div>
                      </div>
                      <div className="mt-8 text-center">
                        <button
                          onClick={handleReturnHome}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium border border-purple-500/30 hover:bg-purple-500/10 transition-colors"
                        >
                          Return Home
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-between mt-8">
                {step > 1 && step < 4 && (
                  <button
                    onClick={handleBack}
                    className="px-6 py-3 text-gray-300 hover:text-white transition-colors"
                  >
                    Back
                  </button>
                )}
                {step < 4 ? (
                  <button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className={`
                      ml-auto px-6 py-3 rounded-lg font-medium
                      flex items-center gap-2
                      ${isStepValid()
                        ? 'bg-purple-600 hover:bg-purple-500 text-white'
                        : 'bg-gray-600 text-gray-300 cursor-not-allowed'}
                    `}
                  >
                    Next Step
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {showSuccessModal && (
        <SuccessModal
          onClose={() => setShowSuccessModal(false)}
          onReturnHome={handleReturnHome}
        />
      )}
    </div>
  );
}

export default BookDemo;