'use client';

import { Sparkles, GraduationCap, Award, BookOpen, HeartHandshake, Languages } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';

export default function AboutSection() {
  const qualities = [
    {
      icon: GraduationCap,
      title: "Academic Rigor (CGPA 3.85)",
      description: "Ranked among top performers in Software Engineering at Abasyn University with deep mastery in Data Structures, Machine Learning, and OOP."
    },
    {
      icon: BookOpen,
      title: "8.5+ Years Mentorship & Teaching",
      description: "Instructed 20+ students across computer science and mathematics, developing elite communication skills, active listening, and instructional design."
    },
    {
      icon: Award,
      title: "Generative AI & LLM Systems",
      description: "Pioneering practical RAG solutions with Google Gemini & OpenAI APIs, LangChain, vector retrieval, and zero-hallucination prompt architectures."
    },
    {
      icon: HeartHandshake,
      title: "Social Impact & Community Tech",
      description: "Dedicated to building high-utility software for society—from fair-wage artisan platforms (Haq Charkha) to scholarship discovery tools (NextStep AI)."
    }
  ];

  const spokenLanguages = [
    { name: "English", level: "Professional" },
    { name: "Urdu", level: "Native" },
    { name: "Pashto", level: "Native" },
    { name: "Saraiki", level: "Native" },
    { name: "Arabic", level: "Quranic Grammar" },
    { name: "Turkish", level: "Elementary" },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#172611]/40 border-y border-[#30401C]/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#30401C]/60 border border-[#526531]/40 text-[#DCE7BE] text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Background & Philosophy</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-[#DCE7BE] tracking-tight mb-6">
              Engineering with <span className="font-serif italic font-normal text-white">Depth, Purpose</span>, and Continuous Curiosity
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#B9C798] leading-relaxed">
              <p>
                I am a final-year Software Engineering student at <strong className="text-[#DCE7BE]">Abasyn University, Peshawar</strong> with a <strong className="text-[#DCE7BE]">3.85 CGPA</strong>. My technical journey is defined by a deep curiosity for how intelligent models can solve real-world problems for students, artisans, and communities.
              </p>
              <p>
                Beyond code, my 8.5+ years of independent teaching have taught me that true engineering excellence is rooted in <em>clear communication</em> and <em>empathy</em>. Whether designing an industrial defect classification pipeline in PyTorch, building a RAG research assistant with the Gemini API, or crafting modern interfaces, I hold both the algorithmic logic and the human experience to the highest standard.
              </p>
            </div>

            {/* Language Badges */}
            <div className="mt-8 pt-6 border-t border-[#30401C]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#98A973] mb-3">
                <Languages className="w-4 h-4 text-[#DCE7BE]" />
                <span>Multilingual Fluency:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {spokenLanguages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-[#1c2c15] text-[#DCE7BE] border border-[#526531]/40 font-mono"
                  >
                    {lang.name} <span className="text-[#758850] text-[10px]">({lang.level})</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="glass-panel p-6 rounded-3xl border border-[#526531]/30 hover:border-[#DCE7BE]/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#30401C] border border-[#758850]/40 flex items-center justify-center text-[#DCE7BE] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#DCE7BE] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#98A973] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
