import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataNotFound } from '../src';

test('renders successfully', () => {
  render(<DataNotFound />);

  expect(screen.getByText('Data not found')).toBeInTheDocument();
});
