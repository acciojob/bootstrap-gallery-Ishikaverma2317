describe('example to-do app', () => {
  it('tests tags within cards', () => {
    cy.visit('http://localhost:3000');

    // Check that there are exactly 6 cards
    cy.get('.card').should('have.length', 6);

    // For each card, check it contains 1 img, 1 h6, and 1 p tag
    cy.get('.card').each(($card) => {
      cy.wrap($card).find('img').should('have.length', 1);
      cy.wrap($card).find('h6').should('have.length', 1);
      cy.wrap($card).find('p').should('have.length', 1);
    });
  });
});
