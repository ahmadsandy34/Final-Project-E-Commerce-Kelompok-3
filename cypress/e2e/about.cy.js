
describe('About Page End-to-End Testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/about');
    // Wait for page to load completely
    cy.get('.min-h-screen').should('be.visible');
  });
 
  it('should load the about page successfully', () => {
    cy.url().should('include', '/about');
    cy.get('.min-h-screen').should('exist');
  });
 
  it('renders the breadcrumb correctly', () => {
    cy.get('.flex.items-center.gap-2.text-sm').within(() => {
      cy.get('a').first().should('have.text', 'Home').and('have.attr', 'href', '/');
      cy.contains('span', '/').should('exist');
      cy.contains('span', 'About').should('exist');
    });
  });
 
  it('scrolls to the top of the page on load', () => {
    // Force scroll to bottom first to ensure scroll to top works
    cy.scrollTo('bottom');
    cy.reload();
    // Check if page scrolls back to top
    cy.window().its('scrollY').should('equal', 0);
  });
});