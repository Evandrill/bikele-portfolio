export type Language = 'en' | 'fr';

export const portfolioContent = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      certifications: 'Certifications',
      organizations: 'Organizations',
      contact: 'Contact',
    },
    hero: {
      name: 'Bikele Messanga',
      title: 'Full Stack Software Engineer',
      subtitle: 'Python, React, Node.js & AI Systems',
      description: 'Specializing in scalable web applications, production-ready architectures, and AI-integrated services.',
      cta: 'Get In Touch',
      location: 'Yaoundé, Cameroon',
    },
    about: {
      title: 'About Me',
      intro: 'Full-Stack Software Engineer specializing in scalable web applications, React interfaces, and backend systems built with Node.js and Python. Experienced in designing production-ready architectures combining automation, financial systems, and AI-integrated services. Passionate about building high-performance user experiences and robust full-stack platforms used in real-world environments.',
      skills: {
        languages: ['Python', 'JavaScript (Node.js)', 'SQL', 'TypeScript', 'Java (Android fundamentals)'],
        backend: ['FastAPI', 'Node.js', 'RESTful API design', 'Odoo ERP module development', 'Transaction workflows', 'Backend automation'],
        frontend: ['React', 'REST API integration', 'Dashboard interfaces', 'Component-based architecture', 'Data-driven UI'],
        databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
        cybersecurity: ['Secure API design', 'Transaction validation', 'OWASP principles', 'Network security fundamentals', 'Digital forensics basics', 'Web penetration testing fundamentals'],
        ai: ['OpenCV', 'AI model integration', 'Detection pipelines', 'Multi-threaded processing', 'Image analysis systems'],
        devops: ['Git', 'GitHub', 'Linux environments', 'Modular system architecture', 'Pull Request workflow', 'Code reviews'],
      },
      languages: {
        french: 'French (Native)',
        english: 'English (Intermediate)',
      },
    },
    experience: {
      title: 'Professional Experience',
      positions: [
        {
          company: 'ENIX',
          location: 'Yaoundé, Cameroon',
          role: 'Cybersecurity & Software Developer',
          period: 'Dec 2025 - Present',
          highlights: [
            'Promoted from intern to full-time software engineer based on performance and technical contribution.',
            'Developed and maintained secure backend systems and REST APIs using Python and FastAPI.',
            'Developed custom Odoo ERP modules for accounting automation, invoicing, and tax computation.',
            'Integrated mobile money payment systems (MTN MoMo / Orange Money) with secure transaction workflows.',
            'Built secure transaction validation logic and financial automation mechanisms.',
            'Integrated REST APIs and backend services into responsive frontend applications.',
            'Applied secure coding practices aligned with OWASP principles.',
          ],
        },
        {
          company: 'Al-Ummah Group',
          location: 'Yaoundé',
          role: 'Volunteer',
          period: 'Nov 2024 - Apr 2025',
          highlights: [
            'Organized IT events and workshops for the local community, reaching over 200 participants.',
            'Managed social media presence and digital communications for community projects.',
            'Designed and implemented digital literacy programs to empower youth in technology.',
          ],
        },
        {
          company: 'HULT Prize',
          location: 'Yaoundé',
          role: 'Volunteer',
          period: 'Dec 2024 - Present',
          highlights: [
            'Organized and coordinated on-campus competition at SUP\'PTIC for the 2025 edition.',
            'Mentored student teams in project presentation, business modeling, and pitching.',
            'Assisted in logistics, scheduling, and evaluation of competition events.',
          ],
        },
        {
          company: 'ASECNA',
          location: 'Douala, Cameroon',
          role: 'IT & Networks Intern',
          period: 'Jul 2024 - Sep 2024',
          highlights: [
            'Performed network maintenance and structured cabling across operational sites.',
            'Assisted in network troubleshooting, diagnostics, and performance optimization.',
            'Supported configuration, testing, and documentation of internal IT infrastructure.',
          ],
        },
      ],
      hackathons: {
        title: 'Hackathons & Competitions',
        events: [
          {
            name: 'CONIA 2025 (Cameroon, AI Hackathon)',
            placement: '4th Place National',
            project: 'KmerFoodLens',
            description: 'AI-based application for recognizing traditional Cameroonian dishes. Held under the high patronage of the Ministry of Posts and Telecommunications and the Presidency of Cameroon.',
          },
          {
            name: 'ODC Champions Hackathon (ORANGE EMEA, 14 countries)',
            placement: '4th Place National',
            description: 'Participated in a regional hackathon covering 14 African and Middle Eastern countries. Developed innovative solutions leveraging AI to address real-world challenges.',
          },
        ],
      },
    },
    projects: {
      title: 'Featured Projects',
      items: [
        {
          name: 'Compteur Ciment',
          subtitle: 'Industrial Monitoring Dashboard',
          technologies: ['React.js', 'JavaScript (ES6+)', 'Data Visualization'],
          description: 'Designed and developed a real-time monitoring dashboard to visualize data from an industrial object detection system. Built an intuitive visual tracking interface for displaying detection results and system status. Integrated backend detection services with the frontend for live data updates and event monitoring.',
          highlights: [
            'Real-time monitoring dashboard',
            'Data visualization and tracking',
            'Backend integration',
            'Operational insights reporting',
          ],
        },
        {
          name: 'FaceGuard',
          subtitle: 'AI-Powered Detection System',
          technologies: ['React', 'JavaScript', 'Python', 'OpenCV', 'AI Models'],
          description: 'Frontend UI integration for an AI-based detection pipeline with real-time rendering of multi-source data. Backend implementation of a multi-threaded AI pipeline for real-time face detection and recognition with image processing workflows.',
          highlights: [
            'Multi-source data rendering',
            'Reusable React components',
            'Multi-threaded AI pipeline',
            'Automated security system',
          ],
        },
        {
          name: 'Invoice Net',
          subtitle: 'Odoo ERP Module',
          technologies: ['Python', 'Odoo', 'ERP Backend', 'Accounting Logic'],
          description: 'Developed a custom Odoo module for invoice management and accounting automation. Implemented custom accounting logic including automatic calculation of taxes, discounts, and invoice totals.',
          highlights: [
            'Invoice management automation',
            'Custom accounting logic',
            'Automatic tax calculations',
            'Financial data consistency',
          ],
        },
        {
          name: 'Odoo MoMo Payment Integration',
          subtitle: 'Mobile Money Payment System',
          technologies: ['Python', 'Odoo', 'Mobile Payment Systems', 'Financial Integration'],
          description: 'Integrated mobile money (MoMo) payment processing into Odoo for invoice settlement. Implemented secure transaction workflow including payment initiation, validation, and confirmation.',
          highlights: [
            'Mobile money integration',
            'Secure transaction workflow',
            'Payment status synchronization',
            'Digital payment adoption',
          ],
        },
        {
          name: 'WhatsLLaMA',
          subtitle: 'AI-Powered WhatsApp Automation',
          technologies: ['JavaScript', 'Chrome Extensions', 'Ollama (LLM)', 'Async Systems'],
          description: 'Built an autonomous AI-powered browser extension for WhatsApp Web using a local LLM (Ollama). Implemented end-to-end system covering UI, background processing, and LLM orchestration.',
          highlights: [
            'Browser extension development',
            'Multi-conversation context management',
            'Async task queues',
            'Scheduled re-engagement logic',
            'Secure coding practices',
          ],
        },
      ],
    },
    education: {
      title: 'Education',
      degrees: [
        {
          school: 'National Advanced School of Posts, Telecommunications & ICT (SUP\'PTIC)',
          location: 'Yaoundé, Cameroon',
          degree: 'Professional Bachelor\'s Degree in Computer Science and Networks',
          period: '2022 - 2025',
          gpa: '13.57/20 (≈ 2.7/4 GPA equivalent)',
          capstone: {
            title: 'Smart Socket for Prevention of Domestic Fires',
            description: 'IoT-based system using microcontrollers, integrated with a native Android application developed in Java. The device monitors electricity usage and environmental conditions, sending real-time alerts via the app.',
            technologies: ['Microcontrollers', 'IoT sensors', 'Java (Android)', 'Embedded electronics'],
          },
        },
        {
          school: 'Lycée Moderne de Nkozoa',
          location: 'Yaoundé, Cameroon',
          degree: 'Scientific Baccalaureate',
          period: '2017 - 2022',
        },
      ],
    },
    certifications: {
      title: 'Certifications',
      items: [
        {
          name: 'Google Cloud Fundamentals',
          issuer: 'Coursera',
          date: 'May 8, 2025',
        },
        {
          name: 'Web Penetration Testing',
          issuer: 'OpenClassrooms',
          date: 'Feb 10, 2025',
        },
        {
          name: 'Digital Forensic Incident Investigation',
          issuer: 'OpenClassrooms',
          date: 'Jan 25, 2025',
        },
        {
          name: 'Introduction to Project Cycle Management',
          issuer: 'ICTILO (ILO Academy)',
          date: 'Dec 31, 2024',
        },
        {
          name: 'Graphic Design (Photoshop)',
          issuer: 'Pan-African Scholarship Program',
          date: '2021',
        },
      ],
    },
    organizations: {
      title: 'Organizations & Memberships',
      items: [
        {
          name: 'Huawei Learn Academy',
          description: 'Completed the full HCIA Datacom certification curriculum. Successfully passed the HCIA Datacom MOOC with a final score of 84 points.',
        },
        {
          name: 'International Telecommunication Union (ITU)',
          description: 'Member & Participant. Participated in multiple ITU conferences and capacity-building activities. Active member of the ITU-D RPM AFR Working Group.',
        },
        {
          name: 'ICTILO (International Training Centre of the ILO) Academy',
          description: 'Participant in professional and technical training programs focused on project cycle management and development-oriented initiatives.',
        },
        {
          name: 'Hugging Face',
          description: 'Community Member. Active learner and contributor in the AI and machine learning community.',
        },
      ],
    },
    contact: {
      title: 'Get In Touch',
      description: 'Have a question or want to work together? Feel free to reach out. I\'ll get back to you as soon as possible.',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Your Message',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.',
      },
      social: {
        email: 'lamourmessanga@gmail.com',
        github: 'github.com/Evandrill',
        linkedin: 'linkedin.com/in/junior-lamour-bikele-messanga-2ab319336',
        phone: '+237 693 895 317',
      },
    },
    footer: {
      copyright: '© 2025 Bikele Messanga. All rights reserved.',
      made: 'Crafted with precision and passion.',
    },
  },
  fr: {
    nav: {
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Projets',
      education: 'Formation',
      certifications: 'Certifications',
      organizations: 'Organisations',
      contact: 'Contact',
    },
    hero: {
      name: 'Bikele Messanga',
      title: 'Ingénieur Logiciel Full Stack',
      subtitle: 'Python, React, Node.js & Systèmes IA',
      description: 'Spécialisé dans les applications web évolutives, les architectures prêtes pour la production et les services intégrés à l\'IA.',
      cta: 'Me Contacter',
      location: 'Yaoundé, Cameroun',
    },
    about: {
      title: 'À Propos',
      intro: 'Ingénieur logiciel Full Stack spécialisé dans les applications web évolutives, les interfaces React et les systèmes backend construits avec Node.js et Python. Expérimenté dans la conception d\'architectures prêtes pour la production combinant l\'automatisation, les systèmes financiers et les services intégrés à l\'IA. Passionné par la création d\'expériences utilisateur haute performance et de plateformes full-stack robustes utilisées dans des environnements réels.',
      skills: {
        languages: ['Python', 'JavaScript (Node.js)', 'SQL', 'TypeScript', 'Java (notions Android)'],
        backend: ['FastAPI', 'Node.js', 'Conception API RESTful', 'Développement de modules Odoo ERP', 'Workflows de transactions', 'Automatisation backend'],
        frontend: ['React', 'Intégration API REST', 'Interfaces de tableau de bord', 'Architecture basée sur les composants', 'UI pilotée par les données'],
        databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
        cybersecurity: ['Conception d\'API sécurisée', 'Validation des transactions', 'Principes OWASP', 'Notions de sécurité réseau', 'Notions de forensique numérique', 'Notions de test de pénétration web'],
        ai: ['OpenCV', 'Intégration de modèles IA', 'Pipelines de détection', 'Traitement multi-thread', 'Systèmes d\'analyse d\'images'],
        devops: ['Git', 'GitHub', 'Environnements Linux', 'Architecture modulaire', 'Workflow Pull Request', 'Revues de code'],
      },
      languages: {
        french: 'Français (Natif)',
        english: 'Anglais (Intermédiaire)',
      },
    },
    experience: {
      title: 'Expérience Professionnelle',
      positions: [
        {
          company: 'ENIX',
          location: 'Yaoundé, Cameroun',
          role: 'Développeur Cybersécurité & Logiciel',
          period: 'Déc 2025 - Présent',
          highlights: [
            'Promu du stage au poste d\'ingénieur logiciel à temps plein sur la base de la performance et de la contribution technique.',
            'Développement et maintenance de systèmes backend sécurisés et d\'API REST utilisant Python et FastAPI.',
            'Développement de modules Odoo ERP personnalisés pour l\'automatisation comptable, la facturation et le calcul des taxes.',
            'Intégration de systèmes de paiement par mobile money (MTN MoMo / Orange Money) avec des workflows de transactions sécurisés.',
            'Construction de logique de validation des transactions sécurisée et de mécanismes d\'automatisation financière.',
            'Intégration d\'API REST et de services backend dans des applications frontend réactives.',
            'Application des pratiques de codage sécurisé conformes aux principes OWASP.',
          ],
        },
        {
          company: 'Al-Ummah Group',
          location: 'Yaoundé',
          role: 'Bénévole',
          period: 'Nov 2024 - Avr 2025',
          highlights: [
            'Organisation d\'événements IT et d\'ateliers pour la communauté locale, touchant plus de 200 participants.',
            'Gestion de la présence sur les réseaux sociaux et des communications numériques pour les projets communautaires.',
            'Conception et mise en œuvre de programmes d\'alphabétisation numérique pour autonomiser les jeunes en technologie.',
          ],
        },
        {
          company: 'HULT Prize',
          location: 'Yaoundé',
          role: 'Bénévole',
          period: 'Déc 2024 - Présent',
          highlights: [
            'Organisation et coordination du concours sur campus à SUP\'PTIC pour l\'édition 2025.',
            'Mentorat des équipes d\'étudiants en présentation de projet, modélisation commerciale et pitch.',
            'Assistance dans la logistique, la planification et l\'évaluation des événements de concours.',
          ],
        },
        {
          company: 'ASECNA',
          location: 'Douala, Cameroun',
          role: 'Stagiaire IT & Réseaux',
          period: 'Juil 2024 - Sep 2024',
          highlights: [
            'Maintenance réseau et câblage structuré sur les sites opérationnels.',
            'Assistance au dépannage réseau, aux diagnostics et à l\'optimisation des performances.',
            'Support de la configuration, des tests et de la documentation de l\'infrastructure IT interne.',
          ],
        },
      ],
      hackathons: {
        title: 'Hackathons & Compétitions',
        events: [
          {
            name: 'CONIA 2025 (Cameroun, Hackathon IA)',
            placement: '4e place nationale',
            project: 'KmerFoodLens',
            description: 'Application basée sur l\'IA pour la reconnaissance des plats traditionnels camerounais. Tenue sous le haut patronage du Ministère des Postes et Télécommunications et de la Présidence du Cameroun.',
          },
          {
            name: 'ODC Champions Hackathon (ORANGE EMEA, 14 pays)',
            placement: '4e place nationale',
            description: 'Participation à un hackathon régional couvrant 14 pays africains et du Moyen-Orient. Développement de solutions innovantes exploitant l\'IA pour résoudre des défis du monde réel.',
          },
        ],
      },
    },
    projects: {
      title: 'Projets Vedettes',
      items: [
        {
          name: 'Compteur Ciment',
          subtitle: 'Tableau de Bord de Surveillance Industrielle',
          technologies: ['React.js', 'JavaScript (ES6+)', 'Visualisation de Données'],
          description: 'Conception et développement d\'un tableau de bord de surveillance en temps réel pour visualiser les données d\'un système de détection d\'objets industriels. Construction d\'une interface de suivi visuel intuitive pour afficher les résultats de détection et l\'état du système.',
          highlights: [
            'Tableau de bord de surveillance en temps réel',
            'Visualisation et suivi des données',
            'Intégration backend',
            'Rapports d\'insights opérationnels',
          ],
        },
        {
          name: 'FaceGuard',
          subtitle: 'Système de Détection Alimenté par l\'IA',
          technologies: ['React', 'JavaScript', 'Python', 'OpenCV', 'Modèles IA'],
          description: 'Intégration d\'interface UI pour un pipeline de détection basé sur l\'IA avec rendu en temps réel de données multi-sources. Implémentation backend d\'un pipeline IA multi-thread pour la détection et reconnaissance faciale en temps réel.',
          highlights: [
            'Rendu de données multi-sources',
            'Composants React réutilisables',
            'Pipeline IA multi-thread',
            'Système de sécurité automatisé',
          ],
        },
        {
          name: 'Invoice Net',
          subtitle: 'Module Odoo ERP',
          technologies: ['Python', 'Odoo', 'Backend ERP', 'Logique Comptable'],
          description: 'Développement d\'un module Odoo personnalisé pour la gestion des factures et l\'automatisation comptable. Implémentation de logique comptable personnalisée incluant le calcul automatique des taxes, remises et totaux de factures.',
          highlights: [
            'Automatisation de la gestion des factures',
            'Logique comptable personnalisée',
            'Calculs automatiques des taxes',
            'Cohérence des données financières',
          ],
        },
        {
          name: 'Intégration Paiement Odoo MoMo',
          subtitle: 'Système de Paiement Mobile Money',
          technologies: ['Python', 'Odoo', 'Systèmes de Paiement Mobile', 'Intégration Financière'],
          description: 'Intégration du traitement des paiements par mobile money (MoMo) dans Odoo pour le règlement des factures. Implémentation d\'un workflow de transaction sécurisé incluant l\'initiation, la validation et la confirmation du paiement.',
          highlights: [
            'Intégration mobile money',
            'Workflow de transaction sécurisé',
            'Synchronisation du statut de paiement',
            'Adoption du paiement numérique',
          ],
        },
        {
          name: 'WhatsLLaMA',
          subtitle: 'Automatisation WhatsApp Alimentée par l\'IA',
          technologies: ['JavaScript', 'Extensions Chrome', 'Ollama (LLM)', 'Systèmes Asynchrones'],
          description: 'Développement d\'une extension de navigateur autonome alimentée par l\'IA pour WhatsApp Web utilisant un LLM local (Ollama). Implémentation d\'un système end-to-end couvrant l\'UI, le traitement en arrière-plan et l\'orchestration LLM.',
          highlights: [
            'Développement d\'extension de navigateur',
            'Gestion du contexte multi-conversation',
            'Files d\'attente de tâches asynchrones',
            'Logique de ré-engagement programmée',
            'Pratiques de codage sécurisé',
          ],
        },
      ],
    },
    education: {
      title: 'Formation',
      degrees: [
        {
          school: 'École Nationale Supérieure des Postes, Télécommunications & TIC (SUP\'PTIC)',
          location: 'Yaoundé, Cameroun',
          degree: 'Licence Professionnelle en Informatique et Réseaux',
          period: '2022 - 2025',
          gpa: '13,57/20 (≈ 2,7/4 équivalent GPA)',
          capstone: {
            title: 'Prise Intelligente pour la Prévention des Incendies Domestiques',
            description: 'Système basé sur l\'IoT utilisant des microcontrôleurs, intégré avec une application Android native développée en Java. L\'appareil surveille la consommation d\'électricité et les conditions environnementales, envoyant des alertes en temps réel via l\'application.',
            technologies: ['Microcontrôleurs', 'Capteurs IoT', 'Java (Android)', 'Électronique embarquée'],
          },
        },
        {
          school: 'Lycée Moderne de Nkozoa',
          location: 'Yaoundé, Cameroun',
          degree: 'Baccalauréat Scientifique',
          period: '2017 - 2022',
        },
      ],
    },
    certifications: {
      title: 'Certifications',
      items: [
        {
          name: 'Google Cloud Fundamentals',
          issuer: 'Coursera',
          date: '8 mai 2025',
        },
        {
          name: 'Web Penetration Testing',
          issuer: 'OpenClassrooms',
          date: '10 février 2025',
        },
        {
          name: 'Digital Forensic Incident Investigation',
          issuer: 'OpenClassrooms',
          date: '25 janvier 2025',
        },
        {
          name: 'Introduction to Project Cycle Management',
          issuer: 'ICTILO (ILO Academy)',
          date: '31 décembre 2024',
        },
        {
          name: 'Graphic Design (Photoshop)',
          issuer: 'Pan-African Scholarship Program',
          date: '2021',
        },
      ],
    },
    organizations: {
      title: 'Organisations & Adhésions',
      items: [
        {
          name: 'Huawei Learn Academy',
          description: 'Complété le cursus complet de certification HCIA Datacom. Réussi le MOOC HCIA Datacom avec un score final de 84 points.',
        },
        {
          name: 'Union Internationale des Télécommunications (UIT)',
          description: 'Membre & Participant. Participation à plusieurs conférences UIT et activités de renforcement des capacités. Membre actif du groupe de travail ITU-D RPM AFR.',
        },
        {
          name: 'ICTILO (Centre International de Formation de l\'OIT) Academy',
          description: 'Participant aux programmes de formation professionnelle et technique axés sur la gestion du cycle de projet et les initiatives de développement.',
        },
        {
          name: 'Hugging Face',
          description: 'Membre de la communauté. Apprenant actif et contributeur dans la communauté de l\'IA et du machine learning.',
        },
      ],
    },
    contact: {
      title: 'Me Contacter',
      description: 'Vous avez une question ou vous voulez collaborer ? N\'hésitez pas à me contacter. Je vous répondrai dès que possible.',
      form: {
        name: 'Votre Nom',
        email: 'Votre Email',
        subject: 'Sujet',
        message: 'Votre Message',
        submit: 'Envoyer le Message',
        sending: 'Envoi en cours...',
        success: 'Message envoyé avec succès !',
        error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.',
      },
      social: {
        email: 'lamourmessanga@gmail.com',
        github: 'github.com/Evandrill',
        linkedin: 'linkedin.com/in/junior-lamour-bikele-messanga-2ab319336',
        phone: '+237 693 895 317',
      },
    },
    footer: {
      copyright: '© 2025 Bikele Messanga. Tous droits réservés.',
      made: 'Créé avec précision et passion.',
    },
  },
};
