import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet'
import { ErrorBoundary, initSentry, initGA, trackPageView, monitorPerformance, createSpan, logger } from './utils/monitoring'
import './index.css'

// Layout Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetails from './pages/ServiceDetails'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import ComingSoon from './pages/ComingSoon'

// Initialize monitoring tools once
initSentry();
initGA();
monitorPerformance();

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when location changes
    trackPageView(location.pathname);
  }, [location]);

  return (
    <ErrorBoundary fallback={<div>Something went wrong. Please try again later.</div>}>
      <Helmet>
        <title>Boomabrovers Construction - Leading Construction Company in Nigeria</title>
        <meta name="description" content="Boomabrovers Construction is a leading construction company in Nigeria, specializing in residential, commercial, and industrial projects. Quality construction services with a focus on sustainability and innovation." />
        <meta name="keywords" content="construction, Nigeria, building, construction company, Lagos construction, residential construction, commercial construction, industrial construction" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://boomabrovers-construction.onrender.com/" />
        <meta property="og:title" content="Boomabrovers Construction - Leading Construction Company in Nigeria" />
        <meta property="og:description" content="Quality construction services with a focus on sustainability and innovation." />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://boomabrovers-construction.onrender.com/" />
        <meta property="twitter:title" content="Boomabrovers Construction - Leading Construction Company in Nigeria" />
        <meta property="twitter:description" content="Quality construction services with a focus on sustainability and innovation." />
        <meta property="twitter:image" content="/images/og-image.jpg" />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Boomabrovers Construction" />
        <link rel="canonical" href="https://boomabrovers-construction.onrender.com/" />
      </Helmet>

      <button 
        onClick={() => {throw new Error("This is your first error!");}}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#ff4444',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 1000,
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          fontSize: '14px',
          fontWeight: 'bold'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#ff0000';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#ff4444';
          e.target.style.transform = 'scale(1)';
        }}
      >
        Break the world
      </button>

      

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetails />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/contact" element={<Contact />} /> 
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/coming-soon" element={<ComingSoon />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App
