# Repository Structure

```
baasilpasha.github.io/
│
├── index.html                 # Homepage with hero, focus areas, featured projects
├── projects.html              # All projects with search and filtering
├── project.html               # Individual project detail page
├── about.html                 # About page with bio, skills, experience
│
├── content/
│   └── site.json             # ⭐ MAIN DATA FILE - Edit this for all content
│
├── assets/
│   ├── css/
│   │   └── style.css         # All styles, theme variables, responsive design
│   │
│   ├── js/
│   │   ├── main.js           # Core functionality (theme, navigation, rendering)
│   │   └── projects.js       # Projects page logic (search, filters)
│   │
│   └── img/
│       └── .gitkeep          # Placeholder (add your images here)
│
├── README.md                  # Main documentation
└── SETUP_GUIDE.md            # Detailed setup and deployment instructions
```

## File Purposes

### HTML Files (4 files)
- **index.html**: Homepage with hero section, focus areas, and featured projects
- **projects.html**: Grid view of all projects with search and category filters
- **project.html**: Detailed view of individual projects (loaded via query param)
- **about.html**: Extended bio, experience, education, skills, and CTAs

### Content
- **site.json**: Single source of truth for ALL site content (profile, projects, skills)

### Stylesheets
- **style.css**: Complete styling with CSS variables for theming, responsive design

### JavaScript
- **main.js**: Theme toggling, mobile menu, data loading, homepage rendering
- **projects.js**: Search functionality, category filtering, projects grid rendering

### Documentation
- **README.md**: Overview, features, customization guide, troubleshooting
- **SETUP_GUIDE.md**: Step-by-step deployment and usage instructions

## Key Features by File

### index.html
✓ Hero section with name and bio
✓ Focus areas grid (4 customizable cards)
✓ Featured projects (auto-populated from site.json)
✓ Responsive navigation with mobile menu
✓ Dark/light theme toggle

### projects.html
✓ Search bar for filtering by name/tags
✓ Category filters (All, Featured, ML/AI, Tools, Coursework, Forks)
✓ Responsive project cards grid
✓ Real-time filtering and search

### project.html
✓ Full project details from site.json
✓ Highlights and implementation details
✓ Technology tags
✓ Fork detection with upstream link
✓ GitHub repository link

### about.html
✓ Extended narrative bio
✓ Experience timeline
✓ Education details
✓ Skills grouped by category
✓ Languages spoken
✓ Contact CTAs

### style.css
✓ CSS variables for easy theming
✓ Light and dark mode support
✓ Mobile-first responsive design
✓ Smooth transitions and animations
✓ Accessibility features (focus states, reduced motion)

### main.js
✓ Theme persistence with localStorage
✓ Mobile hamburger menu
✓ Dynamic content rendering from JSON
✓ Smooth scroll behavior
✓ Keyboard navigation support

### projects.js
✓ Real-time search filtering
✓ Category filtering
✓ Project card animations
✓ Debounced search input
✓ No results handling

### site.json
✓ Profile information
✓ Experience and education
✓ Skills and languages
✓ Focus areas
✓ Complete project data
✓ All links and metadata

## Total Files: 11
- 4 HTML pages
- 1 CSS file
- 2 JavaScript files
- 1 JSON data file
- 2 Documentation files
- 1 Image placeholder

## Installation Size
- **Uncompressed**: ~100 KB
- **No dependencies**
- **No build process**
- **Pure vanilla code**
