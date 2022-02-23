describe('Filter page', function() {
  it('user can submit a form', function() {
    cy.visit('/filter/new');
    cy.contains('.plant-filtering-form');
  });
});
