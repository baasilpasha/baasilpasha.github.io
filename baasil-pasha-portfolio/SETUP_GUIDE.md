# Portfolio Setup & Deployment Guide

## Table of Contents
1. [Quick Setup](#quick-setup)
2. [Detailed Customization](#detailed-customization)
3. [GitHub Pages Deployment](#github-pages-deployment)
4. [Using on Your Resume](#using-on-your-resume)
5. [Maintenance & Updates](#maintenance--updates)

---

## Quick Setup

### For GitHub Pages Hosting

**Step 1: Create Repository**
1. Go to https://github.com/new
2. Repository name: `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
3. Make it Public
4. Do NOT initialize with README (we have our own files)
5. Click "Create repository"

**Step 2: Upload Your Files**

Option A - Using Git (Recommended):
```bash
# Navigate to where you saved these files
cd /path/to/portfolio-site

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio site"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Option B - Using GitHub Web Interface:
1. Go to your new repository
2. Click "uploading an existing file"
3. Drag and drop ALL files and folders
4. Commit changes

**Step 3: Enable GitHub Pages**
1. Go to repository Settings
2. Click "Pages" in left sidebar
3. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
4. Click Save
5. Wait 2-3 minutes
6. Your site will be live at `https://yourusername.github.io`

---

## Detailed Customization

### 1. Update Personal Information

Open `content/site.json` in any text editor. Here's what to change:

```json
{
  "profile": {
    "name": "Your Full Name",              // ← Change this
    "title": "Your Professional Title",    // ← Change this
    "location": "Your City, State",        // ← Change this
    "bio": "Your elevator pitch...",       // ← Change this
    "about": "Longer story...",            // ← Change this
    "links": {
      "github": "https://github.com/YOU",  // ← Your GitHub
      "linkedin": "https://linkedin.com/in/YOU",  // ← Your LinkedIn
      "resume": "assets/resume.pdf"        // ← Keep as is, or change filename
    }
  }
}
```

### 2. Add Your Resume

1. Export your resume as PDF
2. Rename it to `resume.pdf`
3. Place it in the `assets/` folder (same level as `css/` and `js/`)
4. The link will work automatically!

### 3. Update Projects

For each project in `site.json`:

```json
{
  "id": "unique-slug",                     // URL-safe: my-project-name
  "name": "Display Name",                  // How it appears on site
  "repo": "https://github.com/you/repo",   // Your GitHub repo URL
  "featured": true,                        // true = shows on homepage
  "isFork": false,                         // true if you forked it
  "upstream": "https://...",               // Only if isFork is true
  "summary": "One sentence about the project",
  "highlights": [                          // 2-3 key achievements
    "Built X which does Y",
    "Optimized Z by 50%"
  ],
  "bullets": [                             // 3-5 detailed points
    "Implemented feature A",
    "Used technology B",
    "Achieved result C"
  ],
  "tags": ["Python", "ML", "PyTorch"],    // Technologies used
  "languages": ["Python", "C++"],          // Programming languages
  "category": "ml"                         // ml, tools, data, coursework, other
}
```

**Categories:**
- `ml` - Machine Learning / AI projects
- `tools` - Scripts, automation, utilities
- `data` - Data analysis, visualization
- `coursework` - Academic projects
- `other` - Everything else

### 4. Update Skills

```json
"skills": {
  "languages": ["Python", "JavaScript", "C++"],
  "frameworks": ["PyTorch", "React", "TensorFlow"],
  "tools": ["Git", "Docker", "AWS"],
  "areas": ["Machine Learning", "Web Development"]
}
```

Add or remove items as needed. They'll appear as tags on the About page.

### 5. Update Experience & Education

```json
"experience": [
  {
    "title": "Software Engineer Intern",
    "organization": "Tech Company",
    "period": "Summer 2024",
    "description": "Brief description of what you did"
  }
],
"education": [
  {
    "institution": "University Name",
    "degree": "BS Computer Science",
    "period": "2021–2025",
    "location": "City, State"
  }
]
```

---

## GitHub Pages Deployment

### First Time Setup

1. **Create repo**: `yourusername.github.io`
2. **Upload files**: All HTML, CSS, JS, and folders
3. **Enable Pages**: Settings → Pages → main branch → / (root)
4. **Wait**: 2-5 minutes for first deployment
5. **Visit**: `https://yourusername.github.io`

### Updating Your Site

After making changes to `site.json` or any file:

```bash
# Save your changes
git add .
git commit -m "Update projects"
git push

# Wait 1-2 minutes, changes will appear on your live site
```

### Common Issues

**Site not updating?**
- Wait 2-3 minutes after push
- Check GitHub Actions tab for build status
- Hard refresh browser: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)

**404 Error?**
- Verify repository name is exactly `yourusername.github.io`
- Check that index.html is in root folder (not in a subfolder)
- Ensure GitHub Pages is enabled in Settings

**Projects not showing?**
- Validate JSON at https://jsonlint.com
- Check browser console (F12) for errors
- Verify `featured: true` for homepage projects

---

## Using on Your Resume

### 1. Direct Link

Add to your resume header or contact section:

```
Portfolio: baasilpasha.github.io
```

Or with HTTPS:
```
Portfolio: https://baasilpasha.github.io
```

### 2. In Your Resume Sections

**Experience section:**
```
Machine Learning Researcher | University of Bridgeport
June 2025 – Present
• Developed computer vision models using PyTorch
• View projects: baasilpasha.github.io/projects.html
```

**Skills section:**
```
Technical Skills: Python, PyTorch, C++ 
Portfolio: baasilpasha.github.io
```

### 3. LinkedIn Integration

1. Go to LinkedIn profile
2. Add website in "Contact Info"
3. Choose "Portfolio" as type
4. Enter your URL

### 4. Email Signature

```
Baasil Pasha
Machine Learning Researcher
📧 your.email@domain.com
🌐 baasilpasha.github.io
```

### 5. Business Cards

Include as a QR code or short URL for easy sharing.

---

## Maintenance & Updates

### Regular Updates (Monthly)

1. **Add new projects** as you complete them
2. **Update skills** when you learn new technologies
3. **Refresh experience** with current roles
4. **Add blog posts** if you start writing

### Seasonal Updates

**Every semester/quarter:**
- Update education status
- Add completed coursework
- Archive old projects if needed
- Update resume PDF

**Before job applications:**
- Feature your best 4 projects
- Update bio to match target role
- Ensure all links work
- Test on mobile

### Content Best Practices

✅ **Do:**
- Use action verbs (Built, Implemented, Optimized)
- Quantify achievements (50% faster, 1000+ users)
- Keep summaries concise (1-2 sentences)
- Update regularly (monthly)
- Test all links before sharing

❌ **Don't:**
- Use passive voice
- Include unfinished/broken projects
- Forget to update dates
- Leave placeholder text
- Use overly technical jargon

### Version Control Best Practices

Create a branch for major updates:

```bash
# Create feature branch
git checkout -b update-projects

# Make changes to site.json
# Test locally

# Commit and push
git add content/site.json
git commit -m "Add new ML projects"
git push origin update-projects

# Merge to main when ready
git checkout main
git merge update-projects
git push
```

### Backup Your Content

Keep a backup of `site.json`:
- Save to Google Drive / Dropbox
- Email yourself a copy
- Keep in multiple locations

---

## Advanced Customizations

### Add a Custom Domain

1. Buy domain (e.g., yourname.com)
2. Create `CNAME` file in root:
   ```
   www.yourname.com
   ```
3. Add DNS records at your registrar:
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```
4. Wait for DNS propagation (4-48 hours)

### Change Color Scheme

Edit `assets/css/style.css`:

```css
:root {
  --accent-primary: #2563eb;    /* Your brand color */
  --accent-secondary: #3b82f6;  /* Lighter variant */
}
```

Use a color picker to find your hex codes!

### Add Google Analytics

1. Sign up at https://analytics.google.com
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add before `</head>` in all HTML files:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Getting Help

### Self-Troubleshooting

1. **Check browser console**: F12 → Console tab
2. **Validate JSON**: Copy `site.json` content to https://jsonlint.com
3. **Test locally**: Open index.html directly in browser
4. **Clear cache**: Hard refresh your browser

### Resources

- **JSON Validator**: https://jsonlint.com
- **GitHub Pages Docs**: https://docs.github.com/pages
- **Markdown Guide**: https://www.markdownguide.org
- **HTML Reference**: https://developer.mozilla.org/en-US/docs/Web/HTML

### Common Questions

**Q: Can I use a different GitHub username?**
A: Yes! Just name your repo `username.github.io` where username matches your GitHub account.

**Q: Can I host multiple sites?**
A: One `username.github.io` per account, but you can create `username.github.io/project-name` for other repos.

**Q: Is this free?**
A: Yes! GitHub Pages is completely free for public repositories.

**Q: Can I make it private?**
A: GitHub Pages requires public repos on free accounts. Upgrade to Pro for private repos.

**Q: How do I add images?**
A: Put images in `assets/img/` folder, reference as `assets/img/photo.jpg` in HTML.

---

**Need more help?** Open an issue on GitHub or check the README.md file!

Good luck with your portfolio! 🚀
