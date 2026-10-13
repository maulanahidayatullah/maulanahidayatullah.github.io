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
    category: 'Backend & Distributed Systems',
    description: 'High-throughput microservices, message streaming, and distributed APIs',
    skills: [
      { name: 'Node.js (Express.js)' },
      { name: 'Golang (Fiber)' },
      { name: '.NET (C#)' },
      { name: 'Java (Spring Boot)' },
      { name: 'PHP (Laravel)' },
      { name: 'Apache Kafka & MQTT' },
      { name: 'WebSockets & REST APIs' },
      { name: 'Redis Caching' },
    ],
  },
  {
    category: 'Frontend & Reactive UI',
    description: 'Responsive, accessible, and high-performance component architectures',
    skills: [
      { name: 'Next.js' },
      { name: 'Vue.js' },
      { name: 'React.js' },
      { name: 'TypeScript / JavaScript' },
      { name: 'Tailwind CSS & shadcn/ui' },
      { name: 'Framer Motion & GSAP' },
      { name: 'HTML5 & CSS3 / SCSS' },
    ],
  },
  {
    category: 'Database & Data Modeling',
    description: 'Relational & document data stores, ORMs, and query optimization',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'MySQL & SQLite' },
      { name: 'Prisma, Sequelize & GORM' },
      { name: 'ERD Modeling & Normalization' },
      { name: 'Indexing & Query Optimization' },
    ],
  },
  {
    category: 'Hardware & Telematics Integration',
    description: 'Physical access controllers, RFID decoding, and IoT protocols',
    skills: [
      { name: 'Custom SDKs (.NET Aero, Vento, Amico)' },
      { name: 'EV Charger OCPP 1.6 Protocol' },
      { name: 'RFID Decoding (26/37/48-bit)' },
      { name: 'Avigilon ACM & Suprema Biometrics' },
      { name: 'WebSocket-based OCR ID Scanning' },
      { name: 'Computer Networking (MikroTik MTCNA)' },
      { name: 'Xendit Payment Gateway' },
    ],
  },
  {
    category: 'Hybrid Infrastructure & DevOps',
    description: 'Virtualization, containerization, orchestration, and CI/CD pipelines',
    skills: [
      { name: 'Linux (Ubuntu & Debian Server)' },
      { name: 'Docker & Containerization' },
      { name: 'VMware ESXi & Go Orchestration Agent' },
      { name: 'NGINX Reverse Proxy & SSL/TLS' },
      { name: 'PM2 Process Management' },
      { name: 'GitLab CI/CD & GitHub Actions' },
    ],
  },
];

export const softSkills: string[] = [
  'Analytical Problem Solving',
  'Hardware-to-Software Reverse Engineering',
  'Cross-Functional Team Collaboration',
  'Agile Adaptability & Rapid Learning',
  'System Architecture & Resilience',
  'Technical Ownership & Reliability',
];
