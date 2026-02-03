# Quick Start Checklist

## 🚀 Get Your Portfolio Live in 10 Minutes

### Step 1: Customize Content (5 minutes)
- [ ] Open `content/site.json` in any text editor
- [ ] Replace "Baasil Pasha" with your name (line 3)
- [ ] Update title/role (line 4)
- [ ] Change location (line 5)
- [ ] Write your bio (lines 6-7)
- [ ] Update GitHub URL (line 9)
- [ ] Update LinkedIn URL (line 10)
- [ ] Review and edit your projects (lines 80+)
- [ ] Update skills section (lines 40-60)
- [ ] Save the file

**💡 Tip:** Use Find & Replace to change "Baasil Pasha" to your name throughout the file.

### Step 2: Add Your Resume (1 minute)
- [ ] Export your resume as PDF
- [ ] Rename it to `resume.pdf`
- [ ] Place it in the `assets/` folder
- [ ] Verify the link in site.json points to `assets/resume.pdf`

### Step 3: Deploy to GitHub (4 minutes)

**Option A - GitHub Web Interface (Easier)**
1. [ ] Go to https://github.com/new
2. [ ] Name it: `yourusername.github.io` (use YOUR GitHub username)
3. [ ] Make it Public
4. [ ] Click "Create repository"
5. [ ] Click "uploading an existing file"
6. [ ] Drag ALL files/folders from this portfolio
7. [ ] Click "Commit changes"
8. [ ] Go to Settings → Pages
9. [ ] Source: Branch `main`, Folder `/ (root)`
10. [ ] Click Save
11. [ ] Wait 2 minutes
12. [ ] Visit `https://yourusername.github.io` ✨

**Option B - Command Line (Faster if familiar with Git)**
```bash
cd portfolio-site
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```
Then enable GitHub Pages in Settings → Pages.

---

## ✅ Pre-Launch Checklist

Before sharing your portfolio:

### Content
- [ ] All personal info is updated (no "Baasil Pasha")
- [ ] Projects have real descriptions (not placeholders)
- [ ] GitHub/LinkedIn links work
- [ ] Resume PDF is uploaded and accessible
- [ ] No Lorem Ipsum or placeholder text

### Testing
- [ ] Open in browser locally (double-click index.html)
- [ ] Click through all pages (Home, Projects, About)
- [ ] Test a project detail page
- [ ] Toggle dark/light mode
- [ ] Try the search bar on Projects page
- [ ] Test on mobile (browser dev tools, or your phone)
- [ ] Verify all external links open correctly

### Polish
- [ ] All project categories are set correctly
- [ ] Featured projects show on homepage (4 max)
- [ ] Skills are grouped properly
- [ ] Experience dates are current
- [ ] Bio reads well (no typos)

---

## 📝 Updating Your Portfolio

After initial setup, to make changes:

1. Edit `content/site.json`
2. Save the file
3. Push to GitHub:
   ```bash
   git add content/site.json
   git commit -m "Update projects"
   git push
   ```
4. Wait 1-2 minutes
5. Refresh your live site!

---

## 🎯 Adding to Your Resume

Use one of these formats:

**Simple:**
```
Portfolio: yourusername.github.io
```

**Professional:**
```
🌐 Portfolio: https://yourusername.github.io
```

**With context:**
```
View my projects at yourusername.github.io/projects.html
```

---

## 🆘 Troubleshooting

**Site not loading?**
- Wait 3-5 minutes after first deployment
- Check repo name is exactly `yourusername.github.io`
- Verify GitHub Pages is enabled (Settings → Pages)

**Projects not showing?**
- Validate JSON at https://jsonlint.com
- Press F12, check Console for errors
- Ensure `featured: true` for homepage projects

**Theme not working?**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check localStorage is enabled

**Changes not appearing?**
- Wait 2 minutes after pushing
- Clear browser cache
- Check GitHub Actions (should show green checkmark)

---

## 📚 Need More Help?

- **Detailed Guide**: Read `SETUP_GUIDE.md`
- **Full Docs**: Read `README.md`
- **File Structure**: See `FILE_STRUCTURE.md`
- **JSON Help**: https://jsonlint.com
- **GitHub Pages**: https://docs.github.com/pages

---

## 🎨 Quick Customizations

**Change accent color:**
Open `assets/css/style.css`, find line ~10:
```css
--accent-primary: #2563eb;  /* Change this hex code */
```

**Add more projects:**
Copy a project object in `site.json`, change the values:
```json
{
  "id": "new-project-slug",
  "name": "New Project",
  "featured": true,
  ...
}
```

**Change focus areas:**
Edit the `focusAreas` array in `site.json`:
```json
{
  "title": "Your Focus",
  "description": "What you do",
  "icon": "🎯"
}
```

---

## ✨ You're Ready!

1. ✅ Customize `site.json`
2. ✅ Add `resume.pdf`
3. ✅ Deploy to GitHub
4. ✅ Share on resume/LinkedIn
5. ✅ Keep it updated monthly!

**Your portfolio URL**: `https://yourusername.github.io`

Good luck! 🚀
