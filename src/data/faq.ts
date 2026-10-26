export interface FAQItem {
  question: string;
  answer: string;
  category: 'services' | 'experience' | 'hiring' | 'ai';
}

export const faqs: FAQItem[] = [
  {
    category: 'services',
    question: 'What software engineering services does Aashish Nayak offer?',
    answer:
      'Aashish Nayak provides backend architecture (PHP/Laravel), full-stack web application engineering (Vue.js, React, TypeScript), third-party API integrations (BillDesk JWS payment workflows, insurance portals), and AI engineering (Gemini API, prompt workflows, automated content and document generation).',
  },
  {
    category: 'hiring',
    question: 'Is Aashish Nayak available for full-time roles, freelance, or contract consulting?',
    answer:
      'Yes. Aashish is open to full-time software engineering positions globally, selective contract consulting for startups, and founder MVP builds for client web products requiring dependable backends and swift delivery.',
  },
  {
    category: 'experience',
    question: 'What is Aashish Nayak’s experience in Laravel and backend engineering?',
    answer:
      'Aashish has 5+ years of production experience across Fondos Tech, AddWeb Solution, and Scrum Digital. His work encompasses high-throughput REST APIs, relational database schema design, SQL query performance optimization, real-time WebSockets, and secure payment and insurance aggregator workflows.',
  },
  {
    category: 'ai',
    question: 'What AI and LLM capabilities does Aashish Nayak build?',
    answer:
      'Aashish develops AI-integrated applications utilizing Google Gemini APIs, prompt engineering pipelines, streaming text responses, and WebAssembly in-browser execution (such as InterPrep with @php-wasm). He actively builds with RAG concepts, vector search, and agentic workflows.',
  },
  {
    category: 'services',
    question: 'How can clients and hiring managers contact Aashish Nayak?',
    answer:
      'You can contact Aashish directly via email at ashunayakme@gmail.com, connect on LinkedIn at linkedin.com/in/aashish-nayak, inspect his open-source work on GitHub at github.com/aashish-nayak, or call +91-6376566753.',
  },
  {
    category: 'experience',
    question: 'Where is Aashish Nayak based, and how does he handle remote collaboration?',
    answer:
      'Aashish is based in Jaipur, Rajasthan, India (IST / UTC+5:30). He has extensive experience collaborating with remote teams across time zones using asynchronous updates, clear Git pull requests, CI/CD pipelines, and structured sprint communication.',
  },
];
