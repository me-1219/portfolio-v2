import CV from "./mebit_melak.pdf";

export const personalInfo = {
  name: 'Mebit Melak',
  title: 'Full-Stack Software Developer',
  location: 'Addis Ababa, Ethiopia',
  email: 'melakmebit75@gmail.com',
  phone: '+251 973921904 / +251 704943841',
  github: 'https://github.com/me-1219',
  linkedIn: 'https://www.linkedin.com/in/mebit-melak-gashaye-31b2b1379/',
  portfolio: 'https://cv.melaklegacy.com.et',
  cv: CV,
  bio: "Full Stack Software Developer from Ethiopia with experience in web application development, backend systems, frontend technologies, databases, and Oracle cloud deployment. Committed to delivering efficient, scalable, and high-quality software solutions.",
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
    company: 'Center for Digital Health Implementation Science (CDHIS)',
    role: 'Software Developer Intern',
    period: 'June 2024 – September 2024',
    description: 'Built responsive frontend components with React and Tailwind CSS for a project management system used to coordinate task assignment and team tracking workflows.Configured backend features in Django, including REST API endpoints, authentication, and data management logic, in collaboration with a small development team.Executed system testing and feature validation cycles, identifying and documenting bugs and user requirement gaps to support release readiness.Maintained version-controlled codebase using Git and GitHub, contributing to consistent development and review practices across the team.',
    tags: ['Django', 'Python', 'PostgreSQL', 'REST APIs', 'React', 'Tailwind CSS'],
  },
  {
    company: 'Freelance / Client Projects',
    role: 'Full-Stack Developer',
    period: 'June 2024 – Present',
    description: 'Delivered a full e-commerce platform for a Merkato-based phone accessories retailer, building product management, shopping cart, and order management features with PHP, Laravel, and MySQL.Built a production-ready MERN authentication boilerplate with JWT, Google OAuth, and OTP email verification to support secure user registration and account management.Worked directly with non-technical clients to gather requirements and iterate on UI/UX based on user testing feedback.Managed source code and project development using Git and GitHub.',
    tags: ['PHP/Laravel', 'Django', 'MySQL', 'REST APIs', 'React', 'Tailwind CSS'],
  },
  {
    company: 'Self-Employed',
    role: 'Full-Stack Developer',
    period: 'October 2025 – Present',
    description: 'Designed and built a PostgreSQL database and Django REST Framework backend to track researcher profiles, institution rankings, and publication history for the Ethiopian research community.Collected and cleaned publication data from the OpenAlex API using Python and Google Colab, structuring it into analytics-ready datasets covering publication trends and collaboration networks.Developed a React.js dashboard to visualize research performance indicators, including citation impact, researcher productivity, and institutional output.Deployed and maintained the full application stack with Docker, Gunicorn, and Nginx on an Oracle Cloud server, delivering a live, publicly accessible platform.',
    tags: ['React', 'Django', 'PostgreSQL', 'Docker', 'Oracle Cloud Deployment', 'REST APIs', 'Data Visualization', 'OpenAlex API'],
  },
  {
    company: 'Holy Trinity Ethiopian Orthodox Tewahedo Centre, Canberra, Australia',
    role: 'Volunteer Web Developer',
    period: '2024',
    description: 'Designed, built, and deployed a public website to share church services, events, and announcements with the local community.Supported the organization\'s formal registration as a community/non-government organization in Australia, contributing to its eligibility for a multicultural government grant.Managed hosting and deployment independently using cPanel, delivering a live production site still in active use.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'cPanel'],
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
    tags: [ 'PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'Apache', 'SEO'],
    github: 'https://github.com/me-1219/phone-accessories-stores',
    live: 'https://msglcd.com',
  },
  {
    title: 'Ethiopian Research Analytics Platform',
    description: 'Self-built analytics platform tracking researcher profiles, institution rankings, and publication trends for the Ethiopian research community, with data collected from the OpenAlex API.',
    tags: ['React', 'Django', 'PostgreSQL', 'Docker', 'Oracle Cloud Deployment', 'Data Visualization', 'OpenAlex API'],
    github: null,
    live: 'http://81.208.170.152',
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
  {
  title: "Holy Trinity Ethiopian Orthodox Tewahedo Centre",
  description:
    "Volunteer community website built for a church in Canberra, Australia, to share services, events, and announcements with the local community.",
  tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "cPanel"],
  live: "https://holytrinitycanberra.org.au",
  github: null,
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
