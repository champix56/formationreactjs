import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Edition from './Edition';

describe('<Edition />', () => {
  test('it should mount', () => {
    render(<Edition />);
    
    const edition = screen.getByTestId('Edition');

    expect(edition).toBeInTheDocument();
  });
});