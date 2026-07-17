"use client";

import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Terminal, 
  Database, 
  Server, 
  Cpu, 
  ExternalLink,
  Code,
  Globe,
  Layers,
  Sparkles,
  Send,
  FileText,
  Award,
  Calendar,
  ArrowUpRight,
  MessageSquare,
  Menu,
  X
} from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  category: string;
  image: string;
  challenges: string;
}

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  skillsLearned: string[];
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  // Dynamic Title Text Loop
  const words = ["Full Stack Developer", "Backend Engineer", "Database Specialist"];
  const [index, setIndex] = useState<number>(0);
  const [subText, setSubText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(150);

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[index % words.length];
      if (!isDeleting) {
        setSubText(currentWord.substring(0, subText.length + 1));
        if (subText === currentWord) {
          setSpeed(2000);
          setIsDeleting(true);
        } else {
          setSpeed(100);
        }
      } else {
        setSubText(currentWord.substring(0, subText.length - 1));
        if (subText === '') {
          setIsDeleting(false);
          setIndex(index + 1);
          setSpeed(500);
        } else {
          setSpeed(50);
        }
      }
    };

    const timer = setTimeout(() => {
      handleType();
    }, speed);
    
    return () => clearTimeout(timer);
  }, [subText, isDeleting, index, speed]);

  const projects: Project[] = [
    {
      title: "MediStore",
      subtitle: "E-commerce & Pharmacy Platform",
      description: "A premium full-stack medical and pharmacy management solution. Features secure role-based access control, automated drug inventory tracking, and full responsive admin-seller analytics dashboards.",
      tags: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/alhaz-431", 
      live: "https://storefrontend-ten.vercel.app/", 
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=600&auto=format&fit=crop",
      challenges: "Relational queries optimization using Prisma and handling secure session routing.",
    },
    {
      title: "EcoSparkHub",
      subtitle: "Sustainability Tracking App",
      description: "An eco-friendly project tracking and energy consumption monitoring dashboard. Provides users with detailed real-time carbon footprint analytics using highly interactive minimal chart representations.",
      tags: ["Next.js", "Node.js", "Express", "TypeScript", "PostgreSQL"],
      github: "https://github.com/alhaz-431",
      live: "https://ecospark-frontend.vercel.app/",
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      challenges: "Designing real-time calculation matrices and responsive data visualization charts.",
    },
    {
      title: "Vehicle Rental System",
      subtitle: "Automobile Booking System",
      description: "A comprehensive solution for automobile rentals. Features modern live vehicle availability matrices, calendar booking schedulers, and multiple advanced query-filtering interfaces.",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Neon DB"],
      github: "https://github.com/alhaz-431",
      live: "https://vehicle-rental-system-five-psi.vercel.app/",
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600&auto=format&fit=crop",
      challenges: "Preventing double-booking conditions during high-concurrency requests.",
    },
    {
      title: "SportSync",
      subtitle: "High-Performance Backend API",
      description: "A blazingly fast backend system built with Go for real-time sports event tracking and team collaboration. Handles immense high-throughput requests efficiently.",
      tags: ["Golang", "Goroutines", "REST API", "PostgreSQL", "Docker"],
      github: "https://github.com/alhaz-431",
      live: "https://spotsync-tt7e.onrender.com",
      category: "backend",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop",
      challenges: "Leveraging Go channels and Goroutines for thread-safe live match updates.",
    }
  ];

  const certificates: Certificate[] = [
    {
      title: "Complete Web Development Course",
      issuer: "Programming Hero",
      date: "2025",
      credentialUrl: "https://programming-hero.com",
      skillsLearned: ["MERN Stack", "Redux", "Next.js", "REST APIs"]
    },
    {
      title: "Next.js & Prisma Enterprise Architect",
      issuer: "Online Verification",
      date: "2026",
      credentialUrl: "#",
      skillsLearned: ["Advanced Routing", "PostgreSQL Optimization", "Neon DB"]
    }
  ];

  const navLinks = [
    { href: "#about", label: ".about()", color: "text-slate-600 hover:text-emerald-600" },
    { href: "#skills", label: ".skills()", color: "text-blue-600 hover:text-blue-700" },
    { href: "#projects", label: ".projects()", color: "text-purple-600 hover:text-purple-700" },
    { href: "#certificates", label: ".awards()", color: "text-orange-600 hover:text-orange-700" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans selection:bg-emerald-500 selection:text-white relative overflow-hidden">
      
      {/* Background Decorative Light Blur Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] -z-10"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] -z-10"></div>

      {/* 1. Navbar with solid background + mobile hamburger menu */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r bg-white border-b border-emerald-700/30 shadow-md transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-lg shadow-sm group-hover:scale-105 transition-all">
              <Code className="text-white w-5 h-5" />
            </div>
            <span className="font-mono text-base tracking-widest font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
              ALHAZ<span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">.DEV</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-xs font-mono font-bold tracking-wider">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`${link.color} transition-colors hover:scale-105 transform`}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-5 py-2.5 rounded-xl hover:from-emerald-600 hover:to-teal-700 shadow-md shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5">
              Hire Me
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-emerald-600 hover:border-emerald-300 transition-all"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-emerald-500 to-teal-600 border-t border-emerald-700/30 px-6 py-5 flex flex-col gap-4 text-xs font-mono font-bold tracking-wider shadow-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`${link.color} transition-colors`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-5 py-2.5 rounded-xl hover:from-emerald-600 hover:to-teal-700 shadow-md shadow-emerald-500/20 transition-all"
            >
              Hire Me
            </a>
          </div>
        )}
      </nav>

      {/* 2. Hero Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 pt-20 pb-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12 min-h-[80vh]">
        <div className="space-y-6 flex-1">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 font-mono text-xs px-3 py-1.5 rounded-full border border-emerald-500/20 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" /> Available for Worldwide Remote Projects
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-slate-900">
            Hi, I'm <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Mohammad Alhaz Uddin</span>
          </h1>
          
          <h2 className="text-xl md:text-3xl font-bold text-slate-500 min-h-[40px]">
            I am a <span className="text-emerald-600 border-r-2 border-emerald-600 pr-1 animate-pulse">{subText}</span>
          </h2>
          
          <p className="max-w-xl text-slate-600 text-sm md:text-base leading-relaxed">
            I am a dedicated <span className="text-blue-600 font-semibold">Full Stack Developer</span> passionate about engineering scalable backend logic, architectural business flows, and highly secure database systems. I specialize in crafting robust apps using <span className="text-purple-600 font-semibold">Next.js, Node.js, Golang</span>, and <span className="text-emerald-600 font-semibold">PostgreSQL</span>.
          </p>
          
          <div className="pt-4 flex flex-wrap items-center gap-6">
            <a 
              href="/resume.pdf" 
              download
              className="flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white font-mono font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-slate-900/10 transition-all transform hover:-translate-y-0.5 text-xs uppercase tracking-wider"
            >
              <FileText className="w-4 h-4 text-emerald-400" /> Download Resume
            </a>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/alhaz-431" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-purple-600 hover:text-purple-800 hover:border-purple-300 shadow-sm hover:shadow transition-all" aria-label="GitHub">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/mohammad-alhaz-b27532393" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 hover:text-blue-800 hover:border-blue-300 shadow-sm hover:shadow transition-all" aria-label="LinkedIn">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="mailto:mohammadalhaz431@gmail.com" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 hover:text-emerald-800 hover:border-emerald-300 shadow-sm hover:shadow transition-all" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Premium Profile Frame */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 via-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-35 transition-opacity"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 via-blue-400 to-purple-500 rounded-2xl translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform -z-10"></div>
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl">
            <img 
              src="profile.png" 
              alt="Mohammad Alhaz Uddin" 
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 3. About My Journey */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <h3 className="font-mono text-emerald-600 font-bold text-xs tracking-widest mb-6 uppercase">01. About My Journey</h3>
        <div className="grid md:grid-cols-2 gap-8 text-slate-600 text-sm leading-relaxed">
          <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm space-y-3 hover:shadow-md transition-shadow">
            <h4 className="text-blue-600 font-bold flex items-center gap-2 text-base">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> The Transition
            </h4>
            <p>
              After completing my Bachelor's degree with Honors in Accounting, I transitioned into software development out of a deep curiosity for computing architectures. My commercial accounting background provides me a unique advantage in mapping complex business rules, processing transactions, and optimizing analytics structurally.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm space-y-3 hover:shadow-md transition-shadow">
            <h4 className="text-purple-600 font-bold flex items-center gap-2 text-base">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span> Capabilities
            </h4>
            <p>
              I take pride in translating user requirements into pixel-perfect interactive UI blueprints with Next.js & Tailwind CSS, backed by resilient, ultra-performant APIs written in Node.js or Go. I leverage modern tools like Cursor AI and database clients to iterate smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Core Toolkit Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <h3 className="font-mono text-blue-600 font-bold text-xs tracking-widest mb-8 uppercase">02. Core Toolkit</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-md transition-all border-t-4 border-t-emerald-500">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-4">
              <Terminal className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4">Frontend Frameworks</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-mono">
              <li className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-emerald-500" /> Next.js / React</li>
              <li className="flex items-center gap-2"><Code className="w-3.5 h-3.5 text-emerald-500" /> TypeScript</li>
              <li className="flex items-center gap-2"><Layers className="w-3.5 h-3.5 text-emerald-500" /> Tailwind CSS</li>
              <li className="flex items-center gap-2"><Code className="w-3.5 h-3.5 text-emerald-500" /> HTML5 / Modern CSS</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-md transition-all border-t-4 border-t-blue-500">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 mb-4">
              <Server className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4">Backend Ecosystem</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-mono">
              <li className="flex items-center gap-2"><Cpu className="w-3.5 h-3.5 text-blue-500" /> Golang (Go)</li>
              <li className="flex items-center gap-2"><Server className="w-3.5 h-3.5 text-blue-500" /> Node.js / Express.js</li>
              <li className="flex items-center gap-2"><Layers className="w-3.5 h-3.5 text-blue-500" /> Prisma ORM / REST APIs</li>
              <li className="flex items-center gap-2"><Code className="w-3.5 h-3.5 text-blue-500" /> JWT / Role-Based Auth</li>
            </ul>
          </div>

          {/* Database */}
          <div className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-md transition-all border-t-4 border-t-purple-500">
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 mb-4">
              <Database className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4">Database & Tools</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-mono">
              <li className="flex items-center gap-2"><Database className="w-3.5 h-3.5 text-purple-500" /> PostgreSQL / Neon DB</li>
              <li className="flex items-center gap-2"><Layers className="w-3.5 h-3.5 text-purple-500" /> pgAdmin / Git & GitHub</li>
              <li className="flex items-center gap-2"><Code className="w-3.5 h-3.5 text-purple-500" /> Cursor AI Editor</li>
              <li className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-purple-500" /> Photopea (Graphics)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Education */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <h3 className="font-mono text-purple-600 font-bold text-xs tracking-widest mb-6 uppercase">03. Education</h3>
        <div className="bg-white border border-slate-200 p-6 rounded-xl relative overflow-hidden shadow-sm hover:shadow-md transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
            <div>
              <h4 className="text-base font-bold text-slate-900">BBA (Honors) in Accounting</h4>
              <p className="text-xs text-slate-500 mt-0.5">Gouripur Government College, National University</p>
            </div>
            <span className="text-[11px] font-mono bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full border border-purple-200">
              CGPA: 2.94
            </span>
          </div>
        </div>
      </section>

      {/* 6. Product Cart Style Project Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <h3 className="font-mono text-emerald-600 font-bold text-xs tracking-widest uppercase flex items-center gap-2">
            <span>04.</span> Product Showcase Cart
          </h3>
          
          <div className="flex gap-1 bg-white p-1.5 rounded-xl border border-slate-200 text-[11px] font-mono shadow-sm">
            {['all', 'fullstack', 'backend'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg capitalize transition-all ${
                  activeTab === tab ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold shadow-sm' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects
            .filter(p => activeTab === 'all' || p.category === activeTab)
            .map((project, idx) => (
              <div 
                key={idx} 
                onClick={() => project.live !== '#' && window.open(project.live, '_blank')}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col cursor-pointer shadow-sm relative"
              >
                {/* Product Style Banner Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 z-20 text-[9px] font-mono bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Info details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">{project.title}</h4>
                      <span className="text-xs text-blue-600 font-mono font-medium">{project.subtitle}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">{project.description}</p>
                    
                    <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-[11px] mt-3">
                      <p className="text-slate-600"><strong className="text-purple-600 font-semibold">Core Architecture:</strong> {project.challenges}</p>
                    </div>
                  </div>

                  {/* Footer links inside card */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100" onClick={(e) => e.stopPropagation()}>
                    <div className="flex flex-wrap gap-1.5 max-w-[60%]">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[9px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-all" title="View Source">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-mono font-bold text-xs hover:from-emerald-600 hover:to-teal-700 transition-all shadow-sm">
                        Live Demo <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* 7. Achievements */}
      <section id="certificates" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <h3 className="font-mono text-orange-600 font-bold text-xs tracking-widest mb-8 uppercase flex items-center gap-2">
          <span>05.</span> Verified Achievements
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <div 
              key={idx}
              className="group bg-white border border-slate-200 p-6 rounded-xl hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-200">
                    <Calendar className="w-3 h-3 text-orange-500/70" /> {cert.date}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{cert.title}</h4>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">{cert.issuer}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skillsLearned.map((skill, i) => (
                    <span key={i} className="text-[9px] font-mono bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <a 
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 font-mono text-[11px] py-2.5 rounded-xl border border-slate-200 transition-colors"
                >
                  Verify Certificate <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          <div className="md:col-span-5 space-y-6">
            <div>
              <h3 className="font-mono text-emerald-600 font-bold text-xs tracking-widest uppercase mb-3">06. What's Next?</h3>
              <h2 className="text-3xl font-extrabold text-slate-900">Get In Touch</h2>
            </div>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              I am currently open to exciting remote full-time positions, contract assignments, and freelance opportunities. Drop a secure line if you want to collaborate on an elite build or just have a chat!
            </p>

            <div className="space-y-2.5 pt-2">
              <a href="mailto:mohammadalhaz431@gmail.com" className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all text-xs font-mono group">
                <div className="w-8 h-8 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Gmail</p>
                  <p className="text-slate-700 font-medium">mohammadalhaz431@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/mohammad-alhaz-b27532393" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all text-xs font-mono group">
                <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">LinkedIn</p>
                  <p className="text-slate-700 font-medium">mohammad-alhaz-b27532393</p>
                </div>
              </a>

              <a href="https://github.com/alhaz-431" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-sm transition-all text-xs font-mono group">
                <div className="w-8 h-8 rounded-md bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">GitHub</p>
                  <p className="text-slate-700 font-medium">github.com/alhaz-431</p>
                </div>
              </a>
            </div>

            {/* Direct Instant WhatsApp Chat Button */}
            <div className="pt-2">
              <a 
                href="https://wa.me/8801704460982" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-mono font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-md shadow-green-500/10 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 text-white" /> Direct WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Formspree Email Form */}
          <div className="md:col-span-7 bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-md">
            {/* REPLACE WITH YOUR FORMSPREE ID */}
            <form action="https://formspree.io/f/YOUR_UNIQUE_ID_HERE" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500/40 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500/40 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required 
                  placeholder="Project Collaboration"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500/40 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold">Your Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  required 
                  placeholder="Hello Alhaz, I'd love to talk about a project..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500/40 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-mono font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-md"
              >
                Send Message <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 9. Premium Footer with solid background color */}
      <footer className="border-t border-emerald-700/30 bg-gradient-to-r from-emerald-500 to-teal-600 pt-16 pb-8 text-xs font-mono text-white relative">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Code className="text-emerald-600 w-4 h-4" />
              <span className="font-mono text-sm tracking-wider font-bold text-slate-900">ALHAZ.DEV</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
              Engineering high performance software applications with structured database integrity and elegant pixel configurations.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 tracking-widest uppercase">Navigation</h4>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="#about" className="hover:text-emerald-600 transition-colors">// About Me</a></li>
              <li><a href="#skills" className="hover:text-blue-600 transition-colors">// Core Skills</a></li>
              <li><a href="#projects" className="hover:text-purple-600 transition-colors">// Showcases</a></li>
              <li><a href="#contact" className="hover:text-orange-600 transition-colors">// Get In Touch</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 tracking-widest uppercase">Top Showcases</h4>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="https://storefrontend-ten.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-emerald-600 transition-colors">MediStore</a></li>
              <li><a href="https://ecospark-frontend.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">EcoSparkHub</a></li>
              <li><a href="https://vehicle-rental-system-five-psi.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition-colors">Vehicle Rental</a></li>
              <li><a href="https://spotsync-tt7e.onrender.com" target="_blank" rel="noreferrer" className="hover:text-orange-600 transition-colors">SportSync API</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 tracking-widest uppercase">Identity Secure</h4>
            <p className="text-[11px] text-slate-600 font-sans">Mymensingh, Bangladesh</p>
            <p className="text-[11px] text-slate-800">mohammadalhaz431@gmail.com</p>
          </div>

        </div>

        <div className="max-w-6xl mx-auto px-6 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px]">
          <p>© 2026 Mohammad Alhaz Uddin. All system assets reserved locally.</p>
          <div className="flex gap-4">
            <a href="https://github.com/alhaz-431" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/mohammad-alhaz-b27532393" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  );
}