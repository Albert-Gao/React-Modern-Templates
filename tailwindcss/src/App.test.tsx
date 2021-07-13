import React from 'react'
import App from './App'
import { render, screen } from '@testing-library/react'

describe('Test <App/>', () => {
  it('should render', () => {
    render(<App />)

    expect(screen.getByText('Hello Tailwind template!')).toBeInTheDocument()
  })
})
