'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="glass-nav rounded-2xl sm:rounded-full px-5 py-3 flex items-center justify-between border border-[#526531]/30 shadow-2xl backdrop-blur-xl">
          {/* Logo / Monogram */}
          <Link href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#1c2c15] border border-[#758850]/40 flex items-center justify-center text-[#DCE7BE] font-bold text-sm tracking-wider shadow-inner group-hover:border-[#DCE7BE] transition-colors">
              AS
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-[#DCE7BE] group-hover:text-white transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-[#98A973] font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                AI & Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#121F0D]/60 p-1 rounded-full border border-[#30401C]/60">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium text-[#B9C798] hover:text-[#DCE7BE] hover:bg-[#30401C]/50 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Aimen_Saeed_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-[#121F0D] bg-[#DCE7BE] hover:bg-[#c9d8a3] rounded-full transition-all shadow-md hover:shadow-lg font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#DCE7BE] bg-[#1c2c15] border border-[#526531]/50 hover:border-[#DCE7BE]/60 rounded-full transition-all"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#DCE7BE] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl glass-panel border border-[#526531]/40 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm text-[#B9C798] hover:text-[#DCE7BE] hover:bg-[#30401C]/40 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#30401C] flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.resumePath}
                download="Aimen_Saeed_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-[#121F0D] bg-[#DCE7BE] rounded-lg"
              >
                <Download className="w-4 h-4" />
                Download Resume (CV)
              </a>
              <div className="flex items-center justify-center gap-4 pt-2">
                <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 text-[#B9C798] hover:text-[#DCE7BE]">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-[#B9C798] hover:text-[#DCE7BE]">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href={PERSONAL_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 text-[#B9C798] hover:text-[#DCE7BE]">
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
