'use client';

import { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { YoutubeIcon } from './SocialIcons';

interface YouTubeModalProps {
  videoId: string | null;
  videoTitle?: string;
  onClose: () => void;
}

export default function YouTubeModal({ videoId, videoTitle, onClose }: YouTubeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!videoId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#121F0D]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#1c2c15] border border-[#526531] rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#30401C] bg-[#121F0D]/60">
          <div className="flex items-center gap-2 text-[#DCE7BE]">
            <YoutubeIcon className="w-5 h-5 text-red-500" />
            <h3 className="font-semibold text-sm sm:text-base truncate max-w-md">
              {videoTitle || 'Project Video Demo'}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#98A973] hover:text-[#DCE7BE] rounded-lg hover:bg-[#30401C]/50 transition-colors"
              title="Open directly on YouTube"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-[#98A973] hover:text-white rounded-lg hover:bg-[#30401C]/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 16:9 Responsive Video Player */}
        <div className="relative w-full pb-[56.25%] bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={videoTitle || 'YouTube video demo'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#172611] border-t border-[#30401C] flex items-center justify-between text-xs text-[#98A973]">
          <span className="font-mono">Auto-extracted from repository README</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#30401C] hover:bg-[#526531] text-[#DCE7BE] font-medium transition-colors"
          >
            Close Video
          </button>
        </div>
      </div>
    </div>
  );
}
