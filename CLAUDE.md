# Claude Development Guidelines for Mike Thompson's Portfolio Site

## Project Overview
This is a modern portfolio website built with React, Vite, and Tailwind CSS showcasing Mike Thompson's professional experience as a Senior Staff Machine Learning Software Engineer. The site includes a trips section with detailed travel itineraries and planning guides.

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
- `src/App.jsx` - Main component with routing for portfolio and trips
- `src/components/TripsLanding.jsx` - Trip landing page with trip cards
- `src/components/PacificNorthwestTrip.jsx` - Pacific Northwest trip itinerary (1,770 lines)
- `src/components/HokkaidoTrip.jsx` - Hokkaido ski trip itinerary (1,480+ lines)
- `src/index.css` - Global styles and Tailwind imports (keep minimal)
- `src/App.css` - Component-specific styles (currently minimal, Tailwind preferred)
- `index.html` - HTML template with SEO meta tags
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration (uses @tailwindcss/postcss plugin)
- `public/data/` - JSON data files for trip features (meal planning, etc.)

### Component Structure
**Main Portfolio** (`App.jsx` at `/`):
- Hero section with animated background
- Skills section with categorized expertise
- Experience section with detailed work history
- Education section with research background
- Contact section with links

**Trips Section** (pathname-based routing):
- `/trips` - Landing page with trip cards (TripsLanding.jsx)
- `/trips/pacific-northwest-family-adventure` - PNW trip details
- `/trips/hokkaido-ski-2025` - Hokkaido ski trip details

## Styling Guidelines

### Tailwind CSS Usage
- **Primary approach**: Use Tailwind utility classes
- **Portfolio color scheme**: Purple/pink/blue gradients with glass-morphism effects
- **Trips color scheme**: Gray backgrounds (gray-800/gray-900) with accent colors per trip
- **Responsive**: Mobile-first design with `sm:`, `md:`, `lg:` breakpoints
- **Animations**: Uses Tailwind's built-in animation classes and custom CSS animations

### CSS Architecture
- Keep `index.css` minimal - only for global styles and Tailwind imports
- Avoid adding custom CSS unless absolutely necessary
- Use Tailwind's utility classes for consistency
- Glass-morphism effects using `backdrop-blur-xl bg-white/10` patterns

## Content Management

### Personal Information
Portfolio content is embedded in the `App.jsx` component in these data structures:
- `skillCategories` - Technical skills organized by category
- `experiences` - Work experience with achievements and technologies
- `education` - Research and academic background
- Contact links in hero and contact sections

### Trips Content
Trip pages follow a monolithic component pattern:
- Each trip is a single large component (1,000+ lines)
- Trip data embedded as constants within each component
- Tab-based navigation for different sections (Overview, Itinerary, Details, etc.)
- Optional JSON data files for interactive features (meal planning)

### Adding New Content
- **New Experience**: Add to the `experiences` array in App.jsx
- **New Skills**: Add to appropriate category in `skillCategories` in App.jsx
- **New Trip**:
  1. Create new trip component in `src/components/`
  2. Add trip metadata to `trips` array in TripsLanding.jsx
  3. Add routing case in TripsRouter component in App.jsx
  4. Add trip image to `public/` directory
- **Updating Trip Info**: Modify the embedded data structures in the trip component

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