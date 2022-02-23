describe('Filter page', function() {
  it('user can submit the plant filter form', function() {
    cy.visit('/filter/new');

    cy.get('#plant-filtering-form').find('#bloom-colour').select('red');
    cy.get('#plant-filtering-form').find('#humidity').select('low');
    cy.get('#plant-filtering-form').submit();
  });
});
