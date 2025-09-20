export enum SocialPlatform {
  YOUTUBE = 'youtube',
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
  TIKTOK = 'tikTok',
  INSTAGRAM = 'instagram',
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  github: string;
}

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface ProfileInfo {
  firstName: string;
  lastName: string;
  role: string; // e.g. "Fullstack Developer"
  avatar: string;
  description: string;
  experienceNum: string;
  skills: Skill[];
  projects: Project[];
  contact?: ContactInfo;
  socialLinks?: SocialLink[];
}
