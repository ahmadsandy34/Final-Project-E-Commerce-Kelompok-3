import { render, screen } from '@testing-library/react';
import TeamMember from '../../../components/about/TeamMember';

describe('TeamMember Component', () => {
  const mockProps = {
    image: '/test-image.jpg',
    name: 'John Doe',
    role: 'Developer'
  };

  test('renders team member information correctly', () => {
    render(<TeamMember {...mockProps} />);
    
    const image = screen.getByAltText('John Doe');
    const name = screen.getByText('John Doe');
    const role = screen.getByText('Developer');
    
    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(role).toBeInTheDocument();
  });

  test('renders social media links', () => {
    render(<TeamMember {...mockProps} />);
    
    const twitterIcon = screen.getByAltText('Twitter');
    const instagramIcon = screen.getByAltText('Instagram');
    const linkedInIcon = screen.getByAltText('LinkedIn');
    
    expect(twitterIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(linkedInIcon).toBeInTheDocument();
  });

  test('applies correct image styling', () => {
    render(<TeamMember {...mockProps} />);
    
    const image = screen.getByAltText('John Doe');
    expect(image).toHaveClass('h-32', 'lg:h-auto', 'w-full', 'aspect-square', 'object-cover', 'rounded-lg', 'mb-4');
  });

  test('renders with empty props', () => {
    render(<TeamMember image="" name="" role="" />);
    
    const image = screen.getByAltText('');
    const socialLinks = screen.getAllByRole('link');
    
    expect(image).toBeInTheDocument();
    expect(socialLinks).toHaveLength(3);
  });
});
