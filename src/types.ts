export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
}

export interface Skill {
  id: number;
  name: string;
  category: 'programming' | 'ai-ml' | 'web' | 'database' | 'other';
}

export interface Internship {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
}