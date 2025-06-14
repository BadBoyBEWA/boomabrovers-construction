import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiMapPin, FiCalendar, FiDollarSign, FiArrowLeft } from 'react-icons/fi'
import { useState, useEffect } from 'react'

const ProjectDetails = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Simulate data fetching
  useEffect(() => {
    setLoading(true)
    setError(null)
    // Simulate API call delay
    setTimeout(() => {
      if (!projectDetails[id]) {
        setError('Project not found')
      }
      setLoading(false)
    }, 1000)
  }, [id])

  // This would typically come from an API or CMS
  const projectDetails = {
    1: {
      title: 'Modern Residential Complex',
      category: 'Residential',
      location: 'New York, NY',
      completionDate: 'December 2023',
      budget: '$5M',
      description: 'A contemporary residential complex featuring sustainable design and modern amenities.',
      mainImage: '/images/projects/residential-1.jpg',
      gallery: [
        '/images/projects/residential-1-gallery-1.jpg',
        '/images/projects/residential-1-gallery-2.jpg',
        '/images/projects/residential-1-gallery-3.jpg',
        '/images/projects/residential-1-gallery-4.jpg',
      ],
      features: [
        '200 Luxury Apartments',
        'Rooftop Garden',
        'Fitness Center',
        'Swimming Pool',
        'Underground Parking',
        'Smart Home Technology',
      ],
      challenges: [
        'Complex zoning requirements',
        'Limited construction timeline',
        'Environmental considerations',
        'Urban site constraints',
      ],
      solutions: [
        'Efficient project management',
        'Advanced construction techniques',
        'Sustainable materials',
        'Innovative design solutions',
      ],
    },
    2: {
      title: 'Office Tower Renovation',
      category: 'Commercial',
      location: 'Chicago, IL',
      completionDate: 'October 2023',
      budget: '$8M',
      description: 'Complete renovation of a 20-story office building with modern interior design.',
      mainImage: '/images/projects/commercial-1.jpg',
      gallery: [
        '/images/projects/commercial-1-gallery-1.jpg',
        '/images/projects/commercial-1-gallery-2.jpg',
        '/images/projects/commercial-1-gallery-3.jpg',
        '/images/projects/commercial-1-gallery-4.jpg',
      ],
      features: [
        'Modern Workspace Design',
        'Energy-Efficient Systems',
        'Collaborative Areas',
        'Green Building Certification',
        'Advanced Security Systems',
        'Smart Building Technology',
      ],
      challenges: [
        'Minimizing business disruption',
        'Structural limitations',
        'Budget constraints',
        'Timeline management',
      ],
      solutions: [
        'Phased construction approach',
        'Innovative structural solutions',
        'Value engineering',
        'Efficient project scheduling',
      ],
    },
    3: {
      title: 'Industrial Warehouse Complex',
      category: 'Industrial',
      location: 'Houston, TX',
      completionDate: 'March 2024',
      budget: '$12M',
      description: 'State-of-the-art industrial facility with advanced logistics and automation systems.',
      mainImage: '/images/projects/industrial-1.jpg',
      gallery: [
        '/images/projects/industrial-1-gallery-1.jpg',
        '/images/projects/industrial-1-gallery-2.jpg',
        '/images/projects/industrial-1-gallery-3.jpg',
        '/images/projects/industrial-1-gallery-4.jpg',
      ],
      features: [
        'Automated Storage Systems',
        'Loading Docks',
        'Employee Facilities',
        'Security Systems',
        'Energy Management',
        'Sustainable Design',
      ],
      challenges: [
        'Complex automation integration',
        'Large-scale logistics planning',
        'Safety compliance requirements',
        'Environmental impact mitigation',
      ],
      solutions: [
        'Advanced automation planning',
        'Comprehensive safety protocols',
        'Sustainable construction methods',
        'Efficient resource management',
      ],
    },
    4: {
      title: 'Historic Building Restoration',
      category: 'Renovation',
      location: 'Boston, MA',
      completionDate: 'January 2024',
      budget: '$6.5M',
      description: 'Restoration of a historic landmark while preserving its architectural integrity.',
      mainImage: '/images/projects/renovation-1.jpg',
      gallery: [
        '/images/projects/renovation-1-gallery-1.jpg',
        '/images/projects/renovation-1-gallery-2.jpg',
        '/images/projects/renovation-1-gallery-3.jpg',
        '/images/projects/renovation-1-gallery-4.jpg',
      ],
      features: [
        'Historical Preservation',
        'Modern Amenities Integration',
        'Seismic Retrofitting',
        'Energy Efficiency Upgrades',
        'Accessibility Improvements',
        'Heritage Documentation',
      ],
      challenges: [
        'Preserving historical elements',
        'Meeting modern building codes',
        'Limited documentation',
        'Material matching',
      ],
      solutions: [
        'Expert historical consultation',
        'Custom material fabrication',
        'Innovative preservation techniques',
        'Detailed documentation process',
      ],
    },
    5: {
      title: 'Luxury Apartment Complex',
      category: 'Residential',
      location: 'Miami, FL',
      completionDate: 'February 2024',
      budget: '$15M',
      description: 'High-end residential development with premium amenities and ocean views.',
      mainImage: '/images/projects/residential-2.jpg',
      gallery: [
        '/images/projects/residential-2-gallery-1.jpg',
        '/images/projects/residential-2-gallery-2.jpg',
        '/images/projects/residential-2-gallery-3.jpg',
        '/images/projects/residential-2-gallery-4.jpg',
      ],
      features: [
        'Private Beach Access',
        'Infinity Pool',
        'Luxury Spa',
        'Concierge Service',
        'Smart Home Systems',
        'Premium Finishes',
      ],
      challenges: [
        'Coastal construction regulations',
        'High-end material sourcing',
        'Weather constraints',
        'Premium quality standards',
      ],
      solutions: [
        'Expert coastal engineering',
        'Global material sourcing',
        'Weather-resistant construction',
        'Quality control systems',
      ],
    },
    6: {
      title: 'Shopping Mall Expansion',
      category: 'Commercial',
      location: 'Los Angeles, CA',
      completionDate: 'April 2024',
      budget: '$20M',
      description: 'Major expansion project of an existing shopping mall with new retail spaces.',
      mainImage: '/images/projects/commercial-2.jpg',
      gallery: [
        '/images/projects/commercial-2-gallery-1.jpg',
        '/images/projects/commercial-2-gallery-2.jpg',
        '/images/projects/commercial-2-gallery-3.jpg',
        '/images/projects/commercial-2-gallery-4.jpg',
      ],
      features: [
        'New Retail Spaces',
        'Food Court Expansion',
        'Entertainment Center',
        'Parking Structure',
        'Digital Signage',
        'Customer Experience Zones',
      ],
      challenges: [
        'Minimizing business disruption',
        'Complex logistics',
        'Safety during construction',
        'Budget management',
      ],
      solutions: [
        'Phased construction approach',
        'Advanced logistics planning',
        'Comprehensive safety protocols',
        'Value engineering',
      ],
    },
  }

  const project = projectDetails[id] || projectDetails[1]

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-gray-600">{error}</p>
          <Link to="/projects" className="text-blue-600 hover:underline mt-4 inline-block">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 mt-10">
        <Link
          to="/projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <FiMapPin className="text-blue-600 mr-2" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center">
                  <FiCalendar className="text-blue-600 mr-2" />
                  <span>{project.completionDate}</span>
                </div>
                <div className="flex items-center">
                  <FiDollarSign className="text-blue-600 mr-2" />
                  <span>{project.budget}</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Project Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <FiArrowRight className="text-blue-600 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Project Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a closer look at our work through these stunning images
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Challenges</h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm mr-3">
                      Challenge
                    </span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Solutions</h2>
              <ul className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-3">
                      Solution
                    </span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
  )
}

export default ProjectDetails 