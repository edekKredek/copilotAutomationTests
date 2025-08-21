// Cypress test for testautomationpractice.blogspot.com

describe('Test Automation Practice Blogspot', () => {
  it('should open the blog homepage', () => {
    cy.visit('https://testautomationpractice.blogspot.com/');
    cy.contains('Test Automation Practice').should('exist');
  });

  // Add more tests here as needed
});
