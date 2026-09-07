document.addEventListener('DOMContentLoaded', () => {
    const projectCardsBTS = document.getElementById('project-cards-bts');
    const projectCardsBUT = document.getElementById('project-cards-but');
    const projectCardsStage = document.getElementById('project-cards-stage');
    const realisationCardsContainer = document.getElementById('realisation-cards');
    const isGithubPages = window.location.hostname.includes('.io');

    // Tableau des projets avec des variables distinctes pour les descriptions
    const projects = [
        {
            id: "project_cardiacts",
            title: "CardiacTS",
            titleEN: "CardiacTS",
            date: "2026-03-01",
            closedDescription: "Développement d'une application métier dédiée aux chercheurs en imagerie cardiaque.",
            closedDescriptionEN: "Development of a business application dedicated to cardiac imaging researchers.",
            openDescription: "Projet dans le cadre d'un stage au Laboratoire TIMC.<br>Conception et développement d'une application de bureau moderne en JavaFX (Java 21) dédiée à la gestion sécurisée des dossiers médicaux. Intégration de MinIO pour l'imagerie, authentification (jBCrypt), Docker, et base de données PostgreSQL.",
            openDescriptionEN: "Internship project at the TIMC Laboratory.<br>Designed and developed a modern JavaFX (Java 21) desktop application for secure medical record management. Integrated MinIO for imaging, jBCrypt authentication, Docker, and a PostgreSQL database.",
            footerText: "Stack : Java (JavaFX), IntelliJ, UML, Figma, MinIO, jBCrypt, PostgreSQL, Docker",
            footerTextEN: "Stack : Java (JavaFX), IntelliJ, UML, Figma, MinIO, jBCrypt, PostgreSQL, Docker",
            icon: "/assets/icons/timc.png",
            category: 'STAGE',
            hasGitRepo: true,
            gitRepoLink: "https://github.com/frozyCODE/CardiacTS"
        },
        {
            id: "project_ada",
            title: "ADA (Automatisation SI)",
            titleEN: "ADA (IT Automation)",
            date: "2025-06-01",
            closedDescription: "Maintenance et évolution d'ADA, un logiciel interne stratégique automatisant la gestion des utilisateurs du SI.",
            closedDescriptionEN: "Maintenance and evolution of ADA, a strategic internal software automating IT user management.",
            openDescription: "Projet dans le cadre d'un stage à la Mairie de Meylan.<br>Maintenance et évolution d'ADA, automatisant la gestion des utilisateurs du SI (~550 agents). Création de comptes dans Active Directory, attribution de licences Office 365, génération de comptes Intranet et envoi d'e-mails de reporting.",
            openDescriptionEN: "Internship project at the Meylan City Hall.<br>Maintained and evolved ADA, automating IT user management (~550 agents). Automated Active Directory account creation, Office 365 license assignment, Intranet account generation, and reporting email dispatch.",
            footerText: "Stack : PHP, JSON, CSS (Bootstrap), PowerShell, Python, Automatisation, Office 365 (Graph API), Active Directory",
            footerTextEN: "Stack : PHP, JSON, CSS (Bootstrap), PowerShell, Python, Automation, Office 365 (Graph API), Active Directory",
            icon: "/assets/icons/meylan.png",
            category: 'STAGE'
        },
        {
            id: "project2",
            title: "Analyse base de données",
            titleEN: "Database Analysis",
            date: "2024-01-01",
            closedDescription: "Analyse d'une DB contenant des informations sur les passagers du Titanic.",
            closedDescriptionEN: "Analysis of a database containing information on Titanic passengers.",
            openDescription: "Projet dans le cadre des études.<br>Analyse d'une BD pour comprendre les facteurs qui ont influencé la survie des passagers du Titanic, grâce à des commandes SQL.",
            openDescriptionEN: "Academic project.<br>Analyzed a database to understand factors influencing Titanic passenger survival using SQL commands.",
            footerText: "Compétences renforcées : PostgreSQL, Analyse de données, Travail d'équipe",
            footerTextEN: "Skills improved: PostgreSQL, Data Analysis, Teamwork",
            icon: "/assets/icons/postgres.png",
            category: 'BUT'
        },
        {
            id: "project3",
            title: "Site web pour ESN",
            titleEN: "Website for IT Company",
            date: "2024-01-01",
            closedDescription: "Développement du site web d'une ESN visant à mettre en avant l'entreprise.",
            closedDescriptionEN: "Development of a website for an IT service company to showcase its business.",
            openDescription: "Projet dans le cadre des études.<br>Conception et réalisation d'un site web (fictif) pour une ESN, destiné à la génération Alpha dans le but de promouvoir l'entreprise et ses valeurs.",
            openDescriptionEN: "Academic project.<br>Designed and developed a (fictitious) website for an IT service company, targeting Generation Alpha to promote its business and values.",
            footerText: "Compétences renforcées : HTML, CSS, Gestion de projet",
            footerTextEN: "Skills improved: HTML, CSS, Project Management",
            icon: "/assets/icons/html5.png",
            category: 'BUT'
        },
        {
            id: "project4",
            title: "App. de classification Java",
            titleEN: "Java Classification App",
            date: "2024-02-01",
            closedDescription: "Développement d'un programme de classification de dépêches en Java.",
            closedDescriptionEN: "Development of a news classification program in Java.",
            openDescription: "Projet dans le cadre des études.<br>Développement d'un programme de classification de dépêches en Java, utilisant des algorithmes de machine learning pour prédire la catégorie d'une dépêche.",
            openDescriptionEN: "Academic project.<br>Developed a news classification program in Java using machine learning algorithms to predict news categories.",
            footerText: "Compétences renforcées : Java",
            footerTextEN: "Skills improved: Java",
            icon: "/assets/icons/java.png",
            category: 'BUT'
        },
        {
            id: "project6",
            title: "Tri base de données",
            titleEN: "Database Sorting",
            date: "2024-04-01",
            closedDescription: "Tri d'une BD répertoriant des infos. sur le Nutri-Score des produits alimentaires.",
            closedDescriptionEN: "Sorting of a database listing information on food product Nutri-Scores.",
            openDescription: "Projet dans le cadre des études.<br>Tri et rédaction d'un rapport sur une BD contenant des infos. relatives au Nutri-Score de denrées alimentaires, afin d'en comprendre son fonctionnement et ses failles.",
            openDescriptionEN: "Academic project.<br>Sorted and wrote a report on a database containing information on the Nutri-Score of food products to understand its function and limitations.",
            footerText: "Compétences renforcées : SQL, Analyse de données, RMD",
            footerTextEN: "Skills improved: SQL, Data Analysis, RMD",
            icon: "/assets/icons/sql.png",
            category: 'BUT'
        },
        {
            id: "project7",
            title: "Guide d'install. serveur Debian",
            titleEN: "Debian Server Install. Guide",
            date: "2024-05-01",
            closedDescription: "Installation d'un serveur Debian avec outils basiques.",
            closedDescriptionEN: "Installation of a Debian server with basic tools.",
            openDescription: "Projet dans le cadre des études.<br>Installation d'un serveur Debian avec outils basiques (Apache, Postgres) afin d'en rédiger un guide détaillé en Anglais pour des étudiants débutants.",
            openDescriptionEN: "Academic project.<br>Installed a Debian server with basic tools (Apache, Postgres) and wrote a detailed guide in English for beginner students.",
            footerText: "Compétences renforcées : Linux, Serveurs, Rédaction anglaise",
            footerTextEN: "Skills improved: Linux, Servers, English Writing",
            icon: "/assets/icons/debian.png",
            category: 'BUT'
        },
        {
            id: "project8",
            title: "App. de gestion d'évènements",
            titleEN: "Event Management App",
            date: "2024-06-01",
            closedDescription: "Développement d'une app. de gestion d'évènements avec interface graphique.",
            closedDescriptionEN: "Development of an event management app with a graphical interface.",
            openDescription: "Projet dans le cadre des études.<br>Développement d'une application de gestion d'évènements en Java, avec interface graphique, permettant de gérer des évènements et des participants.",
            openDescriptionEN: "Academic project.<br>Developed an event management application in Java with a graphical interface, allowing for the management of events and participants.",
            footerText: "Compétences renforcées : JavaFX, Leadership, Gestion de projet",
            footerTextEN: "Skills improved: JavaFX, Leadership, Project Management",
            icon: "/assets/icons/java.png",
            category: 'BUT'
        },
        {
            id: "project9",
            title: "Portfolio",
            titleEN: "Portfolio",
            date: "2024-09-01",
            closedDescription: "Création de ce portfolio pour présenter mes projets et compétences.",
            closedDescriptionEN: "Creation of this portfolio to showcase my projects and skills.",
            openDescription: "Projet évolutif.<br>Développement de ce portfolio pour présenter mes projets et compétences, en utilisant HTML, CSS et JavaScript. Je considère cela comme un projet, car il contribue à mon apprentissage.",
            openDescriptionEN: "Evolutive project.<br>Developing this portfolio to showcase my projects and skills, using HTML, CSS, and JavaScript. I consider this as a project as it contributes to my learning.",
            footerText: "Compétences renforcées : HTML, CSS, JavaScript",
            footerTextEN: "Skills improved: HTML, CSS, JavaScript",
            icon: "/assets/icons/js.png",
            category: 'BUT'
        },
        {
            id: "project10",
            title: "Hôtel California",
            titleEN: "Hotel California",
            date: "2025-12-15",
            closedDescription: "Gestion des réservations d’un hôtel de luxe.",
            closedDescriptionEN: "Reservation management for a luxury hotel.",
            openDescription: "Projet dans le cadre des études.<br>Ce projet en équipe a pour objectif de concevoir le système de gestion des réservations d'un hôtel de luxe. L'application se concentre sur le développement d'un cœur de système robuste (Backend Node.js) capable de gérer 400 chambres, le suivi des clients, et un algorithme gérant les conflits de dates. Une API RESTful découplée, versionnée et sécurisée a été mise en place (JWT, hachage, CORS, Rate Limiting), avec une interface d'administration interne.",
            openDescriptionEN: "Academic project.<br>This team project aims to design a reservation management system for a luxury hotel. The application focuses on developing a robust core system (Node.js Backend) capable of managing 400 rooms, guest tracking, and a date conflict resolution algorithm. A decoupled, versioned, and secured RESTful API was implemented (JWT, hashing, CORS, Rate Limiting), along with an internal administration interface.",
            footerText: "Compétences renforcées : Conception API RESTful (Node.js), Sécurité (JWT, Bcrypt), Gestion de bases de données (CRUD), Optimisation (Redis), Documentation technique (Swagger).",
            footerTextEN: "Skills improved: RESTful API design (Node.js), Security (JWT, Bcrypt), Database management (CRUD), Optimization (Redis), Technical documentation (Swagger).",
            icon: "/assets/icons/hotelEmoji.png",
            category: 'BTS'
        },
        {
            id: "project11",
            title: "Collège Asimov",
            titleEN: "Asimov Secondary School",
            date: "2026-01-05",
            closedDescription: "Gestion scolaire d’un établissement scolaire.",
            closedDescriptionEN: "School management of an educational institution.",
            openDescription: "Projet dans le cadre des études.<br>Réalisé en équipe, ce projet consiste à développer un système de gestion scolaire pour la fondation Asimov. Le travail a débuté par une gestion de projet Agile (Kanban, Gantt, user/abuser stories). La conception de la base de données a été modélisée via des diagrammes UML. Techniquement, le projet repose sur la programmation d'une API REST (Node.JS/PHP) délivrant des données au format JSON, qui est ensuite consommée par un client lourd en Java et une application mobile pour les enseignants-référents.",
            openDescriptionEN: "Academic project.<br>Completed as a team, this project involves developing a school management system for the Asimov foundation. The work began with Agile project management (Kanban, Gantt, user/abuser stories). Database design was modeled using UML diagrams. Technically, the project relies on programming a REST API (Node.JS/PHP) delivering JSON data, which is then consumed by a Java thick client and a mobile application for referring teachers.",
            footerText: "Compétences renforcées : Gestion de projet Agile, Modélisation UML, Développement Backend (API REST), Développement d'interfaces (Client Java, Mobile), Qualité logicielle (Tests, JSDoc).",
            footerTextEN: "Skills improved: Agile project management, UML modeling, Backend development (REST API), Interface development (Java client, Mobile), Software quality (Tests, JSDoc).",
            icon: "/assets/icons/school.png",
            category: 'BTS'
        },
        {
            id: "project12",
            title: "Digipad Downloader",
            titleEN: "Digipad Downloader",
            date: "2026-05-31",
            closedDescription: "Application web locale automatisant le scraping et le téléchargement de données sécurisées.",
            closedDescriptionEN: "Local web application automating scraping and downloading of secure data.",
            openDescription: "Projet personnel open-source.<br>Développé avec Python (Flask) et Selenium. L'application permet d'analyser, d'extraire et de télécharger rapidement sous forme d'archive ZIP toutes les ressources contenues dans un mur collaboratif Digipad. Intègre du multi-threading pour la vitesse, la gestion des mots de passe, et la vérification des liens morts.",
            openDescriptionEN: "Open-source personal project.<br>Developed with Python (Flask) and Selenium. The application allows analyzing, extracting, and quickly downloading as a ZIP archive all resources contained in a Digipad collaborative wall. Includes multi-threading for speed, password management, and dead link checking.",
            footerText: "Stack : Python (Flask), Selenium, Multi-threading, TailwindCSS",
            footerTextEN: "Stack: Python (Flask), Selenium, Multi-threading, TailwindCSS",
            icon: "/assets/icons/python.png",
            category: 'MAIN',
            hasGitRepo: true,
            gitRepoLink: "https://github.com/JulianSEILLER/DigipadDownloader"
        },
        {
            id: "project13",
            title: "Monolith — Gestion TCG",
            titleEN: "Monolith — TCG Management",
            date: "2026-09-01",
            closedDescription: "Application web de gestion de collection de cartes Pokémon.<br>(En cours de développement)",
            closedDescriptionEN: "Web application for Pokémon card collection management.<br>(In development)",
            openDescription: "Projet d'équipe.<br>Application web de gestion de collection (TCG) permettant de suivre le prix des cartes Pokémon et de gérer sa collection. Développement collaboratif propulsé par des assistants de code IA.",
            openDescriptionEN: "Team project.<br>Collection management (TCG) web application to track Pokémon card prices and manage collections. Collaborative development powered by AI coding assistants.",
            footerText: "Stack : Next.js, TypeScript, Prisma, Neon DB, TailwindCSS. (En version Bêta)",
            footerTextEN: "Stack: Next.js, TypeScript, Prisma, Neon DB, TailwindCSS. (Beta version)",
            icon: "/assets/icons/js.png",
            category: 'MAIN',
            hasGitRepo: true,
            gitRepoLink: "https://monolith-tcg.vercel.app/"
        }
    ];

    // Trier les projets par date décroissante
    projects.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Stockage de la hauteur initiale de chaque carte
    const initialHeights = {};

    // Vérifier si la page est "indexEN.html"
    const isEnglish = window.location.pathname.includes("indexEN.html");
    const projectCardsMain = document.getElementById('project-cards-main');

    // Fonction de rendu générique pour les cartes
    function renderCards(dataArray, container) {
        if (!container) return;
        dataArray.forEach((item) => {
            const iconPath = isGithubPages ? `/portfolio${item.icon}` : item.icon;

            const card = document.createElement('div');
            card.className = 'project-card';
            card.setAttribute('id', item.id);

            if (item.inProgress) {
                card.classList.add('in-progress');
            }

            const title = isEnglish ? item.titleEN : item.title;
            const closedDescription = isEnglish ? item.closedDescriptionEN : item.closedDescription;
            const openDescription = isEnglish ? item.openDescriptionEN : item.openDescription;
            const footerText = isEnglish ? item.footerTextEN : item.footerText;

            // Génération des badges
            let cleanFooter = footerText.replace(/^(Compétences renforcées|Skills improved|Stack)\s*:\s*/i, '');
            let extraBadge = "";
            if (cleanFooter.includes(". (")) {
                const splitIndex = cleanFooter.indexOf(". (");
                const tagsPart = cleanFooter.substring(0, splitIndex);
                extraBadge = `<span class="badge" style="background-color: rgba(255,255,255,0.1); color: #ccc; border-color: rgba(255,255,255,0.2);">${cleanFooter.substring(splitIndex + 2)}</span>`;
                cleanFooter = tagsPart;
            }
            if (cleanFooter.endsWith(".")) {
                cleanFooter = cleanFooter.slice(0, -1);
            }
            const badgesHTML = '<div class="stack-badges" style="display: flex !important; flex-wrap: wrap !important; gap: 8px !important; justify-content: flex-start !important; align-self: flex-start !important; width: 100% !important; margin-left: 0 !important; text-align: left !important; margin-top: 15px; margin-bottom: 15px;">' + cleanFooter.split(/,\s*(?![^()]*\))/).map(t => `<span class="badge">${t.trim()}</span>`).join('') + extraBadge + '</div>';

            card.innerHTML = `
                <div class="card-content">
                <div class="card-image-wrapper">
                    <img src="${iconPath}" alt="${title}">
                </div>
                <div class="card-text-wrapper">
                    <h3>${title}</h3>
                    <p class="date">${formatDate(item.date)}</p>
                    <p class="desc">${closedDescription}</p>
                </div>
                </div>
                <div class="card-overlay">
                <h4>${title}</h4>
                <p class="dateOnLeft">${formatDate(item.date)}</p>
                <div class="card-details">
                    <p>${openDescription}</p>
                </div>
                ${badgesHTML}
                ${item.hasGitRepo ? `<a href="${item.gitRepoLink}" class="btn" target="_blank">${isEnglish ? 'See the project ➔' : 'Voir le projet ➔'}</a>` : ''}
                ${item.hasFile ? `<a href="${isGithubPages ? `/portfolio${item.fileLink}` : item.fileLink}" class="btn" target="_blank">${isEnglish ? 'See the file ➔' : 'Voir le fichier ➔'}</a>` : ''}
                </div>
            `;

            container.appendChild(card);

            const cardContent = card.querySelector('.card-content');
            cardContent.style.height = 'auto';

            const img = card.querySelector('img');
            img.onload = () => {
                initialHeights[item.id] = cardContent.scrollHeight;
            };

            card.addEventListener('click', (e) => {
                if (!card.classList.contains('active')) {
                    e.stopPropagation();
                    const wasAnyCardOpen = document.querySelector('.project-card.active');
                    closeAllCards();

                    img.onload = () => {
                        initialHeights[item.id] = cardContent.scrollHeight;
                    };

                    const cardOverlay = card.querySelector('.card-overlay');

                    cardContent.style.height = `${initialHeights[item.id]}px`;
                    cardContent.offsetHeight;

                    const applyHeight = () => {
                        requestAnimationFrame(() => {
                            cardContent.style.height = `${cardOverlay.scrollHeight}px`;
                            card.classList.add('active');
                        });
                    };

                    if (wasAnyCardOpen && window.innerWidth > 650) {
                        setTimeout(applyHeight, 200);
                    } else {
                        applyHeight();
                    }
                }
            });
        });
    }

    // Rendu des cartes
    renderCards(projects.filter(p => p.category === 'MAIN'), projectCardsMain);
    renderCards(projects.filter(p => p.category === 'BTS'), projectCardsBTS);
    renderCards(projects.filter(p => p.category === 'STAGE'), projectCardsStage);
    renderCards(projects.filter(p => p.category === 'BUT'), projectCardsBUT);
    if (realisationCardsContainer) {
        renderRealizations(realisations, realisationCardsContainer);
    }

    // Fermer une carte spécifique
    function closeCard(card, projectId) {
        const cardContent = card.querySelector('.card-content');
        card.classList.remove('active');
        cardContent.style.height = `${initialHeights[projectId]}px`;
        setTimeout(() => {
            cardContent.style.height = 'auto';
        }, 300);
    }

    // Fermer toutes les cartes
    function closeAllCards() {
        document.querySelectorAll('.project-card.active').forEach(card => {
            const cardId = card.getAttribute('id');
            closeCard(card, cardId);
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.project-card')) {
            closeAllCards(); // Ferme toutes les cartes si on clique ailleurs
        }
    });

    // Fonction pour formater les dates
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long' };
        const date = new Date(dateString);
        return date.toLocaleDateString(isEnglish ? 'en-US' : 'fr-FR', options);
    }
});