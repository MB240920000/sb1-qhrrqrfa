import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale,
  FileText,
  Shield,
  Clock,
  Ban,
  AlertTriangle,
  CreditCard,
  Copyright,
  Settings,
  CheckCircle2,
  Server,
  Book,
  HelpCircle,
  Mail,
  Lock
} from 'lucide-react';

function Terms() {
  const sections = [
    {
      title: "Service Agreement",
      icon: <FileText className="w-6 h-6" />,
      content: [
        {
          subtitle: "Acceptance of Terms",
          items: [
            "By using Calliri's AI phone agent services, you agree to these terms and conditions",
            "You must be at least 18 years old to use our services",
            "You must have the authority to bind your business to these terms",
            "We may update these terms with notice to users",
            "Continued use after changes constitutes acceptance"
          ]
        }
      ]
    },
    {
      title: "Service Description",
      icon: <Server className="w-6 h-6" />,
      content: [
        {
          subtitle: "AI Phone Agent Services",
          items: [
            "Automated call handling and appointment scheduling",
            "Natural language processing and voice synthesis",
            "Integration with calendar and CRM systems",
            "Call recording and transcription services",
            "Analytics and reporting features"
          ]
        }
      ]
    },
    {
      title: "Payment Terms",
      icon: <CreditCard className="w-6 h-6" />,
      content: [
        {
          subtitle: "Billing and Fees",
          items: [
            "Payment is required in advance for all plans",
            "One-time payment plans are non-refundable after 30 days",
            "Monthly plans can be cancelled with 30 days notice",
            "Late payments may result in service suspension",
            "All fees are exclusive of applicable taxes"
          ]
        }
      ]
    },
    {
      title: "Service Level Agreement",
      icon: <Clock className="w-6 h-6" />,
      content: [
        {
          subtitle: "Performance Standards",
          items: [
            "99.9% uptime guarantee for core services",
            "Maximum 1-hour response time for critical issues",
            "Regular system maintenance with advance notice",
            "Automatic failover and redundancy systems",
            "24/7 monitoring and alert systems"
          ]
        }
      ]
    },
    {
      title: "Data Security",
      icon: <Lock className="w-6 h-6" />,
      content: [
        {
          subtitle: "Security Measures",
          items: [
            "End-to-end encryption for all calls and data",
            "Regular security audits and penetration testing",
            "Compliance with industry security standards",
            "Secure data centers with physical security",
            "Regular backup and disaster recovery procedures"
          ]
        }
      ]
    },
    {
      title: "Intellectual Property",
      icon: <Copyright className="w-6 h-6" />,
      content: [
        {
          subtitle: "Ownership Rights",
          items: [
            "Calliri retains all rights to the AI technology",
            "Customers own their business data and recordings",
            "No reverse engineering of our systems",
            "Limited license to use our services",
            "Protection of trade secrets and proprietary information"
          ]
        }
      ]
    },
    {
      title: "Acceptable Use",
      icon: <Shield className="w-6 h-6" />,
      content: [
        {
          subtitle: "Usage Guidelines",
          items: [
            "No illegal or fraudulent activities",
            "No harassment or abuse of the system",
            "No unauthorized access attempts",
            "No interference with service operation",
            "Compliance with all applicable laws"
          ]
        }
      ]
    },
    {
      title: "Termination",
      icon: <Ban className="w-6 h-6" />,
      content: [
        {
          subtitle: "Service Termination",
          items: [
            "Either party may terminate with 30 days notice",
            "Immediate termination for terms violation",
            "Data export available for 30 days after termination",
            "Refund policy for unused prepaid services",
            "Post-termination obligations and restrictions"
          ]
        }
      ]
    },
    {
      title: "Limitation of Liability",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: [
        {
          subtitle: "Liability Limits",
          items: [
            "Maximum liability limited to fees paid",
            "No liability for indirect damages",
            "Force majeure exclusions",
            "No warranty for uninterrupted service",
            "Disclaimer of implied warranties"
          ]
        }
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
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6">
              <Scale className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Terms of Service</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
                Terms of Service
              </span>
              <br />
              <span className="text-white">& Conditions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>

          {/* Welcome Text */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-xl blur-lg"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
                <p className="text-gray-300 leading-relaxed">
                  Welcome to Calliri. By using our AI-powered phone agent and related services, you agree to be bound by these Terms of Service. These terms govern your use of our platform and describe your rights and responsibilities.
                </p>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative inline-block">
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-xl blur-lg"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-lg px-6 py-3 border border-purple-500/20">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">Last Updated: March 15, 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md"></div>
                      <div className="relative z-10 p-3 rounded-xl bg-white/5 text-purple-400">
                        {section.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                        {section.title}
                      </h2>

                      <div className="space-y-8">
                        {section.content.map((subsection, subIndex) => (
                          <div key={subIndex}>
                            <h3 className="text-lg font-semibold mb-4 text-purple-400">
                              {subsection.subtitle}
                            </h3>
                            <ul className="space-y-2">
                              {subsection.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                  <CheckCircle2 className="w-5 h-5 text-purple-400/50 flex-shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-xl blur-lg"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <HelpCircle className="w-6 h-6 text-purple-400" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Questions?
                  </h3>
                </div>
                <p className="text-gray-400 mb-6">
                  For questions about these terms, contact legal@calliri.com
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-lg text-white font-medium hover:bg-purple-500 transition-colors"
                >
                  Contact Legal Team
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;