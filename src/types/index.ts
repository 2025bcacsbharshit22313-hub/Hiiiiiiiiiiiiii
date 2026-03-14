export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  language?: string;
}

export interface Intent {
  id: string;
  patterns: string[];
  responses: {
    [key: string]: string;
  };
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon: string;
  color: string;
}

export interface FuturePlan {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ImpactItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  registrationNumber?: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}
