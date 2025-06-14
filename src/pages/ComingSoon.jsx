import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [email, setEmail] = useState('')

  // Set the launch date (example: 30 days from now)
  const launchDate = new Date()
  launchDate.setDate(launchDate.getDate() + 30)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = launchDate - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })

      if (difference <= 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter signup here
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Coming Soon
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            We're working hard to bring you something amazing. Stay tuned for our launch!
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-gray-600 capitalize">{unit}</div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Get Notified When We Launch
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to be the first to know when we go live.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex items-center">
                <div className="relative flex-grow">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ComingSoon 