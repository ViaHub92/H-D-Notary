import { render, screen } from '@testing-library/react';
import App from './App';

test('renders notary heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/H-D-Notary/i);
  expect(headingElement).toBeInTheDocument();
});
