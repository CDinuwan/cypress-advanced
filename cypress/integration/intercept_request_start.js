/// <reference types="cypress" />

it('Intercept requests', () => {

  cy
  .get('[data-cy=task]')
  .then( item => {               //There is no waiting in here, In then command, we can use multiple assertions
    if (item.length !== 3) {
      throw new Error('Not enough elements!')
    }
    expect(item[0]).to.contain.text('bread')
    expect(item[1]).to.contain.text('milk')
  })

});