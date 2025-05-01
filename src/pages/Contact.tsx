import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail,
  Phone,
  MessageSquare,
  Send,
  Clock,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

function Contact() {
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
              <MessageSquare className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have questions about our AI call management solution? We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full group relative px-6 py-4 bg-purple-600 rounded-lg text-lg font-medium transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md animate-pulse-slow"></div>
                      <div className="relative z-10 p-3 rounded-xl bg-white/5 text-purple-400">
                        <Clock className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                      <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM EST</p>
                      <p className="text-gray-400">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <a 
                    href="mailto:Moncef@calliri.io"
                    className="relative flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md animate-pulse-slow"></div>
                      <div className="relative z-10 p-3 rounded-xl bg-white/5 text-purple-400">
                        <Mail className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <p className="text-gray-400">Moncef@calliri.io</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-purple-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <a 
                    href="tel:+33680558560"
                    className="relative flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md animate-pulse-slow"></div>
                      <div className="relative z-10 p-3 rounded-xl bg-white/5 text-purple-400">
                        <Phone className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                      <p className="text-gray-400">+33 6 80 55 85 60</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-purple-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md animate-pulse-slow"></div>
                      <div className="relative z-10 p-3 rounded-xl bg-white/5 text-purple-400">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
                      <p className="text-gray-400">We typically respond within 2-4 business hours during office hours.</p>
                    </div>
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

export default Contact;