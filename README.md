# Ricky Ansari - Personal Portfolio

A sleek, modern personal portfolio website built with vanilla HTML, CSS, and JavaScript. Designed for deployment on GitHub Pages.

![Portfolio Preview](https://via.placeholder.com/1200x630/0a0a0f/6366f1?text=Ricky+Ansari+Portfolio)

## ✨ Features

- **Modern Dark Theme** - Sleek, professional design with purple accent gradients
- **Responsive Design** - Looks great on all devices from mobile to desktop
- **Smooth Animations** - Scroll-triggered animations, typing effect, and hover interactions
- **Interactive Elements** - Cursor glow, tilt effects, and smooth navigation
- **Performance Optimized** - Pure HTML/CSS/JS with no dependencies
- **SEO Ready** - Semantic HTML with proper meta tags

## 🚀 Quick Start

### Option 1: GitHub Pages Deployment

1. **Create a new GitHub repository** named exactly `rickyansari.github.io` (replace with your GitHub username)

2. **Initialize git and push**:
   ```bash
   cd /Users/farooqansari/rickyansari.github.io
   git init
   git add .
   git commit -m "Initial commit - Personal portfolio"
   git branch -M main
   git remote add origin https://github.com/rickyansari/rickyansari.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "Deploy from a branch"
   - Select the `main` branch and `/ (root)` folder
   - Click "Save"

4. **Your site will be live at**: `https://rickyansari.github.io`

### Option 2: Local Development

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using VS Code Live Server extension
# Right-click index.html -> "Open with Live Server"
```

## 📁 Project Structure

```
rickyansari.github.io/
├── index.html      # Main HTML file
├── styles.css      # All styles and responsive design
├── script.js       # JavaScript interactions and animations
└── README.md       # This file
```

## 🎨 Customization

### Personal Information

Edit `index.html` to update:
- Your name and title
- About section text
- Skills and technologies
- Project descriptions and links
- Experience/work history
- Contact information and social links

### Colors & Theme

Edit CSS variables in `styles.css`:

```css
:root {
    --accent-primary: #6366f1;      /* Main accent color */
    --accent-secondary: #8b5cf6;    /* Secondary accent */
    --bg-primary: #0a0a0f;          /* Main background */
    --bg-secondary: #12121a;        /* Section backgrounds */
    /* ... more variables */
}
```

### Fonts

Currently using:
- **Outfit** - Headings and body text
- **JetBrains Mono** - Code and technical elements

Change fonts in the `<head>` section of `index.html` and update CSS variables.

### Adding Your Photo

Replace the placeholder in the About section:

```html
<div class="image-frame">
    <img src="your-photo.jpg" alt="Ricky Ansari" />
</div>
```

### Adding New Projects

Copy a project card structure in the Projects section:

```html
<article class="project-card">
    <div class="project-image">
        <img src="project-screenshot.jpg" alt="Project Name" />
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project</h3>
        <p class="project-description">Description here...</p>
        <div class="project-tech">
            <span>Tech1</span>
            <span>Tech2</span>
        </div>
        <div class="project-links">
            <a href="github-url" class="project-link">GitHub</a>
            <a href="live-url" class="project-link">Live</a>
        </div>
    </div>
</article>
```

## 🔧 Technical Details

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Performance Features
- No external JavaScript libraries
- Minimal CSS (single file)
- Lazy loading animations via Intersection Observer
- Debounced scroll/resize handlers

### Accessibility
- Semantic HTML5 elements
- ARIA labels for icons
- Keyboard navigation support
- High contrast text

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

## 🎯 SEO Checklist

- [x] Semantic HTML structure
- [x] Meta description
- [x] Open Graph tags (add for social sharing)
- [x] Favicon
- [ ] Add `sitemap.xml`
- [ ] Add `robots.txt`
- [ ] Add Google Analytics (optional)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- Fonts: [Google Fonts](https://fonts.google.com/)
- Icons: Custom SVG icons
- Design Inspiration: Modern SWE portfolios

---

Built with ❤️ by Ricky Ansari

