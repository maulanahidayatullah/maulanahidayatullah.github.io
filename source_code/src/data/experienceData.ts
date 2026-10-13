export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'work' | 'education';
  highlights: string[];
  badges?: string[];
}

export const workExperience: ExperienceItem[] = [
  {
    id: 'starlink',
    role: 'Software Development & Engineering',
    company: 'PT. Starlink Teknologi Integrasi - North Jakarta, Indonesia',
    period: 'Nov 2023 - Present',
    type: 'work',
    badges: ['Next.js', 'Vue.js', 'Node.js', 'Spring Boot', '.NET', 'Golang', 'PostgreSQL', 'MongoDB', 'OCPP 1.6', 'MQTT', 'Kafka', 'WebSockets', 'Docker', 'ESXi'],
    highlights: [
      'Access Control & Visitor Management (Lunavis): Engineered a full-stack (Next.js) visitor management system integrating custom HID hardware with Avigilon and Suprema controllers. Implemented WebSocket-based OCR for ID capture to automate access provisioning, replacing manual data entry at check-in.',
      'Custom Hardware SDKs: Wrote .NET SDKs for HID devices (Aero, Vento, Amico) by decoding their raw protocols, including 26/37/48-bit card formats, and integrated Vento over MQTT. Used Apache Kafka to sync facial recognition data across multiple edge devices with guaranteed delivery, even when devices go offline.',
      'Hardware-to-Software Integration: Mapped REST APIs from ACM/NVR systems and reverse-engineered hardware behaviors where documentation was missing, enabling seamless multi-vendor support in access-control applications.',
      'EV Charging Backend: Developed the core backend and OCPP 1.6 server (Node.js, Spring Boot, MongoDB) for real-time monitoring and control of EV chargers.',
      'Business Applications: Built backends for MasukAja (attendance API with automated daily logging and holiday calendar), LimaRempah (catering logistics with route calculation), and NagoPOS (retail POS with Xendit payments).',
      'Infrastructure & Deployment: Deployed services on Ubuntu/Debian with Docker, Nginx, and PM2. Built a Go agent and "Appliance Settings" UI to remotely manage on-premise ESXi VMs (network config, reboot/shutdown, automated Docker image updates), removing the need for on-site visits.',
    ],
  },
  {
    id: 'elisoft',
    role: 'Web Developer Intern',
    company: 'CV. Elisoft Technology - East Jakarta, Indonesia',
    period: 'Jul 2022 - Dec 2022',
    type: 'work',
    badges: ['PHP', 'Laravel', 'MySQL', 'Linux VPS', 'REST API', 'Database Normalization'],
    highlights: [
      'Full-Stack Development & QA: Developed frontend and backend features, integrated APIs, and conducted functional testing/debugging to ensure application stability.',
      'Database Design: Designed and optimized relational databases (ERD & normalization) to maintain data integrity and performance.',
      'Server Deployment: Configured server environments (web server, database) and deployed applications to production on Ubuntu VPS.',
    ],
  },
];

export const educationHistory: ExperienceItem[] = [
  {
    id: 'polindra',
    role: 'Applied Bachelor in Software Engineering',
    company: 'Politeknik Negeri Indramayu (POLINDRA) - Indramayu, West Java',
    period: 'Aug 2019 - Oct 2023',
    type: 'education',
    badges: ['GPA 3.45 / 4.00', 'KMIPN Finalist', 'Bidikmisi Awardee', 'FOLAFO Head', 'MTCNA Certified'],
    highlights: [
      'Awards: National Finalist at KMIPN (National Polytechnic Student Competency Competition) in E-Government category.',
      'Scholarship: Bidikmisi Merit Awardee for Academic Excellence (Maintained GPA ≥ 3.0 throughout 4 years).',
      'Certifications: MikroTik MTCNA, BNSP Network Administration, and Cisco IT Essentials.',
      'Organization: Head of Japanese Language Division at Foreign Language Forum (FOLAFO) — developed N5 learning materials, hosted workshops, and mentored members.',
      'Projects & Capstone: Developed institutional Inventory Management System for POLINDRA campus, psychiatric evaluation system for Puskesmas Kertasemaya, and POS cashier system for Garis Lengkung Cafe.',
    ],
  },
];
