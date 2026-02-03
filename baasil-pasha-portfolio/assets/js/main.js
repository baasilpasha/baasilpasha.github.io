// =================================
// Global State & Data
// =================================

let siteData = null;

// =================================
// Theme Management
// =================================

function initTheme() {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = storedTheme || (prefersDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', theme);
    
    // Theme toggle buttons
    const themeToggles = document.querySelectorAll('.theme-toggle');
    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', toggleTheme);
    });
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// =================================
// Mobile Menu
// =================================

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
        }
    });
}

// =================================
// Data Loading
// =================================

async function loadSiteData() {
    try {
        const response = await fetch('content/site.json');
        if (!response.ok) {
            throw new Error('Failed to load site data');
        }
        siteData = await response.json();
        return siteData;
    } catch (error) {
        console.error('Error loading site data:', error);
        return null;
    }
}

// =================================
// Homepage Rendering
// =================================

async function initHomepage() {
    const data = await loadSiteData();
    if (!data) return;
    
    // Update profile info
    const profileName = document.getElementById('profile-name');
    const profileTitle = document.getElementById('profile-title');
    const profileBio = document.getElementById('profile-bio');
    
    if (profileName) profileName.textContent = data.profile.name;
    if (profileTitle) profileTitle.textContent = data.profile.title;
    if (profileBio) profileBio.textContent = data.profile.bio;
    
    // Update links
    updateLinks(data.profile.links);
    
    // Render focus areas
    renderFocusAreas(data.focusAreas);
    
    // Render featured projects
    renderFeaturedProjects(data.projects);
}

function renderFocusAreas(focusAreas) {
    const container = document.getElementById('focus-grid');
    if (!container || !focusAreas) return;
    
    container.innerHTML = focusAreas.map(area => `
        <div class="focus-card">
            <span class="focus-icon" role="img" aria-label="${area.title}">${area.icon}</span>
            <h3>${area.title}</h3>
            <p>${area.description}</p>
        </div>
    `).join('');
}

function renderFeaturedProjects(projects) {
    const container = document.getElementById('featured-projects');
    if (!container || !projects) return;
    
    const featured = projects.filter(p => p.featured).slice(0, 4);
    container.innerHTML = featured.map(project => createProjectCard(project)).join('');
}

// =================================
// Project Card Component
// =================================

function createProjectCard(project) {
    const badges = [];
    if (project.featured) {
        badges.push('<span class="badge badge-featured">Featured</span>');
    }
    if (project.isFork) {
        badges.push('<span class="badge badge-fork">Fork</span>');
    }
    
    const tags = project.tags.slice(0, 3).map(tag => 
        `<span class="tag">${tag}</span>`
    ).join('');
    
    return `
        <div class="project-card">
            <div class="project-card-header">
                <h3><a href="project.html?id=${project.id}">${project.name}</a></h3>
                <div class="project-badges">
                    ${badges.join('')}
                </div>
            </div>
            <p class="project-summary">${project.summary}</p>
            <div class="project-tags">
                ${tags}
            </div>
            <a href="project.html?id=${project.id}" class="project-link">
                View details
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
    `;
}

// =================================
// Update Links
// =================================

function updateLinks(links) {
    if (!links) return;
    
    // Update all GitHub links
    const githubLinks = document.querySelectorAll('#github-link, #about-github, #footer-github');
    githubLinks.forEach(link => {
        if (link) link.href = links.github;
    });
    
    // Update all LinkedIn links
    const linkedinLinks = document.querySelectorAll('#linkedin-link, #about-linkedin, #footer-linkedin');
    linkedinLinks.forEach(link => {
        if (link) link.href = links.linkedin;
    });
    
    // Update resume link
    const resumeLink = document.getElementById('about-resume');
    if (resumeLink) resumeLink.href = links.resume;
}

// =================================
// Footer Year
// =================================

function updateFooterYear() {
    const yearElements = document.querySelectorAll('#current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        if (el) el.textContent = currentYear;
    });
}

// =================================
// Smooth Scroll
// =================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// =================================
// Keyboard Navigation
// =================================

function initKeyboardNav() {
    // Escape key closes mobile menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const menuToggle = document.querySelector('.menu-toggle');
            const navMenu = document.querySelector('.nav-menu');
            if (menuToggle && navMenu) {
                menuToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
            }
        }
    });
}

// =================================
// Animations on Scroll
// =================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe project cards and focus cards
    document.querySelectorAll('.project-card, .focus-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// =================================
// Initialize on Page Load
// =================================

document.addEventListener('DOMContentLoaded', () => {
    // Core features
    initTheme();
    initMobileMenu();
    updateFooterYear();
    initSmoothScroll();
    initKeyboardNav();
    
    // Page-specific initialization
    const isHomepage = document.querySelector('.hero') !== null;
    
    if (isHomepage) {
        initHomepage();
    } else {
        // Load data for links on other pages
        loadSiteData().then(data => {
            if (data) {
                updateLinks(data.profile.links);
            }
        });
    }
    
    // Add scroll animations after initial render
    setTimeout(initScrollAnimations, 100);
});

// =================================
// Export for use in other files
// =================================

window.siteUtils = {
    loadSiteData,
    createProjectCard,
    updateLinks
};
