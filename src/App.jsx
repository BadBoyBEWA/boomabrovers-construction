import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet'
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

const App = () => {
  return (
    <Router>
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
    </Router>
  )
}

export default App
