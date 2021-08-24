/// <reference types="cypress" />

describe('Cookies', () => {

  beforeEach(() => {

    cy
      .visit('/')

  })

  it('test #1', () => {

    cy
      .get('[data-cy="login-menu"]')
      .click();

    cy
      .get('[data-cy="login-email"]')
      .type('example@wiley.com');

    cy
      .get('[data-cy="login-password"]')
      .type('12345');

    cy
      .get('[data-cy="login"]')
      .click();

    });

  it.only('test #2', () => {
    cy
    .setCookie('trello_token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAd2lsZXkuY29tIiwiaWF0IjoxNjI5NzkxNTEyLCJleHAiOjE2Mjk3OTUxMTIsInN1YiI6IjEifQ.II3NPmw6f6MvRyrxm8xROV_JWvqGwih2fU4blhQ8GmE')

    cy
    .reload()
  });

});