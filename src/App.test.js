import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Movie House header', () => {
  render(<App />);
  expect(screen.getAllByText(/moviehouse/i).length).toBeGreaterThan(0);
});
