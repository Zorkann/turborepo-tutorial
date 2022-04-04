import React from 'react'

import { render, screen } from '@testing-library/react'
import NextHelloWorld from './NextHelloWorld'

describe('tests', () => {
  it('should', () => {
    render(<NextHelloWorld />)
    expect(screen.getByText('Boop')).toBeInTheDocument()
  })
})
