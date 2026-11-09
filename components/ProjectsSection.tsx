'use client';

import { useState } from 'react';
import { Project } from '@/lib/types';
import { 
  ExternalLink, 
  Star, 
  GitFork, 
  Sparkles, 
  RefreshCw, 
  CheckCircle2, 
  Layers, 
  Bot, 
  Cpu, 
  Globe 
} from 'lucide-react';
import { GithubIcon, YoutubeIcon } from './SocialIcons';
import YouTubeModal from './YouTubeModal';

interface ProjectsSectionProps {
  initialProjects: Project[];
  isLiveDefault?: boolean;
}

export default function ProjectsSection({ initialProjects, isLiveDefault = true }: ProjectsSectionProps) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [syncStatus, setSyncStatus] = useState<string>(
    isLiveDefault ? 'Synchronized with GitHub (@AimenSaeed)' : 'Catalog loaded from local cache'
  );
  const [activeVideo, setActiveVideo] = useState<{ id: string; title: string } | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'featured', label: 'Featured', icon: Sparkles },
    { id: 'ai-rag', label: 'AI & RAG Systems', icon: Bot },
    { id: 'fullstack', label: 'Full-Stack Apps', icon: Globe },
    { id: 'ml-data', label: 'ML Pipelines', icon: Cpu },
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'featured') return project.isFeatured;
    return project.category === selectedCategory;
  });

  const handleRefresh = async () => {
    setIsRefreshing(true);
    setSyncStatus('Checking GitHub API for newly pushed repos & updates...');
    try {
      const res = await fetch('/api/repos');
      if (res.ok) {
        const data = await res.json();
        if (data.projects && data.projects.length > 0) {
          setProjects(data.projects);
          setSyncStatus(`Live Synced: ${data.projects.length} repositories verified with GitHub`);
        }
      }
    } catch (e) {
      console.error(e);
      setSyncStatus('Using cached repository catalog');
    } finally {
      setTimeout(() => setIsRefreshing(false), 800);
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#30401C]/60 border border-[#526531]/40 text-[#DCE7BE] text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#DCE7BE]" />
              <span>Automated GitHub Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#DCE7BE] tracking-tight">
              Featured Work & <span className="font-serif italic font-normal text-white">Live Repos</span>
            </h2>
            <p className="mt-3 text-base text-[#98A973] max-w-xl">
              Connected directly to <code className="text-[#DCE7BE] bg-[#1c2c15] px-2 py-0.5 rounded font-mono text-xs">@AimenSaeed</code>. Any new repository, live Vercel link, or README video demo automatically appears below.
            </p>
          </div>

          {/* Sync Trigger & Indicator */}
          <div className="flex items-center gap-3 bg-[#1c2c15] p-2 sm:p-2.5 rounded-2xl border border-[#526531]/40 self-start md:self-auto shadow-lg">
            <div className="flex items-center gap-2 text-xs text-[#B9C798] px-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono text-[11px] sm:text-xs truncate max-w-[220px] sm:max-w-[280px]">
                {syncStatus}
              </span>
            </div>
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#30401C] hover:bg-[#526531] text-[#DCE7BE] text-xs font-medium transition-all disabled:opacity-60"
              title="Query GitHub for latest repositories"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-emerald-400' : ''}`} />
              <span className="hidden sm:inline">{isRefreshing ? 'Syncing...' : 'Re-sync'}</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#30401C]/60">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  active
                    ? 'bg-[#DCE7BE] text-[#121F0D] shadow-md shadow-[#526531]/20 scale-[1.02]'
                    : 'bg-[#1c2c15]/80 text-[#98A973] hover:text-[#DCE7BE] hover:bg-[#25391c] border border-[#526531]/30'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? 'text-[#121F0D]' : 'text-[#758850]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const hasLiveDemo = Boolean(project.homepage);
            const hasYouTube = Boolean(project.youtubeId || project.youtubeUrl);

            return (
              <div
                key={project.id}
                className="group glass-panel rounded-3xl p-6 border border-[#526531]/40 hover:border-[#DCE7BE]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#526531]/20 relative overflow-hidden"
              >
                {/* Background decorative corner glow on hover */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#526531]/20 rounded-full blur-2xl group-hover:bg-[#DCE7BE]/15 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Meta: Category & Star/Fork counter */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#121F0D] text-[#B9C798] border border-[#30401C] uppercase tracking-wider">
                      {project.category.replace('-', ' ')}
                    </span>

                    <div className="flex items-center gap-3 text-xs font-mono text-[#98A973]">
                      {project.stars !== undefined && project.stars > 0 && (
                        <span className="flex items-center gap-1 hover:text-[#DCE7BE] transition-colors">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span>{project.stars}</span>
                        </span>
                      )}
                      {project.forks !== undefined && project.forks > 0 && (
                        <span className="flex items-center gap-1 hover:text-[#DCE7BE] transition-colors">
                          <GitFork className="w-3.5 h-3.5" />
                          <span>{project.forks}</span>
                        </span>
                      )}
                      {project.isFeatured && (
                        <span className="px-2 py-0.5 rounded-full bg-[#DCE7BE]/15 text-[#DCE7BE] text-[10px] font-bold border border-[#DCE7BE]/30">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-[#DCE7BE] group-hover:text-white transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-sm text-[#98A973] line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights or Metric badge if present */}
                  {project.metric && (
                    <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#30401C]/80 border border-[#758850]/40 text-xs font-mono text-[#DCE7BE]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Result: {project.metric}</span>
                    </div>
                  )}

                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="mb-4 space-y-1.5">
                      {project.highlights.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="text-xs text-[#B9C798] flex items-start gap-2">
                          <span className="text-[#758850] mt-0.5">•</span>
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.topics.slice(0, 5).map((topic, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#121F0D]/70 text-[#B9C798] border border-[#30401C]/80 group-hover:border-[#526531]/70 transition-colors"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-4 border-t border-[#30401C]/70 flex flex-wrap items-center gap-2">
                  {/* Live Vercel Demo Button */}
                  {hasLiveDemo && (
                    <a
                      href={project.homepage!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#DCE7BE] hover:bg-[#c9d8a3] text-[#121F0D] text-xs font-bold transition-all shadow-sm hover:shadow"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                    </a>
                  )}

                  {/* YouTube Video Demo Button */}
                  {hasYouTube && (
                    <button
                      onClick={() =>
                        setActiveVideo({
                          id: project.youtubeId || '8-tA-PktphE',
                          title: project.title,
                        })
                      }
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-950/40 hover:bg-red-900/50 text-red-200 border border-red-800/50 text-xs font-semibold transition-all shadow-sm"
                    >
                      <YoutubeIcon className="w-3.5 h-3.5 text-red-400" />
                      <span>Watch Demo</span>
                    </button>
                  )}

                  {/* GitHub Repo Button */}
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#121F0D] hover:bg-[#22351a] text-[#B9C798] hover:text-[#DCE7BE] border border-[#526531]/50 text-xs font-medium transition-all ml-auto"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-time GitHub Automation Helper Card */}
        <div className="mt-12 p-6 rounded-3xl bg-[#172611] border border-[#526531]/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-[#30401C] text-[#DCE7BE] shrink-0 border border-[#526531]">
              <Sparkles className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#DCE7BE]">
                How Your GitHub Automation Engine Works
              </h4>
              <p className="text-xs sm:text-sm text-[#98A973] mt-1 leading-relaxed">
                Whenever you push a repository to GitHub, your portfolio automatically parses your repository name, tags, description, your <strong>Vercel live link</strong> in the repo settings, and any <strong>YouTube video</strong> embedded in your README. Zero manual code edits required.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/AimenSaeed?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-2xl bg-[#30401C] hover:bg-[#526531] text-[#DCE7BE] font-semibold text-xs border border-[#526531] transition-all flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Manage Repositories on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* YouTube Lightbox Modal */}
      {activeVideo && (
        <YouTubeModal
          videoId={activeVideo.id}
          videoTitle={activeVideo.title}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
}
