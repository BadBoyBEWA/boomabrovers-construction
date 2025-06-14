import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    emailjs.init('1wqo6AoJd9CRs3eZn')
  }, [])

  // Memoize contact info to prevent unnecessary re-renders
  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Address',
      content: '123 Construction Street, Building City, State 12345',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
    },
    {
      icon: FiMail,
      title: 'Email',
      content: 'info@boomabrovers.com',
    },
    {
      icon: FiClock,
      title: 'Working Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM',
    },
  ]

  const validateForm = () => {
    const formData = new FormData(form.current);
    const newErrors = {};
    
    // Check required fields
    ['name', 'email', 'phone', 'subject', 'message'].forEach(field => {
      if (!formData.get(field)) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    // Validate email format
    const email = formData.get('email');
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      setSubmitError('')
      try {
        const result = await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID ,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID ,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
        )
        console.log('EmailJS Success:', result)
        if (result.status === 200) {
          setSuccess(true)
          form.current.reset()
          setErrors({})
        } else {
          throw new Error('Failed to send email')
        }
      } catch (error) {
        console.error('EmailJS Error Details:', error)
        setSubmitError(error.message || 'Failed to send message. Please try again later.')
      } finally {
        setIsSubmitting(false)
      }
    }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for any inquiries or to discuss your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <info.icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.content}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-green-100 text-green-800 p-4 rounded-md mb-6"
                  >
                    Thank you for your message! We will get back to you soon.
                  </motion.div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-100 text-red-800 p-4 rounded-md"
                      >
                        {submitError}
                      </motion.div>
                    )}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className={`mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                          errors.name ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                          errors.email ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className={`mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                          errors.phone ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      {errors.phone && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.phone}
                        </motion.p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className={`mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                          errors.subject ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      {errors.subject && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.subject}
                        </motion.p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className={`mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                          errors.message ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-blue-600 text-white px-6 py-3 rounded-md transition-colors ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-[500px] rounded-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.8655827536!2d3.3366549!3d6.5480559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1709912345678!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 