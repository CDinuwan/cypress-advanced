/// <reference types="cypress" />

it('Intercept requests', () => {

  cy
  .intercept({
    method:'POST',
    url:'api/boards'
  }).as('createBoard')

  cy
  .visit('/')

  cy
  .get('[data-cy=create-board]')
  .click()

  cy
  .wait('@createBoard')
  .its('response.statusCode')
  .should('eq',201)

});