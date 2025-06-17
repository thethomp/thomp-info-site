import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, MapPin, Calendar, Users, Code, Brain, Zap, ChevronDown, ExternalLink, Sparkles, Cpu, Database, Cloud, Bot, Building, Award, Target, TrendingUp, Shield, Layers, Globe, Server, GitBranch, BookOpen, Star, Play, Settings, MonitorSpeaker } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [, setIsVisible] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Users },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Building },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const skillCategories = [
    {
      title: 'AI/ML & LLM Engineering',
      icon: Brain,
      color: 'from-yellow-500 to-amber-500',
      skills: [
        'OpenAI GPT Models', 'Anthropic Claude', 'Google Gemini', 'LLM Applications',
        'MCP Servers', 'AI Code Editors (Cursor, Windsurf)', 'Extensions (Cline, Roo)',
        'Prompt Engineering', 'AI Workflow Automation', 'Enterprise AI Infrastructure'
      ]
    },
    {
      title: 'Programming & Development',
      icon: Code,
      color: 'from-amber-500 to-orange-500',
      skills: [
        'Python', 'Java', 'SQL', 'JavaScript', 'Bash', '4D',
        'Django', 'REST APIs', 'SOAP Web Services', 'ETL Pipelines'
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      skills: [
        'AWS (S3, Glue, Lambda, Kinesis)', 'Google Cloud (GCS, PubSub)', 'Terraform',
        'Kubernetes', 'Docker', 'High Availability Systems', 'SLA Management'
      ]
    },
    {
      title: 'Data Technologies',
      icon: Database,
      color: 'from-yellow-600 to-amber-600',
      skills: [
        'Hadoop', 'MapReduce', 'Spark', 'Kafka', 'Snowflake', 'BigQuery',
        'Elasticsearch', 'Redis', 'Prefect', 'DBT', 'Hive', 'Pentaho'
      ]
    },
    {
      title: 'Monitoring & Analytics',
      icon: TrendingUp,
      color: 'from-amber-600 to-orange-600',
      skills: [
        'Datadog', 'InfluxDB', 'Zenoss', 'Real-time Analytics',
        'Performance Tuning', 'Observability Engineering', 'Data Visualization'
      ]
    },
    {
      title: 'Leadership & Strategy',
      icon: Users,
      color: 'from-orange-600 to-red-600',
      skills: [
        'Team Leadership', 'Technical Strategy', 'Cross-functional Collaboration',
        'AI Education & Training', 'Enterprise Architecture', 'Product Ownership'
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Senior Staff Machine Learning Software Engineer',
      company: 'PlayStation',
      period: 'August 2024 - Present',
      location: 'Remote',
      type: 'Full-time',
      color: 'from-yellow-600 to-amber-600',
      icon: MonitorSpeaker,
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/PlayStation-Logo.png',
      description: 'Leading AI transformation across all PlayStation studios, architecting enterprise-scale AI infrastructure serving 1500+ users.',
      achievements: [
        'Lead AI enablement initiatives across all PlayStation studios as technical lead for enterprise AI infrastructure and strategy',
        'Architect and maintain internal AI API gateway providing unified access to OpenAI, Anthropic, Google Gemini, and other state-of-the-art models',
        'Develop and host LLM web chat solutions serving 1500+ users across all studios and internal teams',
        'Design and implement central MCP server hosting to connect LLM applications with external data sources and systems',
        'Conduct AI education workshops covering AI code editors (Cursor, Windsurf), extensions (Cline, Roo), and prompt engineering',
        'Build LiveOps reporting solutions and automated insight generation from player feedback data at scale',
        'Lead outreach and discovery initiatives, building relationships with studios to identify AI opportunities'
      ],
      technologies: ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'LLM Applications', 'MCP Servers', 'Enterprise AI', 'LiveOps', 'Python']
    },
    {
      title: 'Co-Founder',
      company: 'Sudo Squad LLC',
      period: 'November 2024 - Present',
      location: 'Remote',
      type: 'Founder',
      color: 'from-amber-600 to-orange-600',
      icon: Sparkles,
      logo: 'https://www.sudosquad.com/favicon.ico',
      description: 'AI Engineering consulting company focused on helping organizations implement cutting-edge AI solutions.',
      achievements: [
        'Founded AI Engineering consulting company specializing in enterprise AI implementation',
        'Develop cutting-edge AI solutions for clients across various industries',
        'Provide strategic AI consulting and technical implementation services',
        'Focus on practical AI applications that deliver measurable business value'
      ],
      technologies: ['AI Consulting', 'Enterprise Solutions', 'Technical Leadership', 'Business Strategy'],
      website: 'https://www.sudosquad.com/'
    },
    {
      title: 'Data Architect',
      company: 'Bungie',
      period: 'August 2023 - August 2024',
      location: 'Bellevue, WA',
      type: 'Full-time',
      color: 'from-orange-600 to-red-600',
      icon: Shield,
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/Bungie-Logo.png',
      description: 'Architected LLM-powered workflows and AI-driven game development tools for Destiny franchise operations.',
      achievements: [
        'Architected and implemented LLM-powered LiveOps support workflows and ETL pipelines for analytics engineering teams',
        'Led development of AI-powered game development workflow tools including ProdSec ban appeal pipeline triaging',
        'Built automated player support ticket systems significantly improving support team efficiency',
        'Deployed company-wide LLM web chat solutions with private model endpoints',
        'Drove AI education and adoption initiatives across the studio, empowering teams with state-of-the-art models',
        'Designed machine learning applications for game operations and player support optimization'
      ],
      technologies: ['LLM Workflows', 'ETL Pipelines', 'AI Automation', 'Game Development Tools', 'Player Support Systems', 'Private Model Endpoints']
    },
    {
      title: 'Data Engineering Manager',
      company: 'ProbablyMonsters',
      period: 'June 2018 - August 2023',
      location: 'Bellevue, WA',
      type: 'Management',
      color: 'from-orange-600 to-yellow-700',
      icon: Building,
      logo: 'https://media.licdn.com/dms/image/v2/C560BAQGHCwfXJv9O5Q/company-logo_200_200/company-logo_200_200/0/1631358959778?e=2147483647&v=beta&t=YV6-mhD4p7BzLYrvyXuYtb-OFR9DFcLOdMH1d8iA8JA',
      description: 'Established and managed Data Insights team, architecting game-agnostic cloud-based analytics systems.',
      achievements: [
        'Established and managed the Data Insights team from inception, defining vision, goals, and engagement models',
        'Architected game-agnostic, end-to-end cloud-based data analytics system including schema management, data ingestion, data lake storage, ETL processing, and data warehousing',
        'Designed distributed telemetry data system handling logs, metrics, and crash information from internal systems, game clients, and servers',
        'Founded company\'s observability engineering discipline and scaled team operations across multiple partner studios',
        'Built comprehensive data infrastructure supporting multiple game development studios simultaneously'
      ],
      technologies: ['Team Management', 'Cloud Architecture', 'Data Analytics', 'Schema Management', 'Data Lake', 'ETL', 'Data Warehousing', 'Observability Engineering']
    },
    {
      title: 'Software Engineer, Product Owner',
      company: 'Bungie',
      period: 'April 2016 - May 2018',
      location: 'Bellevue, WA',
      type: 'Full-time',
      color: 'from-yellow-700 to-amber-700',
      icon: Target,
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/Bungie-Logo.png',
      description: 'Led data platform strategy and managed production infrastructure for Destiny franchise.',
      achievements: [
        'Led long-term roadmap and prioritization for Data Platforms Team supporting scalable data infrastructure for Destiny franchise',
        'Managed production Hadoop, Elasticsearch, and Redis clusters with focus on performance tuning and high availability',
        'Collaborated with engineering and studio leadership to align data platform strategy with business objectives',
        'Designed innovative data solutions and pipelines for evolving gaming franchise requirements',
        'Ensured SLA compliance and monitoring for mission-critical gaming infrastructure'
      ],
      technologies: ['Hadoop', 'Elasticsearch', 'Redis', 'Performance Tuning', 'High Availability', 'Data Platform Strategy', 'Product Management']
    },
    {
      title: 'Destiny Operations Lead',
      company: 'Bungie',
      period: 'November 2013 - April 2016',
      location: 'Bellevue, WA',
      type: 'Operations',
      color: 'from-yellow-600 to-orange-600',
      icon: Settings,
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/Bungie-Logo.png',
      description: 'Led 24/7 operations center monitoring all infrastructure supporting Destiny games.',
      achievements: [
        'Led 24/7 Destiny Operations Center monitoring all data center infrastructure supporting Destiny games',
        'Developed processes, procedures, and tools ensuring SLA compliance and high-quality player experience',
        'Built automation and monitoring for big data pipelines including real-time social media ingestion from Twitter and Reddit',
        'Created real-time data analysis and visualization tools for operational insights',
        'Managed critical gaming infrastructure serving millions of players worldwide'
      ],
      technologies: ['24/7 Operations', 'Infrastructure Monitoring', 'SLA Management', 'Big Data Pipelines', 'Real-time Analytics', 'Social Media Integration']
    },
    {
      title: 'Data Migration Software Engineer',
      company: 'LawLogix',
      period: 'May 2012 - August 2013',
      location: 'Seattle, WA',
      type: 'Full-time',
      color: 'from-amber-700 to-orange-700',
      icon: Database,
      logo: 'https://www.lawlogix.com/wp-content/uploads/2016/04/lawlogix-logo.png',
      description: 'Engineered data migration solutions and enterprise integrations.',
      achievements: [
        'Engineered robust data migration solutions for transforming client data to LawLogix Guardian platform',
        'Developed automation software using Python, Bash, and 4D for enterprise data migrations',
        'Led Oracle Taleo integration with LawLogix Guardian using SOAP web services',
        'Architected Django-driven data migration system replacing legacy 4D codebase'
      ],
      technologies: ['Data Migration', 'Python', 'Bash', '4D', 'Django', 'Oracle Taleo', 'SOAP Web Services', 'Legacy System Modernization']
    },
    {
      title: 'Software Developer',
      company: 'Cognizant Technology Solutions',
      period: 'January 2011 - May 2012',
      location: 'Seattle, WA',
      type: 'Full-time',
      color: 'from-orange-700 to-red-700',
      icon: Cloud,
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Cognizant-Logo.png',
      description: 'Developed cloud infrastructure and monitoring systems for high-traffic analytical platforms.',
      achievements: [
        'Developed cloud infrastructure for high-traffic analytical business data using Hadoop, MapReduce, Hive, Pentaho, and AWS',
        'Built comprehensive monitoring system with customized Zenoss including full failover support for data center outages',
        'Worked in fast-paced Agile environment serving top international search engine company',
        'Implemented scalable solutions for big data processing and analytics'
      ],
      technologies: ['Hadoop', 'MapReduce', 'Hive', 'Pentaho', 'AWS', 'Zenoss', 'Agile Development', 'Big Data Analytics']
    }
  ];

  const education = {
    degree: 'Research Assistant',
    institution: 'University of Arizona Computer Vision Lab',
    period: '2007 - 2010',
    description: 'Developed dynamic string matching algorithms for presentation slide and speech recognition alignment.',
    publication: 'Published research: "Improving and aligning speech with presentation slides," International Conference on Pattern Recognition 2010 (ICPR)',
    technologies: ['Computer Vision', 'String Matching Algorithms', 'Speech Recognition', 'Research Publication']
  };

  const FloatingOrbs = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-64 h-64 rounded-full opacity-20 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${['#F59E0B', '#F97316', '#EAB308', '#FBBF24'][i % 4]}40 0%, transparent 70%)`,
            left: `${(i * 15) % 100}%`,
            top: `${(i * 20) % 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i * 0.5}s`
          }}
        />
      ))}
    </div>
  );

  const GradientText = ({ children, className = "" }) => (
    <span className={`bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );

  const GlassCard = ({ children, className = "", hover = true }) => (
    <div className={`
      backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6
      shadow-2xl transition-all duration-500
      ${hover ? 'hover:bg-white/20 hover:border-white/30 hover:shadow-purple-500/20 hover:shadow-2xl hover:scale-105' : ''}
      ${className}
    `}>
      {children}
    </div>
  );

  const MouseTracker = () => (
    <div
      className="fixed pointer-events-none z-10 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 opacity-60 blur-sm transition-all duration-75"
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-orange-900 text-white relative overflow-hidden">
      <FloatingOrbs />
      <MouseTracker />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'backdrop-blur-xl bg-black/20 border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-center">
            <div className="flex items-center gap-1 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full p-2 shadow-2xl">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg'
                      : 'hover:bg-white/20 text-gray-300 hover:text-white'
                  }`}
                >
                  <item.icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                    activeSection === item.id ? 'text-white' : ''
                  }`} />
                  <span className="text-sm font-medium hidden sm:block">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-yellow-400/30 shadow-2xl shadow-yellow-500/20">
                  <img 
                    src="/headshot.png" 
                    alt="Mike Thompson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-full blur-lg -z-10" />
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black relative text-center md:text-left">
                <GradientText>Mike</GradientText>
                <br />
                <GradientText>Thompson</GradientText>
              </h1>
            </div>
          </div>
          
          <div className="relative">
            <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-300">
              Senior Staff <span className="text-yellow-400">Machine Learning</span> Software Engineer
            </h2>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl md:text-2xl mb-6 text-gray-300 leading-relaxed">
                <span className="text-green-400 font-semibold">13+ years</span> of experience designing, building, and operating production data systems and AI/ML solutions.
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Currently leading AI transformation at <span className="text-blue-400 font-semibold">PlayStation</span>, 
                developing enterprise-scale AI infrastructure, and empowering <span className="text-green-400 font-semibold">1500+ users</span> 
                across all studios with cutting-edge AI tooling and workflows.
              </p>
            </div>
            
            <div className="flex justify-center gap-6 mb-12 flex-wrap">
              <a href="mailto:met600@gmail.com" className="group flex items-center gap-2 bg-yellow-600/20 hover:bg-yellow-600/40 px-6 py-3 rounded-full transition-all duration-300 hover:scale-110">
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Contact</span>
              </a>
              <a href="https://github.com/thethomp/" className="group flex items-center gap-2 bg-gray-600/20 hover:bg-gray-600/40 px-6 py-3 rounded-full transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/michael-thompson-6a42532b/" className="group flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/40 px-6 py-3 rounded-full transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a href="https://www.sudosquad.com/" className="group flex items-center gap-2 bg-green-600/20 hover:bg-green-600/40 px-6 py-3 rounded-full transition-all duration-300 hover:scale-110">
                <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Sudo Squad</span>
              </a>
            </div>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-yellow-400" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <GradientText>Technical Expertise</GradientText>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <GlassCard key={category.title} className="group h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <GradientText>Professional Experience</GradientText>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <GlassCard key={index} className="group">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} shadow-lg`}>
                        <exp.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm font-medium`}>
                        {exp.period}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-3 mb-2">
                      {exp.logo && (
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-8 h-8 rounded-lg object-contain bg-white/10 p-1"
                          onError={(e) => { e.target.style.display = 'none' }}
                        />
                      )}
                      <p className="text-yellow-400 text-lg font-medium">{exp.company}</p>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{exp.location} • {exp.type}</p>
                    {exp.website && (
                      <a href={exp.website} className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
                        <ExternalLink className="w-4 h-4" />
                        Visit Website
                      </a>
                    )}
                  </div>
                  
                  <div className="lg:w-2/3">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-yellow-300">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300">
                            <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-gray-400">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Research Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <GradientText>Education & Research</GradientText>
          </h2>
          
          <GlassCard className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{education.degree}</h3>
                <p className="text-yellow-400 text-lg font-medium">{education.institution}</p>
                <p className="text-gray-400">{education.period}</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg mb-4">{education.description}</p>
            
            <div className="bg-gradient-to-r from-yellow-600/20 to-amber-600/20 rounded-lg p-4 mb-6">
              <h4 className="text-lg font-semibold mb-2 text-yellow-300">Published Research:</h4>
              <p className="text-gray-300">{education.publication}</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {education.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            <GradientText>Let's Connect</GradientText>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Ready to discuss AI innovation, enterprise architecture, or cutting-edge ML solutions?
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="mailto:met600@gmail.com" className="group">
              <GlassCard className="flex items-center gap-4 hover:scale-105 transition-all duration-300 text-left">
                <Mail className="w-8 h-8 text-yellow-400 group-hover:rotate-12 transition-transform" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300 text-sm">met600@gmail.com</p>
                </div>
              </GlassCard>
            </a>
            
            <a href="https://www.sudosquad.com/" className="group">
              <GlassCard className="flex items-center gap-4 hover:scale-105 transition-all duration-300 text-left">
                <ExternalLink className="w-8 h-8 text-blue-400 group-hover:rotate-12 transition-transform" />
                <div>
                  <p className="font-semibold">Consulting</p>
                  <p className="text-gray-300 text-sm">Sudo Squad LLC</p>
                </div>
              </GlassCard>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;