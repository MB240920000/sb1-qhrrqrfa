import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield,
  Lock,
  UserCheck,
  Database,
  Key,
  RefreshCw,
  Globe,
  Cookie,
  Users,
  Mail,
  FileText,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

function Privacy() {
  const sections = [
    {
      title: "Information We Collect",
      icon: <Database className="w-6 h-6" />,
      content: [
        {
          subtitle: "Personal Information",
          items: [
            "Name, phone number, email address, and appointment details",
            "Audio recordings, transcripts, and metadata of interactions",
            "Information about how you interact with our services, including logs and analytics",
            "IP address, browser type, and operating system when accessing our platform"
          ]
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <UserCheck className="w-6 h-6" />,
      content: [
        {
          subtitle: "Service Usage",
          items: [
            "Provide and improve appointment scheduling services",
            "Send reminders, confirmations, and follow-up communications",
            "Enhance AI accuracy and optimize Calliri's responses",
            "Analyze usage patterns for system improvements",
            "Comply with legal obligations and prevent fraud"
          ]
        }
      ]
    },
    {
      title: "Data Sharing & Security",
      icon: <Lock className="w-6 h-6" />,
      content: [
        {
          subtitle: "Data Protection",
          items: [
            "We do not sell or rent your personal data to third parties",
            "We may share data with service providers, such as calendar integrations and CRM platforms, to deliver our services",
            "We implement industry-standard security measures to protect data from unauthorized access"
          ]
        }
      ]
    },
    {
      title: "Data Retention & Deletion",
      icon: <RefreshCw className="w-6 h-6" />,
      content: [
        {
          subtitle: "Retention Policy",
          items: [
            "We retain call transcripts and user data for a limited period to improve AI responses and ensure quality service",
            "Users can request data deletion by contacting us at support@calliri.com"
          ]
        }
      ]
    },
    {
      title: "Your Rights",
      icon: <UserCheck className="w-6 h-6" />,
      content: [
        {
          subtitle: "User Rights",
          items: [
            "Access, modify, or delete your personal information",
            "Opt-out of marketing communications",
            "Request a copy of the data we store about you"
          ]
        }
      ]
    },
    {
      title: "Changes to This Privacy Policy",
      icon: <FileText className="w-6 h-6" />,
      content: [
        {
          subtitle: "Policy Updates",
          items: [
            "We may update this Privacy Policy to reflect changes in our services",
            "Any updates will be posted on this page with a revised effective date"
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
              <Shield className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Privacy Policy</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
                Your Privacy
              </span>
              <br />
              <span className="text-white">Is Our Priority</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're committed to protecting your data and maintaining your trust through transparency and strong security measures
            </p>
          </div>

          {/* Welcome Text */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-xl blur-lg"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
                <p className="text-gray-300 leading-relaxed">
                  Welcome to Calliri. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our AI-powered phone agent and related services.
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

          {/* Privacy Sections */}
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
                  Contact our Data Protection Officer at privacy@calliri.com
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-lg text-white font-medium hover:bg-purple-500 transition-colors"
                >
                  Contact Us
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

export default Privacy;