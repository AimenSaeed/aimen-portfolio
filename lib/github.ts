import { Project } from './types';
import { INITIAL_PROJECTS } from './data';

const GITHUB_USERNAME = 'AimenSaeed';

// Extract YouTube ID from link
export function extractYouTubeId(url: string | null | undefined): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

// Infer category from name, topics, and description
function inferCategory(name: string, topics: string[] = [], description = ''): Project['category'] {
  const text = `${name} ${topics.join(' ')} ${description}`.toLowerCase();
  if (text.includes('rag') || text.includes('gemini') || text.includes('langchain') || text.includes('chatgpt') || text.includes('llm') || text.includes('genai')) {
    return 'ai-rag';
  }
  if (text.includes('learning') || text.includes('classification') || text.includes('prediction') || text.includes('forecast') || text.includes('nlp') || text.includes('churn') || text.includes('detection')) {
    return 'ml-data';
  }
  if (text.includes('web') || text.includes('vercel') || text.includes('next') || text.includes('react') || text.includes('charkha') || text.includes('flutter')) {
    return 'fullstack';
  }
  return 'other';
}

// Clean title from repo name
function formatTitle(name: string): string {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .trim();
}

export async function fetchAllProjects(): Promise<{ projects: Project[]; isLive: boolean; error?: string }> {
  try {
    const headers: Record<string, string> = {
      'User-Agent': 'Aimen-Portfolio-Fetcher/1.0',
      'Accept': 'application/vnd.github.v3+json',
    };

    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
      headers,
      next: { revalidate: 3600 }, // Cached for 1 hour with Next.js ISR
    });

    if (!res.ok) {
      console.warn(`GitHub API returned status ${res.status}. Using fallback project catalog.`);
      return { projects: INITIAL_PROJECTS, isLive: false, error: `GitHub API returned ${res.status}` };
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const repos: any[] = await res.json();
    if (!Array.isArray(repos)) {
      return { projects: INITIAL_PROJECTS, isLive: false };
    }

    // Map known initial projects by lowercase name for fast lookup
    const initialMap = new Map<string, Project>();
    for (const p of INITIAL_PROJECTS) {
      initialMap.set(p.name.toLowerCase(), p);
      initialMap.set(p.id.toLowerCase(), p);
    }

    const projects: Project[] = [];

    for (const repo of repos) {
      // Ignore user profile readme repo or forks unless relevant
      if (repo.name.toLowerCase() === GITHUB_USERNAME.toLowerCase() && !repo.description) {
        continue;
      }

      const lowerName = repo.name.toLowerCase();
      const existing = initialMap.get(lowerName);

      if (existing) {
        // Merge real-time GitHub stars, forks, homepage, and topics with our curated metadata
        const homepage = repo.homepage || existing.homepage;
        const ytId = extractYouTubeId(existing.youtubeUrl);
        projects.push({
          ...existing,
          stars: repo.stargazers_count ?? existing.stars,
          forks: repo.forks_count ?? existing.forks,
          homepage,
          html_url: repo.html_url || existing.html_url,
          topics: Array.from(new Set([...existing.topics, ...(repo.topics || [])])),
          youtubeId: ytId ?? existing.youtubeId,
          updatedAt: repo.updated_at,
        });
      } else {
        // Brand new repository automatically detected!
        const topics: string[] = repo.topics || [];
        const category = inferCategory(repo.name, topics, repo.description || '');
        const title = formatTitle(repo.name);
        
        projects.push({
          id: repo.name.toLowerCase(),
          name: repo.name,
          title,
          description: repo.description || `Autonomous project and source repository by ${GITHUB_USERNAME}.`,
          category,
          html_url: repo.html_url,
          homepage: repo.homepage || null,
          youtubeUrl: null,
          youtubeId: null,
          topics: topics.length > 0 ? topics : [repo.language || 'Code'].filter(Boolean),
          language: repo.language,
          stars: repo.stargazers_count || 0,
          forks: repo.forks_count || 0,
          isFeatured: false,
          updatedAt: repo.updated_at,
        });
      }
    }

    // Sort: Featured first, then by stars and recency
    projects.sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return (b.stars || 0) - (a.stars || 0);
    });

    return { projects, isLive: true };
  } catch (err) {
    console.error('Failed to fetch from GitHub API:', err);
    return { projects: INITIAL_PROJECTS, isLive: false, error: String(err) };
  }
}
