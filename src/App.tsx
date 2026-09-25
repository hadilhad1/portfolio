import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  ChevronRight,
  Download,
  Globe,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react'
import './App.css'

type SkillGroup = {
  title: string
  items: string[]
}

type Project = {
  id: string
  number: string
  name: string
  category: string
  summary: string
  technologies: string[]
  details: string[]
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const philosophy = ['BUILD', 'AUTOMATE', 'DEPLOY', 'MONITOR', 'IMPROVE']

const experience = [
  {
    role: 'Junior DevOps Engineer',
    company: '2Cloud',
    date: 'Sep 2025 – Present',
    location: 'Mananthavady, Wayanad',
    responsibilities: [
      'Managed AWS infrastructure including EC2, S3, RDS, IAM and VPC.',
      'Worked with Google Cloud services including Cloud Run, Cloud Build, Pub/Sub, Cloud SQL, Cloud Storage and Artifact Registry for application deployment and cloud infrastructure.',
      'Built and maintained CI/CD pipelines using Jenkins and Git.',
      'Deployed Magento applications using Docker and Docker Compose.',
      'Supported Kubernetes/EKS deployments.',
      'Automated MySQL backup, restore and migration processes.',
      'Monitored systems using AWS CloudWatch.',
    ],
  },
  {
    role: 'DevOps Intern',
    company: 'BridgeSkill',
    date: 'May 2025 – Sep 2025',
    location: 'Mananthavady, Wayanad',
    responsibilities: [
      'Worked with AWS EC2, S3 and IAM.',
      'Developed CI/CD pipelines using Jenkins and Git.',
      'Deployed applications using Docker and Docker Compose.',
      'Worked with Kubernetes Pods and deployments.',
      'Managed MySQL backup and restore operations.',
      'Monitored server performance using CloudWatch.',
    ],
  },
]

const projects: Project[] = [
  {
    id: 'project-01',
    number: 'PROJECT 01',
    name: 'SCALABLE MAGENTO ECOMMERCE PLATFORM',
    category: 'DevOps / AWS / Kubernetes',
    summary:
      'Designed and deployed a scalable Magento eCommerce platform with containerization, Kubernetes orchestration, infrastructure automation and production monitoring.',
    technologies: [
      'AWS',
      'EKS',
      'Docker',
      'Helm',
      'Terraform',
      'RDS',
      'S3',
      'CloudWatch',
      'Redis',
      'Varnish',
      'Cloudflare',
      'Jenkins',
      'GitHub Actions',
      'ArgoCD',
    ],
    details: [
      'Designed and deployed Magento on AWS EKS.',
      'Used Docker and Helm for containerized deployments.',
      'Provisioned infrastructure using Terraform.',
      'Used RDS and S3.',
      'Implemented CI/CD using Jenkins, GitHub Actions and ArgoCD.',
      'Integrated CloudWatch monitoring and Slack alerts.',
      'Worked on AWS cost optimization.',
      'Used Cloudflare CDN, Redis and Varnish for performance and caching.',
      'Targeted high availability and reliable production operation.',
    ],
  },
  {
    id: 'project-02',
    number: 'PROJECT 02',
    name: 'AI CHATBOT DEPLOYMENT',
    category: 'Kubernetes / CI/CD / AWS',
    summary:
      'Deployed an AI chatbot using Kubernetes-based microservices and automated CI/CD workflows.',
    technologies: ['AWS EKS', 'Kubernetes', 'Helm', 'Docker', 'Jenkins', 'Nginx Ingress', 'Load Balancer', 'ECR', 'IAM', 'RBAC'],
    details: [
      'Deployed the AI chatbot on AWS EKS.',
      'Used Kubernetes Deployments, Services and ConfigMaps.',
      'Created CI/CD pipelines using Docker, Jenkins and Helm.',
      'Configured Nginx Ingress and Load Balancer.',
      'Used IAM, RBAC, ECR and namespace isolation.',
    ],
  },
  {
    id: 'project-03',
    number: 'PROJECT 03',
    name: 'ODOO 18 KUBERNETES DEPLOYMENT',
    category: 'Kubernetes / AWS / Infrastructure Automation',
    summary:
      'Automated the deployment of Odoo 18 using Kubernetes, Docker, Helm and Terraform.',
    technologies: ['AWS EC2', 'EKS', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'AWS EBS', 'Jenkins'],
    details: [
      'Provisioned infrastructure using Terraform and AWS EC2.',
      'Deployed Odoo on Kubernetes/EKS.',
      'Used Docker and Helm.',
      'Configured Persistent Volumes and Persistent Volume Claims using AWS EBS.',
      'Automated build, deployment and rollback workflows.',
    ],
  },
  {
    id: 'project-04',
    number: 'PROJECT 04',
    name: 'GCP CLOUD APPLICATION PLATFORM',
    category: 'GCP / Cloud Run / Cloud Build / Pub/Sub / Cloud SQL / Cloud Storage',
    summary:
      'Designed and deployed a cloud-native application environment on Google Cloud using managed compute, automated builds, messaging, database and object storage services.',
    technologies: [
      'Google Cloud Platform',
      'Cloud Run',
      'Cloud Build',
      'Artifact Registry',
      'Cloud SQL',
      'Cloud Storage / GCS',
      'Pub/Sub',
      'Cloud Run Functions',
      'VPC',
      'IAM',
      'Secret Manager',
    ],
    details: [
      'Worked with Cloud Run services.',
      'Configured containerized web/API applications for Cloud Run.',
      'Worked with Cloud Build for automated builds.',
      'Used Artifact Registry for container/package storage.',
      'Worked with Cloud SQL.',
      'Created and used Pub/Sub topics including email-notifications and tenant-provisioner.',
      'Worked with Cloud Run / serverless functions.',
      'Worked with Cloud Storage / S3-style object storage requirements.',
      'Worked with environment variables and secrets.',
      'Worked with production/staging cloud environments.',
      'Worked with regional migration and cloud infrastructure configuration.',
    ],
  },
  {
    id: 'project-05',
    number: 'PROJECT 05',
    name: 'OPENSEARCH BACKUP AUTOMATION',
    category: 'AWS / Lambda / OpenSearch / S3 / Automation',
    summary:
      'Automated OpenSearch snapshot backup workflows and integrated operational notifications.',
    technologies: ['AWS Lambda', 'OpenSearch', 'S3', 'Python', 'Boto3', 'AWS IAM', 'Slack'],
    details: [
      'Snapshot backup automation',
      'S3 integration',
      'AWS Lambda',
      'Slack notification integration',
      'Operational automation',
    ],
  },
]

const skillGroups: SkillGroup[] = [
  { title: 'CLOUD', items: ['AWS', 'GCP', 'Azure'] },
  { title: 'CONTAINERS', items: ['Docker', 'Docker Compose', 'Kubernetes', 'EKS'] },
  { title: 'CI/CD', items: ['Jenkins', 'GitHub Actions', 'ArgoCD', 'Cloud Build'] },
  { title: 'INFRASTRUCTURE', items: ['Nginx', 'Apache', 'Linux'] },
  { title: 'DATABASE', items: ['MySQL', 'PostgreSQL'] },
  { title: 'MONITORING', items: ['Prometheus', 'Grafana', 'AWS CloudWatch', 'System Monitoring'] },
  { title: 'NETWORKING', items: ['VPC', 'Load Balancers', 'DNS', 'Security Groups'] },
  { title: 'SCRIPTING', items: ['Bash', 'Python'] },
  { title: 'VERSION CONTROL', items: ['Git', 'GitHub', 'Bitbucket', 'Terraform'] },
]

const otherBuiltItems = [
  'OpenSearch upgrade on AWS EKS using blue-green deployment.',
  'Helm chart creation and maintenance.',
  'Dev and UAT environment support.',
  'Magento order-flow monitoring.',
  'MySQL backup, restore and migration.',
  'AWS infrastructure monitoring.',
  'CI/CD automation.',
  'Dockerized applications.',
  'Kubernetes deployments.',
]

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedProject, setExpandedProject] = useState<number | null>(0)
  const [activeSection, setActiveSection] = useState('home')
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null)

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150

      let current = 'home'
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop
        const height = (section as HTMLElement).offsetHeight

        if (scrollPosition >= top && scrollPosition < top + height) {
          current = section.id || 'home'
        }
      })

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="page-shell">
      <div className="butterfly-field" aria-hidden="true">
        <span className="butterfly butterfly-one"><i /></span>
        <span className="butterfly butterfly-two"><i /></span>
        <span className="butterfly butterfly-three"><i /></span>
        <span className="butterfly butterfly-four"><i /></span>
        <span className="butterfly butterfly-five"><i /></span>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="Muhammed Hadil T T home">
            <span className="brand-mark">M</span>
            <span className="brand-text">Muhammed Hadil T T</span>
          </a>

          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={activeSection === item.href.replace('#', '') ? 'active' : ''}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="container hero-grid">
            <motion.div
              className="hero-copy"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <motion.p className="eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
                DEVOPS ENGINEER
              </motion.p>

              <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}>
                <span>BUILDING</span>
                <span>RELIABLE</span>
                <span>CLOUD SYSTEMS.</span>
              </motion.h1>

              <motion.p className="lead" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.28 }}>
                I build, automate and maintain reliable cloud infrastructure, containerized applications and CI/CD workflows across AWS and GCP.
              </motion.p>

              <motion.div className="cta-row" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}>
                <a href="#projects" className="primary-btn">
                  VIEW MY WORK
                  <ArrowRight size={18} />
                </a>
                <a href="#contact" className="secondary-btn">
                  LET&apos;S CONNECT
                </a>
              </motion.div>

              <motion.div className="hero-meta" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.42 }}>
                <div>
                  <MapPin size={16} />
                  <span>Kannur, Kerala, India</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={reduceMotion ? false : { opacity: 0, x: 30 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            >
              <div className="profile-frame">
                <img
                  className="profile-image"
                  src="/assets/images/profile-photo.jpg?v=2"
                  alt="Muhammed Hadil T T"
                />
              </div>
              <span className="profile-orbit profile-orbit-secondary" aria-hidden="true"></span>
              <span className="profile-orbit profile-orbit-primary" aria-hidden="true"></span>
            </motion.div>
          </div>
        </section>

        <section id="about" className="about-section section-spacing">
          <div className="container narrow">
            <motion.div className="section-intro about-intro" {...(reduceMotion ? {} : reveal)}>
              <p className="eyebrow">ABOUT</p>
              <h2>
                I BUILD THE SYSTEMS
                {' '}<span>THAT KEEP</span>
                {' '}<span>APPLICATIONS MOVING.</span>
              </h2>
            </motion.div>

            <motion.div className="about-copy" {...(reduceMotion ? {} : reveal)}>
              <p>
                I&apos;m a DevOps Engineer focused on cloud infrastructure, containerization, CI/CD automation and reliable production deployments.
              </p>
              <p>
                My work spans AWS, Azure and GCP, with practical experience in Docker, Kubernetes, Helm, Terraform, Jenkins, GitHub Actions and production-ready cloud systems.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="experience-section section-spacing">
          <div className="container">
            <motion.div className="section-intro" {...(reduceMotion ? {} : reveal)}>
              <p className="eyebrow">EXPERIENCE</p>
              <h2>
                INFRASTRUCTURE WORK SHAPED
                <br />
                {' '}BY REAL PRODUCTION
                <br />
                {' '}ENVIRONMENTS.
              </h2>
            </motion.div>

            <div className="timeline">
              {experience.map((item) => (
                <motion.article key={item.company} className="timeline-item" {...(reduceMotion ? {} : reveal)}>
                  <div className="timeline-dot" aria-hidden="true"></div>
                  <div className="timeline-content">
                    <div className="timeline-topline">
                      <span className="timeline-role">{item.role}</span>
                      <span className="timeline-company">{item.company}</span>
                    </div>
                    <div className="timeline-meta">
                      <span>{item.date}</span>
                      <span>{item.location}</span>
                    </div>
                    <ul>
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section section-spacing">
          <div className="container">
            <motion.div className="section-intro" {...(reduceMotion ? {} : reveal)}>
              <p className="eyebrow">PROJECTS</p>
              <h2>Cloud systems designed for scale, reliability and automation.</h2>
            </motion.div>

            <div className="projects-list">
              {projects.map((project, index) => {
                const isExpanded = expandedProject === index

                return (
                  <motion.article
                    key={project.id}
                    className={`project-card ${isExpanded ? 'is-open' : ''}`}
                    {...(reduceMotion ? {} : reveal)}
                  >
                    <div className="project-topline">
                      <span className="project-number">{project.number}</span>
                      <span className="project-category">{project.category}</span>
                    </div>

                    <h3>{project.name}</h3>
                    <p className="project-summary">{project.summary}</p>

                    <div className="tech-tags">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="expand-button"
                      onClick={() => setExpandedProject(isExpanded ? null : index)}
                      aria-expanded={isExpanded}
                    >
                      <span>View Case Study</span>
                      <ChevronRight size={16} />
                    </button>

                    {isExpanded && (
                      <div className="project-details">
                        <ul>
                          {project.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="other-built-section section-spacing">
          <div className="container">
            <motion.div className="section-intro" {...(reduceMotion ? {} : reveal)}>
              <p className="eyebrow">OTHER THINGS I&apos;VE BUILT &amp; SUPPORTED</p>
              <h2>Operational support and infrastructure work beyond the headline projects.</h2>
            </motion.div>

            <div className="other-built-grid">
              {otherBuiltItems.map((item) => (
                <motion.div key={item} className="other-built-item" {...(reduceMotion ? {} : reveal)}>
                  <span className="check-icon">✓</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section section-spacing">
          <div className="container">
            <motion.div className="section-intro" {...(reduceMotion ? {} : reveal)}>
              <p className="eyebrow">SKILLS</p>
              <h2>Practiced across infrastructure, tooling and deployment workflows.</h2>
            </motion.div>

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <motion.div key={group.title} className="skill-card" {...(reduceMotion ? {} : reveal)}>
                  <h3>{group.title}</h3>
                  <div className="skill-items">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="how-section section-spacing">
          <div className="container">
            <motion.div className="section-intro" {...(reduceMotion ? {} : reveal)}>
              <p className="eyebrow">ENGINEERING PHILOSOPHY</p>
              <h2>Thoughtful engineering from build to operation.</h2>
            </motion.div>

            <div className="workflow-grid philosophy-grid">
              {philosophy.map((step, index) => (
                <motion.article key={step} className="workflow-card philosophy-card" {...(reduceMotion ? {} : reveal)}>
                  <span className="workflow-number">0{index + 1}</span>
                  <h3>{step}</h3>
                  <p>
                    {step === 'BUILD' && 'Create reliable infrastructure.'}
                    {step === 'AUTOMATE' && 'Remove repetitive manual work.'}
                    {step === 'DEPLOY' && 'Make releases predictable.'}
                    {step === 'MONITOR' && 'Understand what is happening in production.'}
                    {step === 'IMPROVE' && 'Continuously improve reliability and efficiency.'}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="resume-section section-spacing">
          <div className="container resume-box">
            <motion.div className="resume-copy" {...(reduceMotion ? {} : reveal)}>
              <p className="eyebrow">MY EXPERIENCE, IN ONE DOCUMENT</p>
              <h2>Resume available for deeper context.</h2>
            </motion.div>
            <motion.a href="/resume.pdf" className="download-btn" download {...(reduceMotion ? {} : reveal)}>
              <Download size={18} />
              Download Resume
            </motion.a>
          </div>
        </section>

        <section id="contact" className="contact-section section-spacing">
          <div className="container">
            <motion.div className="final-cta" {...(reduceMotion ? {} : reveal)}>
              <p className="eyebrow">CONTACT</p>
              <h2>LET&apos;S BUILD<br />SOMETHING RELIABLE.</h2>
              <p>
                Have a cloud project, deployment workflow or infrastructure challenge? Let&apos;s connect.
              </p>

              <div className="contact-grid">
                <a href="mailto:mhadiltt@gmail.com">
                  <Mail size={18} />
                  <span>mhadiltt@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/hadil-t-t-29031b366" target="_blank" rel="noreferrer">
                  <Globe size={18} />
                  <span>LinkedIn</span>
                </a>
                <a href="tel:+918943301772">
                  <Phone size={18} />
                  <span>+91 8943301772</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
