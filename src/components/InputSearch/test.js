import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import InputSearch from './'

describe('InputSearch', () => {
  it('should render a component with `bla` placeholder', async () => {
    const placeholderText = 'bla';
    render(<InputSearch placeholder={placeholderText} />)

    expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument()
  })
})
