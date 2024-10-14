/* Sample tests */
// it('creates new list and card', () => {
//     cy.visit('/board/1')
//     cy.get('[data-cy="add-list-input"]').type('new list{enter}')
//     cy.contains('Add another card').click()
//     cy.get('[data-cy="new-card-input"]').type('new card{enter}')
// })
// it('new test', () => {
//     cy.visit('/')
//     cy.get('[data-cy="star"]').first().click({force: true})
// })

it('test passes', () => {
    cy.visit('/')
})

it('test fails', () => {
    cy.visit('/')
    expect(true).to.be.false
})