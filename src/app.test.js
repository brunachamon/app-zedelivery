import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

it('renders initial state in appication', () => {
  render(<App />);
  expect(screen.getByText('Carregando...')).toBeInTheDocument();

});
