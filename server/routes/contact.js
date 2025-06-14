const express = require('express')
const { body, validationResult } = require('express-validator')
const Contact = require('../models/Contact')
const { sendContactNotification } = require('../services/emailService')

const router = express.Router()

// Validation middleware
const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').trim().isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
]

// Submit contact form
router.post('/', validateContact, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    // Create new contact entry
    const contact = new Contact(req.body)
    await contact.save()

    // Send email notifications
    await sendContactNotification(req.body)

    res.status(201).json({
      message: 'Thank you for your message. We will get back to you soon!',
      contact
    })
  } catch (error) {
    console.error('Contact form submission error:', error)
    res.status(500).json({
      message: 'Failed to submit contact form. Please try again later.'
    })
  }
})

// Get all contact submissions (admin only)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (error) {
    console.error('Error fetching contacts:', error)
    res.status(500).json({
      message: 'Failed to fetch contact submissions'
    })
  }
})

// Update contact status (admin only)
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' })
    }
    res.json(contact)
  } catch (error) {
    console.error('Error updating contact status:', error)
    res.status(500).json({
      message: 'Failed to update contact status'
    })
  }
})

module.exports = router 