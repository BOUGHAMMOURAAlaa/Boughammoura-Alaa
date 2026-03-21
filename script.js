// ================================================
// TRANSLATIONS
// ================================================
const translations = {
    en: {
        navHome:"Home", navAbout:"About", navSkills:"Skills", navProjects:"Projects",
        navExperience:"Experiences", navEducation:"Educations", navCertifications:"Certifications",
        navContact:"Contact", navMore:"More",
        heroSubtitle:"Junior Data Engineer",
        heroDescription:"Final-year IT Engineering student (graduating 2026). Specialized in building scalable data pipelines, modern ETL/ELT workflows, and robust data platforms. Experienced with AWS, Snowflake, Python, and dbt. Actively seeking a first CDI as a Data Engineer to drive data automation and analytics.",
        btnDownload:"Download CV", btnViewWork:"View my work", btnGetInTouch:"Get in touch",
        sectionAbout:"About me",
        aboutText1:"I'm a passionate Data Engineer currently in my final year of IT Engineering at CY Tech. My journey in technology has led me to specialize in building scalable data pipelines, modern ETL/ELT workflows, and robust cloud data platforms.",
        aboutText2:"Skilled in cloud-native data solutions using AWS, Snowflake, Python, and dbt. I am actively seeking a first full-time opportunity (CDI) to design, automate, and optimize data architectures that drive advanced analytics and business innovation.",
        statProjects:"Projects Completed", statRepos:"GitHub Repositories", statTech:"Technologies Mastered",
        sectionSkills:"Technical skills",
        skillsProgramming:"Programming Languages", skillsData:"Data Engineering", skillsWeb:"Web Technologies",
        skillsCloud:"Cloud & Virtualization", skillsContainers:"Containers & Orchestration",
        skillsIAC:"Infrastructure as Code (IaC)", skillsDevOps:"CI/CD & DevOps",
        skillsSystems:"Systems & Networks", skillsSecurity:"Monitoring & Security",
        sectionProjects:"Featured projects", projectDetails:"View Details",
        projectIaCTitle:"Automated Infrastructure & App Deployment",
        projectIaCDesc:"Engineered a fully automated end-to-end deployment pipeline. Provisioned a multi-tier architecture (App & DB VMs) using Terraform and managed configuration, PostgreSQL database setup, and Python API deployment via custom Ansible roles with dynamic inventory.",
        projectGcpTitle:"Automated CI/CD Pipeline on GCP",
        projectGcpDesc:"Designed and implemented a fully automated CI/CD pipeline on Google Cloud Platform. Configured Cloud Build to automatically build, test, and deploy containerized applications to Cloud Run upon Git pushes, including versioning and rollback strategies.",
        project1Title:"Deploying a CI/CD Pipeline with a Managed Deployment Stage",
        project1Desc:"Implemented a CI/CD pipeline on AWS using CDK with automated build, test reporting, containerization, and deployment stages including manual approvals.",
        project2Title:"Design and Development of a Highly Available Architecture",
        project2Desc:"Developed a highly available and scalable web application on AWS, emphasizing reliability, performance, and fault tolerance using cloud-native architecture.",
        project3Title:"Development of a Human Resource Management Platform",
        project3Desc:"Developed a modular HR management platform enabling employee, leave, and role-based access management.",
        project5Title:"FootieFun - Football Match Management",
        project5Desc:"Web application for managing football matches, teams, and players. Implemented RESTful APIs with Django.",
        sectionExperience:"Experiences",
        expPfeTitle:"Data Engineer Snowflake (End-of-Studies Internship)", expPfeCompany:"ATOS — France", expPfeDate:"March 2026 – September 2026",
        expPfeList1:"Contributed to the architecture of a modern Data Platform, focusing on robust data modeling and efficient data preparation.",
        expPfeList2:"Engineered and optimized scalable data pipelines utilizing AWS, Python, and Snowflake to streamline data ingestion and transformation.",
        expPfeList3:"Implemented CI/CD workflows tailored for data projects, ensuring code quality and reliable automated deployments.",
        expPfeList4:"Orchestrated cloud services to automate complex data workflows and enhance overall platform reliability.",
        exp1Title:"Cloud and DevOps Engineer", exp1Company:"SofiaTech — Tunisia", exp1Date:"July 2025 – August 2025",
        exp1List1:"Designed and deployed a scalable microservices architecture using AWS to enhance modularity and performance.",
        exp1List2:"Implemented automated CI/CD pipelines with AWS CodePipeline and CodeBuild for reliable deployments.",
        exp2Title:"Full Stack Developer", exp2Company:"MOBELITE LABS — Tunisia", exp2Date:"July 2024 – August 2024",
        exp2List1:"Developed a modern mobile music streaming app with smooth UI, audio player, playlist management, and dynamic data fetching via REST API.",
        exp2List2:"Contributed to all project phases including design, development, testing, and continuous user experience improvement.",
        sectionEducation:"Educations",
        edu1Title:"National Engineering Degree in Computer Science — Exchange Semester", edu1School:"CY Tech, CY Cergy Paris University", edu1Date:"2025 – 2026",
        edu1Desc:"Selected for an international exchange program at CY Tech, focusing on Cloud Computing and DevOps. Gained hands-on experience with AWS services, Infrastructure as Code, CI/CD automation, and scalable web architectures. This experience strengthened my adaptability in a multicultural environment and deepened my expertise in cloud-native engineering practices.",
        edu2Title:"National Engineering Degree in Computer Science", edu2School:"School of High-Tech and Smart Data — SESAME", edu2Date:"2023 – 2025",
        edu2Desc:"Specializing in DevOps/Cloud, IT automation, Data and LLMs. Courses include Algorithms, Databases, Networking and Communications, Web, Cloud, DevOps, Data and AI.",
        edu3Title:"Preparatory Classes for Engineering Schools", edu3School:"Faculty of Science of Monastir", edu3Date:"2021 – 2023",
        edu3Desc:"Ranked 591th in the Preparatory National Entrance Exam for Engineering Programs. Courses included Linear Algebra, Programming and Data Structures, Physics, Mathematics.",
        sectionCertifications:"Certifications",
        cert1Title:"AWS Certified Cloud Practitioner", cert2Title:"AWS Academy Graduate — Cloud Developing",
        cert3Title:"AWS Academy — Microservices & CI/CD Pipeline", cert4Title:"AWS Academy Cloud Foundations",
        cert5Title:"KodeKloud DevOps Courses", cert6Title:"IT Specialist — JavaScript",
        sectionContact:"Get in touch",
        contactNamePlaceholder:"Your Name", contactEmailPlaceholder:"Your Email", contactMessagePlaceholder:"Your Message",
        contactSend:"Send Message",
        footerBuilt:"Built with passion and modern technologies", footerRights:"All rights reserved.",
        appearanceLabel:"Appearance"
    },
    fr: {
        navHome:"Accueil", navAbout:"À propos", navSkills:"Compétences", navProjects:"Projets",
        navExperience:"Expériences", navEducation:"Formations", navCertifications:"Certifications",
        navContact:"Contact", navMore:"Plus",
        heroSubtitle:"Ingénieur Data Junior",
        heroDescription:"Étudiant en dernière année d'ingénierie informatique (promotion 2026). Spécialisé dans la construction de pipelines de données évolutifs, de flux ETL/ELT modernes et de plateformes de données robustes. Expérimenté avec AWS, Snowflake, Python et dbt. Actuellement à la recherche d'un premier CDI en tant qu'ingénieur Data pour développer l'automatisation et l'analyse des données.",
        btnDownload:"Télécharger CV", btnViewWork:"Voir mes projets", btnGetInTouch:"Contact",
        sectionAbout:"À propos",
        aboutText1:"Je suis un ingénieur Data passionné, actuellement en dernière année d'ingénierie informatique à CY Tech. Mon parcours dans la technologie m'a amené à me spécialiser dans la construction de pipelines de données évolutifs, de flux ETL/ELT modernes et de plateformes de données cloud robustes.",
        aboutText2:"Compétent dans les solutions de données cloud natives utilisant AWS, Snowflake, Python et dbt, je suis activement à la recherche d'un premier CDI pour concevoir, automatiser et optimiser des architectures de données qui favorisent l'analyse avancée et l'innovation métier.",
        statProjects:"Projets réalisés", statRepos:"Dépôts GitHub", statTech:"Technologies maîtrisées",
        sectionSkills:"Compétences techniques",
        skillsProgramming:"Langages de programmation", skillsData:"Ingénierie des données", skillsWeb:"Technologies web",
        skillsCloud:"Cloud et virtualisation", skillsContainers:"Conteneurs et orchestration",
        skillsIAC:"Infrastructure as Code (IaC)", skillsDevOps:"CI/CD et DevOps",
        skillsSystems:"Systèmes et réseaux", skillsSecurity:"Supervision et sécurité",
        sectionProjects:"Projets académiques", projectDetails:"Voir les détails",
        projectIaCTitle:"Déploiement automatisé d'infrastructure et d'application",
        projectIaCDesc:"Conception d'un pipeline de déploiement de bout en bout entièrement automatisé. Provisionnement d'une architecture multi-niveaux avec Terraform, installation de PostgreSQL et déploiement de l'API Python via des rôles Ansible personnalisés avec inventaire dynamique.",
        projectGcpTitle:"Pipeline CI/CD automatisé sur GCP",
        projectGcpDesc:"Conception et mise en œuvre d'un pipeline CI/CD entièrement automatisé sur Google Cloud Platform avec des stratégies de versionnage et de retour arrière.",
        project1Title:"Déploiement d'un pipeline CI/CD avec une étape de déploiement géré",
        project1Desc:"Mise en œuvre d'un pipeline CI/CD sur AWS à l'aide de CDK avec validations manuelles.",
        project2Title:"Conception et développement d'une architecture hautement disponible",
        project2Desc:"Développement d'une application web hautement disponible et évolutive sur AWS.",
        project3Title:"Développement d'une plateforme de gestion des ressources humaines",
        project3Desc:"Développement d'une plateforme modulaire de gestion RH.",
        project5Title:"FootieFun — Gestion de matchs de football",
        project5Desc:"Application web de gestion de matchs de football, d'équipes et de joueurs.",
        sectionExperience:"Expériences",
        expPfeTitle:"Ingénieur Data Snowflake (stage de fin d'études)", expPfeCompany:"ATOS — France", expPfeDate:"Mars 2026 – Septembre 2026",
        expPfeList1:"Contribution à l'architecture d'une plateforme de données moderne.",
        expPfeList2:"Conception et optimisation de pipelines de données évolutifs utilisant AWS, Python et Snowflake.",
        expPfeList3:"Mise en œuvre de flux CI/CD adaptés aux projets de données.",
        expPfeList4:"Orchestration des services cloud pour automatiser les flux de données complexes.",
        exp1Title:"Ingénieur cloud et DevOps", exp1Company:"SofiaTech — Tunisie", exp1Date:"Juillet 2025 – Août 2025",
        exp1List1:"Conception et déploiement d'une architecture de microservices évolutive sur AWS.",
        exp1List2:"Mise en œuvre de pipelines CI/CD automatisés avec AWS CodePipeline et CodeBuild.",
        exp2Title:"Développeur full stack", exp2Company:"MOBELITE LABS — Tunisie", exp2Date:"Juillet 2024 – Août 2024",
        exp2List1:"Développement d'une application mobile de streaming musical moderne.",
        exp2List2:"Participation à toutes les phases du projet.",
        sectionEducation:"Formations",
        edu1Title:"Diplôme national d'ingénieur en informatique — Semestre d'échange", edu1School:"CY Tech, Université CY Cergy Paris", edu1Date:"2025 – 2026",
        edu1Desc:"Sélectionné pour un programme d'échange international à CY Tech, axé sur le cloud computing et le DevOps. Expérience pratique avec les services AWS, l'infrastructure as code, l'automatisation CI/CD et les architectures web évolutives.",
        edu2Title:"Diplôme national d'ingénieur en informatique", edu2School:"École Supérieure des Sciences Appliquées et de Management — Université SESAME", edu2Date:"2023 – 2025",
        edu2Desc:"Spécialisation en DevOps/cloud, automatisation informatique, données et grands modèles de langage (LLM).",
        edu3Title:"Classes préparatoires aux grandes écoles d'ingénieurs", edu3School:"Faculté des sciences de Monastir", edu3Date:"2021 – 2023",
        edu3Desc:"Classé 591ᵉ/1400 au concours national d'entrée aux écoles d'ingénieurs.",
        sectionCertifications:"Certifications",
        cert1Title:"AWS Certified Cloud Practitioner", cert2Title:"AWS Academy — Développement cloud",
        cert3Title:"AWS Academy — Microservices et pipeline CI/CD", cert4Title:"AWS Academy — Fondamentaux du cloud",
        cert5Title:"Formations DevOps KodeKloud", cert6Title:"Spécialiste IT — JavaScript",
        sectionContact:"Contact",
        contactNamePlaceholder:"Votre nom", contactEmailPlaceholder:"Votre adresse e-mail", contactMessagePlaceholder:"Votre message",
        contactSend:"Envoyer le message",
        footerBuilt:"Conçu avec passion et technologies modernes", footerRights:"Tous droits réservés.",
        appearanceLabel:"Apparence"
    }
};

// ================================================
// LANGUAGE
// ================================================
const langToggle = document.getElementById('langToggle');
let currentLang = localStorage.getItem('language') || 'en';

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang]?.[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    if (langToggle) langToggle.textContent = lang.toUpperCase();
    // Sync mini lang btn
    const miniLang = document.getElementById('miniLangBtn');
    if (miniLang) miniLang.textContent = lang === 'en' ? 'EN' : 'FR';
    // Sync appearance label
    const appLabel = document.getElementById('appearanceLabel');
    if (appLabel) appLabel.textContent = lang === 'fr' ? 'Apparence' : 'Appearance';
    document.documentElement.lang = lang;
}

applyLanguage(currentLang);

langToggle?.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    applyLanguage(currentLang);
    localStorage.setItem('language', currentLang);
});

// ================================================
// THEME
// ================================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = themeToggle?.querySelector('i');
let isDark = localStorage.getItem('theme') !== 'light';

function applyTheme(dark) {
    document.body.classList.toggle('light-theme', !dark);
    if (themeIcon) { themeIcon.className = dark ? 'fas fa-moon' : 'fas fa-sun'; }
    const miniTheme = document.getElementById('miniThemeBtn');
    if (miniTheme) miniTheme.innerHTML = dark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
}

applyTheme(isDark);
themeToggle?.addEventListener('click', () => { isDark = !isDark; applyTheme(isDark); localStorage.setItem('theme', isDark ? 'dark' : 'light'); });

// ================================================
// SMOOTH SCROLL
// ================================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ================================================
// SCROLL PROGRESS
// ================================================
window.addEventListener('scroll', () => {
    const el = document.getElementById('scrollProgress');
    if (el) el.style.width = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight) * 100) + '%';
}, { passive: true });

// ================================================
// NAVBAR DESKTOP
// ================================================
window.addEventListener('scroll', () => {
    const nb = document.getElementById('navbar');
    if (nb) { nb.style.background = ''; nb.classList.toggle('scrolled', window.scrollY > 50); }
}, { passive: true });

// ================================================
// FADE IN
// ================================================
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ================================================
// COUNTERS
// ================================================
function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(counter => {
        const raw = counter.getAttribute('data-target');
        const target = +raw.replace(/\D/g, '');
        const hasPlus = raw.includes('+');
        let current = 0;
        const inc = target / 100;
        const update = () => {
            if (current < target) { current += inc; counter.textContent = (hasPlus?'+':'') + Math.ceil(current); setTimeout(update, 20); }
            else { counter.textContent = (hasPlus?'+':'') + target; }
        };
        update();
    });
}
const statsObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounters(); statsObs.unobserve(e.target); } });
}, { threshold: 0.5 });
const statsEl = document.querySelector('.stats-grid');
if (statsEl) statsObs.observe(statsEl);

// ================================================
// PARALLAX
// ================================================
window.addEventListener('scroll', () => {
    const s = window.pageYOffset;
    document.querySelectorAll('.shape').forEach((shape, i) => {
        shape.style.transform = `translateY(${s*(0.5+i*0.2)}px) rotate(${s*0.1}deg)`;
    });
}, { passive: true });

// ================================================
// TYPING EFFECT
// ================================================
function typeWriter(el, text, speed = 150) {
    if (!el) return;
    let i = 0; el.innerHTML = '';
    const type = () => { if (i < text.length) { el.innerHTML += text.charAt(i++); setTimeout(type, speed); } };
    type();
}
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) typeWriter(heroTitle, heroTitle.textContent);
});

// ================================================
// ACTIVE NAV DESKTOP
// ================================================
window.addEventListener('scroll', () => {
    if (window.innerWidth <= 768) return;
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-links a');
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id'); });
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${current}`));
}, { passive: true });

// ================================================
// PARTICLES
// ================================================
function createParticles() {
    const c = document.createElement('div');
    c.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:-1;';
    document.body.appendChild(c);
    for (let i = 0; i < 50; i++) {
        const p = document.createElement('div');
        p.style.cssText = `position:absolute;width:2px;height:2px;background:rgba(99,102,241,0.5);border-radius:50%;left:${Math.random()*100}%;top:${Math.random()*100}%;animation:twinkle ${2+Math.random()*3}s infinite;`;
        c.appendChild(p);
    }
}

// ================================================
// PROJECT MODALS
// ================================================
const projectData = {
    'terraform-ansible-tp': {
        en: { title:'Automated Infrastructure & App Deployment', description:'A full-stack automation project using Terraform for infrastructure provisioning and Ansible for configuration management.', highlights:['Infrastructure as Code with Terraform for Proxmox/VMware','Advanced Ansible roles for multi-tier app deployment','PostgreSQL database setup and Python application orchestration','Dynamic inventory management for scalable VM control'] },
        fr: { title:"Déploiement automatisé d'infrastructure et d'application", description:"Un projet d'automatisation complet utilisant Terraform pour le provisionnement d'infrastructure et Ansible pour la gestion de configuration.", highlights:['Infrastructure as Code avec Terraform pour Proxmox et VMware',"Rôles Ansible avancés pour le déploiement d'applications multi-niveaux","Installation de PostgreSQL et orchestration de l'application Python","Gestion d'inventaire dynamique pour le contrôle évolutif des machines virtuelles"] },
        tech:['Terraform','Ansible','Proxmox','PostgreSQL','Python','Linux']
    },
    'gcp-cicd': {
        en: { title:'Automated CI/CD Pipeline on GCP', description:'Cloud-native CI/CD on Google Cloud Platform for containerized applications.', highlights:['Cloud Build integration for automated Git-to-Cloud workflows','Dockerized application deployment on Cloud Run','Artifact Registry for secure container image management','Implementation of versioning and zero-downtime rollouts'] },
        fr: { title:'Pipeline CI/CD automatisé sur GCP', description:"CI/CD natif au cloud sur Google Cloud Platform pour les applications conteneurisées.", highlights:['Intégration de Cloud Build pour les flux automatisés de Git vers le cloud',"Déploiement d'applications conteneurisées sur Cloud Run",'Artifact Registry pour la gestion sécurisée des images de conteneurs',"Déploiements sans interruption de service"] },
        tech:['GCP','Cloud Build','Cloud Run','Docker','Artifact Registry']
    },
    'cicd': {
        en: { title:'CI/CD Pipeline with Managed Deployment', description:'DevOps project automating the software development lifecycle on AWS.', highlights:['Automated build and test reporting integration','Managed deployment stages with manual approval gates','Containerization of microservices for consistent environments','Infrastructure as Code using AWS CDK'] },
        fr: { title:'Pipeline CI/CD avec déploiement géré', description:"Automatisation du cycle de vie du développement logiciel sur AWS.", highlights:["Intégration automatisée de la construction et des rapports de tests","Étapes de déploiement géré avec validations manuelles","Conteneurisation des microservices pour des environnements cohérents","Infrastructure as Code à l'aide d'AWS CDK"] },
        tech:['Docker','Python','Amazon ECS','Amazon ECR','AWS CodeCommit','AWS CDK']
    },
    'ha-arch': {
        en: { title:'Highly Available AWS Architecture', description:'Fault-tolerant, scalable infrastructure for production-grade applications.', highlights:['Multi-AZ deployment for maximum availability','Auto-scaling groups for dynamic load handling','Secure VPC configuration with public and private subnets','Database replication and automated backups'] },
        fr: { title:'Architecture AWS hautement disponible', description:"Infrastructure évolutive et tolérante aux pannes pour les applications de production.", highlights:['Déploiement multi-zones de disponibilité',"Groupes d'autoscaling pour une gestion dynamique de la charge",'Configuration VPC sécurisée','Réplication de base de données et sauvegardes automatisées'] },
        tech:['EC2','VPC','Load Balancer','RDS','Auto Scaling','CloudWatch']
    },
    'hr-platform': {
        en: { title:'HR Management Platform', description:'Full-stack solution for human resource management.', highlights:['Role-based access control (RBAC) for data security','Modular architecture for easy feature expansion','Comprehensive automated testing using Katalon','Intuitive UI/UX design for employee and leave management'] },
        fr: { title:'Plateforme de gestion des ressources humaines', description:"Solution full stack pour la gestion des ressources humaines.", highlights:["Contrôle d'accès basé sur les rôles (RBAC)","Architecture modulaire facilitant l'ajout de fonctionnalités","Tests automatisés complets à l'aide de Katalon","Interface utilisateur intuitive"] },
        tech:['Angular 18','.Net 8','SQLServer','Katalon','REST API']
    },
    'footiefun': {
        en: { title:'FootieFun Management Platform', description:'Sports management tool for local football leagues.', highlights:['RESTful API design for seamless front-back communication','Sophisticated database schema for team and player management','Match scheduling and results tracking','Integrated authentication and user profile management'] },
        fr: { title:'Plateforme de gestion FootieFun', description:"Outil de gestion sportive pour les ligues de football locales.", highlights:["Conception d'API RESTful",'Schéma de base de données élaboré','Planification des matchs et suivi des résultats',"Gestion intégrée de l'authentification"] },
        tech:['Python','Django','REST API','PostgreSQL','JavaScript']
    }
};

const modal      = document.getElementById('projectModal');
const modalBody  = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

document.querySelectorAll('.project-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const project = projectData[btn.getAttribute('data-project')];
        if (!project) return;
        const content = project[currentLang] || project.en;
        const hl   = currentLang === 'fr' ? 'Points forts :' : 'Key Highlights:';
        const repo = currentLang === 'fr' ? 'Voir le dépôt' : 'View Repository';
        modalBody.innerHTML = `
            <div class="modal-header"><h2>${content.title}</h2></div>
            <div class="modal-project-tech">${project.tech.map(t=>`<span class="tech-tag">${t}</span>`).join('')}</div>
            <p class="modal-description">${content.description}</p>
            <h3 style="margin-bottom:1rem;color:var(--primary-color);">${hl}</h3>
            <ul class="modal-highlights">${content.highlights.map(h=>`<li>${h}</li>`).join('')}</ul>
            <div class="cta-buttons" style="justify-content:flex-start;margin-top:2rem;">
                <a href="https://github.com/BOUGHAMMOURAAlaa" target="_blank" class="btn btn-primary"><i class="fab fa-github"></i> ${repo}</a>
            </div>`;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});
closeModal?.addEventListener('click', () => { modal.style.display='none'; document.body.style.overflow='auto'; });
window.addEventListener('click', e => { if (e.target===modal) { modal.style.display='none'; document.body.style.overflow='auto'; } });

// ================================================
// CONTACT FORM
// ================================================
const contactForm = document.getElementById('contactForm');
const formStatus  = document.getElementById('formStatus');

contactForm?.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    const orig = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';
    try {
        await new Promise(r => setTimeout(r, 2000));
        formStatus.textContent = currentLang==='fr' ? 'Message envoyé avec succès !' : 'Message sent successfully!';
        formStatus.className = 'form-status success';
        contactForm.reset();
    } catch {
        formStatus.textContent = currentLang==='fr' ? 'Une erreur est survenue.' : 'Oops! Something went wrong.';
        formStatus.className = 'form-status error';
    } finally {
        btn.disabled = false;
        btn.innerHTML = orig;
        setTimeout(() => { formStatus.textContent=''; formStatus.className='form-status'; }, 5000);
    }
});

// ================================================
// LOADER
// ================================================
window.addEventListener('load', () => { setTimeout(() => document.getElementById('loader')?.classList.add('fade-out'), 1000); });

createParticles();

// ================================================
// SCROLL TO TOP
// ================================================
const scrollToTop = document.createElement('button');
scrollToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTop.style.cssText = 'position:fixed;background:var(--primary-color);color:white;border:none;border-radius:50%;cursor:pointer;opacity:0;visibility:hidden;transition:all 0.3s ease;z-index:999;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(99,102,241,0.4);';
document.body.appendChild(scrollToTop);

function positionScrollTop() {
    if (window.innerWidth <= 768) {
        Object.assign(scrollToTop.style, { bottom:'100px', right:'16px', width:'40px', height:'40px', fontSize:'0.9rem' });
    } else {
        Object.assign(scrollToTop.style, { bottom:'11rem', right:'2rem', width:'48px', height:'48px', fontSize:'1rem' });
    }
}
positionScrollTop();
window.addEventListener('resize', positionScrollTop);
scrollToTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
window.addEventListener('scroll', () => {
    const show = window.scrollY > 400;
    scrollToTop.style.opacity = show ? '1' : '0';
    scrollToTop.style.visibility = show ? 'visible' : 'hidden';
}, { passive: true });

// ================================================
// SKILLS FILTER
// ================================================
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns  = document.querySelectorAll('.filter-btn');
    const skillItems  = document.querySelectorAll('.skill-item');
    const skillsGrid  = document.getElementById('skillsGrid');
    let isFiltering = false;
    const saved = localStorage.getItem('activeSkillCategory') || 'programming';

    const filterSkills = (cat, isInit=false) => {
        if (isFiltering && !isInit) return;
        isFiltering = true;
        if (!isInit) skillsGrid.classList.add('filtering');
        filterBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter')===cat));
        setTimeout(() => {
            let n = 0;
            skillItems.forEach(item => {
                item.classList.remove('pop-in');
                const match = item.getAttribute('data-category')===cat;
                if (match) { item.classList.remove('hidden'); const idx=n++; setTimeout(()=>item.classList.add('pop-in'), idx*50); }
                else item.classList.add('hidden');
            });
            skillsGrid.classList.remove('filtering');
            isFiltering = false;
            localStorage.setItem('activeSkillCategory', cat);
        }, isInit ? 0 : 300);
    };

    // Re-sync miniLangBtn au cas où applyLanguage a tourné avant le DOM du more menu
    const miniLangInit = document.getElementById('miniLangBtn');
    if (miniLangInit) miniLangInit.textContent = currentLang === 'en' ? 'EN' : 'FR';

    if (filterBtns.length) filterSkills(saved, true);
    filterBtns.forEach(b => b.addEventListener('click', () => { if (!b.classList.contains('active')) filterSkills(b.getAttribute('data-filter')); }));
});

// ================================================
// MOBILE — BOTTOM SHEET + DOCK PILL
// ================================================
const moreBtn     = document.getElementById('moreBtn');
const moreMenu    = document.getElementById('moreMenu');
const moreOverlay = document.getElementById('moreOverlay');
const tabItems    = document.querySelectorAll('.tab-item[data-section]');
const moreLinks   = document.querySelectorAll('.more-link');
const miniThemeBtn = document.getElementById('miniThemeBtn');
const miniLangBtn  = document.getElementById('miniLangBtn');

// Mini bouton thème
miniThemeBtn?.addEventListener('click', e => {
    e.stopPropagation();
    isDark = !isDark;
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Mini bouton langue
miniLangBtn?.addEventListener('click', e => {
    e.stopPropagation();
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    applyLanguage(currentLang);
    localStorage.setItem('language', currentLang);
});

function openMore() {
    moreMenu?.classList.add('open');
    moreOverlay?.classList.add('open');
    document.body.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
    const icon = moreBtn?.querySelector('i');
    if (icon) icon.className = 'fas fa-xmark';
    moreBtn?.classList.add('active');
}

function closeMore() {
    moreMenu?.classList.remove('open');
    moreOverlay?.classList.remove('open');
    document.body.classList.remove('menu-open');
    document.body.style.overflow = '';
    const icon = moreBtn?.querySelector('i');
    if (icon) icon.className = 'fas fa-ellipsis';
    moreBtn?.classList.remove('active');
}

moreBtn?.addEventListener('click', e => {
    e.stopPropagation();
    moreMenu?.classList.contains('open') ? closeMore() : openMore();
});

// Fermer en cliquant sur l'overlay
moreOverlay?.addEventListener('click', () => closeMore());

// Fermer au clic sur un lien
moreLinks.forEach(l => l.addEventListener('click', () => closeMore()));

// Active tab au scroll
function updateTabs() {
    if (window.innerWidth > 768) return;
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id'); });
    tabItems.forEach(t => t.classList.toggle('active', t.getAttribute('data-section') === current));
}

window.addEventListener('scroll', updateTabs, { passive: true });
window.addEventListener('resize', updateTabs);
updateTabs();