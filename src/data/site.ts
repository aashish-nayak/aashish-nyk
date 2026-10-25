import { existsSync } from 'node:fs';
export const site = {
  name: 'Aashish Nayak',
  email: 'ashunayakme@gmail.com',
  phone: '+91-7062182162',
  location: 'Jaipur, Rajasthan, India',
  github: 'https://github.com/aashish-nayak',
  linkedin: 'https://www.linkedin.com/in/aashish-nayak',
  status: 'Building web products. Exploring AI engineering.',
  resume: existsSync('public/resume.pdf') ? '/resume.pdf' : undefined,
  description: 'Software engineer with 5+ years of experience in Laravel, backend systems, API integrations, and full-stack products. Based in Jaipur, India.',
};
export const navigation = [
  ['Home', '/'], ['Projects', '/projects/'], ['About', '/about/'],
  ['Experience', '/experience/'], ['Writing', '/writing/'], ['Contact', '/contact/'],
];
