import type { NavItem, Project, RouteStop, SkillCategory } from '../types/portfolio';

export const navItems: NavItem[] = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const projects: Project[] = [
  {
    number: '01',
    title: 'PolicyGuard AI',
    category: 'AI / LEGAL-TECH PLATFORM',
    description:
      'AI-powered platform engineered for automated privacy policy analysis and legal contract auditing across web, desktop, and mobile. Implements NLP extraction, real-time risk alert detection, and generative risk score intelligence.',
    githubUrl: 'https://github.com/lohithadamisetti123',
    tech: [
      'React.js',
      'React Native',
      'Electron.js',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'OpenAI API',
      'Prompt Eng',
      'NLP',
      'Docker',
      'JWT',
    ],
    metrics: [
      { label: 'PLATFORMS', value: 'Web, Mobile, Desktop' },
      { label: 'ENGINE', value: 'OpenAI NLP / GPT' },
      { label: 'PIPELINE', value: 'Automated Scoring' },
    ],
  },
  {
    number: '02',
    title: 'Software Release Risk Heatmap',
    category: 'MACHINE LEARNING / DEV PLATFORM',
    description:
      'Full-stack predictive release management platform utilizing Machine Learning. Implements a trained Random Forest classifier to categorize release stability from Low to Critical risk, rendered over a live interactive team heatmap.',
    githubUrl: 'https://github.com/lohithadamisetti123',
    tech: [
      'React.js',
      'TypeScript',
      'Python',
      'FastAPI',
      'scikit-learn',
      'PostgreSQL',
      'Tailwind CSS',
      'REST APIs',
      'JWT',
    ],
    metrics: [
      { label: 'MODEL', value: 'Random Forest' },
      { label: 'ACCURACY', value: 'High Precision' },
      { label: 'DASHBOARD', value: 'Live Risk Heatmap' },
    ],
  },
  {
    number: '03',
    title: 'Multi-Tenant SaaS Platform',
    category: 'CLOUD / DISTRIBUTED SYSTEM',
    description:
      'Enterprise-grade multi-tenant platform built for unified management of teams, projects, and execution lifecycles. Architected with strict tenant data isolation, granular Role-Based Access Control (RBAC), and containerized deployments.',
    githubUrl: 'https://github.com/lohithadamisetti123',
    tech: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'React',
      'Docker',
      'JWT',
      'RBAC',
      'REST APIs',
    ],
    metrics: [
      { label: 'ARCHITECTURE', value: 'Multi-Tenant' },
      { label: 'SECURITY', value: 'RBAC Isolation' },
      { label: 'CONTAINERS', value: 'Docker Compose' },
    ],
  },
  {
    number: '04',
    title: 'Payment Gateway with Hosted Checkout',
    category: 'FINTECH / PAYMENT SYSTEMS',
    description:
      'End-to-end hosted payment gateway infrastructure supporting seamless merchant order generation, multi-currency processing, and secure consumer checkout via UPI and Cards with webhook transaction verification.',
    githubUrl: 'https://github.com/lohithadamisetti123',
    tech: [
      'Node.js',
      'Spring Boot',
      'PostgreSQL',
      'React',
      'Docker',
      'REST APIs',
      'UPI / Card Integrations',
    ],
    metrics: [
      { label: 'PROTOCOLS', value: 'UPI & Cards' },
      { label: 'BACKEND', value: 'Spring Boot + Node' },
      { label: 'DATABASE', value: 'ACID PostgreSQL' },
    ],
  },
];

export const bentoCategories: SkillCategory[] = [
  {
    title: 'FRONTEND ARCHITECTURE',
    badge: 'CORE PILLAR',
    items: ['React.js', 'React Native', 'Tailwind CSS', 'Electron.js'],
    description: 'Specialized in building high-performance client applications, custom component libraries, and immersive desktop/mobile interfaces.',
    stat: '100% RESPONSIVE',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'DISTRIBUTED BACKEND',
    badge: 'HIGH CONCURRENCY',
    items: ['Node.js', 'Express.js', 'Spring Boot', 'Docker', 'Redis'],
    description: 'Engineered RESTful APIs, JWT role-based access control, caching layers, and multi-tenant SaaS backend isolation.',
    stat: '< 40ms LATENCY',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'DATA PLATFORMS',
    badge: 'PERSISTENCE',
    items: ['MongoDB Atlas', 'PostgreSQL', 'MySQL'],
    description: 'Designing resilient relational and document schemas with optimized indexing and transaction isolation.',
    stat: 'ACID & NOSQL',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'ALGORITHMS & MACHINE LEARNING',
    badge: 'INTELLIGENCE',
    items: ['C++', 'Python', 'Java', 'scikit-learn', 'OpenAI API'],
    description: '1200+ algorithm problems solved. Applied Random Forest classifiers for real-time risk heatmaps and NLP policy analyzers.',
    stat: '1200+ SOLVED',
    colSpan: 'lg:col-span-7',
  },
];

export const journey: RouteStop[] = [
  {
    id: '01',
    year: 'MAY - JUN 2026',
    title: 'FULL STACK & MOBILE INTERN',
    organization: 'TECHNICAL HUB PVT LTD',
    description: 'Engineered cross-platform mobile and responsive web applications utilizing React Native and modern full-stack workflows.',
  },
  {
    id: '02',
    year: '2026 MILESTONE',
    title: 'TOP 100 NATIONAL TEAM',
    organization: 'MYNTRA WEFORSHE HACKERRAMP',
    description: 'Ranked among the Top 100 nationwide teams while maintaining Department Topper status (9.07 CGPA) in Data Science.',
  },
  {
    id: '03',
    year: 'MAY - JUN 2025',
    title: 'FULL STACK TRAINEE',
    organization: 'TECHNICAL HUB PVT LTD',
    description: 'Trained in modern full-stack architecture, developing and deploying end-to-end interactive responsive web platforms.',
  },
  {
    id: '04',
    year: '2023 - 2027',
    title: 'B.TECH IN DATA SCIENCE',
    organization: 'ADITYA COLLEGE OF ENGINEERING',
    description: 'Specializing in Machine Learning and System Design. Solved 1200+ algorithm challenges across LeetCode, CodeChef, and GeeksforGeeks.',
  },
  {
    id: '05',
    year: '2021 - 2023',
    title: 'HIGHER SECONDARY (MPC)',
    organization: 'SRI CHAITANYA JUNIOR COLLEGE',
    description: 'Completed specialized coursework in Mathematics, Physics, and Chemistry with 90.60% aggregate excellence.',
  },
];
