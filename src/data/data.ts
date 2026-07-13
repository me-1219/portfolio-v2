import CV from "./mebtu.pdf";

export const personalInfo = {
  name: 'Mebit Melak',
  title: 'Full-Stack Software Engineer',
  location: 'Addis Ababa, Ethiopia',
  email: 'melakmebit75@gmail.com',
  phone: '+251 973921904 / +251 704943841',
  github: 'https://github.com/me-1219',
  linkedIn: 'https://www.linkedin.com/in/mebit-melak-gashaye-31b2b1379/',
  portfolio: 'https://cv.melaklegacy.com.et',
  cv: CV,
  bio: "Full Stack Software Engineer from Ethiopia with experience in web application development, backend systems, frontend technologies, databases, and Oracle cloud deployment. Committed to delivering efficient, scalable, and high-quality software solutions.",
  availableForWork: true,
};

export const skills = [
  { category: 'Frontend', items: ['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite'] },
  { category: 'Backend', items: ['Django (Python)', 'Node.js', 'Express', 'Laravel (PHP)', 'REST APIs'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { category: 'DevOps & Tools', items: ['Cloud Server/oracle cloud', 'Docker', 'CI/CD Pipelines', 'Linux Server Admin', 'Git', 'Plesk/Apache'] },
];

export const experiences = [
  {
    company: 'Center for Digital Health Implementation Science (CDHIS) ',
    role: 'Software Developer Intern',
    period: 'June 2024 – September 2024',
    description: "Collaborated on a comprehensive web-based Project Management System to streamline task assignment and team tracking,Built frontend components using React and TailwindCSS for a clean, responsive interface,Assisted in backend configuration with Django and API integration for user authentication and data handlingContributed to system testing, feature validation, and documentation of user requirements",
    tags: ['Django', 'Python', 'PostgreSQL', 'REST APIs', 'React', 'Tailwind CSS'],
  },
  {
    company: 'Freelance Projects',
    role: 'Full-Stack Developer',
    period: 'June 2024 – Present',
    description: 'Building e-commerce web applications with product management, shopping cart, user authentication, and order management features.Built responsive frontend interfaces using React, Tailwind CSS, and modern JavaScript.Developed backend systems using PHP/Laravel/, Django, Node.js, and REST APIs with database integration.Implemented secure user authentication, API integration, and deployment workflows.Managed source code and project development using Git and GitHub.',
    tags: ['PHP/Laravel', 'Django', 'MySQL', 'REST APIs', 'React', 'Tailwind CSS'],
  },
   {
    company: 'Self-Employed',
    role: 'Full-Stack Developer',
    period: 'October 2025 – Present',
    description: 'Building a research analytics platform focused on analyzing and improving the visibility of Ethiopian research activities. The system includes researcher, academic, and institutional profiles, along with analytics features for institution and researcher rankings, publication trends, research impact assessment, collaboration networks, citation analysis, and productivity tracking. It also manages journals, publications, and research histories while providing data-driven insights to support research performance evaluation and national research development.',
    tags: ['React', 'Django', 'PostgreSQL', 'Docker', 'Oracle Cloud Deployment', 'REST APIs','Data Visualization','OpenAlex API'],
  },
];

export const projects = [
  {
    title: 'MERN Auth System',
    description: 'Full authentication system with JWT, Google OAuth, OTP email verification, and password reset. Production-ready boilerplate.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'OAuth', 'Nodemailer', 'bcrypt', 'Passport.js'],
    github: 'https://github.com/me-1219/mern-auth-system',
    live: null,
  },
  {
    title:       "Phone LCD Store platform",
    description: "Full-featured e-commerce platform for selling phone LCDs and accessories with product management, cart, wishlist, and checkout.",
    tags: [ 'PHP', 'MySQL', 'Bootstrap', 'javascript', 'Apache', 'SEO'],
    github: 'https://github.com/me-1219/phone-accessories-stores',
    live: 'https://msglcd.com',
  },
  {
    title: 'Ethiopian Researcher Analytics Platform',
    description: 'Analytics platform aggregating research data across Ethiopian universities. Features dashboards, publication tracking, and researcher profiles.',
    tags: ['React', 'Django', 'PostgreSQL', 'Docker', 'Oracle Cloud Deployment', 'Data Visualization'],
    github: null,
    live: null,
  },
  {
  title: "E-Commerce Shoe Platform",
  description:
    "Designed and developed a modern, responsive e-commerce interface with intuitive navigation, product browsing, shopping cart functionality, and an optimized user experience across desktop and mobile devices.",
  tags: ["TypeScript", "TailwindCSS", "UI/UX Design", "Responsive Design"],
  live: "https://mulie-shoes.vercel.app/",
  github: "https://github.com/me-1219/shoe-ecommerce-platform",
},
  {
  title: "Task Management System",
  description:
    "Designed and developed a clean, responsive task management interface with intuitive user flows, task organization features, and a smooth productivity-focused user experience.",
  tags: ["TypeScript", "TailwindCSS", "UI/UX Design", "Frontend Development"],
  live: "https://task-management-seven-red.vercel.app/",
  github: "https://github.com/me-1219/Task-Management",
  
},
{
    title:       "BMI-Calculator",
    description: "Web app to calculate BMI and provide health insights based on user input.",
    tags:        ["React", "TailwindCSS", "Lucide React icons"],
    live:        "https://bmi-calculators-beta.vercel.app/",
    github:      "https://github.com/me-1219/bmi-calculators",
  },
  {
  title: "Product CRUD API",
  description:
    "A simple RESTful API built with Node.js, Express, and MongoDB that performs full CRUD operations for product management. It supports creating, reading, updating, and deleting products with a clean backend structure.",
  tags: ["Node.js", "Express.js", "MongoDB", "REST API"],
  live: "",
  github: "https://github.com/me-1219/express-mongodb-crud-API",
},
]

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  github?: string | null;
  live?: string | null;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'Building a MERN Authentication Platform from Scratch',
    title: 'Building a MERN Authentication Platform from Scratch',
    date: 'June 2026',
    readTime: '5 min read',
    excerpt: 'I built a complete MERN authentication platform from scratch — not just a login form, but the whole real-world flow: signup, email verification with OTP, login via email or username, Google OAuth, JWT-based protected routes, and a full forgot/reset password flow with bcrypt hashing.Stack: React + Vite + Tailwind on the frontend, Node/Express + MongoDB + Mongoose + Passport + Nodemailer on the backend.Biggest takeaway: auth is deceptively complex. Things like OTP expiry, resend logic, token refresh, and OAuth edge cases don`t show up until you actually build them.',
    github: null,
    live: null,
    tags: ['API', 'MERN', 'Authentication', 'Security','JWT', 'OAuth', 'Email Verification'],
  },
  {
  slug: 'building-a-researcher-portfolio-generator',
  title: 'Building a Researcher Portfolio Generator',
  date: 'May 2026',
  readTime: '8 min read',
  excerpt: `
I'm building a Researcher Portfolio Generator that automatically creates professional research profiles from simple inputs.

Users can enter:
• Researcher name
• ORCID ID

The system generates a detailed portfolio including:

📊 Publication history and research productivity metrics  
📈 Citation trends and research impact insights (h-index, i10-index)  
🤝 Collaboration networks and research connections  
🌍 Institutional and international partnerships  
🔬 Research area distribution and academic focus

The goal is to make researcher profiles and research analytics easier to access and understand while helping universities and institutions improve research visibility, collaboration, and performance.

I’m currently exploring how this platform can support research analytics and help researchers showcase their work more effectively.
`,
  tags: ['Research Analytics', 'Data Visualization', 'Higher Education', 'Researcher Portfolio', 'Academic Impact', 'Ethiopian researchers'],
},
  {
    slug: 'deploying-vite-on-plesk',
    title: 'Deploying a Vite + React App on Plesk/Apache',
    date: 'April 2025',
    readTime: '4 min read',
    excerpt: 'Vite builds are easy locally but Plesk has quirks. Here\'s the exact .htaccess config and routing fix that made my portfolio work.',
    github: null,
    live: null,
    tags: ['Vite', 'Apache', 'DevOps'],
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];
