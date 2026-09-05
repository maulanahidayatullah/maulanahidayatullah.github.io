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
    badges: ['Node.js', 'Express', '.NET', 'Spring Boot', 'Next.js', 'Vue.js', 'PostgreSQL', 'MongoDB', 'OCPP 1.6', 'MQTT', 'Redis', 'Docker'],
    highlights: [
      'Lunavis Access Control: Developed a centralized building security system utilizing a custom-built HID Aero and Vento SDK engineered in .NET and MQTT.',
      'Attendance Platforms (Lunavis- Absensi & Masukaja): Managed Full- Stack development for Lunavis and Backend REST API architecture for Masukaja (supporting Mobile & Vue.js web). Integrated custom HID Amico SDK and Timy, featuring date-range holiday logic and automated daily logging.',
      'EV Charging (OCPP 1.6): Built the core backend and OCPP servers (Node.js, Spring Boot, MongoDB) for real-time monitoring, logging, and control logic of EV chargers.',
      'Lunavis VMS & Card Management: Created enterprise visitor and access systems integrating OCR, ACM Avigilon, and facial recognition (HID Amico, Suprema) for secure card-based entry.',
      'LimaRempah (Catering Platform): Developed a catering ordering backend featuring an automated route distance calculation API for efficient logistics.',
      'NagoPOS (Point of Sale): Engineered a POS backend with seamless Xendit Payment Gateway integration for secure transaction processing.',
      'Infrastructure & Deployment: Configured Ubuntu/ Debian cloud servers and VMs from scratch via SSH. Managed tailored deployments utilizing Docker (Next.js), Nginx (Vue.js builds), and PM2 (Node.js), complete with full HTTP/HTTPS (SSL) setup and GitLab versioning.'
    ],
  },
  {
    id: 'elisoft',
    role: 'Web Developer Intern',
    company: 'CV. Elisoft Technology',
    period: 'Jul 2022 - Dec 2022',
    type: 'work',
    badges: ['PHP', 'Laravel', 'MySQL', 'Linux VPS', 'REST API'],
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
