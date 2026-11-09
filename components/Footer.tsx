'use client';

import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#30401C]/60 bg-[#121F0D] py-12 px-4 sm:px-6 lg:px-8 text-xs text-[#98A973]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#DCE7BE] tracking-wide text-sm">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[#526531]">•</span>
            <span className="font-mono text-[11px] text-[#758850]">
              Botanical Luxury Edition
            </span>
          </div>
          <p className="text-[#758850]">
            Autonomous Portfolio connected with GitHub API & Vercel.
          </p>
        </div>

        {/* Color Palette Micro Swatches */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#1c2c15] border border-[#30401C]" title="Botanical Theme Swatches">
          <span className="w-3.5 h-3.5 rounded-full bg-[#121F0D] border border-white/20" title="Nightmare #121F0D" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#30401C]" title="Ceylanite #30401C" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#526531]" title="Basil Green #526531" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#758850]" title="Green Suede #758850" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#98A973]" title="Green Plaza #98A973" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#B9C798]" title="White Grape #B9C798" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#DCE7BE]" title="Kiwi Sorbet #DCE7BE" />
        </div>

        {/* Socials & Scroll to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#98A973] hover:text-[#DCE7BE] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#98A973] hover:text-[#DCE7BE] transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#98A973] hover:text-[#DCE7BE] transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#1c2c15] hover:bg-[#30401C] text-[#DCE7BE] border border-[#526531]/40 transition-colors ml-2"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
