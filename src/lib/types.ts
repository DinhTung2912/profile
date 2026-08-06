export interface Profile {
  name: string;
  title: string;
  /** Years of professional experience, as stated on the CV. */
  yearsOfExperience: string;
  /** Current employer. */
  currentCompany: string;
  bio: string;
  avatar: string;
  email: string;
  phone: string;
  location: string;
  /** Optional channels render only once they hold a URL. */
  social: {
    github: string;
    linkedin?: string;
    facebook?: string;
  };
  skillGroups: SkillGroup[];
  softSkills: string[];
  certifications: { year: string; name: string }[];
  goals: string[];
  /** One-line summary of life outside work, used in the hero. */
  personalIntro: string;
  interests: { title: string; body: string }[];
  /** Work taken on outside the main Odoo role. */
  sideWork: string;
  /** A personal project in progress. `status` must make clear it isn't finished. */
  currentProject?: {
    status: string;
    kind: string;
    title: string;
    summary: string;
    body: string;
    /** Draft cover artwork. */
    cover: string;
  };
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Journey {
  slug: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  content: string; // HTML content
  lesson: string;
  category?: string;
  featured: boolean;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string; // HTML content
  readingTime: number; // minutes
}

export interface Video {
  id: string;
  title: string;
  date: string;
  youtubeId: string;
  thumbnail: string;
  description: string;
  duration: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TimelineItem {
  /** Human-readable range shown in the UI, e.g. "07/2024 - 04/2026". */
  year: string;
  /** Sortable start date (YYYY-MM); `year` is free text and cannot be parsed. */
  startedAt: string;
  title: string;
  /** Employer or school. */
  org?: string;
  description: string;
  /** Responsibilities, as listed on the CV. */
  highlights?: string[];
  type: 'education' | 'work' | 'certification';
}
