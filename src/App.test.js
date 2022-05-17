import { render, screen } from '@testing-library/react';
import App from './App';

it('renders the react page and the title is visible', () => {
  render(<App />);
  const linkElement = screen.getByText(/Fizz Buzz TDD/i);
  expect(linkElement).toBeInTheDocument();
});
