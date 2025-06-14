import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { Helmet } from 'react-helmet'

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const services = [
    {
      title: 'Construction',
      description: 'Full-service construction solutions for residential and commercial projects.',
      icon: '🏗️'
    },
    {
      title: 'Renovation',
      description: 'Transform your existing space with our expert renovation services.',
      icon: '🔨'
    },
    {
      title: 'Interior Design',
      description: 'Create beautiful, functional spaces with our interior design expertise.',
      icon: '🏠'
    },
    {
      title: 'Architecture',
      description: 'Innovative architectural solutions for your dream projects.',
      icon: '📐'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Boomabrovers Construction - Leading Construction Company in Nigeria</title>
        <meta name="description" content="Boomabrovers Construction is a premier construction company in Nigeria, delivering excellence in residential, commercial, and industrial projects. Get a free quote today!" />
        <meta name="keywords" content="construction company Nigeria, building contractors Lagos, construction services, residential construction, commercial construction, industrial construction" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Boomabrovers Construction - Your Trusted Building Partner" />
        <meta property="og:description" content="Transform your vision into reality with Nigeria's leading construction company. Expert builders, quality materials, and exceptional service." />
        <meta property="og:image" content="/images/home-og.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Boomabrovers Construction - Your Trusted Building Partner" />
        <meta name="twitter:description" content="Transform your vision into reality with Nigeria's leading construction company. Expert builders, quality materials, and exceptional service." />
        <meta name="twitter:image" content="/images/home-og.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Boomabrovers Construction",
            "url": "https://boomabrovers-construction.onrender.com",
            "logo": "https://boomabrovers-construction.onrender.com/images/logo.png",
            "description": "Leading construction company in Nigeria specializing in residential, commercial, and industrial projects.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lagos",
              "addressCountry": "Nigeria"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+234-XXX-XXX-XXXX",
              "contactType": "customer service"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="/images/hero-bg.jpg"
              alt="Construction Site"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Building Dreams Into Reality
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Excellence in construction and design, delivering quality projects that exceed expectations.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  to="/projects"
                  className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  View Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive construction and design solutions tailored to your needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to={`/services/${service.title.toLowerCase()}`}
                    className="text-blue-600 hover:text-blue-700 flex items-center"
                  >
                    Learn More <FiArrowRight className="ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how we can bring your vision to life with our expertise and dedication.
              </p>
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors inline-block"
              >
                Contact Us Today
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home 