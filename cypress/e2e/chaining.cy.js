

it('chaining and retrying', () => {
    cy.visit('/board/2')
    /* Uncomment before running */
    //cy.get('[data-cy="add-list-input"]').type('convenience store{enter}');
    //cy.get('[data-cy="add-list-input"]').type('drugstore{enter}');
    //cy.get('[data-cy="new-card"]').first().type('soap{enter}');
    //cy.get('[data-cy="new-card"]').last().type('tissue{enter}');
    //cy.get('[data-cy="new-card-input"]').type('shampoo{enter}');
    
    cy.get('[data-cy=card]').last().should('contain.text','shampoo').click()
    cy.get('[data-cy=card-detail-title]').should('have.value','shampoo')


})