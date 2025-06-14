const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

const sendContactNotification = async (contactData) => {
  const { name, email, phone, subject, message } = contactData

  // Email to admin
  const adminMailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  }

  // Confirmation email to user
  const userMailOptions = {
    from: process.env.SMTP_FROM,
    to: email,
    subject: 'Thank you for contacting Boomabrovers',
    html: `
      <h2>Thank you for contacting us!</h2>
      <p>Dear ${name},</p>
      <p>We have received your message and will get back to you as soon as possible.</p>
      <p>Here's a copy of your message:</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <br>
      <p>Best regards,</p>
      <p>The Boomabrovers Team</p>
    `
  }

  try {
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)
    return true
  } catch (error) {
    console.error('Email sending failed:', error)
    throw new Error('Failed to send email notifications')
  }
}

module.exports = {
  sendContactNotification
} 