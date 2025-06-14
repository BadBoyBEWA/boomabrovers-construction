import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'renovation', label: 'Renovation' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Modern Residential Complex',
      category: 'residential',
      image: '/images/projects/residential-1.jpg',
      description: 'A contemporary residential complex featuring sustainable design and modern amenities.',
    },
    {
      id: 2,
      title: 'Office Tower Renovation',
      category: 'commercial',
      image: '/images/projects/commercial-1.jpg',
      description: 'Complete renovation of a 20-story office building with modern interior design.',
    },
    {
      id: 3,
      title: 'Industrial Warehouse',
      category: 'industrial',
      image: '/images/projects/industrial-1.jpg',
      description: 'State-of-the-art industrial warehouse facility with advanced logistics systems.',
    },
    {
      id: 4,
      title: 'Historic Building Restoration',
      category: 'renovation',
      image: '/images/projects/renovation-1.jpg',
      description: 'Restoration of a historic landmark while preserving its architectural integrity.',
    },
    {
      id: 5,
      title: 'Luxury Apartment Complex',
      category: 'residential',
      image: '/images/projects/residential-2.jpg',
      description: 'High-end residential development with premium amenities and finishes.',
    },
    {
      id: 6,
      title: 'Shopping Mall Expansion',
      category: 'commercial',
      image: '/images/projects/commercial-2.jpg',
      description: 'Major expansion project of an existing shopping mall with new retail spaces.',
    },
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter)

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful construction and design projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link
                      to={`/projects/${project.id}`}
                      className="bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Learn More <FiArrowRight className="ml-2" />
                  </Link>
                </div>
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

export default Projects 