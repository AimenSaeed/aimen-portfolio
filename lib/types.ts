export interface Project {
  id: string;
  name: string;
  title: string;
  description: string;
  category: 'ai-rag' | 'fullstack' | 'ml-data' | 'other';
  html_url: string;
  homepage?: string | null;
  youtubeUrl?: string | null;
  youtubeId?: string | null;
  topics: string[];
  language?: string | null;
  stars: number;
  forks: number;
  isFeatured?: boolean;
  highlights?: string[];
  metric?: string;
  updatedAt?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location?: string;
  type: string;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  details: string;
  coursework: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; icon?: string }[];
}
