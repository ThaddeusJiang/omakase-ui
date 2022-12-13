import React from 'react';
import { render, screen } from '@testing-library/react';
import { Welcome } from '../src';

test('renders successfully', () => {
  render(<Welcome />);

  expect(screen.getByText('Welcome')).toBeInTheDocument();
});
