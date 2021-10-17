import { render } from '@testing-library/react';
import App from './App';

test.skip('renders app', () => {
  const { container } = render(<App />);

  expect(container.firstChild).toBeInTheDocument();
});
