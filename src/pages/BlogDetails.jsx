import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiCalendar, FiUser, FiTag, FiShare2, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { useState, useEffect } from 'react'

const BlogDetails = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Simulate data fetching
  useEffect(() => {
    setLoading(true)
    setError(null)
    // Simulate API call delay
    setTimeout(() => {
      if (!blogPosts[id]) {
        setError('Blog post not found')
      }
      setLoading(false)
    }, 1000)
  }, [id])

  // This would typically come from an API or CMS
  const blogPosts = {
    1: {
      title: 'The Future of Sustainable Construction',
      content: `
        <p>The construction industry is undergoing a significant transformation as sustainability becomes a top priority. With increasing environmental concerns and the need for energy-efficient buildings, sustainable construction practices are no longer optional but essential.</p>

        <h2>The Rise of Green Building Materials</h2>
        <p>One of the most significant trends in sustainable construction is the use of eco-friendly building materials. These materials not only reduce environmental impact but also offer improved performance and durability. Some popular options include:</p>
        <ul>
          <li>Recycled steel and concrete</li>
          <li>Bamboo and other fast-growing materials</li>
          <li>Low-VOC paints and finishes</li>
          <li>Energy-efficient insulation</li>
        </ul>

        <h2>Smart Technology Integration</h2>
        <p>Modern construction projects are increasingly incorporating smart technology to optimize energy usage and improve building performance. From automated lighting systems to advanced HVAC controls, these technologies help create more efficient and comfortable spaces.</p>

        <h2>Energy Efficiency and Renewable Energy</h2>
        <p>The integration of renewable energy sources, such as solar panels and wind turbines, is becoming more common in construction projects. Combined with energy-efficient design principles, these features help reduce a building's carbon footprint and operating costs.</p>

        <h2>The Role of Building Information Modeling (BIM)</h2>
        <p>BIM technology is revolutionizing how construction projects are planned and executed. By creating detailed digital representations of buildings, BIM helps optimize resource usage and reduce waste during construction.</p>

        <h2>Conclusion</h2>
        <p>As the construction industry continues to evolve, sustainable practices will play an increasingly important role. By embracing these changes, construction companies can not only reduce their environmental impact but also create more valuable and efficient buildings for their clients.</p>
      `,
      image: '/images/blog/sustainable-construction.jpg',
      date: 'March 15, 2024',
      author: 'John Smith',
      category: 'Sustainability',
      readTime: '8 min read',
      tags: ['Sustainability', 'Green Building', 'Construction', 'Technology'],
    },
    2: {
      title: 'Modern Interior Design Trends',
      content: `
        <p>Interior design is constantly evolving, with new trends emerging each year. Let's explore some of the most exciting developments in modern interior design.</p>

        <h2>Biophilic Design</h2>
        <p>Biophilic design, which incorporates natural elements into interior spaces, is gaining popularity. This approach includes:</p>
        <ul>
          <li>Natural materials and textures</li>
          <li>Indoor plants and living walls</li>
          <li>Natural light optimization</li>
          <li>Nature-inspired color palettes</li>
        </ul>

        <h2>Sustainable Materials</h2>
        <p>Eco-friendly materials are becoming increasingly important in interior design. Designers are choosing sustainable options that are both beautiful and environmentally responsible.</p>

        <h2>Smart Home Integration</h2>
        <p>The integration of smart technology is transforming how we interact with our living spaces. From automated lighting to voice-controlled systems, technology is becoming an essential part of modern interior design.</p>

        <h2>Minimalism and Functionality</h2>
        <p>The trend toward minimalism continues to grow, with a focus on clean lines, simple forms, and functional design. This approach creates spaces that are both beautiful and practical.</p>

        <h2>Conclusion</h2>
        <p>Modern interior design is all about creating spaces that are both aesthetically pleasing and functional. By incorporating these trends, designers can create environments that meet the needs of today's homeowners while preparing for the future.</p>
      `,
      image: '/images/blog/interior-design.jpg',
      date: 'March 10, 2024',
      author: 'Sarah Johnson',
      category: 'Design',
      readTime: '6 min read',
      tags: ['Interior Design', 'Trends', 'Modern Design', 'Sustainability'],
    },
  }

  const post = blogPosts[id] || blogPosts[1]

  const relatedPosts = [
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
  ]

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
          <Link to="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
            Back to Blog
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <FiCalendar className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <FiUser className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <FiTag className="mr-2" />
                <span>{post.category}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4">Share This Post</h3>
                  <div className="flex space-x-4">
                    <button className="text-gray-600 hover:text-blue-600">
                      <FiFacebook size={24} />
                    </button>
                    <button className="text-gray-600 hover:text-blue-400">
                      <FiTwitter size={24} />
                    </button>
                    <button className="text-gray-600 hover:text-blue-700">
                      <FiLinkedin size={24} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Author Info */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                  <p className="text-gray-600">
                    {post.author} is an experienced professional in the construction and design industry,
                    with expertise in sustainable building practices and modern design trends.
                  </p>
                </div>

                {/* Related Posts */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
                  <div className="space-y-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.id}`}
                        className="block group"
                      >
                        <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <div className="flex items-center text-sm text-gray-600 mt-2">
                          <FiCalendar className="mr-2" />
                          <span>{relatedPost.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl mb-8">
              Stay updated with the latest trends and insights in construction and design.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-6 py-3 rounded-r-md hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BlogDetails 