export type ProjectLink = {
  label: string;
  url: string;
  type: 'repo' | 'live';
};

export type Project = {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  techStack: string[];
  role: string;
  links: ProjectLink[];
  image: string;
};

export const profile = {
  name: 'Mohamed Bashry',
  role: 'Software Engineer',
  heroTitle: 'Full-Stack & Software Engineer',
  heroDescription:
    'Building practical web applications with .NET, PHP, Python, and modern cloud and DevOps practices.',
  aboutTitle: 'Software Engineer with DevOps Skills',
  about: [
    'I am an ICT undergraduate at the University of Vavuniya, currently completing a BSc (Hons) in Information and Communication Technology and a Diploma in Software Engineering.',
    'I build full-stack web applications with ASP.NET Core MVC, C#, PHP, MySQL, JavaScript, and responsive front-end technologies. I enjoy turning requirements into useful, well-structured software.',
    'Alongside application development, I have hands-on experience with AWS, Terraform, Docker, CI/CD, and infrastructure-as-code practices - skills that help me build and deliver software with confidence.',
    'I also bring freelance graphic-design experience, combining technical problem-solving with a practical eye for clear, user-friendly visual communication.',
  ],
};

export const skillGroups = [
  {
    name: 'Languages & Frameworks',
    skills: ['C#', 'PHP', 'Python', 'Java', 'C++', 'JavaScript', 'ASP.NET Core MVC', 'React.js', 'HTML5', 'CSS3', 'Bootstrap', 'REST APIs'],
  },
  {
    name: 'Databases',
    skills: ['MySQL', 'SQL', 'Entity Framework Core', 'Database Design'],
  },
  {
    name: 'DevOps & Cloud',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'Terraform', 'CI/CD', 'Infrastructure as Code'],
  },
  {
    name: 'Tools',
    skills: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Linux (Ubuntu)', 'Bash'],
  },
  {
    name: 'Design',
    skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Canva'],
  },
];

export const certifications = [
  'Introduction to Modern AI - Cisco',
  'Introduction to DevOps - IBM',
  'Learning GitHub Actions for DevOps CI/CD - Coursera',
  'Terraform Fundamentals: Architecture & Core Utilities - Coursera',
  'Python for Beginners - University of Moratuwa',
  'Plan Agile with GitHub Projects and Azure Boards - Microsoft',
  'Graphic Design for Beginners - Orinsto Campus',
];

export const projects: Project[] = [
  {
    id: 'university-resource-management',
    title: 'University Resource Management System',
    category: 'Full Stack',
    tags: ['Full Stack', '.NET'],
    description:
      'A web-based system for managing university resources and equipment bookings, with CRUD workflows and a responsive interface.',
    techStack: ['ASP.NET Core MVC', 'C#', 'Entity Framework Core', 'MySQL', 'Bootstrap', 'JavaScript'],
    role: 'Full-Stack Developer',
    links: [],
    image: '',
  },
  {
    id: 'alumni-management',
    title: 'Alumni Management System',
    category: 'Full Stack',
    tags: ['Full Stack', 'PHP'],
    description:
      'A web-based alumni platform with registration, login authentication, profile management, event management, and announcement publishing.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    role: 'Full-Stack Developer',
    links: [],
    image: '',
  },
  {
    id: 'aws-terraform-infrastructure',
    title: 'AWS EC2 Infrastructure Automation',
    category: 'DevOps',
    tags: ['DevOps'],
    description:
      'Provisioned reusable AWS EC2 infrastructure with Terraform, including AMI selection, security groups, IAM, automated server setup, and documented one-command deployment.',
    techStack: ['Terraform', 'AWS EC2', 'IAM', 'Security Groups', 'Infrastructure as Code'],
    role: 'Cloud & DevOps Engineer',
    links: [],
    image: '',
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors Game',
    category: 'Software Engineering',
    tags: ['Software Engineering'],
    description:
      'A console game featuring score tracking, input validation, replay functionality, and randomized computer choices.',
    techStack: ['Python', 'CLI', 'Git'],
    role: 'Software Developer',
    links: [],
    image: '',
  },
  {
    id: 'restaurant-poster-design',
    title: 'Restaurant Promotional Design',
    category: 'Design',
    tags: ['Design'],
    description:
      'Freelance promotional poster design for international food and restaurant clients, from requirements and revisions through final delivery.',
    techStack: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva'],
    role: 'Freelance Graphic Designer',
    links: [],
    image: '',
  },
];

export const projectFilters = ['All', 'Full Stack', '.NET', 'PHP', 'Software Engineering', 'DevOps', 'Design'];

export const contactLinks = [
  { label: 'GitHub', url: 'https://github.com/Mohamedbashry', username: '@Mohamedbashry', type: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/mohamed-bashry', username: 'in/mohamed-bashry', type: 'linkedin' },
  { label: 'Email', url: 'mailto:mohamedbashry849@gmail.com', username: 'mohamedbashry849@gmail.com', type: 'email' },
  { label: 'Resume', url: '/resume.pdf', username: 'Download PDF', type: 'resume' },
] as const;
