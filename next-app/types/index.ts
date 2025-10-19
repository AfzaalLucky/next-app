export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  social?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  image: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    image: string;
  };
  date: string;
  category: string;
  slug: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  images?: string[];
  client?: string;
  date?: string;
  slug: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
  submenu?: NavLink[];
}
