# Nikita Khaltsov - UI/UX & Graphic Designer Portfolio

A modern, responsive portfolio website showcasing UI/UX and graphic design work with a focus on Web3 Gaming, iGaming, and digital product design.

## 🎨 Features

### Design & User Experience
- **Modern Dark Theme** with gradient accents (purple, cyan, pink)
- **Glassmorphism Effects** on cards and surfaces
- **Smooth Animations** throughout the site
- **Responsive Design** for all devices (mobile, tablet, desktop)
- **Interactive Elements** with hover effects and transitions
- **Parallax Effects** for engaging user experience

### Navigation
- **Fixed Navigation Bar** with smooth scrolling
- **Mobile-Friendly Menu** with hamburger toggle
- **Active Section Highlighting** based on scroll position
- **Scroll-to-Top Button** for easy navigation

### Sections

#### 1. Hero Section
- Professional introduction with gradient text
- **Live Statistics** with animated counters
  - 3+ Years in Digital Design
  - 7+ Years in Visual Communication
  - 50+ Projects Completed
- Status badge showing availability
- Social media links (Email, LinkedIn, Telegram)
- Animated gradient background with parallax effect

#### 2. About Me
- **Optimized Grid Layout** with max-width: 1400px for better space utilization
- **4 Specialty Cards** with hover effects:
  - Web3 Gaming Experience
  - Visual Communication (7+ years)
  - iGaming Industry expertise
  - Print & Merch Design
- Reduced padding for more compact presentation
- Better use of available space

#### 3. Skills & Tools
- **Tighter Layout** with improved spacing
- **Real Tool Icons** (NO checkmarks):
  - **Design Tools:** Figma, Photoshop, Illustrator, After Effects, CorelDRAW, Spine
  - **Video & Motion:** DaVinci Resolve
  - **Collaboration:** Miro, Jira/Atlassian
  - **Development:** Unity, Unreal Engine
  - **AI Tools:** Leonardo.ai, Krea.ai, NanoBanana, ChatGPT, Midjourney, Stable Diffusion
- **Brand Colors** for each tool icon:
  - Figma: Orange/Red (#F24E1E)
  - Photoshop: Blue (#31A8FF)
  - Illustrator: Orange (#FF9A00)
  - After Effects: Purple (#9966FF)
  - Jira: Blue (#2196F3)
  - Unity: White on dark
- **AI Tools Category** highlighted with special styling

#### 4. Featured Projects (Case Studies)

Each project includes:

##### Project Covers
- **Large Hero Images** (600px height) with gradient overlays
- Project year and timeline
- Large project title with tagline
- Technology tags
- Hover effects with brightness changes

##### Expanded Showcase Sections:

**Riftwardens** (Web3 Gaming with Generative AI)
- Project overview and context
- My role breakdown (3 cards: Lead Designer, Marketing, Game UI/UX)
- **Problem & Solution** section with before/after comparison
- **6-image UI Showcase** grid (Main Menu, Character Selection, Battle Interface, Stats Dashboard, Inventory, Settings)
- **4-image Marketing Materials** banner grid
- **3-image Design Process** section (Wireframes, Style Exploration, Component Library)
- Tools used badges

**NexusWarlords** (Telegram Strategic MMO)
- Project overview and description
- Role breakdown with detailed responsibilities
- **Key Features** grid (3 cards: Territory Control, Dual Currency, Competitive Gameplay)
- **6-image Game Interface** showcase grid
- **4-image Marketing & Branding** banner section
- **3-image Design System** showcase
- Tools used badges

##### Showcase Grid Features:
- **Multiple image placeholders** ready for real screenshots
- **Hover effects** with transform and glow
- **Different aspect ratios** for different content types:
  - UI Showcase: 16/10 aspect ratio
  - Banner Grid: 16/9 aspect ratio
  - Process Grid: 4/3 aspect ratio
- **Easy to replace** placeholders with instructions

#### 5. Gallery (Other Work)
- **9 Projects** with category filtering
- **6 Categories:**
  - All
  - Graphic Design (3 projects)
  - Marketing (2 projects)
  - Print Design (2 projects)
  - Motion Graphics (1 project)
  - Branding (1 project)
- **Interactive Filters** with smooth transitions
- **Hover Overlays** showing project details and tools used
- **Responsive Grid** adapting to screen size

#### 6. Contact Section
- **Contact Cards** with icons (Email, LinkedIn, Telegram)
- **Working Contact Form** with mailto integration
- **Availability Banner** showing current status
- All contact information easily accessible

### Technical Features

#### JavaScript Functionality:
- ✅ Smooth scroll navigation
- ✅ Mobile menu toggle
- ✅ Active section detection
- ✅ Animated statistics counters
- ✅ Gallery filtering system
- ✅ Scroll-to-top button
- ✅ Parallax gradient effects
- ✅ Contact form mailto integration
- ✅ Scroll reveal animations
- ✅ Intersection Observer for performance
- ✅ Debounced scroll events
- ✅ Keyboard navigation support

#### Performance Optimizations:
- Debounced scroll events
- Intersection Observer API
- Lazy loading ready
- CSS transitions with GPU acceleration
- Optimized animations

## 🚀 Getting Started

### File Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles (32KB)
├── js/
│   └── main.js            # All JavaScript (12KB)
├── images/                # Create this folder for your images
│   ├── riftwardens-cover.jpg
│   ├── nexuswarlords-cover.jpg
│   ├── ui-screenshots/
│   ├── banners/
│   └── gallery/
└── README.md              # This file
```

### Adding Your Images

Replace the placeholder divs with your actual images:

#### For Project Covers:
```html
<!-- Replace this: -->
<div class="image-placeholder">
    <i class="fas fa-image"></i>
    <p>Riftwardens Hero Image</p>
</div>

<!-- With this: -->
<img src="images/riftwardens-cover.jpg" alt="Riftwardens Project Cover">
```

#### Recommended Image Sizes:
- **Project Covers:** 1920x600px (landscape, high quality)
- **UI Showcase:** 1200x750px (16:10 ratio)
- **Banners:** 1600x900px (16:9 ratio)
- **Process Images:** 1200x900px (4:3 ratio)
- **Gallery Items:** 800x600px (4:3 ratio)

#### Image Optimization:
- Use **WebP format** for smaller file sizes
- Compress with **TinyPNG** or **Squoosh**
- Keep quality at 80-85% for web
- Use responsive images with srcset if needed

### Customization

#### Colors:
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #8b5cf6;    /* Purple */
    --secondary-color: #06b6d4;  /* Cyan */
    --accent-color: #ec4899;     /* Pink */
    --dark-bg: #0f0f1e;          /* Main background */
    --dark-surface: #1a1a2e;     /* Section background */
}
```

#### Contact Information:
Update in `index.html`:
- Email: `n.khaltsov@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/nikita-khaltsov`
- Telegram: `https://t.me/saweres`

#### Statistics:
Edit the `data-target` attributes in the hero section:
```html
<h3 class="stat-number" data-target="3">0</h3>
```

## 📱 Responsive Breakpoints

- **Desktop:** 1200px+ (full features, large spacing)
- **Laptop:** 968px - 1200px (reduced spacing)
- **Tablet:** 768px - 968px (mobile menu, stacked layouts)
- **Mobile:** 320px - 768px (single column, compact design)

## 🎯 Key Improvements in This Version

### 1. Optimized Spacing
- ✅ **Max-width: 1400px** for better content width utilization
- ✅ **Reduced padding** in About and Skills sections
- ✅ **Tighter grid gaps** (30px instead of 40px)
- ✅ **More compact card design** without excessive whitespace
- ✅ **Better use of available screen space**

### 2. Real Tool Icons
- ✅ **NO checkmarks** anywhere
- ✅ **Brand-specific icons** with authentic colors:
  - Adobe products with letter badges (Ps, Ai, Ae)
  - Figma with brand icon
  - Unity with official icon
  - Jira with brand icon
  - Custom styled icons for others
- ✅ **Visual distinction** between tool categories
- ✅ **AI Tools highlighted** with special gradient background

### 3. Expanded Case Studies
- ✅ **Large 600px hero covers** for visual impact
- ✅ **Multiple showcase sections**:
  - 6+ UI screenshot placeholders
  - 4+ marketing banner placeholders
  - 3+ design process placeholders
- ✅ **Before/After comparison** grids
- ✅ **Role breakdown** cards (3 per project)
- ✅ **Key features** highlights
- ✅ **Tools used** badges at the end
- ✅ **Professional case study structure**

## 🌐 Deployment Options

### Netlify (Recommended)
1. Create account at [netlify.com](https://netlify.com)
2. Drag & drop the project folder
3. Get instant live URL
4. Free SSL certificate included
5. Custom domain support

### Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Import project from folder
3. Deploy with one click
4. Automatic HTTPS
5. Custom domain available

### GitHub Pages
1. Create GitHub repository
2. Upload all files
3. Enable Pages in Settings
4. Access at `username.github.io/repo-name`

### Cloudflare Pages
1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect repository or upload directly
3. Fast global CDN
4. Free tier available

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Lighthouse Score Target:** 90+
- **Optimized animations** with GPU acceleration
- **Debounced scroll events** for smooth performance
- **Intersection Observer** for efficient animations

## 🎨 Design System

### Typography
- **Headings:** Poppins (700-800 weight)
- **Body:** Inter (300-600 weight)
- **Monospace:** (for code, if needed)

### Spacing Scale
- Small: 8px, 12px, 16px
- Medium: 24px, 30px, 40px
- Large: 60px, 80px, 100px

### Border Radius
- Small: 8px (inputs, buttons)
- Medium: 12px (cards)
- Large: 16px, 20px (major sections)
- Full: 50px (badges, pills)

## 📝 Content Guidelines

### Project Case Studies
Each case study should include:
1. **Context:** What was the project about?
2. **Challenge:** What problems needed solving?
3. **Solution:** How did you solve them?
4. **Process:** Show your design thinking
5. **Result:** What was the impact?
6. **Visuals:** Screenshots, mockups, before/after

### Gallery Items
- High-quality images only
- Consistent styling across similar items
- Clear descriptions
- Appropriate categorization
- Tools/technologies used

## 🚀 Next Steps

### Immediate:
1. ✅ Add real project images to replace placeholders
2. ✅ Update all text content with your actual information
3. ✅ Test contact form functionality
4. ✅ Verify all links work correctly
5. ✅ Test on multiple devices and browsers

### Future Enhancements:
- [ ] Add more case studies for other projects
- [ ] Include video showcases or demos
- [ ] Add testimonials section
- [ ] Create blog section for articles
- [ ] Add resume/CV download
- [ ] Integrate analytics (Google Analytics, Plausible)
- [ ] Add more interactive elements
- [ ] Create project detail pages
- [ ] Add light/dark theme toggle
- [ ] Implement actual backend for contact form

## 📧 Support

For questions or issues with this portfolio template:
- Email: n.khaltsov@gmail.com
- LinkedIn: [Nikita Khaltsov](https://www.linkedin.com/in/nikita-khaltsov)
- Telegram: [@saweres](https://t.me/saweres)

## 📄 License

This portfolio template is created for Nikita Khaltsov. Feel free to use it as reference for your own portfolio, but please don't copy it directly.

---

**Built with ❤️ using HTML, CSS, and JavaScript**

Last Updated: November 2024