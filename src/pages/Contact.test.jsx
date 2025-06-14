import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Contact from './Contact'

describe('Contact', () => {
  it('renders the contact form', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    )
    expect(screen.getByText('Send Us a Message')).toBeInTheDocument()
  })
}) 