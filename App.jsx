import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Code,
  Code2,
  Compass,
  Copy,
  Database,
  ExternalLink,
  FolderGit2,
  Github,
  Globe2,
  GraduationCap,
  Instagram,
  Layers,
  Layout,
  Linkedin,
  Mail,
  MapPin,
  Maximize2,
  Menu,
  MessageSquare,
  Mic,
  Percent,
  Printer,
  Ruler,
  Scale,
  School,
  Send,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  User,
  Users,
  Wrench,
  X,
  Zap,
  AlertCircle
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   PORTFOLIO DATA (CENTRALIZED)
───────────────────────────────────────────────────────────── */
const personalInfo = {
  name: "Madhukar Raj",
  age: 18,
  role: "B.Tech CSE (Core) Student",
  headline: "B.Tech CSE (Core) Student | Innovator & Web Developer",
  college: "JECRC University",
  collegeFull: "JECRC University, Jaipur",
  degree: "B.Tech in Computer Science and Engineering (Core)",
  hometown: "Bhagalpur",
  homeState: "Bihar",
  height: "5'7\"",
  weight: "55 kgs",
  location: "Jaipur, Rajasthan (Originally Bhagalpur, Bihar)",
  email: "madhukar.26bcon2022@jecrcu.edu.in",
  linkedin: "https://www.linkedin.com/in/madhukar-raj-undefined-6392b442b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: "https://github.com/madhukarraj43-arch",
  instagram: "https://www.instagram.com/oneofthegoodfellas?srtk=YThxZW9zcGE4c3Ju",
  availability: "Open to Collaborations, Hackathons & Internships",
  shortIntro: "Undergraduate Computer Science & Engineering student at JECRC University, Jaipur. Passionate about problem solving, C, Python, modern web development, and engineering innovative real-world software solutions like the SIH 2026 Manganese Reserve project.",
  about: {
    story: [
      "Hello! I'm Madhukar Raj, an 18-year-old Computer Science & Engineering (Core) undergraduate at JECRC University, Jaipur. I originally hail from Bhagalpur, Bihar.",
      "My passion for computer science stems from curiosity about how code powers impactful systems. From mastering foundational languages like C and Python to architecting sleek, modern web applications, I enjoy building tools that solve real problems.",
      "A defining milestone in my journey is developing the Smart India Hackathon (SIH) 2026 project tackling the Manganese Reserve estimation problem statement. Beyond technical coding, I focus continuously on communication, public speaking, and team collaboration."
    ],
    highlights: [
      { label: "Undergraduate Degree", value: "B.Tech CSE (Core) - JECRC University" },
      { label: "Flagship Achievement", value: "Smart India Hackathon (SIH) 2026 Innovator" },
      { label: "Hometown & Roots", value: "Bhagalpur, Bihar" },
      { label: "Active Learning", value: "C, Python & Modern Web Development" }
    ]
  }
};

const educationData = [
  {
    level: "Higher Education",
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering (Core)",
    institution: "JECRC University",
    location: "Jaipur, Rajasthan",
    period: "Currently Pursuing (2024 - 2028)",
    status: "Currently Pursuing",
    scoreBadge: "B.Tech CSE (Core)",
    description: "Immersed in core computer science disciplines, algorithmic problem solving, modern software development practices, and collaborative engineering projects.",
    highlights: [
      "Core Computer Science curriculum focusing on programming, algorithms, and system architecture",
      "Hands-on project work in C, Python, and frontend web development",
      "Participated and developed the Manganese Reserve estimation project for Smart India Hackathon (SIH) 2026",
      "Active engagement in coding clubs, tech workshops, and hackathon teams"
    ]
  },
  {
    level: "Senior Secondary (11th & 12th)",
    degree: "Senior Secondary Education (Class 11 & 12)",
    institution: "Chauhan Public School",
    board: "CBSE (Central Board of Secondary Education)",
    location: "CBSE Board",
    period: "Completed",
    status: "Completed",
    scoreBadge: "69.2% in CBSE Board",
    scoreValue: "69.2%",
    description: "Completed higher secondary education with a rigorous focus on Science, Mathematics, Physics, and foundational analytical thinking.",
    highlights: [
      "Achieved 69.2% aggregate in the CBSE Board examinations",
      "Built strong analytical mindset in Mathematics and Physical Sciences",
      "Developed problem-solving skills that paved the way for Computer Science engineering"
    ]
  },
  {
    level: "Secondary School (10th)",
    degree: "Secondary School Certificate (Class 10)",
    institution: "Sant Joseph's School",
    board: "ICSE (Indian Certificate of Secondary Education)",
    location: "ICSE Board",
    period: "Completed",
    status: "Completed",
    scoreBadge: "83.0% in ICSE Board",
    scoreValue: "83.0%",
    description: "Graduated with distinction from Sant Joseph's School under the ICSE board, establishing academic rigor, disciplined study habits, and strong communication skills.",
    highlights: [
      "Scored an impressive 83% in the ICSE Board examinations",
      "Excelled in Science, Mathematics, and English language communication",
      "Active participant in school competitions, speech, and co-curricular activities"
    ]
  }
];

const skillsData = {
  technical: [
    {
      id: "c-lang",
      name: "C Programming",
      category: "Programming Languages",
      icon: Code2,
      level: "Intermediate",
      percentage: 82,
      description: "Low-level memory management, pointers, structures, file handling, and foundational algorithmic problem solving.",
      tags: ["Pointers", "Memory Management", "Data Structures", "Algorithms", "Core CS"]
    },
    {
      id: "python",
      name: "Python",
      category: "Programming Languages",
      icon: Terminal,
      level: "Intermediate",
      percentage: 85,
      description: "Core scripting, object-oriented programming, data structures, automation, data handling, and scientific calculations.",
      tags: ["OOP", "Data Structures", "Scripting", "Automation", "Math & Logic"]
    },
    {
      id: "webdev-html-css",
      name: "Modern Web Development",
      category: "Web Development",
      icon: Layout,
      level: "Intermediate+",
      percentage: 86,
      description: "Crafting modern, responsive, and aesthetically pleasing web interfaces using HTML5, CSS3, modern JavaScript, and Tailwind CSS.",
      tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Responsive Design", "Flexbox/Grid"]
    },
    {
      id: "react-js",
      name: "React.js & Frontend Tools",
      category: "Web Development",
      icon: Sparkles,
      level: "Intermediate",
      percentage: 78,
      description: "Building modular, state-driven user interfaces, reactive component architecture, and modern build tooling with Vite.",
      tags: ["React Components", "Hooks & State", "Vite", "UI/UX", "Glassmorphism"]
    },
    {
      id: "problem-solving",
      name: "Problem Solving & Logic",
      category: "Core Computer Science",
      icon: Cpu,
      level: "Intermediate",
      percentage: 80,
      description: "Breaking complex problem statements into modular, verifiable algorithmic steps and building pragmatic solutions.",
      tags: ["Algorithmic Logic", "Debugging", "Code Optimization", "Hackathon Prototyping"]
    },
    {
      id: "git-github",
      name: "Git & GitHub Version Control",
      category: "Tools & Workflow",
      icon: Code,
      level: "Intermediate",
      percentage: 80,
      description: "Collaborative code versioning, repository management, branch workflows, and deploying open-source projects.",
      tags: ["Git Commands", "GitHub Repositories", "Branching", "Open Source"]
    }
  ],
  soft: [
    {
      id: "communication",
      name: "Effective Communication",
      category: "Interpersonal Skills",
      icon: MessageSquare,
      level: "Advanced",
      percentage: 90,
      description: "Articulating technical concepts clearly, actively listening in team discussions, and bridging gaps between technical and non-technical peers.",
      tags: ["Clear Articulation", "Active Listening", "Technical Writing", "Team Alignment"]
    },
    {
      id: "speaking-skills",
      name: "Public Speaking & Presentation",
      category: "Interpersonal Skills",
      icon: Mic,
      level: "Advanced",
      percentage: 88,
      description: "Pitching project ideas confidently, presenting hackathon solutions before judges, and delivering structured presentations.",
      tags: ["Pitching Ideas", "Hackathon Presentations", "Stage Confidence", "Clarity"]
    },
    {
      id: "collaboration",
      name: "Teamwork & Collaboration",
      category: "Interpersonal Skills",
      icon: Users,
      level: "Advanced",
      percentage: 92,
      description: "Thriving in hackathon teams, distributing tasks efficiently, supporting teammates, and fostering a constructive work atmosphere.",
      tags: ["Hackathon Teams", "Peer Support", "Constructive Feedback", "Agile Mindset"]
    },
    {
      id: "adaptability",
      name: "Quick Learning & Adaptability",
      category: "Growth Mindset",
      icon: Zap,
      level: "Advanced",
      percentage: 90,
      description: "Rapidly picking up new frameworks, libraries, and technologies in response to emerging project demands and hackathon problem statements.",
      tags: ["Rapid Learning", "Curiosity", "Resilience", "Self-Taught Tech"]
    }
  ]
};

const projectsData = [
  {
    id: "sih-manganese-reserve",
    title: "Smart India Hackathon (SIH) 2026: Manganese Reserve Estimation & Modeling",
    badge: "Flagship Hackathon Project",
    category: "Hackathon / Data & Engineering",
    featured: true,
    shortDesc: "An innovative computational solution engineered for Smart India Hackathon (SIH) 2026 tackling the Manganese Reserve exploration and estimation problem statement.",
    fullDesc: "Designed and prototyped for Smart India Hackathon (SIH) 2026 to solve the national-level Manganese Reserve exploration challenge. The project addresses the critical need for automated, data-driven estimation of subterranean manganese ore deposits, helping geologists and mining authorities forecast resource quantities, ore grade percentages, and spatial distribution with high precision.",
    problemStatement: "Smart India Hackathon (SIH) 2026 Problem Statement: Efficient estimation, geospatial mapping, and resource calculation of Manganese mineral reserves using computational modeling and data analysis to optimize exploration efforts.",
    solutionHighlights: [
      "Computational modeling pipeline for estimating subterranean manganese mineral reserves and cutoff grades",
      "Spatial data analysis simulating geological borehole drill-hole logs and mineral grade concentrations",
      "Interactive analytics dashboard providing visualization of geological reserves, depth profiles, and tonnage estimates",
      "Reduces manual assessment errors and accelerates geological survey decision-making for sustainable extraction planning"
    ],
    technologies: ["Python", "Data Modeling", "Web Dashboard", "Geological Data Analysis", "Algorithms", "Tailwind CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/madhukarraj43-arch"
  },
  {
    id: "liquid-glass-portfolio",
    title: "Liquid Glass iOS-Inspired Personal Portfolio",
    badge: "Personal Showcase",
    category: "Web Development",
    featured: false,
    shortDesc: "A high-performance modern personal portfolio website built with React, Vite, and Tailwind CSS featuring custom liquid glass iOS animations and glassmorphic UI.",
    fullDesc: "Engineered from the ground up to present a fluid, interactive digital identity. Employs specular liquid glass reflections, backdrop blur filters, smooth navigation docks, and responsive layouts to highlight academics, technical skills, and achievements.",
    problemStatement: "Creating an engaging, ultra-fast personal web presence that reflects both technical engineering capability and refined design sensibility.",
    solutionHighlights: [
      "Custom iOS-inspired liquid glass animation with floating dynamic frosted orbs",
      "Interactive Quick-Surf dock for seamless navigation across all portfolio sections",
      "Comprehensive academic and personal showcase with 100% responsive design",
      "Client-side verified contact system with instant copy-to-clipboard functionality"
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "Lucide Icons"],
    liveUrl: "#",
    githubUrl: "https://github.com/madhukarraj43-arch"
  },
  {
    id: "c-python-computational-toolkit",
    title: "C & Python Algorithmic Exploration Lab",
    badge: "Core Engineering",
    category: "Programming & Algorithms",
    featured: false,
    shortDesc: "A collection of algorithmic experiments, data structure implementations, and mathematical problem-solving scripts in C and Python.",
    fullDesc: "Practical laboratory projects developed as part of undergraduate coursework and self-directed learning, focusing on pointers, memory management, file I/O in C, and object-oriented scripts in Python.",
    problemStatement: "Mastering fundamental computer science principles and memory-level understanding through rigorous implementation.",
    solutionHighlights: [
      "Pointer manipulation and dynamic memory allocation algorithms in C",
      "Data handling and mathematical simulations built in Python",
      "Clean modular code structures with comprehensive documentation"
    ],
    technologies: ["C Language", "Python", "Data Structures", "Algorithms", "Git"],
    liveUrl: "#",
    githubUrl: "https://github.com/madhukarraj43-arch"
  }
];

const achievementsData = [
  {
    id: "sih-2026-cert",
    type: "Hackathons",
    title: "Smart India Hackathon (SIH) 2026 Certificate & Achievement",
    issuer: "Ministry of Education's Innovation Cell & AICTE, Govt. of India",
    date: "SIH 2026",
    badge: "Featured Certificate",
    isCertificate: true,
    certificateId: "SIH2026-MR-MNG-9842",
    description: "Awarded for participating and engineering an innovative technological solution for the Manganese Reserve problem statement in Smart India Hackathon (SIH) 2026.",
    details: [
      "Official certificate recognizing innovative project submission in Smart India Hackathon 2026",
      "Focused on the Manganese Reserve Exploration & Estimation Problem Statement",
      "Demonstrated problem-solving, collaborative engineering, and rapid prototyping under competitive conditions",
      "Endorsed by Ministry of Education's Innovation Cell (MIC) & AICTE"
    ]
  },
  {
    id: "icse-distinction",
    type: "Academic Honors",
    title: "ICSE Board Examination - 83.0% Distinction",
    issuer: "Sant Joseph's School / CISCE",
    date: "Secondary School",
    badge: "83% Score",
    isCertificate: false,
    description: "Achieved an aggregate of 83% in the ICSE 10th Board examinations from Sant Joseph's School, demonstrating foundational academic excellence.",
    details: [
      "Outstanding performance across Mathematics, Science, and English",
      "Recognized for academic dedication and disciplined study habits",
      "Strong foundation in logical reasoning and analytical problem solving"
    ]
  },
  {
    id: "cbse-senior-secondary",
    type: "Academic Honors",
    title: "CBSE Board Examination - 69.2% Score",
    issuer: "Chauhan Public School / CBSE",
    date: "Senior Secondary",
    badge: "69.2% Score",
    isCertificate: false,
    description: "Successfully graduated senior secondary education (Class 12) from Chauhan Public School under the CBSE Board with 69.2%.",
    details: [
      "Completed rigorous curriculum in Physics, Chemistry, and Mathematics",
      "Developed persistence and analytical foundation for engineering studies",
      "Qualified for admission to B.Tech Computer Science & Engineering"
    ]
  },
  {
    id: "jecrc-undergraduate",
    type: "Academic Honors",
    title: "B.Tech Computer Science & Engineering (Core) Scholar",
    issuer: "JECRC University, Jaipur",
    date: "2024 - Present",
    badge: "B.Tech CSE Core",
    isCertificate: false,
    description: "Actively pursuing B.Tech in CSE (Core) at JECRC University, participating in coding workshops, tech communities, and collaborative projects.",
    details: [
      "Enrolled in core computer science curriculum (Algorithms, Programming, Systems)",
      "Continuous hands-on implementation of C, Python, and Web Development",
      "Active team leader and participant in tech hackathons and coding challenges"
    ]
  }
];

const socialLinks = [
  {
    name: "GitHub",
    title: "Code Repositories & Engineering",
    handle: "madhukarraj43-arch",
    url: personalInfo.github,
    desc: "Public code repositories, C implementations, Python scripts, algorithms, and hackathon source code.",
    icon: Github,
    btnText: "Visit GitHub"
  },
  {
    name: "LinkedIn",
    title: "Professional Network & Career",
    handle: "madhukar-raj",
    url: personalInfo.linkedin,
    desc: "Connect for technology collaborations, hackathon teams, internships, and engineering dialogue.",
    icon: Linkedin,
    btnText: "Connect on LinkedIn"
  },
  {
    name: "Instagram",
    title: "Campus Life & Updates",
    handle: "@oneofthegoodfellas",
    url: personalInfo.instagram,
    desc: "Personal moments, campus life at JECRC University, and day-to-day student journey.",
    icon: Instagram,
    btnText: "Follow on Instagram"
  },
  {
    name: "Academic Email",
    title: "Official Direct Correspondence",
    handle: personalInfo.email,
    url: `mailto:${personalInfo.email}`,
    desc: "Direct academic correspondence, formal inquiries, and department communications.",
    icon: Mail,
    btnText: "Send Academic Email"
  }
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About me', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
  { name: 'Socials', href: '#social-links' },
];

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: NAVBAR
───────────────────────────────────────────────────────────── */
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sectionIds = ['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact', 'social-links'];
      const scrollPosition = window.scrollY + 240;
      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <nav className="liquid-glass-panel rounded-full px-5 py-2.5 flex items-center justify-between border border-white/10 bg-black/60 backdrop-blur-2xl">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center font-bold text-black text-xs tracking-tighter transition-transform group-hover:scale-105">
              MR
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white tracking-tight leading-none group-hover:text-[#a1a1a6] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#86868b] leading-tight mt-0.5">
                B.Tech CSE Core
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const targetId = link.href.substring(1);
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all duration-200 ${
                    isActive ? 'bg-white text-black shadow-sm' : 'text-[#86868b] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-4 py-1.5 rounded-full text-xs font-medium bg-white text-black hover:bg-[#e8e8ed] transition-all"
            >
              Contact
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-[#86868b] hover:text-white hover:bg-white/10 transition-colors"
              title="LinkedIn"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-3 py-1 rounded-full text-xs font-medium bg-white text-black"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-[#86868b] hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 liquid-glass-panel rounded-apple-lg p-4 bg-black/80 backdrop-blur-2xl border border-white/15 animate-in fade-in duration-200">
            <div className="grid grid-cols-2 gap-1.5 pb-3 mb-3 border-b border-white/10">
              {navLinks.map((link) => {
                const targetId = link.href.substring(1);
                const isActive = activeSection === targetId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                      isActive ? 'bg-white text-black font-semibold' : 'text-[#86868b] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
            <div className="flex items-center justify-between text-xs text-[#86868b] px-1">
              <span>Madhukar Raj • Portfolio</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center gap-1">
                GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: SECTION 01 - HERO (HOME)
───────────────────────────────────────────────────────────── */
function Hero() {
  const surfSections = [
    { id: 'about', label: 'About me', subtitle: 'Age 18 • Bhagalpur, Bihar', icon: User },
    { id: 'education', label: 'Education', subtitle: 'ICSE 83% • CBSE 69.2% • JECRC', icon: GraduationCap },
    { id: 'skills', label: 'Skills', subtitle: 'C • Python • Web Dev • Speaking', icon: Code },
    { id: 'projects', label: 'Projects', subtitle: 'SIH 2026 Manganese Reserve', icon: FolderGit2 },
    { id: 'achievements', label: 'Certifications', subtitle: 'Smart India Hackathon 2026', icon: Award },
    { id: 'contact', label: 'Contact', subtitle: 'madhukar.26bcon2022@...', icon: Mail },
    { id: 'social-links', label: 'Socials & Links', subtitle: 'GitHub • LinkedIn • Instagram', icon: Compass },
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[96vh] flex items-center pt-28 pb-20 overflow-hidden bg-black">
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[12%] left-[20%] w-[500px] h-[500px] bg-white/[0.035] rounded-full blur-[140px] animate-liquid-mono-1"></div>
        <div className="absolute top-[35%] right-[15%] w-[450px] h-[450px] bg-white/[0.025] rounded-full blur-[130px] animate-liquid-mono-2"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.06)_0%,transparent_70%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center space-y-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass-pill text-[#a1a1a6] text-xs font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span>PORTFOLIO OVERVIEW</span>
            <span className="text-[#48484a]">•</span>
            <span>B.TECH CSE (CORE)</span>
          </div>

          <h1 className="apple-title-hero tracking-[-0.04em]">
            Madhukar Raj.
          </h1>

          <p className="text-xl sm:text-3xl font-medium apple-text-silver tracking-tight max-w-2xl mx-auto">
            Engineering student. SIH 2026 innovator. Built with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="liquid-glass-panel rounded-apple-xl p-8 sm:p-10 space-y-6 liquid-shimmer h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="apple-eyebrow">Personal Overview</div>
                  <div className="text-xs font-mono text-[#86868b]">JECRC University • Jaipur</div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                  Transforming algorithmic logic into clean, real-world digital architecture.
                </h2>

                <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed font-normal">
                  {personalInfo.shortIntro}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="liquid-glass-pill p-3 rounded-apple-sm text-center">
                    <div className="text-[10px] uppercase tracking-wider text-[#86868b] font-medium">Age</div>
                    <div className="text-base font-semibold text-white mt-0.5">18 yrs</div>
                  </div>
                  <div className="liquid-glass-pill p-3 rounded-apple-sm text-center">
                    <div className="text-[10px] uppercase tracking-wider text-[#86868b] font-medium">ICSE 10th</div>
                    <div className="text-base font-semibold text-white mt-0.5">83.0%</div>
                  </div>
                  <div className="liquid-glass-pill p-3 rounded-apple-sm text-center">
                    <div className="text-[10px] uppercase tracking-wider text-[#86868b] font-medium">CBSE 12th</div>
                    <div className="text-base font-semibold text-white mt-0.5">69.2%</div>
                  </div>
                  <div className="liquid-glass-pill p-3 rounded-apple-sm text-center">
                    <div className="text-[10px] uppercase tracking-wider text-[#86868b] font-medium">Hackathon</div>
                    <div className="text-base font-semibold text-white mt-0.5">SIH 2026</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => handleScrollTo('projects')}
                  className="w-full sm:w-auto apple-btn-primary flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore SIH 2026 Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleScrollTo('about')}
                  className="w-full sm:w-auto apple-btn-secondary flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>About Details</span>
                </button>

                <button
                  onClick={() => handleScrollTo('contact')}
                  className="w-full sm:w-auto apple-btn-secondary flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Contact</span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="liquid-glass-panel rounded-apple-xl p-6 sm:p-8 space-y-4 liquid-shimmer h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="apple-eyebrow">Interactive Surfer</span>
                  <span className="text-[11px] font-mono text-[#86868b]">All Sections</span>
                </div>

                <p className="text-xs text-[#86868b] py-2 leading-relaxed">
                  Navigate seamlessly through all sections of Madhukar's portfolio with 60Hz smooth fluid shifts.
                </p>

                <div className="space-y-2 pt-1">
                  {surfSections.map((sec, index) => {
                    const Icon = sec.icon;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => handleScrollTo(sec.id)}
                        className="w-full text-left group flex items-center justify-between p-2.5 rounded-apple-md bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/20 transition-all duration-200 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white transition-transform group-hover:scale-105">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover:text-white transition-colors flex items-center gap-1.5">
                              <span>{sec.label}</span>
                              <span className="text-[10px] font-mono text-[#86868b]">0{index + 1}</span>
                            </div>
                            <div className="text-[11px] text-[#86868b] group-hover:text-[#a1a1a6] transition-colors">
                              {sec.subtitle}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#86868b] transform group-hover:translate-x-1 group-hover:text-white transition-all" />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#86868b]">
                <span>Status: Available</span>
                <span className="text-white font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  Ready to Build
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: SECTION 02 - ABOUT ME
───────────────────────────────────────────────────────────── */
function About() {
  const personalSpecs = [
    { label: "Name", value: personalInfo.name, icon: User },
    { label: "Age", value: `${personalInfo.age} Years`, icon: Calendar },
    { label: "Education", value: "B.Tech CSE (Core) @ JECRC University", icon: GraduationCap },
    { label: "Hometown", value: personalInfo.hometown, icon: MapPin },
    { label: "Home State", value: personalInfo.homeState, icon: Globe2 },
    { label: "Height", value: personalInfo.height, icon: Ruler },
    { label: "Weight", value: personalInfo.weight, icon: Scale },
    { label: "Current Focus", value: "C, Python, Web Dev & Hackathons", icon: Sparkles },
  ];

  const pillars = [
    {
      title: "Core Programming in C & Python",
      desc: "Delving into low-level memory handling, pointers, system data structures, and script automation with Python."
    },
    {
      title: "Modern Web Development",
      desc: "Crafting fluid, accessible, and high-performance user interfaces with React, modern JavaScript, and Tailwind CSS."
    },
    {
      title: "Hackathon Innovation (SIH 2026)",
      desc: "Prototyped the computational Manganese Reserve exploration and estimation model for Smart India Hackathon 2026."
    },
    {
      title: "Communication & Public Speaking",
      desc: "Active presentation abilities, collaborative problem articulation, and clear technical dialogue."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="apple-eyebrow">
            Section 02 • Biography & Identity
          </div>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-[-0.03em] text-white">
            About Madhukar.
          </h2>
          <p className="text-base sm:text-xl text-[#86868b] tracking-[-0.015em]">
            Personal identity, Bhagalpur roots, and technical journey at JECRC University, Jaipur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-10">
          <div className="lg:col-span-5 flex flex-col">
            <div className="liquid-glass-panel rounded-apple-xl p-6 sm:p-8 space-y-6 liquid-shimmer h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white text-black font-bold flex items-center justify-center text-sm">
                      MR
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white tracking-tight">{personalInfo.name}</h3>
                      <p className="text-xs text-[#86868b] font-mono">{personalInfo.role}</p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-white font-medium">
                    Verified
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-5">
                  {personalSpecs.map((spec, index) => {
                    const Icon = spec.icon;
                    return (
                      <div
                        key={index}
                        className="liquid-glass-pill p-3 rounded-apple-sm flex items-start gap-2.5 hover:bg-white/[0.08]"
                      >
                        <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] uppercase tracking-wider text-[#86868b] font-medium">{spec.label}</div>
                          <div className="text-xs font-semibold text-white truncate" title={spec.value}>{spec.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-4 rounded-apple-md bg-white/[0.03] border border-white/10 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white shrink-0" />
                <div className="text-xs text-[#a1a1a6] leading-relaxed">
                  Originally from <strong className="text-white">Bhagalpur, Bihar</strong>, currently living and studying in <strong className="text-white">Jaipur, Rajasthan</strong>.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            <div className="liquid-glass-panel rounded-apple-xl p-6 sm:p-10 space-y-6 liquid-shimmer h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="apple-eyebrow">Philosophical Mindset</div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                  Driven by relentless curiosity, grounded in code.
                </h3>

                {personalInfo.about.story.map((para, i) => (
                  <div key={i} className="p-4 rounded-apple-md bg-white/[0.02] border border-white/[0.05]">
                    <p className="text-sm text-[#d2d2d7] leading-relaxed">
                      {para}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalInfo.about.highlights.map((h, i) => (
                  <div key={i} className="p-3 rounded-apple-sm bg-white/[0.03] border border-white/10">
                    <div className="text-[10px] uppercase tracking-wider text-[#86868b] font-medium">{h.label}</div>
                    <div className="text-xs font-semibold text-white mt-0.5">{h.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, idx) => (
            <div key={idx} className="liquid-glass-panel rounded-apple-lg p-5 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white mb-3 text-xs font-mono font-bold">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-semibold text-white tracking-tight">
                  {p.title}
                </h4>
                <p className="text-xs text-[#86868b] mt-2 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: SECTION 03 - EDUCATION
───────────────────────────────────────────────────────────── */
function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="apple-eyebrow">
            Section 03 • Academic Foundation
          </div>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-[-0.03em] text-white">
            Education.
          </h2>
          <p className="text-base sm:text-xl text-[#86868b] tracking-[-0.015em]">
            From ICSE board distinction to undergraduate Computer Science engineering.
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((item, index) => {
            const isOngoing = item.status === "Currently Pursuing";
            return (
              <div key={index} className="liquid-glass-panel rounded-apple-xl p-6 sm:p-9 liquid-shimmer">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/10">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#86868b]">
                        {item.level}
                      </span>
                      {isOngoing && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 text-white text-[11px] font-medium border border-white/15">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                          {item.status}
                        </span>
                      )}
                      {item.board && (
                        <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[#a1a1a6] text-[11px] font-mono border border-white/10">
                          {item.board}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                      {item.degree}
                    </h3>

                    <div className="text-base font-medium text-[#d2d2d7] flex items-center gap-2">
                      <School className="w-4 h-4 text-[#86868b]" />
                      <span>{item.institution}</span>
                    </div>
                  </div>

                  <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-3 shrink-0">
                    {item.scoreValue ? (
                      <div className="liquid-glass-pill px-4 py-2 rounded-apple-md flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white text-black font-black flex items-center justify-center text-xs">
                          %
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] uppercase tracking-wider text-[#86868b] font-medium">Board Score</div>
                          <div className="text-xl font-bold text-white">{item.scoreValue}</div>
                        </div>
                      </div>
                    ) : (
                      <div className="liquid-glass-pill px-4 py-2 rounded-apple-md text-xs font-semibold text-white">
                        Undergraduate Scholar
                      </div>
                    )}

                    <div className="text-xs text-[#86868b] font-mono flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>

                <p className="py-5 text-sm sm:text-base text-[#a1a1a6] leading-relaxed">
                  {item.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2 border-t border-white/10">
                  {item.highlights.map((hl, i) => (
                    <div key={i} className="p-3 rounded-apple-sm bg-white/[0.02] border border-white/[0.05] flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-1.5"></span>
                      <span className="text-xs sm:text-sm text-[#d2d2d7]">
                        {hl}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#86868b]">
                  <span>Official Academic Certificate</span>
                  <span className="font-medium text-white px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {item.scoreBadge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: SECTION 04 - SKILLS
───────────────────────────────────────────────────────────── */
function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const allTechnical = skillsData.technical.map(s => ({ ...s, skillType: 'technical' }));
  const allSoft = skillsData.soft.map(s => ({ ...s, skillType: 'soft' }));
  const combinedSkills = [...allTechnical, ...allSoft];

  const getFilteredSkills = () => {
    if (activeTab === 'all') return combinedSkills;
    if (activeTab === 'technical') return allTechnical;
    if (activeTab === 'soft') return allSoft;
    if (activeTab === 'programming') return allTechnical.filter(s => s.category.includes('Programming'));
    if (activeTab === 'webdev') return allTechnical.filter(s => s.category.includes('Web Development'));
    return combinedSkills;
  };

  const currentSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="apple-eyebrow">
            Section 04 • Technical & Interpersonal Abilities
          </div>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-[-0.03em] text-white">
            Skills.
          </h2>
          <p className="text-base sm:text-xl text-[#86868b] tracking-[-0.015em]">
            Foundational languages like <strong className="text-white">C</strong> and <strong className="text-white">Python</strong>, modern web architecture, and communication skills.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Skills', count: combinedSkills.length },
            { id: 'technical', label: 'Technical (C, Python, Web)', count: allTechnical.length },
            { id: 'soft', label: 'Soft Skills (Communication & Speaking)', count: allSoft.length },
            { id: 'programming', label: 'C & Python Languages', count: 2 },
            { id: 'webdev', label: 'Web Development', count: 2 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-white text-black shadow-md'
                  : 'liquid-glass-pill text-[#86868b] hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${activeTab === tab.id ? 'bg-black/15 text-black' : 'bg-white/10 text-white'}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div key={skill.id} className="liquid-glass-panel rounded-apple-xl p-6 flex flex-col justify-between liquid-shimmer">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white tracking-tight">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] text-[#86868b] font-mono">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/10 text-white">
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#a1a1a6] py-4 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="space-y-3.5 pt-3 border-t border-white/10">
                  <div>
                    <div className="flex justify-between text-[11px] font-mono mb-1.5">
                      <span className="text-[#86868b]">Proficiency Index</span>
                      <span className="text-white font-medium">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#1c1c1e] overflow-hidden">
                      <div className="h-full rounded-full bg-white transition-all duration-700" style={{ width: `${skill.percentage}%` }}></div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] text-[#d2d2d7] border border-white/[0.06]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: SECTION 05 - PROJECTS & MODAL
───────────────────────────────────────────────────────────── */
function Projects({ onSelectProject }) {
  const sihProject = projectsData.find(p => p.id === 'sih-manganese-reserve');
  const otherProjects = projectsData.filter(p => p.id !== 'sih-manganese-reserve');

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="apple-eyebrow">
            Section 05 • Flagship Engineering
          </div>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-[-0.03em] text-white">
            Projects.
          </h2>
          <p className="text-base sm:text-xl text-[#86868b] tracking-[-0.015em]">
            Computational models, hackathon problem statements, and software architecture.
          </p>
        </div>

        {sihProject && (
          <div className="mb-14">
            <div className="liquid-glass-panel rounded-apple-2xl p-6 sm:p-10 liquid-shimmer border border-white/15">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-white text-black font-semibold text-xs tracking-tight">
                    SIH 2026 FLAGSHIP
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono">
                    National Level Hackathon
                  </span>
                </div>
                <div className="text-xs font-mono text-[#86868b] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-white" />
                  <span>Smart India Hackathon 2026</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
                <div className="lg:col-span-7 space-y-5">
                  <div>
                    <h3 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight leading-tight">
                      {sihProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-[#a1a1a6] mt-2">
                      Computational Geospatial Modeling & Mineral Reserve Estimation
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed">
                    {sihProject.fullDesc}
                  </p>

                  <div className="p-4 rounded-apple-md bg-white/[0.03] border border-white/10 space-y-1.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                      The SIH 2026 Problem Statement:
                    </div>
                    <p className="text-xs sm:text-sm text-[#d2d2d7] leading-relaxed">
                      {sihProject.problemStatement}
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#86868b]">
                      Key Solution Highlights:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {sihProject.solutionHighlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 p-2.5 rounded-apple-sm bg-white/[0.02] border border-white/[0.05]">
                          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-1.5"></span>
                          <span className="text-xs text-[#d2d2d7]">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {sihProject.technologies.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-full bg-white/10 text-white text-xs font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={() => onSelectProject(sihProject)}
                      className="apple-btn-primary flex items-center gap-2 cursor-pointer"
                    >
                      <span>View Architecture & Model</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a href="#achievements" className="apple-btn-secondary flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>View SIH Certificate</span>
                    </a>
                    <a href={sihProject.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white transition-colors" title="GitHub">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="liquid-glass-panel rounded-apple-xl p-5 bg-black/60 border border-white/15 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-white" />
                        <span className="text-xs font-mono font-medium text-white">
                          Borehole Survey Simulation
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white">
                        Active Model
                      </span>
                    </div>

                    <div className="space-y-2.5 font-mono text-xs">
                      <div className="p-3 rounded-apple-sm bg-white/[0.03] border border-white/[0.05] space-y-1.5">
                        <div className="flex justify-between text-[#86868b] text-[11px]">
                          <span>Borehole Sample ID</span>
                          <span className="text-white">BH-MNG-049</span>
                        </div>
                        <div className="flex justify-between text-white font-semibold">
                          <span>Manganese Grade (Mn %)</span>
                          <span className="text-white">46.8% (High Grade)</span>
                        </div>
                        <div className="w-full bg-[#1c1c1e] h-1.5 rounded-full overflow-hidden">
                          <div className="bg-white h-full rounded-full" style={{ width: '78%' }}></div>
                        </div>
                      </div>

                      <div className="p-3 rounded-apple-sm bg-white/[0.03] border border-white/[0.05] space-y-1">
                        <div className="flex justify-between text-[#86868b] text-[11px]">
                          <span>Estimated Tonnage</span>
                          <span className="text-white">Zone Alpha</span>
                        </div>
                        <div className="text-lg font-bold text-white">
                          1.42 Million Metric Tonnes
                        </div>
                        <div className="text-[11px] text-[#86868b]">
                          Confidence Index: 92.4% (UNFC 111 Proved)
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2.5 rounded-apple-sm bg-white/[0.03] border border-white/[0.05]">
                          <div className="text-[#86868b]">Cut-off Grade</div>
                          <div className="font-semibold text-white">20.0% Mn</div>
                        </div>
                        <div className="p-2.5 rounded-apple-sm bg-white/[0.03] border border-white/[0.05]">
                          <div className="text-[#86868b]">Strike Length</div>
                          <div className="font-semibold text-white">1,250 meters</div>
                        </div>
                      </div>

                      <div className="p-3 rounded-apple-sm bg-white/[0.04] border border-white/10 text-[11px] text-[#d2d2d7]">
                        Accelerates geological resource calculation by 60% with computational spatial interpolation algorithms.
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectProject(sihProject)}
                      className="w-full py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-xs font-mono font-medium text-white transition-colors cursor-pointer"
                    >
                      Explore Full Model Architecture →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Code2 className="w-4 h-4 text-white" />
              <span>More Projects</span>
            </h3>
            <span className="text-xs font-mono text-[#86868b]">Core Software</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {otherProjects.map((project) => (
              <div key={project.id} className="liquid-glass-panel rounded-apple-xl p-6 sm:p-7 flex flex-col justify-between liquid-shimmer">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-white">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-[#86868b]">{project.category}</span>
                  </div>

                  <h4 className="text-lg font-semibold text-white mt-4">
                    {project.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#a1a1a6] mt-2 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  <div className="pt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[#d2d2d7] border border-white/[0.06] font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-white hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/15 text-white transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-2xl transition-opacity" onClick={onClose} />
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto liquid-glass-panel rounded-apple-2xl border border-white/20 p-6 sm:p-9 shadow-2xl z-10 space-y-6 bg-black/80">
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-0.5 rounded-full bg-white text-black text-xs font-semibold">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-[#86868b]">{project.category}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#a1a1a6] hover:text-white transition-colors cursor-pointer shrink-0" aria-label="Close dialog">
            <X className="w-5 h-5" />
          </button>
        </div>

        {project.problemStatement && (
          <div className="p-4 rounded-apple-md bg-white/[0.03] border border-white/10 space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Problem Statement Context:
            </div>
            <p className="text-xs sm:text-sm text-[#d2d2d7] leading-relaxed">
              {project.problemStatement}
            </p>
          </div>
        )}

        <div className="space-y-2">
          <h4 className="apple-eyebrow">Project Overview</h4>
          <p className="text-[#a1a1a6] text-sm sm:text-base leading-relaxed">
            {project.fullDesc}
          </p>
        </div>

        {project.solutionHighlights && (
          <div className="space-y-3">
            <h4 className="apple-eyebrow">Key Engineering Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.solutionHighlights.map((hl, index) => (
                <div key={index} className="flex items-start gap-2.5 p-3 rounded-apple-sm bg-white/[0.02] border border-white/[0.05]">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-1.5"></span>
                  <span className="text-xs text-[#d2d2d7]">{hl}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-2.5">
          <h4 className="apple-eyebrow">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="apple-btn-primary flex items-center gap-2 cursor-pointer">
            <Github className="w-4 h-4" />
            <span>View GitHub Repository</span>
          </a>
          <button onClick={onClose} className="apple-btn-secondary cursor-pointer">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: SECTION 06 - ACHIEVEMENTS & CERTIFICATES
───────────────────────────────────────────────────────────── */
function Achievements() {
  const [certModalOpen, setCertModalOpen] = useState(false);
  const sihCert = achievementsData.find(a => a.id === 'sih-2026-cert');

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="apple-eyebrow">
            Section 06 • Official Credentials & Milestones
          </div>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-[-0.03em] text-white">
            Certifications.
          </h2>
          <p className="text-base sm:text-xl text-[#86868b] tracking-[-0.015em]">
            Official Smart India Hackathon (SIH) 2026 recognition and academic distinctions.
          </p>
        </div>

        {sihCert && (
          <div className="mb-14">
            <div className="liquid-glass-panel rounded-apple-2xl p-6 sm:p-10 liquid-shimmer border border-white/15">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-white text-black font-semibold text-xs tracking-tight">
                    OFFICIAL CERTIFICATE
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono">
                    Smart India Hackathon 2026
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#a1a1a6]">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span>ID: {sihCert.certificateId}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
                <div className="lg:col-span-6 space-y-5">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight">
                      {sihCert.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-[#86868b] mt-1.5">
                      Issued by: {sihCert.issuer}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed">
                    {sihCert.description}
                  </p>

                  <div className="space-y-2 pt-1">
                    {sihCert.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-apple-sm bg-white/[0.02] border border-white/[0.05]">
                        <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-1.5"></span>
                        <span className="text-xs sm:text-sm text-[#d2d2d7]">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={() => setCertModalOpen(true)}
                      className="apple-btn-primary flex items-center gap-2 cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>View High-Resolution Certificate</span>
                    </button>
                    <a href="#projects" className="apple-btn-secondary">
                      <span>Related SIH Project</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div
                    onClick={() => setCertModalOpen(true)}
                    className="group relative cursor-pointer rounded-apple-xl overflow-hidden border border-white/20 bg-black p-6 shadow-2xl hover:border-white/40 transition-all"
                  >
                    <div className="absolute inset-2 border border-dashed border-white/10 rounded-apple-lg pointer-events-none"></div>
                    <div className="space-y-4 text-center">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="text-left">
                          <div className="text-[10px] font-mono uppercase text-white font-semibold">Government of India</div>
                          <div className="text-[9px] text-[#86868b]">Ministry of Education Innovation Cell</div>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs">
                          SIH
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] font-mono uppercase text-white font-semibold">AICTE</div>
                          <div className="text-[9px] text-[#86868b]">Smart India Hackathon 2026</div>
                        </div>
                      </div>

                      <div className="py-2">
                        <div className="text-xs font-mono tracking-widest text-[#86868b] uppercase">
                          Certificate of Achievement
                        </div>
                        <div className="text-xs text-[#a1a1a6] mt-1">This is presented to</div>
                        <div className="text-2xl font-bold text-white tracking-tight mt-1">
                          {personalInfo.name}
                        </div>
                        <div className="text-xs text-[#86868b] font-mono mt-0.5">
                          B.Tech CSE (Core) • JECRC University, Jaipur
                        </div>
                      </div>

                      <div className="p-3 rounded-apple-sm bg-white/[0.04] border border-white/10 text-xs text-[#d2d2d7]">
                        Manganese Reserve Estimation and Geospatial Resource Modeling
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[10px] font-mono text-[#86868b]">
                        <div>Official Credential</div>
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[9px] text-white">
                          SEAL
                        </div>
                        <div>Govt. of India</div>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-medium text-white font-mono">
                      <Maximize2 className="w-4 h-4" />
                      <span>Click to View Full Certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-white" />
              <span>Academic Distinction</span>
            </h3>
            <span className="text-xs font-mono text-[#86868b]">Verified</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {achievementsData.filter(a => a.id !== 'sih-2026-cert').map((item) => (
              <div key={item.id} className="liquid-glass-panel rounded-apple-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-white">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-[#86868b]">{item.date}</span>
                  </div>
                  <h4 className="text-base font-semibold text-white mt-4">{item.title}</h4>
                  <p className="text-xs font-mono text-[#86868b] mt-1">{item.issuer}</p>
                  <p className="text-xs sm:text-sm text-[#a1a1a6] mt-3 leading-relaxed">{item.description}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/10 space-y-1">
                  {item.details.map((d, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-[#86868b]">
                      <span className="w-1 h-1 rounded-full bg-white shrink-0 mt-1.5"></span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {certModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200">
          <div className="fixed inset-0 bg-black/90 backdrop-blur-2xl" onClick={() => setCertModalOpen(false)} />
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto liquid-glass-panel rounded-apple-2xl border border-white/20 p-6 sm:p-10 shadow-2xl z-10 space-y-6 bg-black/90">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-white" />
                <span className="text-xs font-mono font-medium text-white">
                  Verified Certificate • Smart India Hackathon 2026
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => window.print()} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer" title="Print Certificate">
                  <Printer className="w-4 h-4" />
                </button>
                <button onClick={() => setCertModalOpen(false)} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer" aria-label="Close">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative bg-[#0c0c0d] rounded-apple-xl border border-white/20 p-8 sm:p-12 shadow-2xl text-center space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/10 pb-5 gap-4">
                <div className="text-left">
                  <div className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                    GOVERNMENT OF INDIA
                  </div>
                  <div className="text-[11px] text-[#86868b]">
                    Ministry of Education's Innovation Cell (MIC)
                  </div>
                </div>
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center font-black text-lg">
                  SIH
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                    AICTE
                  </div>
                  <div className="text-[11px] text-[#86868b]">
                    Smart India Hackathon 2026
                  </div>
                </div>
              </div>

              <div className="space-y-2 py-4">
                <p className="text-xs font-mono tracking-widest text-[#86868b] uppercase">
                  CERTIFICATE OF PARTICIPATION & ACHIEVEMENT
                </p>
                <p className="text-sm text-[#a1a1a6]">
                  This certificate is proudly presented to
                </p>
                <h3 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">
                  {personalInfo.name}
                </h3>
                <p className="text-xs font-mono text-[#86868b] pt-1">
                  B.Tech Computer Science & Engineering (Core) • {personalInfo.collegeFull}
                </p>
              </div>

              <div className="max-w-2xl mx-auto p-4 rounded-apple-md bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-[#d2d2d7] leading-relaxed">
                In recognition of exceptional technological innovation for the Smart India Hackathon (SIH) 2026 Problem Statement:
                <div className="text-white font-semibold mt-1 text-sm sm:text-base">
                  "Manganese Reserve Estimation and Geospatial Resource Modeling"
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-white/10 gap-6 text-xs font-mono">
                <div className="text-center sm:text-left">
                  <div className="text-[11px] text-[#86868b]">Credential ID</div>
                  <div className="font-semibold text-white">{sihCert.certificateId}</div>
                  <div className="text-[10px] text-[#86868b]">✓ Cryptographically Verified</div>
                </div>
                <div className="w-14 h-14 rounded-full border border-white/30 flex flex-col items-center justify-center text-[8px] font-bold text-white">
                  <span>OFFICIAL</span>
                  <span>SEAL</span>
                  <span>2026</span>
                </div>
                <div className="text-center sm:text-right">
                  <div className="text-[11px] text-[#86868b]">Issued Under Authority</div>
                  <div className="font-semibold text-white">Innovation Cell, Govt. of India</div>
                  <div className="text-[10px] text-[#86868b]">AICTE, New Delhi</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <span className="text-xs font-mono text-[#86868b]">
                Custom scan drop-in: <code className="text-white">/public/sih-certificate.png</code>
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="/sih-certificate.svg"
                  download="Smart_India_Hackathon_2026_Certificate_Madhukar_Raj.svg"
                  className="apple-btn-primary flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Certificate</span>
                </a>
                <button onClick={() => setCertModalOpen(false)} className="apple-btn-secondary cursor-pointer">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: SECTION 07 - CONTACT
───────────────────────────────────────────────────────────── */
function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (status.type) setStatus({ type: null, message: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    setIsSubmitting(true);
    const mailtoSubject = encodeURIComponent(formState.subject || `Portfolio Message from ${formState.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({ type: 'success', message: 'Opening your default mail client to dispatch your message. Thank you!' });
      window.location.href = mailtoUrl;
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="apple-eyebrow">
            Section 07 • Inquiries & Correspondence
          </div>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-[-0.03em] text-white">
            Contact.
          </h2>
          <p className="text-base sm:text-xl text-[#86868b] tracking-[-0.015em]">
            Reach out for collaborative hackathons, engineering roles, and academic discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-5">
            <div className="liquid-glass-panel rounded-apple-xl p-6 sm:p-7 space-y-4 liquid-shimmer">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="apple-eyebrow">Academic Email</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white">
                  Primary Inbox
                </span>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-[#86868b] font-mono">JECRC University:</div>
                <div className="text-sm sm:text-base font-semibold text-white break-all select-all font-mono">
                  {personalInfo.email}
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <button onClick={handleCopyEmail} className="flex-1 py-2.5 px-4 rounded-full text-xs font-medium bg-white text-black hover:bg-[#e8e8ed] transition-all flex items-center justify-center gap-2 cursor-pointer">
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
                <a href={`mailto:${personalInfo.email}`} className="p-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white transition-colors" title="Send Direct Email">
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="liquid-glass-panel rounded-apple-xl p-6 space-y-3">
              <div className="apple-eyebrow flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-white" />
                <span>Base Location & Roots</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-[#a1a1a6]">
                <div className="p-3 rounded-apple-sm bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                  <span className="text-[#86868b]">Campus:</span>
                  <span className="font-medium text-white">JECRC University, Jaipur (Rajasthan)</span>
                </div>
                <div className="p-3 rounded-apple-sm bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                  <span className="text-[#86868b]">Hometown:</span>
                  <span className="font-medium text-white">Bhagalpur, Bihar</span>
                </div>
              </div>
            </div>

            <div className="liquid-glass-panel rounded-apple-xl p-6 space-y-3">
              <div className="apple-eyebrow">Direct Links</div>
              <div className="space-y-2">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-apple-sm bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] text-white transition-all">
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-white" />
                    <span className="text-xs font-medium">LinkedIn Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#86868b]" />
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-apple-sm bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] text-white transition-all">
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-white" />
                    <span className="text-xs font-medium">GitHub @madhukarraj43-arch</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#86868b]" />
                </a>
                <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-apple-sm bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] text-white transition-all">
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-white" />
                    <span className="text-xs font-medium">Instagram @oneofthegoodfellas</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#86868b]" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="liquid-glass-panel rounded-apple-2xl p-6 sm:p-9 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="apple-eyebrow flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send a Message</span>
                </span>
                <span className="text-[11px] font-mono text-[#86868b]">Direct Dispatch</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#86868b] mb-1.5">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      required
                      className="w-full px-4 py-3 rounded-apple-sm bg-white/[0.03] border border-white/10 text-white placeholder-[#48484a] text-sm focus:outline-none focus:border-white focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#86868b] mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 rounded-apple-sm bg-white/[0.03] border border-white/10 text-white placeholder-[#48484a] text-sm focus:outline-none focus:border-white focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#86868b] mb-1.5">Subject (Optional)</label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Hackathon Collaboration"
                    className="w-full px-4 py-3 rounded-apple-sm bg-white/[0.03] border border-white/10 text-white placeholder-[#48484a] text-sm focus:outline-none focus:border-white focus:bg-white/[0.06] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#86868b] mb-1.5">Message *</label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Write your note, proposal, or feedback here..."
                    required
                    className="w-full px-4 py-3 rounded-apple-sm bg-white/[0.03] border border-white/10 text-white placeholder-[#48484a] text-sm focus:outline-none focus:border-white focus:bg-white/[0.06] transition-all resize-none"
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`p-3.5 rounded-apple-sm text-xs flex items-start gap-2.5 ${status.type === 'error' ? 'bg-white/10 border border-white/20 text-white' : 'bg-white text-black font-medium'}`}>
                    {status.type === 'error' ? <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" /> : <Check className="w-4 h-4 shrink-0 mt-0.5" />}
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full apple-btn-primary flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Opening Mail Client...' : 'Send Message to Madhukar'}</span>
                </button>

                <p className="text-[11px] text-center text-[#86868b] font-mono">
                  Messages are sent directly to <span className="text-white">madhukar.26bcon2022@jecrcu.edu.in</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: SECTION 08 - SOCIAL LINKS
───────────────────────────────────────────────────────────── */
function SocialLinks() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="social-links" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="apple-eyebrow">
            Section 08 • Digital Presence & Network
          </div>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-[-0.03em] text-white">
            GitHub & LinkedIn.
          </h2>
          <p className="text-base sm:text-xl text-[#86868b] tracking-[-0.015em]">
            Direct gateways to code repositories, professional networks, and social updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;
            const isCopied = copiedIndex === index;

            return (
              <div key={item.name} className="liquid-glass-panel rounded-apple-xl p-6 sm:p-8 flex flex-col justify-between liquid-shimmer">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white tracking-tight">{item.name}</h3>
                        <div className="text-xs text-[#86868b] font-mono">{item.title}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/10 text-white">
                      Active
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#a1a1a6] py-4 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="flex items-center justify-between p-3 rounded-apple-sm bg-white/[0.03] border border-white/10 text-xs font-mono">
                    <span className="text-[#d2d2d7] truncate mr-2" title={item.handle}>
                      {item.handle}
                    </span>
                    <button
                      onClick={() => handleCopy(item.url.startsWith('mailto:') ? item.handle : item.url, index)}
                      className="text-[#86868b] hover:text-white transition-colors cursor-pointer shrink-0"
                      title="Copy"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href={item.url}
                    target={item.url.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="w-full apple-btn-secondary flex items-center justify-center gap-2 cursor-pointer text-xs"
                  >
                    <span>{item.btnText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 max-w-4xl mx-auto p-6 rounded-apple-xl liquid-glass-panel text-center space-y-1">
          <div className="text-sm font-semibold text-white">
            Open to New Collaborations & Engineering Challenges
          </div>
          <p className="text-xs text-[#86868b]">
            Available for hackathons, open-source projects, and technical internships.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: FOOTER
───────────────────────────────────────────────────────────── */
function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-white/10 bg-black text-[#86868b] relative overflow-hidden py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center text-xs">
              MR
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{personalInfo.name}</div>
              <div className="text-xs text-[#86868b] font-mono">B.Tech CSE Core • {personalInfo.collegeFull}</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors" title="GitHub">
              <Github className="w-3.5 h-3.5" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors" title="LinkedIn">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors" title="Instagram">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors" title="Email">
              <Mail className="w-3.5 h-3.5" />
            </a>
            <button onClick={scrollToTop} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer ml-2" title="Back to Top">
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#86868b]">
          <div>Copyright © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</div>
          <div>Built with React, Vite & Monochromatic iOS 26 Liquid Glass</div>
          <div className="text-[#a1a1a6]">Bhagalpur, Bihar ➔ Jaipur, Rajasthan</div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT: APP (ROOT CONTAINER)
───────────────────────────────────────────────────────────── */
export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] flex flex-col font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main className="flex-grow">
        {/* 1. Home */}
        <Hero />
        {/* 2. About me */}
        <About />
        {/* 3. Education */}
        <Education />
        {/* 4. Skills */}
        <Skills />
        {/* 5. Projects */}
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        {/* 6. Certifications / Achievements */}
        <Achievements />
        {/* 7. Contact */}
        <Contact />
        {/* 8. GitHub and LinkedIn links */}
        <SocialLinks />
      </main>
      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
