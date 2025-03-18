import { render, screen } from '@testing-library/react';
import Banner from './Banner';

test('renders banner with text', () => {
  render(<Banner bgColor="#fff" textColor="#000" bannerText="Test Banner" />);
  expect(screen.getByText(/Test Banner/i)).toBeInTheDocument();
});