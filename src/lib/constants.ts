import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Briefcase,
  Sprout,
  Users,
  Rocket,
  Leaf,
  HandHeart,
  User,
  Shield,
  TrendingUp,
  Award,
  Route,
  BookOpen,
  Stethoscope,
  Factory,
  Wheat,
} from 'lucide-react'

export const SITE = {
  name: 'VENIGANDLA RAMU',
  title: 'MLA – GUDIVADA CONSTITUENCY',
  taglineTelugu1: 'ప్రజలే భాగవంతుడు.',
  taglineTelugu2: 'అభివృద్ధే లక్ష్యం.',
  copyright: '© 2025 Venigandla Ramu. All Rights Reserved.',
}

export const NAV_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT MLA', href: '#about' },
  { label: 'CONSTITUENCY', href: '#constituency' },
  { label: 'DEVELOPMENT', href: '#development' },
  { label: 'NEWS & MEDIA', href: '#news' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'CONTACT', href: '#contact' },
] as const

export const HERO = {
  honorific: 'Shri',
  name: 'VENIGANDLA RAMU',
  badge: 'Member of Legislative Assembly (MLA)',
  constituency: 'GUDIVADA CONSTITUENCY',
  state: 'Andhra Pradesh',
  bio1:
    'Venigandla Ramu is an Indian politician and a Member of Legislative Assembly (MLA) representing Gudivada Assembly Constituency in the Andhra Pradesh Legislative Assembly.',
  bio2:
    'He is also an entrepreneur and belongs to the Telugu Desam Party.',
}

export const FEATURES: { icon: LucideIcon; line1: string; line2: string }[] = [
  { icon: User, line1: 'People First', line2: 'Always' },
  { icon: Shield, line1: 'Transparent', line2: 'Governance' },
  { icon: Building2, line1: 'Development for', line2: 'Every Citizen' },
  { icon: TrendingUp, line1: 'Progress with', line2: 'Integrity' },
  { icon: Award, line1: 'Committed to', line2: 'Gudivada' },
]

export const ABOUT = {
  title: 'ABOUT VENIGANDLA RAMU',
  paragraphs: [
    'Venigandla Ramu is a dedicated public servant, entrepreneur, and a leader committed to the growth and welfare of the people.',
    'As the MLA of Gudivada Constituency, he works tirelessly towards infrastructure development, quality education, healthcare, employment generation, and overall upliftment of the society.',
    'He believes in inclusive development and people-centric governance to build a stronger and prosperous Gudivada.',
  ],
}

export const FOCUS_AREAS: { icon: LucideIcon; line1: string; line2: string }[] = [
  { icon: Building2, line1: 'Infrastructure', line2: 'Development' },
  { icon: GraduationCap, line1: 'Quality', line2: 'Education' },
  { icon: HeartPulse, line1: 'Healthcare', line2: 'For All' },
  { icon: Briefcase, line1: 'Employment', line2: 'Opportunities' },
  { icon: Sprout, line1: 'Agriculture', line2: 'Support' },
  { icon: Users, line1: 'Women', line2: 'Empowerment' },
  { icon: Rocket, line1: 'Youth', line2: 'Development' },
  { icon: Leaf, line1: 'Clean & Green', line2: 'Environment' },
  { icon: HandHeart, line1: 'Social Welfare', line2: 'Programs' },
]

export const DEVELOPMENT_WORKS = [
  {
    image: '/assets/dev-roads.jpg',
    icon: Route,
    title: 'Roads & Infrastructure',
    description: 'Improving road connectivity and building modern infrastructure.',
  },
  {
    image: '/assets/dev-education.jpg',
    icon: BookOpen,
    title: 'Education',
    description:
      'Strengthening schools and promoting quality education for a better future.',
  },
  {
    image: '/assets/dev-healthcare.jpg',
    icon: Stethoscope,
    title: 'Healthcare',
    description:
      'Enhancing healthcare facilities and ensuring accessible medical services.',
  },
  {
    image: '/assets/dev-employment.jpg',
    icon: Factory,
    title: 'Employment',
    description:
      'Encouraging industries and creating more job opportunities for the youth.',
  },
  {
    image: '/assets/dev-agriculture.jpg',
    icon: Wheat,
    title: 'Agriculture',
    description: 'Supporting farmers and promoting sustainable agriculture.',
  },
]

export const NEWS_ITEMS = [
  {
    image: '/assets/news-1.jpg',
    date: '10 May 2025',
    title: 'Development works review meeting held in Gudivada',
  },
  {
    image: '/assets/news-2.jpg',
    date: '05 May 2025',
    title: 'New road development project launched in Gudivada',
  },
  {
    image: '/assets/news-3.jpg',
    date: '01 May 2025',
    title: 'Meeting with students and discussion on education',
  },
]

export const CONTACT = {
  title: 'CONNECT WITH US',
  address: 'Gudivada Constituency Office, Krishna District, Andhra Pradesh',
  phone: '08674 123456',
  email: 'info@venigandlaramu.in',
  website: 'www.venigandlaramu.in',
}

export const FOOTER_LINKS = [
  ['Home', 'About MLA', 'Constituency'],
  ['Development', 'News & Media', 'Gallery'],
  ['Contact'],
]
