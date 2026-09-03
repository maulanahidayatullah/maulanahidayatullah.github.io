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
    role: 'Backend Developer',
    company: 'PT. Starlink Teknologi Integrasi',
    period: 'Dec 2023 - Present',
    type: 'work',
    badges: ['Node.js', 'Express', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'OCPP 1.6'],
    highlights: [
      'Took over full maintenance and ongoing development of GPS-based employee attendance system with multi-tier leave approval flow for supervisors.',
      'Implemented school attendance system integrated with TIMY facial recognition hardware and synchronized logging.',
      'Built catering ordering platform with integrated route distance calculation API for automated dispatch routing.',
      'Created backend APIs for POS system integrated with Xendit payment gateway.',
      'Built OCPP 1.6 server to control EV chargers, capture telemetry, and log operational metrics using MongoDB.',
      'Developed comprehensive backend management system for monitoring, controlling, and logging EV charger operations.',
      'Delivered custom enterprise EV charger management backend for PT Pamapersada Nusantara.',
      'Engineered visitor management system with facial recognition (Suprema), Avigilon access control barriers, and OCR ID card recognition.',
      'Supported backend development for PT PLN’s nationwide EV charging infrastructure using Java Spring Boot.',
    ],
  },
  {
    id: 'elisoft',
    role: 'Web Developer Intern',
    company: 'CV. Elisoft Technology',
    period: 'Jul 2022 - Dec 2022',
    type: 'work',
    badges: ['PHP', 'MySQL', 'Linux VPS', 'REST API'],
    highlights: [
      'Architected database schemas and ERDs for multiple production client applications.',
      'Assisted senior engineering team in developing dynamic web applications and custom modules.',
      'Conducted rigorous functional testing and QA across web portals.',
      'Configured and deployed web applications to production Linux VPS servers.',
    ],
  },
];

export const educationHistory: ExperienceItem[] = [
  {
    id: 'polindra',
    role: 'Applied Bachelor in Software Engineering',
    company: 'Politeknik Negeri Indramayu (POLINDRA)',
    period: '2019 - 2023',
    type: 'education',
    badges: ['GPA 3.45 / 4.00', 'KMIPN Finalist', 'FOLAFO Head'],
    highlights: [
      'Finalist in the National Polytechnic Student Competency Competition (KMIPN) in E-Government category.',
      'Head of Japanese Language Division at Foreign Language Forum (FOLAFO).',
      'Developed Web-based Cashier Information System at Garis Lengkung Cafe.',
      "Engineered Web and Mobile-based Children's Learning Outcomes Information System for TK Garuda & PAUD Soka Indah.",
      'Developed institutional Inventory Management System for POLINDRA campus.',
      'Built Psychiatric Assessment System for Puskesmas Kertasemaya Indramayu.',
    ],
  },
];
