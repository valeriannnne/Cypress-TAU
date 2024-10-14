describe('Groceries List Tests', () => {
    beforeEach(() => {
        // Run the setup commands before each test
        cy.visit('/board/3');
        cy.get('[data-cy="add-list-input"]').type('groceries{enter}');
        cy.contains('Add another card').click(); 
        cy.get('[data-cy="new-card-input"]').type('bread{enter}');
    });

    it('asserts list', () => {
        // Assert that checkbox is checked
        cy.get('[data-cy="list-name"]').should('have.value', 'groceries')
        cy.get('[data-cy="card-text"]').should('have.text', 'bread')

    });

    it('asserts two cards', () => {
        // Assert that there are two cards after adding them
        cy.get('[data-cy="new-card-input"]').type('milk{enter}');
        cy.get('[data-cy="card"]').should('have.length', 2); // Verify total has 2 cards
    });

    it('asserts checkbox', () => {
        // Assert that checkbox is checked
        cy.get('[data-cy="card-checkbox"]').check()
        cy.get('[data-cy="card-checkbox"]').should('be.checked')
        cy.get('[data-cy="due-date"]').should('have.class', 'completed')
    });
    

    afterEach(() => {
        // Cleanup steps after each test
        cy.wait(3000); // Wait for 3 seconds
        cy.get('[data-cy="list-options"] > .inline-block').click();
        cy.get('[data-cy="delete-list"]').click();
    });
});
