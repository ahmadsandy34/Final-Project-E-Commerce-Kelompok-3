import { render, screen } from '@testing-library/react';
import StatsSection from '../../../components/about/StatsSection'; // Adjust path if necessary
import StatCard from '../../../components/about/StatCard'; // To mock or check individual StatCard behavior

// Mocking StatCard for easier testing
jest.mock('../../../components/about/StatCard', () => ({
  __esModule: true,
  default: ({ number, text, image }) => (
    <div data-testid="stat-card">
      <p>{number}</p>
      <p>{text}</p>
      <img src={image} alt={text} />
    </div>
  ),
}));

describe('StatsSection Component', () => {
  it('renders all StatCards with the correct data', () => {
    render(<StatsSection />);

    // Verify that the correct number of StatCards are rendered
    const statCards = screen.getAllByTestId('stat-card');
    expect(statCards).toHaveLength(4);

    // Verify each StatCard has the correct number and text
    const stats = [
      { number: '10.5k', text: 'Sellers active our site' },
      { number: '33k', text: 'Monthly Product Sale' },
      { number: '45.5k', text: 'Customer active in our site' },
      { number: '25k', text: 'Annual gross sale in our site' },
    ];

    stats.forEach((stat, index) => {
      expect(screen.getByText(stat.number)).toBeInTheDocument();
      expect(screen.getByText(stat.text)).toBeInTheDocument();
    });
  });
});
