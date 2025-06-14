import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiTarget, FiHeart } from 'react-icons/fi'
import { Helmet } from 'react-helmet'

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const values = [
    {
      icon: <FiAward className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering the highest quality results.'
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Teamwork',
      description: 'Our collaborative approach ensures the best outcomes for our clients.'
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We embrace new technologies and methods to stay ahead in the industry.'
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical practices.'
    }
  ]

  const team = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      image: '/images/team/johnsmith.jpg'
    },
    {
      name: 'Sarah Johnson',
      position: 'Lead Architect',
      image: '/images/team/sarahjohnson.jpg'
    },
    {
      name: 'Michael Chen',
      position: 'Project Manager',
      image: '/images/team/michealchen.jpg'
    },
    {
      name: 'Emily Davis',
      position: 'Interior Designer',
      image: '/images/team/sarahjohnson.jpg'
    }
  ]

  return (
    <>
      <Helmet>
        <title>About Us - Boomabrovers Construction | Leading Construction Company in Nigeria</title>
        <meta name="description" content="Learn about Boomabrovers Construction's journey, expertise, and commitment to excellence in construction. Discover our team, values, and track record of successful projects in Nigeria." />
        <meta name="keywords" content="construction company Nigeria, about us, construction expertise, building contractors Lagos, construction history, construction team" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Boomabrovers Construction - Your Trusted Building Partner" />
        <meta property="og:description" content="Discover our journey of excellence in construction, our expert team, and our commitment to quality in every project we undertake." />
        <meta property="og:image" content="/images/about-og.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="About Boomabrovers Construction - Your Trusted Building Partner" />
        <meta name="twitter:description" content="Discover our journey of excellence in construction, our expert team, and our commitment to quality in every project we undertake." />
        <meta name="twitter:image" content="/images/about-og.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Boomabrovers Construction",
            "description": "Learn about our construction expertise and commitment to excellence",
            "mainEntity": {
              "@type": "Organization",
              "name": "Boomabrovers Construction",
              "foundingDate": "2020",
              "description": "Leading construction company in Nigeria specializing in residential, commercial, and industrial projects.",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "minValue": "50",
                "maxValue": "200"
              },
              "award": [
                "Best Construction Company 2023",
                "Excellence in Project Delivery 2022"
              ]
            }
          })}
        </script>
      </Helmet>

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Boomabrovers</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Building excellence and trust since 2010. We're committed to transforming spaces and creating lasting value for our clients.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, Boomabrovers has grown from a small local contractor to a full-service construction and design firm. Our journey has been marked by a commitment to quality, innovation, and client satisfaction.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to have completed over 500 projects, ranging from residential renovations to large-scale commercial developments. Our team of experienced professionals brings together expertise in construction, architecture, and interior design.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative h-96 rounded-lg overflow-hidden"
              >
                <img
                  src="/images/about/company-story.jpg"
                  alt="Company Story"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core principles guide everything we do at Boomabrovers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="text-blue-600 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the talented professionals behind our success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
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
                Ready to Work With Us?
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
    </>
  )
}

export default About 