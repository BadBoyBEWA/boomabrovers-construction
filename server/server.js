const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const contactRoutes = require('./routes/contact')

// Load environment variables
dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB with detailed logging
console.log('Attempting to connect to MongoDB...')
console.log('MongoDB URI:', process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/boomabrovers', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Successfully connected to MongoDB!')
  console.log('Database:', mongoose.connection.name)
  console.log('Host:', mongoose.connection.host)
})
.catch((err) => {
  console.error('MongoDB connection error:', err)
  process.exit(1) // Exit if cannot connect to database
})

// Routes
app.use('/api/contact', contactRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Something went wrong!' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
}) 