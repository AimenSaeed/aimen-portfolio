'use client';

import { useState } from 'react';
import { ArrowDown, Mail, Check, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden botanical-grid">
      {/* Ambient background glows */}
      <div className="ambient-glow w-[500px] h-[500px] bg-[#526531] top-[-100px] left-[-150px] -z-10" />
      <div className="ambient-glow w-[600px] h-[600px] bg-[#30401C] bottom-[-200px] right-[-100px] -z-10" />
      <div className="ambient-glow w-[350px] h-[350px] bg-[#DCE7BE] top-[30%] right-[15%] opacity-5 -z-10" />

      <div className="max-w-5xl mx-auto w-full text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1c2c15]/90 border border-[#758850]/40 text-[#DCE7BE] text-xs font-mono tracking-wide shadow-lg mb-8 backdrop-blur-md animate-in fade-in zoom-in duration-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span>Open to AI Engineering & Full-Stack Opportunities</span>
          <span className="text-[#758850]">•</span>
          <span className="text-[#98A973]">Peshawar, PK</span>
        </div>

        {/* Name & Main Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#DCE7BE] mb-6 leading-[1.12]">
          Hi, I&apos;m <span className="text-white drop-shadow-sm">{PERSONAL_INFO.name}</span>
          <span className="block mt-3 text-2xl sm:text-4xl md:text-5xl font-light text-[#B9C798]">
            Engineering <span className="italic font-serif text-[#DCE7BE] underline decoration-[#526531] underline-offset-8">Generative AI</span>, RAG Systems & Machine Learning Pipelines
          </span>
        </h1>

        {/* Bio description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#98A973] leading-relaxed mb-10">
          Final-year Software Engineering student at <strong className="text-[#DCE7BE] font-semibold">Abasyn University</strong> (CGPA 3.85/4.00) and educator with 8.5+ years of teaching. Creator of deep-citation RAG tools, social-impact platforms, and predictive ML models.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-full bg-[#DCE7BE] hover:bg-[#c9d8a3] text-[#121F0D] font-bold text-sm tracking-wide shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#30401C]" />
            <span>Explore Automated Projects</span>
          </a>

          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-[#1c2c15] hover:bg-[#25391c] text-[#DCE7BE] border border-[#526531] font-semibold text-sm transition-all transform hover:-translate-y-0.5 flex items-center gap-2 shadow-lg"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="px-5 py-3.5 rounded-full bg-[#1c2c15]/80 hover:bg-[#25391c] text-[#B9C798] border border-[#526531]/60 font-medium text-sm transition-all flex items-center gap-2 shadow"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Email Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Social Links Bar */}
        <div className="flex items-center justify-center gap-6 mb-16 text-[#98A973]">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#DCE7BE] transition-colors flex items-center gap-1.5 text-xs font-mono"
          >
            <GithubIcon className="w-4 h-4" />
            <span>@AimenSaeed</span>
          </a>
          <span className="text-[#30401C]">/</span>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#DCE7BE] transition-colors flex items-center gap-1.5 text-xs font-mono"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <span className="text-[#30401C]">/</span>
          <a
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#DCE7BE] transition-colors flex items-center gap-1.5 text-xs font-mono"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>@aiwithaimen</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div
              key={i}
              className="glass-panel p-4 rounded-2xl border border-[#526531]/30 hover:border-[#758850]/50 transition-all text-left"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#DCE7BE] font-mono tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-[#98A973] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#projects"
            className="text-[#758850] hover:text-[#DCE7BE] transition-colors animate-bounce p-2"
            aria-label="Scroll to projects"
          >
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
