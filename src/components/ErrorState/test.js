import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ErrorState from './'

describe('ErrorState', () => {
  it('should render a component with text to error in request', async () => {
    render(<ErrorState />)

    expect(screen.getByText('Algum erro aconteceu e não conseguimos completar a operação =(')).toBeInTheDocument()
  })
})
