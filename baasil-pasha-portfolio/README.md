# Baasil Pasha - Portfolio Website

A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. Designed for machine learning researchers and computer science students to showcase their work professionally.

🔗 **Live Site**: [https://baasilpasha.github.io](https://baasilpasha.github.io)

## Features

- ✨ **Modern Design**: Clean, professional interface with ML/AI research aesthetic
- 🌓 **Dark/Light Mode**: Automatic theme switching with localStorage persistence
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: Semantic HTML, keyboard navigation, and ARIA labels
- 🎨 **Easy Customization**: All content managed through a single JSON file
- 🔍 **Project Filtering**: Search and filter projects by category and tags
- ⚡ **Fast & Lightweight**: No frameworks, no build process, pure vanilla JavaScript
- 🎯 **SEO Optimized**: Proper meta tags and OpenGraph support

## Quick Start

### 1. Fork & Clone

```bash
# Fork this repository on GitHub, then clone it
git clone https://github.com/baasilpasha/baasilpasha.github.io.git
cd baasilpasha.github.io
```

### 2. Customize Content

Edit `content/site.json` to update your personal information, projects, and skills. See [Customization Guide](#customization-guide) below.

### 3. Deploy to GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Click **Save**
5. Your site will be live at `https://yourusername.github.io` in a few minutes!

## Project Structure

```
baasilpasha.github.io/
├── index.html              # Homepage
├── projects.html           # Projects listing page
├── project.html            # Individual project detail page
├── about.html              # About page
├── assets/
│   ├── css/
│   │   └── style.css      # All styles with CSS variables
│   ├── js/
│   │   ├── main.js        # Core functionality
│   │   └── projects.js    # Projects page logic
│   └── img/               # Images (add your own)
├── content/
│   └── site.json          # ⭐ ALL CONTENT LIVES HERE
└── README.md              # This file
```

## Customization Guide

### Editing `content/site.json`

This single file controls **all** content on your site. Here's what you can customize:

#### 1. Profile Information

```json
"profile": {
  "name": "Your Name",
  "title": "Your Title/Role",
  "location": "City, State/Country",
  "bio": "Short bio for homepage (2-3 sentences)",
  "about": "Longer narrative for About page (multiple paragraphs separated by \\n\\n)",
  "links": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://www.linkedin.com/in/yourprofile",
    "resume": "assets/resume.pdf"
  }
}
```

#### 2. Experience & Education

```json
"experience": [
  {
    "title": "Your Role",
    "organization": "Company/University",
    "period": "Month Year – Present",
    "description": "Brief description"
  }
],
"education": [
  {
    "institution": "University Name",
    "degree": "Degree Name & Major",
    "period": "Year–Year",
    "location": "City, State"
  }
]
```

#### 3. Skills

```json
"skills": {
  "languages": ["Python", "C++", "JavaScript"],
  "frameworks": ["PyTorch", "TensorFlow", "React"],
  "tools": ["Git", "Docker", "VS Code"],
  "areas": ["Machine Learning", "Computer Vision"]
}
```

#### 4. Focus Areas (Homepage Cards)

```json
"focusAreas": [
  {
    "title": "Area Name",
    "description": "What you do in this area",
    "icon": "🧠"  // Any emoji
  }
]
```

#### 5. Projects

Each project should have:

```json
{
  "id": "unique-project-id",           // URL-friendly, lowercase with hyphens
  "name": "Display Name",
  "repo": "https://github.com/user/repo",
  "featured": true,                    // Show on homepage
  "isFork": false,                     // Is this a forked repo?
  "upstream": "https://...",           // Original repo if fork
  "summary": "1-2 sentence description",
  "highlights": [                      // Key achievements (2-3 items)
    "Major accomplishment 1",
    "Major accomplishment 2"
  ],
  "bullets": [                         // Detailed what's inside (3-5 items)
    "Implementation detail 1",
    "Feature 2",
    "Technical aspect 3"
  ],
  "tags": ["PyTorch", "CV", "ML"],    // Technology tags
  "languages": ["Python"],             // Programming languages
  "category": "ml"                     // ml, tools, data, coursework, other
}
```

**Categories for filtering:**
- `ml` - Machine Learning projects
- `tools` - Automation and tooling
- `data` - Data science/analysis
- `coursework` - Academic projects
- `other` - Everything else

### Adding Your Resume

1. Export your resume as a PDF
2. Place it in `assets/resume.pdf`
3. Update the link in `site.json`:
   ```json
   "links": {
     "resume": "assets/resume.pdf"
   }
   ```

### Changing Colors/Theme

Edit CSS variables in `assets/css/style.css`:

```css
:root {
  --accent-primary: #2563eb;    /* Main accent color */
  --accent-secondary: #3b82f6;  /* Secondary accent */
  /* ... more variables ... */
}

[data-theme="dark"] {
  /* Dark theme overrides */
}
```

### Adding Images

1. Place images in `assets/img/`
2. Reference them in HTML: `<img src="assets/img/yourimage.png" alt="Description">`

## Pages Overview

### Homepage (`index.html`)
- Hero section with name, title, bio
- Focus areas grid (4 cards)
- Featured projects (up to 4)
- Call-to-action buttons

### Projects (`projects.html`)
- Search bar for filtering
- Category filter buttons (All, Featured, ML/AI, Tools, Coursework, Forks)
- Grid of all projects
- Click any project to see details

### Project Detail (`project.html`)
- Full project description
- Highlights and implementation details
- Technology tags
- Link to GitHub repository
- Fork notice (if applicable)

### About (`about.html`)
- Extended biography
- Experience timeline
- Education history
- Skills organized by category
- Languages spoken
- Call-to-action for opportunities

## Development

### Local Testing

Simply open `index.html` in your browser:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx http-server)
npx http-server

# Then visit http://localhost:8000
```

### Browser Compatibility

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

### Accessibility Features

- ✅ Semantic HTML5 elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Color contrast compliance
- ✅ Reduced motion support
- ✅ Screen reader friendly

## Common Customizations

### Change Font

Edit the CSS variable in `style.css`:

```css
:root {
  --font-sans: 'Your Font', -apple-system, sans-serif;
}
```

Then add the font (e.g., Google Fonts) to `<head>` in HTML files:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Add Google Analytics

Add before `</head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Add Custom Domain

1. Create a file named `CNAME` in the root directory
2. Add your domain: `www.yourdomain.com`
3. Configure DNS at your domain registrar:
   - Add CNAME record: `www` → `yourusername.github.io`
   - Add A records for apex domain (if desired)

### Add a Blog Section

1. Create `blog.html` based on `projects.html` structure
2. Add blog posts to `site.json`:
   ```json
   "posts": [
     {
       "id": "post-slug",
       "title": "Post Title",
       "date": "2024-01-15",
       "summary": "...",
       "content": "Full markdown or HTML content"
     }
   ]
   ```
3. Create `post.html` similar to `project.html`
4. Add navigation link

## Troubleshooting

### Projects Not Showing

- Check that `content/site.json` is valid JSON (use JSONLint)
- Open browser console (F12) to check for errors
- Verify `featured: true` for homepage projects
- Check that project IDs are unique and URL-safe

### Theme Not Persisting

- Check browser's localStorage is enabled
- Try clearing cache and reloading

### Search/Filter Not Working

- Verify `projects.js` is loaded in `projects.html`
- Check browser console for JavaScript errors
- Ensure project categories match filter button `data-filter` values

### GitHub Pages Not Updating

- Wait 2-3 minutes after pushing changes
- Check GitHub Actions tab for build status
- Clear browser cache
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## Contributing

This is a personal portfolio template. Feel free to:
- Fork for your own use
- Submit issues for bugs
- Share improvements via Pull Requests

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Built with ❤️ using vanilla web technologies.

- Design system inspired by modern ML/research portfolios
- Icons from [Heroicons](https://heroicons.com/)
- No external dependencies or frameworks

## Support

For questions or issues:
1. Check this README thoroughly
2. Review `site.json` syntax
3. Open browser console to check for errors
4. Create an issue on GitHub

---

**Happy building! 🚀**

If you use this template, consider giving it a ⭐ on GitHub!
