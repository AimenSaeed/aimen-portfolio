'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#DCE7BE', '#B9C798', '#758850', '#526531']
      });
    } catch {}

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#30401C]/60 border border-[#526531]/40 text-[#DCE7BE] text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#DCE7BE] tracking-tight">
            Let&apos;s Build Something <span className="font-serif italic font-normal text-white">Exceptional</span>
          </h2>
          <p className="mt-3 text-base text-[#98A973] max-w-xl mx-auto">
            Whether you have an AI engineering project, research collaboration, or career inquiry, I&apos;d love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#526531]/40">
              <h3 className="text-xl font-bold text-[#DCE7BE] mb-6">
                Direct Contact
              </h3>

              <div className="space-y-5">
                {/* Email card */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#30401C] border border-[#758850]/40 flex items-center justify-center text-[#DCE7BE] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[#98A973] font-mono">Email Address</div>
                    <div className="text-sm font-semibold text-[#DCE7BE] truncate">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-[#98A973] hover:text-[#DCE7BE] rounded-lg hover:bg-[#30401C]/50 transition-colors shrink-0"
                    title="Copy email address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#30401C] border border-[#758850]/40 flex items-center justify-center text-[#DCE7BE] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#98A973] font-mono">Based In</div>
                    <div className="text-sm font-semibold text-[#DCE7BE]">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#30401C] border border-[#758850]/40 flex items-center justify-center text-[#DCE7BE] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#98A973] font-mono">Phone & WhatsApp</div>
                    <div className="text-sm font-semibold text-[#DCE7BE]">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-[#30401C]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#98A973] mb-3">
                  Online Profiles
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#121F0D]/70 border border-[#30401C] hover:border-[#DCE7BE]/40 text-[#B9C798] hover:text-[#DCE7BE] transition-all"
                  >
                    <GithubIcon className="w-5 h-5 mb-1" />
                    <span className="text-[11px] font-mono">GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#121F0D]/70 border border-[#30401C] hover:border-[#DCE7BE]/40 text-[#B9C798] hover:text-[#DCE7BE] transition-all"
                  >
                    <LinkedinIcon className="w-5 h-5 mb-1" />
                    <span className="text-[11px] font-mono">LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#121F0D]/70 border border-[#30401C] hover:border-[#DCE7BE]/40 text-[#B9C798] hover:text-[#DCE7BE] transition-all"
                  >
                    <InstagramIcon className="w-5 h-5 mb-1" />
                    <span className="text-[11px] font-mono">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#526531]/40">
              <h3 className="text-xl font-bold text-[#DCE7BE] mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#98A973] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121F0D]/80 border border-[#30401C] focus:border-[#DCE7BE] text-sm text-[#DCE7BE] placeholder-[#758850] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#98A973] mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121F0D]/80 border border-[#30401C] focus:border-[#DCE7BE] text-sm text-[#DCE7BE] placeholder-[#758850] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#98A973] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Job Opportunity / Research"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121F0D]/80 border border-[#30401C] focus:border-[#DCE7BE] text-sm text-[#DCE7BE] placeholder-[#758850] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#98A973] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, idea, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121F0D]/80 border border-[#30401C] focus:border-[#DCE7BE] text-sm text-[#DCE7BE] placeholder-[#758850] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-[#DCE7BE] hover:bg-[#c9d8a3] text-[#121F0D] font-bold text-sm tracking-wide shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4 text-[#30401C]" />
                  <span>Send Message via Email</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-700/60 text-xs text-emerald-300 text-center animate-in fade-in">
                    Thank you! Your email client has been prepared. Feel free to copy my email directly as well!
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
