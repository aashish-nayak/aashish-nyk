import { existsSync } from 'node:fs';
export const site = {
  name: 'Aashish Nayak',
  url: 'https://aashish-nyk.vercel.app',
  jobTitle: 'Software Engineer | Backend Architecture & Full-Stack Products',
  email: 'ashunayakme@gmail.com',
  phone: '+91-6376566753',
  location: 'Jaipur, Rajasthan, India',
  github: 'https://github.com/aashish-nayak',
  linkedin: 'https://www.linkedin.com/in/aashish-nayak',
  status: 'open to roles · building web products · exploring AI engineering',
  availability: 'Available for full-time software engineering roles, contract consulting, and client MVP builds.',
  resume: existsSync('public/resume.pdf') ? '/resume.pdf' : undefined,
  description: 'Software engineer with 5+ years of experience in Laravel, backend systems, API integrations, and full-stack products. Based in Jaipur, India.',
};
export const navigation = [
  ['Home', '/'], ['Projects', '/projects'], ['About', '/about'],
  ['Experience', '/experience'], ['Writing', '/writing'], ['Contact', '/contact'],
];
