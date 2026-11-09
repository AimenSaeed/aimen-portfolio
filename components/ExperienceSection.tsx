'use client';

import { Briefcase, Calendar, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '@/lib/data';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#30401C]/60 border border-[#526531]/40 text-[#DCE7BE] text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career & Leadership Track</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#DCE7BE] tracking-tight">
            Work Experience & <span className="font-serif italic font-normal text-white">Mentorship</span>
          </h2>
          <p className="mt-3 text-base text-[#98A973] max-w-xl mx-auto">
            A demonstrated history of academic pedagogy, technical leadership, and digital content strategy.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-[#30401C] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Node indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#121F0D] border-2 border-[#DCE7BE] group-hover:scale-125 group-hover:bg-[#DCE7BE] transition-all shadow-[0_0_10px_rgba(220,231,190,0.5)]" />

              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#526531]/30 group-hover:border-[#758850]/50 transition-all">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#DCE7BE] group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-[#98A973]">
                      {exp.organization}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#B9C798] bg-[#121F0D] px-3 py-1 rounded-full border border-[#30401C] w-fit">
                    <Calendar className="w-3.5 h-3.5 text-[#758850]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description bullet points */}
                <ul className="space-y-2.5 my-4">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-sm text-[#B9C798] flex items-start gap-2.5 leading-relaxed">
                      <span className="text-[#758850] mt-1 shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills used */}
                <div className="pt-4 border-t border-[#30401C]/60 flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2.5 py-0.5 rounded-lg bg-[#30401C]/50 text-[#DCE7BE] border border-[#526531]/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
