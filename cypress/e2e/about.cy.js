// cypress/integration/aboutPage.spec.js
describe('About Page E2E Tests', () => {
  beforeEach(() => {
    // Visit the About page before each test
    cy.visit('http://localhost:5173/about');
  });

  it('should load the About page', () => {
    // Ensure the About page loads correctly by checking for the page title in the HTML
    cy.title().should('include', 'About Us - Exclusive');
  });

  it('should scroll to the top of the page when it loads', () => {
    // Check if the page scrolls to the top (useful if you trigger scrolling in your React component)
    cy.window().then((win) => {
      expect(win.scrollY).to.equal(0); // Verify page is at the top
    });
  });

  it('should have a functional service card component', () => {
    // Ensure the services are displayed and clickable
    cy.get('.text-lg').should('contain', 'FREE AND FAST DELIVERY');
    cy.get('.text-gray-600').should('contain', 'Free delivery for all orders over $140');
  });

  it('should navigate through team section', () => {
    // Ensure the team section renders correctly and navigation dots are visible
    cy.get('.grid').should('contain', 'Tom Cruise');
    cy.get('.w-2').should('have.length', 5); // Ensure pagination dots are present
  });

  it('should show correct number of stat cards in stats section', () => {
    // Check that all stat cards are displayed
    cy.get('.group').should('have.length', 4); // Ensure there are 4 stats cards
    cy.get('.text-2xl').should('contain', '10.5k'); // Check for the number of sellers active
    cy.get('.text-sm').should('contain', 'Sellers active our site'); // Check for text
  });
});
