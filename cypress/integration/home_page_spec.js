describe('Home page', function() {
  it('welcomes the user', function() {
    cy.visit('/');

    cy.contains('Welcome to how not to kill your plants!');
  });

  it('has a title', function() {
    cy.visit('/');

    cy.title().should('eq', 'Plants');
  });
});
