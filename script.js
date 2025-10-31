describe('example to-do app', () => {
  it('tests tags within cards', () => {
    cy.visit('http://localhost:3000');

    // Check exactly 6 cards exist
    cy.get('.card').should('have.length', 6);

    // For each card, check it has 1 image, 1 heading, 1 paragraph
    cy.get('.card').each(($card) => {
      cy.wrap($card).find('img').should('have.length', 1);
      cy.wrap($card).find('h6').should('have.length', 1);
      cy.wrap($card).find('p').should('have.length', 1);
    });
  });

  it('tests card classes', () => {
    cy.visit('http://localhost:3000');

    // Ensure card-body exists in each card
    cy.get('.card-body').should('have.length', 6);

    // Each card should contain the Bootstrap shadow-sm class
    cy.get('.card').each(($card) => {
      cy.wrap($card).should('have.class', 'shadow-sm');
    });
  });

  it('tests lightbox functionality', () => {
    cy.visit('http://localhost:3000');

    // Check that lightboxes exist and are initially hidden
    cy.get('.lightbox').should('have.length', 6);
    cy.get('.lightbox').each(($lightbox) => {
      cy.wrap($lightbox).should('not.be.visible');
    });

    // Click the first image to open its lightbox
    cy.get('.card img').first().click();

    // Verify the first lightbox is visible after clicking
    cy.get('#lightbox1').should('be.visible');

    // Close the lightbox by clicking it again
    cy.get('#lightbox1').click();

    // Ensure it hides again
    cy.get('#lightbox1').should('not.be.visible');
  });
});
