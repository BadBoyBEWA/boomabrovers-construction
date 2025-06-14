import { motion } from 'framer-motion'
import { FiHome, FiTool, FiLayers, FiLayout, FiSettings, FiCheckCircle } from 'react-icons/fi'

const Services = () => {
  const services = [
    {
      icon: <FiHome className="w-8 h-8" />,
      title: 'Residential Construction',
      description: 'Custom home building and residential renovations tailored to your lifestyle.',
      features: [
        'Custom home design and construction',
        'Home renovations and remodeling',
        'Kitchen and bathroom upgrades',
        'Interior and exterior improvements'
      ]
    },
    {
      icon: <FiTool className="w-8 h-8" />,
      title: 'Commercial Construction',
      description: 'Full-service commercial construction solutions for businesses of all sizes.',
      features: [
        'Office buildings and retail spaces',
        'Restaurant and hospitality projects',
        'Industrial facilities',
        'Commercial renovations'
      ]
    },
    {
      icon: <FiLayers className="w-8 h-8" />,
      title: 'Interior Design',
      description: 'Transform your space with our expert interior design services.',
      features: [
        'Space planning and optimization',
        'Color schemes and material selection',
        'Furniture and fixture selection',
        'Lighting design and implementation'
      ]
    },
    {
      icon: <FiLayout className="w-8 h-8" />,
      title: 'Architecture',
      description: 'Innovative architectural solutions for residential and commercial projects.',
      features: [
        'Architectural design and planning',
        '3D modeling and visualization',
        'Building code compliance',
        'Sustainable design solutions'
      ]
    },
    {
      icon: <FiSettings className="w-8 h-8" />,
      title: 'Project Management',
      description: 'Comprehensive project management ensuring timely and efficient delivery.',
      features: [
        'Project planning and scheduling',
        'Budget management',
        'Quality control',
        'Contractor coordination'
      ]
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: 'Consulting',
      description: 'Expert consulting services for construction and design projects.',
      features: [
        'Construction feasibility studies',
        'Cost estimation and analysis',
        'Design consultation',
        'Permit and regulation guidance'
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction and design solutions tailored to your needs. From concept to completion, we deliver excellence in every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <FiCheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
              A streamlined approach to delivering exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Consultation',
                description: 'Initial meeting to understand your needs and vision'
              },
              {
                number: '02',
                title: 'Planning',
                description: 'Detailed project planning and design development'
              },
              {
                number: '03',
                title: 'Execution',
                description: 'Professional implementation of the approved plan'
              },
              {
                number: '04',
                title: 'Completion',
                description: 'Final inspection and handover of your project'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors inline-block"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services 