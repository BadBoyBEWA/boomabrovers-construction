import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar, FiUser, FiTag } from 'react-icons/fi'

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Sustainable Construction',
      excerpt: 'Exploring innovative approaches to sustainable building practices and their impact on the industry.',
      image: '/images/blog/sustainable-construction.jpg',
      date: 'March 15, 2024',
      author: 'John Smith',
      category: 'Sustainability',
    },
    {
      id: 2,
      title: 'Modern Interior Design Trends',
      excerpt: 'Discover the latest trends in interior design that are shaping the future of living spaces.',
      image: '/images/blog/interior-design.jpg',
      date: 'March 10, 2024',
      author: 'Sarah Johnson',
      category: 'Design',
    },
    {
      id: 3,
      title: 'Smart Home Technology Integration',
      excerpt: 'How smart home technology is revolutionizing the way we live and interact with our spaces.',
      image: '/images/blog/smart-home.jpg',
      date: 'March 5, 2024',
      author: 'Michael Brown',
      category: 'Technology',
    },
    {
      id: 4,
      title: 'Renovation Tips for Historic Buildings',
      excerpt: 'Expert advice on preserving the character of historic buildings while modernizing their functionality.',
      image: '/images/blog/historic-renovation.jpg',
      date: 'February 28, 2024',
      author: 'Emily Davis',
      category: 'Renovation',
    },
    {
      id: 5,
      title: 'Commercial Construction Best Practices',
      excerpt: 'Essential guidelines for successful commercial construction projects in todays market.',
      image: '/images/blog/commercial-construction.jpg',
      date: 'February 20, 2024',
      author: 'David Wilson',
      category: 'Construction',
    },
    {
      id: 6,
      title: 'Green Building Materials Guide',
      excerpt: 'A comprehensive guide to eco-friendly building materials and their benefits.',
      image: '/images/blog/green-materials.jpg',
      date: 'February 15, 2024',
      author: 'Lisa Anderson',
      category: 'Sustainability',
    },
  ]

  // Memoize pagination calculations
  const { currentPosts, totalPages } = useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)
    const totalPages = Math.ceil(blogPosts.length / postsPerPage)
    return { currentPosts, totalPages }
  }, [currentPage, postsPerPage, blogPosts])

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, trends, and expert advice from the construction and design industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {currentPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.target.src = '/images/placeholder.jpg'
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <FiCalendar className="mr-2" />
                      <span className="mr-4">{post.date}</span>
                      <FiUser className="mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <FiTag className="mr-2" />
                        {post.category}
                      </span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700"
                        prefetch="hover"
                      >
                        Read More <FiArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === index + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog 