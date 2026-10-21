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
    title: 'BACKEND & API ENGINEERING',
    badge: 'PRODUCTION SCALE',
    items: ['Python', 'FastAPI', 'REST APIs', 'SQLAlchemy', 'Pydantic'],
    description:
      'Enterprise Accounts Payable backend: modular REST APIs, PostgreSQL, RBAC, audit-oriented logging, and production fixes across database, background jobs, and integrations.',
    stat: '85.4% AUTO-POST',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'AI & DOCUMENT PROCESSING',
    badge: 'STRUCTURED EXTRACTION',
    items: ['Google Gemini API', 'Prompt Engineering', 'Pandas', 'Fuzzy Matching', 'Data Normalization'],
    description:
      'AI-driven ingestion from invoices, POs, and GRNs with configurable field schemas—Gemini extraction combined with deterministic business rules for auditable processing.',
    stat: '2.8 MIN AVG',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'ENTERPRISE INTEGRATION',
    badge: 'ERP & COMPLIANCE',
    items: ['SAP BAPI', 'Microsoft Graph API', 'JWT', 'RBAC', 'Workflow Automation'],
    description:
      'SAP workflows for PO/GRN/posting and reversals; 2-way/3-way line matching, exception review, and GST/TDS/TCS validation with configurable tolerances.',
    stat: 'SAP BAPI',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'DATA & DELIVERY',
    badge: 'FULL STACK + OPS',
    items: ['PostgreSQL', 'Django', 'Docker', 'Kubernetes', 'CI/CD'],
    description:
      'Relational schemas and migrations; Django healthcare ordering and dashboards; containerized deployments and cloud-backed document storage.',
    stat: '3+ YRS BACKEND',
    colSpan: 'lg:col-span-7',
  },
];

export const journey: RouteStop[] = [
  {
    id: '01',
    year: 'OCT 2025 – PRESENT',
    title: 'FORWARD DEPLOYED ENGINEER',
    organization: 'SUPERVITY',
    description:
      'Built FastAPI/SQLAlchemy AP services, Gemini document ingestion, 2-way/3-way matching, SAP BAPI posting workflows, and GST/TDS/TCS validation—processing 9K+ invoices weekly at 85%+ auto-posting.',
  },
  {
    id: '02',
    year: 'JUN 2022 – AUG 2024',
    title: 'PYTHON / DJANGO DEVELOPER',
    organization: 'VIRTUSA CONSULTING SERVICES',
    description:
      'CarePoint Health prescription ordering: Django/PostgreSQL backends, warehouse dashboards, Django migrations, and Beautiful Soup pipelines for inventory metrics.',
  },
  {
    id: '03',
    year: '2018 – 2022',
    title: 'B.TECH ELECTRICAL & ELECTRONICS',
    organization: 'AMRITA VISWA VIDYAPEETHAM',
    description: 'Bachelor of Technology from Amrita Vishwa Vidyapeetham, Coimbatore.',
  },
];
