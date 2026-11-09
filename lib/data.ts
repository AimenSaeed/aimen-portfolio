import { Project, ExperienceItem, EducationItem, CertificationItem, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Aimen Saeed",
  title: "Software Engineering Student & AI/ML Developer",
  tagline: "Building Generative AI systems, RAG assistants, and production machine learning pipelines with high aesthetic design.",
  bio: "Final-year Software Engineering student at Abasyn University (CGPA 3.85/4.00) with deep expertise in Python, RAG pipelines, Generative AI APIs, and predictive machine learning. Passionate about engineering impactful technological solutions for societal challenges.",
  location: "Peshawar, Pakistan",
  email: "aimensaeedwork@gmail.com",
  phone: "+92 304 5975639",
  resumePath: "/Aimen_Saeed_Resume.pdf",
  socials: {
    github: "https://github.com/AimenSaeed",
    linkedin: "https://linkedin.com/in/aimen-saeed",
    instagram: "https://instagram.com/aiwithaimen",
  },
  stats: [
    { label: "Academic CGPA", value: "3.85 / 4.00" },
    { label: "ML & AI Repos", value: "10+" },
    { label: "Tutoring Experience", value: "8.5+ Years" },
    { label: "Students Mentored", value: "20+ Students" },
  ]
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "deepcite",
    name: "DeepCite",
    title: "DeepCite — AI Academic Research Assistant (RAG)",
    description: "AI-powered academic research assistant that answers questions directly from uploaded research papers with pinpoint citations, powered by Google Gemini API, LangChain, and Vector Stores.",
    category: "ai-rag",
    html_url: "https://github.com/AimenSaeed/DeepCite",
    homepage: null,
    youtubeUrl: "https://youtu.be/8-tA-PktphE",
    youtubeId: "8-tA-PktphE",
    topics: ["RAG", "Gemini-API", "LangChain", "VectorStore", "Python", "Streamlit"],
    language: "Python",
    stars: 3,
    forks: 0,
    isFeatured: true,
    highlights: [
      "Zero-hallucination semantic search across academic PDFs",
      "Dynamic prompt engineering & contextual citation grounding",
      "Interactive Streamlit interface with instant vector retrieval"
    ]
  },
  {
    id: "nextstepai",
    name: "NextStepAI",
    title: "NextStep AI — Scholarship Discovery Platform",
    description: "Intelligent scholarship discovery platform tailored for Pakistani and global students. Matches academic credentials with verified funding opportunities and criteria.",
    category: "fullstack",
    html_url: "https://github.com/AimenSaeed/NextStepAI",
    homepage: "https://next-step-ai-beryl.vercel.app",
    youtubeUrl: null,
    topics: ["Next.js", "Python", "Scholarships", "FastAPI", "Vercel"],
    language: "TypeScript",
    stars: 2,
    forks: 1,
    isFeatured: true,
    highlights: [
      "Deployed live on Vercel with automated student matching",
      "Capstone project built in the AuratTech Fellowship",
      "Comprehensive scholarship eligibility engine"
    ]
  },
  {
    id: "haqcharkha",
    name: "HaqCharkha",
    title: "Haq Charkha — Fair-Wage Platform for Artisans",
    description: "Digital empowerment platform for home-based craftswomen across Khyber Pakhtunkhwa, providing transparent fair-wage algorithms, material cost calculations, and social impact metrics.",
    category: "fullstack",
    html_url: "https://github.com/AimenSaeed/HaqCharkha",
    homepage: "https://haq-charkha-six.vercel.app",
    youtubeUrl: null,
    topics: ["TypeScript", "Next.js", "TailwindCSS", "Fair-Wage", "Vercel"],
    language: "TypeScript",
    stars: 2,
    forks: 0,
    isFeatured: true,
    highlights: [
      "Built for Imaginative Solutions & provincial artisans",
      "Live production deployment on Vercel",
      "Transparent wage breakdown algorithm"
    ]
  },
  {
    id: "khidmat-ai",
    name: "KhidmatAI",
    title: "Khidmat AI — Civic & Community Assistance Engine",
    description: "An AI-driven community service platform designed to provide automated civic guidance, citizen service queries, and multilingual public welfare information.",
    category: "ai-rag",
    html_url: "https://github.com/AimenSaeed/KhidmatAI",
    homepage: null,
    youtubeUrl: null,
    topics: ["Generative-AI", "Civic-Tech", "NLP", "Python"],
    language: "Python",
    stars: 1,
    forks: 0,
    isFeatured: true,
    highlights: [
      "Public interest AI assistant architecture",
      "Seamless GitHub auto-sync connection",
      "Multilingual community query handling"
    ]
  },
  {
    id: "defect-detection",
    name: "DefectDetection",
    title: "Task 2: Industrial Defect Detection Pipeline",
    description: "Production PyTorch deep learning pipeline to classify industrial manufacturing components as defective or non-defective with real-world casting product image datasets.",
    category: "ml-data",
    html_url: "https://github.com/AimenSaeed/DefectDetection",
    homepage: null,
    youtubeUrl: null,
    topics: ["Computer-Vision", "PyTorch", "Deep-Learning", "CNN"],
    language: "Jupyter Notebook",
    stars: 1,
    forks: 0,
    metric: "98.4% Accuracy",
    highlights: [
      "End-to-end PyTorch training & validation pipeline",
      "Optimized for industrial casting quality control",
      "Macro F1 evaluation and confusion matrix diagnostics"
    ]
  },
  {
    id: "customer-churn",
    name: "CustomerChurnPrediction",
    title: "Task 3: Customer Churn Prediction System",
    description: "Machine learning pipeline predicting subscriber churn for subscription services using Logistic Regression, Random Forest, and XGBoost with feature importance mapping.",
    category: "ml-data",
    html_url: "https://github.com/AimenSaeed/CustomerChurnPrediction",
    homepage: null,
    youtubeUrl: null,
    topics: ["Machine-Learning", "Scikit-Learn", "XGBoost", "Python"],
    language: "Python",
    stars: 1,
    forks: 0,
    metric: "92% ROC-AUC",
    highlights: [
      "Full EDA, SMOTE class balancing, and feature selection",
      "Production evaluation against churn recall metrics",
      "Actionable retention driver insights"
    ]
  },
  {
    id: "movie-rec",
    name: "MovieRecommendationSystem",
    title: "Task 4: Movie Recommendation Engine",
    description: "Personalized recommendation system using collaborative filtering and matrix factorization to deliver tailored film recommendations benchmarked against popularity baselines.",
    category: "ml-data",
    html_url: "https://github.com/AimenSaeed/MovieRecommendationSystem",
    homepage: null,
    youtubeUrl: null,
    topics: ["Recommendation-System", "Collaborative-Filtering", "Python"],
    language: "Python",
    stars: 1,
    forks: 0,
    metric: "Precision@K Benchmark",
    highlights: [
      "User-item rating matrix factorization",
      "Cold-start handling with popularity fallback",
      "Built for SkilledScore AI/ML Internship"
    ]
  },
  {
    id: "sales-forecast",
    name: "SalesForcastingAnalysis",
    title: "Task 5: Sales Forecasting Time Series",
    description: "Comprehensive time series forecasting project evaluating Holt-Winters exponential smoothing, ARIMA, and ML regressors to forecast future daily sales.",
    category: "ml-data",
    html_url: "https://github.com/AimenSaeed/SalesForcastingAnalysis",
    homepage: null,
    youtubeUrl: null,
    topics: ["Time-Series", "Holt-Winters", "ARIMA", "Forecasting"],
    language: "Python",
    stars: 1,
    forks: 0,
    metric: "7.59 MAE / 9.2% MAPE",
    highlights: [
      "Trend and seasonality decomposition analysis",
      "Comparative benchmark across statistical and ML models",
      "Rigorous MAPE and RMSE metric validation"
    ]
  },
  {
    id: "sentiment-analysis",
    name: "Sentiment-analysis",
    title: "Task 1: Sentiment Classification Pipeline",
    description: "Natural Language Processing system to analyze and classify text review sentiment using tokenization, TF-IDF vectorization, and supervised classification.",
    category: "ml-data",
    html_url: "https://github.com/AimenSaeed/Sentiment-analysis",
    homepage: null,
    youtubeUrl: null,
    topics: ["NLP", "Sentiment-Analysis", "Scikit-Learn", "Python"],
    language: "Jupyter Notebook",
    stars: 1,
    forks: 0,
    metric: "High F1 Sentiment Score",
    highlights: [
      "Text preprocessing, stop-word removal, and lemmatization",
      "Multi-class sentiment probability output",
      "SkilledScore AI/ML Internship Capstone"
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2017 — Present",
    role: "Independent Academic Educator & Tutor",
    organization: "Self-Employed (Online & In-Person)",
    location: "Peshawar, Pakistan",
    type: "Education & Mentorship",
    description: [
      "Delivered personalized academic coaching to 20+ students across computer science, mathematics, and science over 8.5+ years.",
      "Engineered structured lesson blueprints, hands-on coding exercises, and diagnostic assessments that consistently boosted student grades and problem-solving velocity.",
      "Cultivated a 100% referral-based pipeline through exceptional communication, patience, and student outcome delivery."
    ],
    skills: ["Instructional Design", "Mentorship", "Communication", "Time Management", "Problem Solving"]
  },
  {
    period: "2024 — 2025",
    role: "Freelance Social Media Manager & Visual Strategist",
    organization: "Freelance / Remote",
    type: "Digital Strategy & Branding",
    description: [
      "Designed and edited high-engagement social media graphics, carousels, and educational tech content for brand pages.",
      "Implemented search and media optimization (SMO) strategies that expanded follower reach, audience retention, and community engagement.",
      "Created consistent visual identities adhering to brand guidelines across multi-channel distribution."
    ],
    skills: ["Content Creation", "Graphic Design", "Social Media Strategy", "Branding"]
  },
  {
    period: "2024",
    role: "Microsoft Learn Student Ambassador (MLSA)",
    organization: "Microsoft",
    type: "Community Leadership",
    description: [
      "Selected to represent Microsoft's global student developer community, advocating for cloud learning and software best practices.",
      "Organized student-focused technical workshops, introduced peers to GitHub and Python tools, and fostered collaborative student tech groups."
    ],
    skills: ["Leadership", "Community Building", "Public Speaking", "Developer Advocacy"]
  }
];

export const EDUCATION: EducationItem = {
  degree: "Bachelor of Science in Software Engineering (BS SE)",
  institution: "Abasyn University",
  location: "Peshawar, Pakistan",
  period: "2023 — 2027 (Expected)",
  cgpa: "3.85 / 4.00",
  details: "Final Year Project: Cross-platform Flutter academic student assistant. Active student researcher in Machine Learning, Generative AI, and RAG architectures.",
  coursework: [
    "Machine Learning & Data Mining",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Software Project Management",
    "Software Architecture & Design"
  ]
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Generative AI Certification (In Progress)",
    issuer: "Arfa Karim Technology Incubator (AKTI)",
    date: "2025",
    skills: ["Generative AI", "Prompt Engineering", "LLM APIs", "RAG"]
  },
  {
    title: "Foundations of Python",
    issuer: "Microsoft",
    date: "Mar 2024",
    skills: ["Python", "OOP", "Algorithm Design"]
  },
  {
    title: "Introduction to Git and GitHub",
    issuer: "Microsoft",
    date: "Jan 2024",
    skills: ["Version Control", "Git Workflows", "CI/CD Basics"]
  },
  {
    title: "Data Science Mathematics",
    issuer: "Great Learning",
    date: "Dec 2024",
    skills: ["Linear Algebra", "Calculus for ML", "Probability & Statistics"]
  },
  {
    title: "Social Media Management",
    issuer: "Khud Mukhtaar",
    date: "Oct 2024",
    skills: ["Digital Marketing", "SMO", "Audience Engagement"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Generative AI & LLMs",
    skills: [
      { name: "LangChain", level: "Advanced" },
      { name: "RAG Systems", level: "Advanced" },
      { name: "Google Gemini API", level: "Advanced" },
      { name: "OpenAI API", level: "Proficient" },
      { name: "Prompt Engineering", level: "Advanced" },
      { name: "Vector Databases", level: "Proficient" },
      { name: "Streamlit", level: "Advanced" }
    ]
  },
  {
    title: "Machine Learning & Data Science",
    skills: [
      { name: "Python", level: "Proficient" },
      { name: "Scikit-Learn", level: "Proficient" },
      { name: "PyTorch", level: "Intermediate" },
      { name: "Pandas & NumPy", level: "Advanced" },
      { name: "Matplotlib & Seaborn", level: "Advanced" },
      { name: "Time Series (Holt-Winters/ARIMA)", level: "Proficient" },
      { name: "Supervised Learning", level: "Advanced" }
    ]
  },
  {
    title: "Frontend & Full-Stack",
    skills: [
      { name: "Next.js 14/15", level: "Proficient" },
      { name: "React", level: "Proficient" },
      { name: "TypeScript", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Flutter & Dart", level: "Intermediate" },
      { name: "REST APIs", level: "Proficient" }
    ]
  },
  {
    title: "Tools, Platforms & Soft Skills",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Vercel Deployment", level: "Proficient" },
      { name: "Google Colab & Jupyter", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Academic Mentoring", level: "Expert (8.5+ yrs)" },
      { name: "Problem Solving", level: "Advanced" }
    ]
  }
];
