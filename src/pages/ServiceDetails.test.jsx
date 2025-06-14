import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ServiceDetails from './ServiceDetails'

describe('ServiceDetails', () => {
  it('renders the service title', () => {
    render(
      <BrowserRouter>
        <ServiceDetails />
      </BrowserRouter>
    )
    expect(screen.getByText('Construction')).toBeInTheDocument()
  })
}) 