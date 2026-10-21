export interface NavItem {
  name: string;
  href: string;
}

export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  badge: string;
  items: string[];
  description: string;
  stat: string;
  colSpan: string;
}

export interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}
