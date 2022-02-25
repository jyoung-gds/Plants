describe('Filter page', function() {
  it('user can submit the plant filter form', function() {
    cy.visit('/filter/new');

    cy.get('#plant-filtering-form').find('#moisture').select('Low');
    cy.get('#plant-filtering-form').find('#indoor-flowering').select('Yes');
    cy.get('#plant-filtering-form').submit();

    cy.url().should('contain', 'moisture=Low');
    cy.url().should('contain', 'indoorFlowering=Yes');
  });
});
