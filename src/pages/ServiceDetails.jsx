import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { useState, useEffect } from 'react'

const ServiceDetails = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Simulate data fetching
  useEffect(() => {
    setLoading(true)
    setError(null)
    // Simulate API call delay
    setTimeout(() => {
      if (!serviceDetails[id]) {
        setError('Service not found')
      }
      setLoading(false)
    }, 1000)
  }, [id])

  // This would typically come from an API or CMS
  const serviceDetails = {
    construction: {
      title: 'Construction',
      description: 'Full-service construction solutions for residential and commercial projects.',
      image: '/images/services/construction.jpg',
      features: [
        'Residential Construction',
        'Commercial Construction',
        'Industrial Construction',
        'Infrastructure Development',
      ],
      process: [
        'Initial Consultation',
        'Design & Planning',
        'Permitting',
        'Construction',
        'Quality Control',
        'Project Completion',
      ],
      benefits: [
        'Expert Project Management',
        'Quality Materials',
        'Timely Delivery',
        'Cost-Effective Solutions',
        'Safety First Approach',
        'Post-Construction Support',
      ],
    },
    renovation: {
      title: 'Renovation',
      description: 'Transform your existing space with our expert renovation services.',
      image: '/images/services/renovation.jpg',
      features: [
        'Home Renovation',
        'Office Renovation',
        'Historical Restoration',
        'Structural Upgrades',
      ],
      process: [
        'Site Assessment',
        'Design Planning',
        'Material Selection',
        'Renovation Work',
        'Quality Inspection',
        'Final Handover',
      ],
      benefits: [
        'Minimal Disruption',
        'Modern Upgrades',
        'Value Addition',
        'Energy Efficiency',
        'Custom Solutions',
        'Expert Craftsmanship',
      ],
    },
    'interior-design': {
      title: 'Interior Design',
      description: 'Create beautiful, functional spaces with our interior design expertise.',
      image: '/images/services/interior-design.jpg',
      features: [
        'Space Planning',
        'Color Consultation',
        'Furniture Selection',
        'Lighting Design',
      ],
      process: [
        'Client Consultation',
        'Concept Development',
        'Design Presentation',
        'Implementation',
        'Installation',
        'Final Review',
      ],
      benefits: [
        'Personalized Design',
        'Functional Layouts',
        'Quality Materials',
        'Timely Execution',
        'Budget Management',
        'After-Sales Support',
      ],
    },
    architecture: {
      title: 'Architecture',
      description: 'Innovative architectural solutions for your dream projects.',
      image: '/images/services/architecture.jpg',
      features: [
        'Architectural Design',
        '3D Visualization',
        'Building Permits',
        'Sustainable Design',
      ],
      process: [
        'Client Brief',
        'Concept Design',
        'Detailed Planning',
        'Permit Application',
        'Construction Documents',
        'Project Supervision',
      ],
      benefits: [
        'Creative Solutions',
        'Sustainable Design',
        'Regulatory Compliance',
        'Cost Optimization',
        'Technical Expertise',
        'Project Management',
      ],
    },
  }

  const service = serviceDetails[id] || serviceDetails.construction

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
          <Link to="/services" className="text-blue-600 hover:underline mt-4 inline-block">
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure the highest quality results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our comprehensive service offerings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <FiCheck className="text-blue-600 text-2xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a free consultation.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors inline-block"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetails 