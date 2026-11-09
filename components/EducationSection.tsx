'use client';

import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '@/lib/data';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#172611]/40 border-y border-[#30401C]/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Education Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#30401C]/60 border border-[#526531]/40 text-[#DCE7BE] text-xs font-mono mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Foundation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#DCE7BE] tracking-tight mb-8">
              Education & <span className="font-serif italic font-normal text-white">Degree</span>
            </h2>

            <div className="glass-panel p-8 rounded-3xl border border-[#526531]/40 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#DCE7BE]">
                    {EDUCATION.degree}
                  </h3>
                  <div className="text-base text-[#98A973] font-medium mt-1">
                    {EDUCATION.institution} • {EDUCATION.location}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                  <div className="px-3.5 py-1 rounded-full bg-[#DCE7BE] text-[#121F0D] font-mono text-xs font-bold">
                    CGPA: {EDUCATION.cgpa}
                  </div>
                  <div className="text-xs font-mono text-[#98A973]">
                    {EDUCATION.period}
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#B9C798] leading-relaxed mb-6">
                {EDUCATION.details}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#98A973] mb-3">
                  Core Relevant Coursework
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {EDUCATION.coursework.map((course, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#121F0D]/70 border border-[#30401C] text-xs text-[#DCE7BE]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#30401C]/60 border border-[#526531]/40 text-[#DCE7BE] text-xs font-mono mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Credentials</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#DCE7BE] tracking-tight mb-8">
              Certifications
            </h2>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-5 rounded-2xl border border-[#526531]/30 hover:border-[#758850]/50 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-sm font-bold text-[#DCE7BE]">
                      {cert.title}
                    </h4>
                    <span className="text-[11px] font-mono text-[#98A973] shrink-0 bg-[#121F0D] px-2 py-0.5 rounded border border-[#30401C]">
                      {cert.date}
                    </span>
                  </div>

                  <div className="text-xs text-[#98A973] mb-3 font-medium">
                    Issuer: <span className="text-[#B9C798]">{cert.issuer}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#30401C]/40 text-[#B9C798] border border-[#526531]/30"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
