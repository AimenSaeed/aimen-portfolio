'use client';

import { Cpu, Terminal, Bot, Globe, CheckCircle2, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/lib/data';

export default function SkillsSection() {
  const categoryIcons = [Bot, Cpu, Globe, Terminal];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#30401C]/60 border border-[#526531]/40 text-[#DCE7BE] text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#DCE7BE] tracking-tight">
            Skills & <span className="font-serif italic font-normal text-white">Competencies</span>
          </h2>
          <p className="mt-3 text-base text-[#98A973] max-w-xl mx-auto">
            From deep-retrieval RAG pipelines and PyTorch vision models to modern Next.js user interfaces.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-[#526531]/30 hover:border-[#DCE7BE]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-[#30401C] border border-[#758850]/40 flex items-center justify-center text-[#DCE7BE]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#DCE7BE]">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2 rounded-xl bg-[#121F0D]/50 border border-[#30401C]/50 hover:border-[#526531] transition-colors"
                      >
                        <span className="text-xs font-medium text-[#B9C798]">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#30401C]/60 text-[#DCE7BE] border border-[#526531]/40">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#30401C]/50 text-right">
                  <span className="text-[11px] font-mono text-[#758850]">
                    {cat.skills.length} core technologies
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
