import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Loader from './'

describe('Loader', () => {
  it('should render a loader component in screen with classes', async () => {
    render(<Loader />)

    expect(screen.getByRole('spinner')).toBeInTheDocument()
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })
})