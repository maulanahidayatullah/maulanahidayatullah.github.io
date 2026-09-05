export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export const technicalSkills: SkillGroup[] = [
  {
    category: 'Backend Development',
    description: 'Scalable microservices, RESTful APIs, and event-driven backends',
    skills: [
      { name: 'Node.js (Express.js)' },
      { name: 'PHP (Laravel & CodeIgniter)' },
      { name: '.NET (C#)' },
      { name: 'Java (Spring Boot)' },
      { name: 'RESTful API Design' },
    ],
  },
  {
    category: 'Frontend Development',
    description: 'Pixel-perfect, reactive, and intuitive user interfaces',
    skills: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'Vue.js' },
      { name: 'TypeScript / JavaScript' },
      { name: 'HTML5 & CSS3 / SCSS' },
    ],
  },
  {
    category: 'Database & Architecture',
    description: 'Relational & document databases, data integrity, and indexing',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'ERD & Database Modeling' },
      { name: 'Query Optimization & Migration' },
    ],
  },
  {
    category: 'API & Hardware Integration',
    description: 'Third-party protocols, hardware biometrics, and payment rails',
    skills: [
      { name: 'EV Charger OCPP 1.6 Protocol' },
      { name: 'Biometrics (TIMY & Suprema Devices)' },
      { name: 'Access Control (Avigilon ACM)' },
      { name: 'OCR Snapshell ID Readers' },
      { name: 'Xendit Payment Gateway' },
      { name: 'WhatsApp Business API' },
      { name: 'Firebase Cloud Messaging' },
      { name: 'OpenRoute Service GIS API' },
    ],
  },
  {
    category: 'DevOps & Server Management',
    description: 'Production server operations, deployment, and networking',
    skills: [
      { name: 'Linux (Ubuntu) Server Admin' },
      { name: 'NGINX Reverse Proxy & SSL' },
      { name: 'Docker & Containerization' },
      { name: 'PostgreSQL Installation & Backup' },
      { name: 'SSH, SFTP & CI/CD Pipelines' },
      { name: 'Computer Networking & Troubleshooting' },
    ],
  },
];

export const softSkills: string[] = [
  'Analytical Problem Solving',
  'Effective Communication',
  'Cross-Functional Team Collaboration',
  'Agile Adaptability & Rapid Learning',
  'System Architecture Thinking',
  'Engineering Ownership & Reliability',
];
