# ForecastLabs Website

A modern, elegant website for ForecastLabs - a non-profit organization dedicated to securing a beneficial future for humanity in the age of artificial intelligence.

## 🎨 Design Philosophy: "Authoritative Elegance"

This website embodies a sophisticated design aesthetic that combines minimalist elegance with data-rich content to inspire confidence and trust.

### Color Palette
- **Primary Background**: Deep near-black (#05050A) for seriousness and focus
- **Primary Text**: Off-white (#cbd5e1) for optimal readability
- **Accent Color**: Sophisticated indigo (#6366F1) for wisdom and innovation
- **Secondary Colors**: Muted greys and purples for supporting elements

### Typography
- **Font**: Inter - Clean, highly legible sans-serif
- **Hierarchy**: Clear distinction using weight and size variations
- **Emphasis**: Gradient text effects for key messaging

### Visual Elements
- **Glassmorphism**: Semi-transparent cards with subtle blur and borders
- **Gradients**: Subtle gradients for visual interest without distraction
- **Animations**: Purposeful, elegant micro-interactions
- **Floating Elements**: Subtle animated dots for visual depth

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 15.3.3 with App Router
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Animations**: Framer Motion for smooth, performant animations
- **Icons**: Lucide React for consistent iconography
- **Typography**: Inter font via Google Fonts

### Project Structure
```
src/
├── app/
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Homepage component
└── components/
    ├── Header.tsx           # Sticky navigation with glassmorphism
    ├── Hero.tsx             # Main hero section with CTA
    ├── Logo.tsx             # Custom SVG logo component
    ├── PerformanceChart.tsx # Animated performance comparison
    ├── ValueProposition.tsx # Three-pillar approach section
    └── Footer.tsx           # Footer with mission statement
```

## 🚀 Features

### Header/Navigation
- Sticky header with glassmorphism effect on scroll
- Smooth animations and hover effects
- Responsive navigation menu
- Custom logo with geometric design

### Hero Section
- Powerful headline with gradient text effects
- Animated call-to-action buttons
- Performance chart with real-time animations
- Floating background elements

### Performance Chart
- Animated bar chart showing AI model comparisons
- Glassmorphism card design
- Smooth value animations on page load
- Professional data visualization

### Value Proposition
- Three-column layout with custom icons
- Hover effects and micro-animations
- Clear messaging about methodology
- Gradient text highlights

### Footer
- Centered logo and mission statement
- Social media placeholder links
- Copyright with organizational purpose

## 🎯 Mission Alignment

Every design choice reinforces ForecastLabs' mission:

1. **Serious & Credible**: Dark theme and professional typography convey authority
2. **Forward-Looking**: Gradient effects and animations suggest innovation
3. **Transparent**: Glass morphism represents openness and clarity
4. **Data-Driven**: Performance charts demonstrate scientific rigor
5. **Non-Profit Purpose**: Clear messaging about public good mission

## 🛠️ Development

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Setup
- Node.js 18+ required
- Development server runs on port 12000
- Configured for iframe embedding and CORS

### Customization
- Design tokens defined in `globals.css`
- Component-based architecture for easy modifications
- Framer Motion for animation customization
- Tailwind CSS for rapid styling changes

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Scalable typography
- Touch-friendly interactions
- Optimized performance across devices

## 🔧 Performance Optimizations

- Next.js App Router for optimal loading
- Framer Motion with reduced motion support
- Optimized fonts and images
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind for efficient styling

## 🎨 Brand Guidelines

### Logo Usage
- Custom SVG logo with geometric F and forward arrow
- Scalable design (sm, md, lg sizes)
- Consistent accent color usage
- Data point elements suggesting analysis

### Voice & Tone
- Professional yet approachable
- Scientific and evidence-based
- Optimistic about the future
- Clear about non-profit mission

## 📄 License

This project is created for ForecastLabs, a non-profit organization dedicated to AI safety and beneficial future outcomes.

---

*Built with ❤️ for a safer future*
