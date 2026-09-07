const categories = [
    { id: 'backend', fr: 'Back-end & API', en: 'Back-end & API' },
    { id: 'frontend', fr: 'Front-end', en: 'Front-end' },
    { id: 'database', fr: 'Bases de Données', en: 'Databases' },
    { id: 'conception', fr: 'Conception & Méthodes', en: 'Design & Methods' },
    { id: 'tools', fr: 'Outils & DevOps', en: 'Tools & DevOps' }
];

const allSkills = [
    // Back-end & API
    { link: 'https://www.java.com/', imgSrc: 'assets/icons/java.png', title: 'Java', category: 'backend' },
    { link: 'https://expressjs.com/', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', title: 'Express.JS', category: 'backend' },
    { link: 'https://nodejs.org/', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', title: 'Node.JS', category: 'backend' },
    { link: 'https://restfulapi.net/', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/networkx/networkx-original.svg', title: 'API REST', category: 'backend' },
    { link: 'https://www.python.org/', imgSrc: 'assets/icons/python.png', title: 'Python', category: 'backend' },
    { link: 'https://www.php.net/', imgSrc: 'assets/icons/php.png', title: 'PHP', category: 'backend' },
    { link: 'https://docs.microsoft.com/en-us/powershell/', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg', title: 'Powershell/Bash', category: 'backend' },
    
    // Front-end
    { link: 'https://reactjs.org/', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', title: 'React', category: 'frontend' },
    { link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', imgSrc: 'assets/icons/js.png', title: 'JavaScript', category: 'frontend' },
    { link: 'https://getbootstrap.com/', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', title: 'Bootstrap', category: 'frontend' },
    { link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', imgSrc: 'assets/icons/css3.png', title: 'CSS3', category: 'frontend' },
    { link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5', imgSrc: 'assets/icons/html5.png', title: 'HTML5', category: 'frontend' },
    
    // Conception & Méthodes
    { link: 'https://www.visual-paradigm.com/', imgSrc: 'assets/icons/visualparadigm.png', title: 'Visual Paradigm', category: 'conception' },
    { link: 'https://jestjs.io/', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg', title: 'Tests Unitaires', category: 'conception' },
    { link: 'https://fr.wikipedia.org/wiki/M%C3%A9thode_agile', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg', title: 'Méthode Agile', category: 'conception' },
    { link: 'https://www.figma.com/', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', title: 'Figma', category: 'conception' },
    
    // Outils & DevOps
    { link: 'https://git-scm.com/', imgSrc: 'assets/icons/git.png', title: 'Git', category: 'tools' },
    { link: 'https://about.gitlab.com/', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg', title: 'GitLab', category: 'tools' },
    { link: 'https://docker.com/', imgSrc: 'assets/icons/docker.png', title: 'Docker', category: 'tools' },
    { link: 'https://www.jetbrains.com/idea/', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg', title: 'IntelliJ', category: 'tools' },
    { link: 'https://code.visualstudio.com/', imgSrc: 'assets/icons/vscode.png', title: 'VSCode', category: 'tools' },
    { link: 'https://ubuntu.com/', imgSrc: 'assets/icons/ubuntu.png', title: 'Linux (Ubuntu)', category: 'tools' },
    { link: 'https://ollama.com/', imgSrc: 'assets/icons/ollama.png', title: 'IA (Ollama, LLMs)', category: 'tools' },
    
    // Bases de Données
    { link: 'https://www.postgresql.org/', imgSrc: 'assets/icons/postgres.png', title: 'PostgreSQL', category: 'database' },
    { link: 'https://sqlite.org/', imgSrc: 'assets/icons/sqlite.png', title: 'SQLite', category: 'database' },
    { link: 'https://fr.wikipedia.org/wiki/Structured_Query_Language', imgSrc: 'assets/icons/sql.png', title: 'SQL', category: 'database' },
    { link: 'https://min.io/', imgSrc: 'assets/icons/minio.png', title: 'MinIO', category: 'database' }
];

// Fonction pour générer les cartes dynamiquement
function generateSkillCards() {
    const container = document.querySelector('.skillCardsContainer');
    container.innerHTML = ''; 

    // Vérifier si la page est "indexEN.html"
    const isEnglishPage = window.location.pathname.includes('indexEN.html');

    categories.forEach(cat => {
        const categorySkills = allSkills.filter(skill => skill.category === cat.id);
        
        // Ne générer la catégorie que si elle contient des éléments
        if (categorySkills.length > 0) {

            const header = document.createElement('h3');
            header.textContent = isEnglishPage ? cat.en : cat.fr;
            header.classList.add('revealL');
            container.appendChild(header);

            const hr = document.createElement('hr');
            hr.classList.add('revealB');
            container.appendChild(hr);

            const cardsContainer = document.createElement('div');
            cardsContainer.classList.add('skillCards', 'revealB');

            categorySkills.forEach(skill => {
                const card = document.createElement('a');
                card.href = skill.link;
                card.classList.add('skillCard');
                card.target = '_blank';

                const img = document.createElement('img');
                img.src = skill.imgSrc;
                img.alt = skill.title;

                const h4 = document.createElement('h4');
                h4.textContent = skill.title;

                card.appendChild(img);
                card.appendChild(h4);

                cardsContainer.appendChild(card);
            });

            container.appendChild(cardsContainer);
        }
    });
}
window.onload = generateSkillCards;
