/* --------- ScrollReveal --------- */
const sr = ScrollReveal();

// ---------- Without delay
sr.reveal('.revealL', {
    duration: 1000, 
    origin: 'left',
    distance: '50px',
    reset: false, 
    viewFactor: 0, 
});

sr.reveal('.revealR', {
        duration: 1000,
        origin: 'right',
        distance: '50px',
        reset: false,
        viewFactor: 0,
        });

sr.reveal('.revealT', {
        duration: 1000,
        origin: 'top',
        distance: '50px',
        reset: false,
        viewFactor: 0,
        });

sr.reveal('.revealB', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        reset: false,
        viewFactor: 0,
});

// ---------- With delay
sr.reveal('.revealLwD', {
        duration: 1000, 
        origin: 'left',
        distance: '50px',
        reset: false, 
        delay: 80,
        viewFactor: 0, 
    });

sr.reveal('.revealRwD', {
        duration: 1000,
        origin: 'right',
        distance: '50px',
        reset: false,
        delay: 80,
        viewFactor: 0,
        });

sr.reveal('.revealTwD', {
        duration: 1000,
        origin: 'top',
        distance: '50px',
        reset: false,
        delay: 80,
        viewFactor: 0,
        });

sr.reveal('.revealBwD', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        reset: false,
        delay: 80,
        viewFactor: 0,
});

/* --------- Retraction du header --------- */
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 30) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/* --------- Animation du texte --------- */
function updateHello() {
    const now = new Date();
    const hours = now.getHours();
    const greetingElement = document.getElementById('hello');
    const isEnglishPage = window.location.pathname.includes('indexEN.html');
    
    if (isEnglishPage) {
        greetingElement.textContent = "Hey !";
    } else {
        if (hours >= 18 || hours < 6) {
            greetingElement.textContent = 'Bonsoir !';
        } else {
            greetingElement.textContent = 'Bonjour !';
        }
    }
}

/* --------- Animation du HR --------- */
document.addEventListener('DOMContentLoaded', function() {
    const hrElements = document.querySelectorAll('.sectionHeader hr');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1 // 10%
    });

    hrElements.forEach(hr => {
        observer.observe(hr);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, div.header-left.smallScreen a, .overlay-content a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetHref = this.getAttribute('href');
            
            if (targetHref && targetHref.startsWith('#')) {
                event.preventDefault();
                window.history.pushState(null, null, targetHref);
                
                // Défilement normal
                const targetElement = document.querySelector(targetHref);
                if (targetElement) {
                    const offset = -50;
                    const targetPosition = targetElement.offsetTop + offset;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
                
                // Fermer le menu sur téléphone si ouvert
                const overlayMenu = document.getElementById('overlay-menu');
                if (overlayMenu && overlayMenu.classList.contains('active')) {
                    overlayMenu.classList.remove('active');
                }
            }
        });
    });
});

// Gérer le bouton retour du navigateur
window.addEventListener('popstate', () => {
    const targetElement = document.querySelector(window.location.hash || '#home');
    if (targetElement) {
        const offset = -50;
        window.scrollTo({ top: targetElement.offsetTop + offset, behavior: 'smooth' });
    }
});

/* --------- Formulaire de contact (EmailJS) --------- */
document.addEventListener('DOMContentLoaded', () => {
    emailjs.init('dfx9Z4lE29zQq_uif');

    const form = document.getElementById('contact-form');
    const statusEl = document.getElementById('form-status');
    const isEnglishPage = window.location.pathname.includes('indexEN.html');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = isEnglishPage ? 'Sending...' : 'Envoi en cours...';
        statusEl.textContent = '';
        statusEl.style.color = '';

        emailjs.sendForm('service_movp2up', 'template_fil1szx', form)
            .then(() => {
                statusEl.textContent = isEnglishPage
                    ? '✅ Message sent successfully!'
                    : '✅ Message envoyé avec succès !';
                statusEl.style.color = '#4CAF50';
                form.reset();
            })
            .catch((error) => {
                console.error('EmailJS error:', error);
                statusEl.textContent = isEnglishPage
                    ? '❌ An error occurred. Please try again.'
                    : '❌ Une erreur est survenue. Veuillez réessayer.';
                statusEl.style.color = '#EF4765';
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = isEnglishPage ? 'Send' : 'Envoyer';
            });
    });
});

/* --------- Date de dernière mise à jour et back to top --------- */
document.addEventListener('DOMContentLoaded', () => {
    const lastUpdatedElement = document.getElementById('last-updated');
    const lastUpdatedDate = new Date(document.lastModified);
    const isEnglishPage = window.location.pathname.includes('indexEN.html');
    
    lastUpdatedElement.textContent = lastUpdatedDate.toLocaleDateString(isEnglishPage ? 'en-US' : 'fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const backToTopLink = document.querySelector('.back-to-top');
    backToTopLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

/* --------- Age --------- */
function updateAge() {
    const birthDate = new Date('2005-12-01');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    const ageElement = document.getElementById('age');
    ageElement.textContent = age;
}
document.addEventListener('DOMContentLoaded', updateAge);

/* --------- Indicateur de lien actif dans la navbar --------- */
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id], div#home');
    const navLinks = document.querySelectorAll('nav.bigScreen a[href^="#"]');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active-nav');
                    const href = link.getAttribute('href').substring(1);
                    if (href === sectionId) {
                        link.classList.add('active-nav');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});

/* --------- Main --------- */
updateHello();

/* --------- Menu Hamburger --------- */
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const overlayMenu = document.getElementById('overlay-menu');

    menuToggle.addEventListener('click', () => {
        setTimeout(() => {
            overlayMenu.classList.toggle('active');
        }, 50);
    });

    const overlayLinks = overlayMenu.querySelectorAll('a, button');
    overlayLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');

            if (href === 'index.html' || href === 'indexEN.html') {
                // Je force la redirection ici parce que ça marche pas tout seul dans le HTML aucune idée de pourquoi
                event.preventDefault();
                overlayMenu.classList.remove('active');
                setTimeout(() => {
                    window.location.href = href;
                }, 100);
            } else if (href && href.startsWith('#')) {
            } else if (link.tagName === 'BUTTON' || link.target === '_blank') {   // Gestion des boutons & liens externes
                setTimeout(() => {
                    overlayMenu.classList.remove('active');
                }, 50);
            }
        });
    });

    // On ferme le menu si clic ailleurs
    document.addEventListener('click', (event) => {
        if (!overlayMenu.contains(event.target) && event.target !== menuToggle) {
            overlayMenu.classList.remove('active');
        }
    });
});

/* --------- Experiences (Exp-cards) --------- */
document.addEventListener('DOMContentLoaded', () => {
    const expCards = document.querySelectorAll('.exp-card');
    const expInitialHeights = {};

    // Stocker la hauteur initiale de chaque carte
    expCards.forEach(card => {
        const content = card.querySelector('.exp-content');
        if (content) {
            content.style.height = 'auto';
            expInitialHeights[card.id || Array.from(expCards).indexOf(card)] = content.scrollHeight;
        }
    });

    function closeAllExpCards() {
        expCards.forEach(card => {
            if (card.classList.contains('active')) {
                const content = card.querySelector('.exp-content');
                const key = card.id || Array.from(expCards).indexOf(card);
                card.classList.remove('active');
                if (content) {
                    content.style.height = `${expInitialHeights[key]}px`;
                    setTimeout(() => { content.style.height = 'auto'; }, 300);
                }
            }
        });
    }

    expCards.forEach((card, idx) => {
        const key = card.id || idx;

        card.addEventListener('click', (e) => {
            if (card.classList.contains('active')) return;

            e.stopPropagation();
            const wasAnyOpen = document.querySelector('.exp-card.active');
            closeAllExpCards();

            const content = card.querySelector('.exp-content');
            const overlay = card.querySelector('.exp-overlay');
            if (!content || !overlay) return;

            content.style.height = `${expInitialHeights[key]}px`;
            content.offsetHeight; // force reflow

            const applyHeight = () => {
                requestAnimationFrame(() => {
                    content.style.height = `${overlay.scrollHeight}px`;
                    card.classList.add('active');
                });
            };

            if (wasAnyOpen && window.innerWidth > 650) {
                setTimeout(applyHeight, 200);
            } else {
                applyHeight();
            }
        });
    });

    // Fermer si clic ailleurs
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.exp-card')) {
            closeAllExpCards();
        }
    });
});