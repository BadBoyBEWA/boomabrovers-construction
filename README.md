# Boomabrovers Construction Website

A modern, responsive website built with React and Tailwind CSS, inspired by the Nubuilt Webflow template.

## Features

- Responsive design
- Modern UI with smooth animations
- SEO-friendly structure
- Fast loading times

## Pages

- Home
- About
- Services
- Service Details
- Projects
- Project Details
- Contact
- Blog
- Blog Details
- Coming Soon

## Technology Stack

- React 18
- React Router v6
- Tailwind CSS
- Framer Motion
- React Icons
- Google Analytics
- Sentry Error Tracking
- Web Vitals Monitoring

## Monitoring and Analytics

### Google Analytics
- Tracks user behavior and website performance
- Monitors page views, user sessions, and conversion rates
- Integrated with Web Vitals for performance monitoring
- Custom event tracking for user interactions
- Enhanced ecommerce tracking
- Debug mode in development environment
- Secure cookie configuration
- Cross-domain tracking support

### Sentry Error Tracking
- Real-time error tracking and monitoring
- Session replay for debugging
- Performance monitoring with custom spans
- Console logging integration
- Browser tracing for performance analysis
- Environment-aware error reporting
- Release tracking
- User feedback collection
- Privacy-focused session replay
- Custom breadcrumb tracking

### Web Vitals
- Core Web Vitals monitoring (LCP, FID, CLS)
- Custom performance metrics
- Resource loading optimization
- Navigation timing tracking
- User interaction monitoring
- API performance tracking
- Custom event tracking
- Real-time performance alerts
- Performance budget enforcement
- Automated performance reporting

### Performance Budgets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms
- Interaction to Next Paint: < 200ms
- Total Bundle Size: < 200KB
- Image Size Limits:
  - Hero Images: < 200KB
  - Gallery Images: < 100KB
  - Thumbnails: < 50KB

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/boomabrovers-construction.git
   cd boomabrovers-construction
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
boomabrovers-construction/
├── public/
│   ├── images/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceDetails.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetails.jsx
│   │   ├── Contact.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogDetails.jsx
│   │   └── ComingSoon.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## Customization

- **Colors**: Update the color palette in `tailwind.config.js`.
- **Content**: Modify the content in the respective page components.
- **Styling**: Adjust styles in `index.css` or within the components.

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider (e.g., Netlify, Vercel, GitHub Pages).

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Documentation

- [API Documentation](API_DOCUMENTATION.md) - Detailed API endpoints and usage
- [Deployment Guide](DEPLOYMENT_GUIDE.md) - Instructions for deploying the application
- [Contributing Guidelines](CONTRIBUTING.md) - How to contribute to the project
- [Performance Guide](PERFORMANCE_GUIDE.md) - Performance optimization guidelines

## Contact

- Email: your.email@example.com
- Project Link: [https://github.com/thewa/boomabrovers-construction](https://github.com/thewa/boomabrovers-construction)
