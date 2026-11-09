import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aimen Saeed — AI & Software Engineer | Portfolio',
  description: 'Portfolio of Aimen Saeed — Software Engineering Student (CGPA 3.85), AI/ML Engineer, and Educator. Specializing in RAG systems, Generative AI, and predictive machine learning models.',
  keywords: [
    'Aimen Saeed',
    'AI Engineer',
    'Software Engineer',
    'Generative AI',
    'RAG',
    'Machine Learning',
    'DeepCite',
    'NextStepAI',
    'HaqCharkha',
    'Abasyn University',
    'Portfolio'
  ],
  authors: [{ name: 'Aimen Saeed', url: 'https://github.com/AimenSaeed' }],
  openGraph: {
    title: 'Aimen Saeed — AI & Software Engineer',
    description: 'Autonomous Portfolio with live GitHub synchronization, RAG architectures, ML models, and Vercel deployments.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#121F0D] text-[#DCE7BE] antialiased selection:bg-[#526531] selection:text-[#DCE7BE]">
        {children}
      </body>
    </html>
  );
}
