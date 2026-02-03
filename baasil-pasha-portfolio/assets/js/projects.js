// =================================
// Projects Page Logic
// =================================

let allProjects = [];
let currentFilter = 'all';
let searchQuery = '';

// =================================
// Initialize Projects Page
// =================================

async function initProjectsPage() {
    try {
        const response = await fetch('content/site.json');
        const data = await response.json();
        allProjects = data.projects || [];
        
        renderProjects();
        initFilters();
        initSearch();
    } catch (error) {
        console.error('Error loading projects:', error);
        showNoResults();
    }
}

// =================================
// Render Projects
// =================================

function renderProjects() {
    const container = document.getElementById('projects-grid');
    const noResults = document.getElementById('no-results');
    
    if (!container) return;
    
    const filteredProjects = filterProjects();
    
    if (filteredProjects.length === 0) {
        container.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        return;
    }
    
    if (noResults) noResults.style.display = 'none';
    
    container.innerHTML = filteredProjects.map(project => createProjectCard(project)).join('');
    
    // Add animations
    setTimeout(() => {
        animateCards();
    }, 50);
}

function createProjectCard(project) {
    const badges = [];
    if (project.featured) {
        badges.push('<span class="badge badge-featured">Featured</span>');
    }
    if (project.isFork) {
        badges.push('<span class="badge badge-fork">Fork</span>');
    }
    
    const tags = project.tags.slice(0, 4).map(tag => 
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
// Filter Logic
// =================================

function filterProjects() {
    let filtered = [...allProjects];
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(project => {
            switch (currentFilter) {
                case 'featured':
                    return project.featured === true;
                case 'forks':
                    return project.isFork === true;
                case 'ml':
                    return project.category === 'ml';
                case 'tools':
                    return project.category === 'tools';
                case 'coursework':
                    return project.category === 'coursework';
                default:
                    return true;
            }
        });
    }
    
    // Apply search query
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(project => {
            const searchableText = [
                project.name,
                project.summary,
                ...project.tags,
                ...(project.languages || [])
            ].join(' ').toLowerCase();
            
            return searchableText.includes(query);
        });
    }
    
    // Sort: featured first, then alphabetically
    filtered.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.name.localeCompare(b.name);
    });
    
    return filtered;
}

// =================================
// Filter UI
// =================================

function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update filter and re-render
            currentFilter = button.getAttribute('data-filter');
            renderProjects();
        });
    });
}

// =================================
// Search UI
// =================================

function initSearch() {
    const searchInput = document.getElementById('project-search');
    
    if (!searchInput) return;
    
    // Debounce search input
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchQuery = e.target.value.trim();
            renderProjects();
        }, 300);
    });
    
    // Clear search on Escape
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            searchQuery = '';
            renderProjects();
        }
    });
}

// =================================
// Animations
// =================================

function animateCards() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

function showNoResults() {
    const container = document.getElementById('projects-grid');
    const noResults = document.getElementById('no-results');
    
    if (container) container.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
}

// =================================
// Initialize on Load
// =================================

if (document.getElementById('projects-grid')) {
    document.addEventListener('DOMContentLoaded', initProjectsPage);
}
