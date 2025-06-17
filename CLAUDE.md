# Claude Development Guidelines for Mike Thompson's Portfolio Site

## Project Overview
This is a modern portfolio website built with React, Vite, and Tailwind CSS showcasing Mike Thompson's professional experience as a Senior Staff Machine Learning Software Engineer.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server (check console for port, usually 5173 or 5174)
- `npm run build` - Build for production (always run before deployment)
- `npm run lint` - Run ESLint (run this after making changes)
- `npm run preview` - Preview production build locally

### Testing Workflow
1. Always run `npm run build` after making changes to ensure no build errors
2. Run `npm run lint` to check code quality
3. If both pass, changes are ready

## Architecture & File Structure

### Key Files
- `src/App.jsx` - Main portfolio component (contains all content and logic)
- `src/index.css` - Global styles and Tailwind imports (keep minimal)
- `src/App.css` - Component-specific styles (currently minimal, Tailwind preferred)
- `index.html` - HTML template with SEO meta tags
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration (uses @tailwindcss/postcss plugin)

### Component Structure
The entire portfolio is a single React component (`App`) with these main sections:
- Hero section with animated background
- Skills section with categorized expertise
- Experience section with detailed work history  
- Education section with research background
- Contact section with links

## Styling Guidelines

### Tailwind CSS Usage
- **Primary approach**: Use Tailwind utility classes
- **Color scheme**: Purple/pink/blue gradients with glass-morphism effects
- **Responsive**: Mobile-first design with `sm:`, `md:`, `lg:` breakpoints
- **Animations**: Uses Tailwind's built-in animation classes and custom CSS animations

### CSS Architecture
- Keep `index.css` minimal - only for global styles and Tailwind imports
- Avoid adding custom CSS unless absolutely necessary
- Use Tailwind's utility classes for consistency
- Glass-morphism effects using `backdrop-blur-xl bg-white/10` patterns

## Content Management

### Personal Information
All content is embedded in the `App.jsx` component in these data structures:
- `skillCategories` - Technical skills organized by category
- `experiences` - Work experience with achievements and technologies
- `education` - Research and academic background
- Contact links in hero and contact sections

### Adding New Content
- **New Experience**: Add to the `experiences` array
- **New Skills**: Add to appropriate category in `skillCategories` 
- **Updating Info**: Modify the embedded data structures directly

## Development Best Practices

### Code Quality
- Run `npm run lint` before committing changes
- Follow React best practices and hooks patterns
- Keep components functional and use hooks for state management
- Maintain consistent code formatting

### Performance
- The site uses React 19 with concurrent features
- Animations are CSS-based for performance
- Icons from Lucide React are tree-shaken
- Build process optimizes bundles automatically

### SEO & Accessibility
- Meta tags are configured in `index.html`
- Semantic HTML structure throughout
- Focus states for keyboard navigation
- Alt text should be added to any images

## Common Tasks

### Updating Content
1. Edit the data structures in `src/App.jsx`
2. Run `npm run build` to test
3. Run `npm run lint` to check code quality

### Styling Changes
1. Modify Tailwind classes in the JSX
2. For global changes, update `src/index.css`
3. Test responsive behavior at different screen sizes

### Adding Dependencies
```bash
# Add new dependencies
npm install <package-name>

# After adding dependencies, always test build
npm run build
```

## Deployment Notes

### Build Process
- Production files are generated in `dist/` directory
- Run `npm run build` before deploying
- The build process includes CSS optimization and minification

### Static Hosting
The site is designed for static hosting services:
- Vercel (recommended)
- Netlify  
- GitHub Pages
- AWS S3 + CloudFront

## Troubleshooting

### Common Issues
1. **Tailwind styles not working**: Check PostCSS configuration and ensure `@tailwindcss/postcss` is installed
2. **Build failures**: Usually related to missing dependencies or syntax errors
3. **Development server issues**: Try different port with `npm run dev -- --port 3000`

### CSS Issues
- If Tailwind classes aren't applying, check the `content` array in `tailwind.config.js` 
- For custom animations, they should be defined in `src/index.css`
- Glass-morphism effects require backdrop-blur support (modern browsers)

## Project Goals
- Maintain modern, professional appearance
- Ensure fast loading and smooth animations
- Keep mobile-responsive design
- Showcase technical expertise effectively
- Maintain SEO optimization for professional visibility