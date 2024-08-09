describe('login tab', () => {
  beforeEach(() => {
    cy.visit('https://staging-suaigreja.inchurch.com.br/eventos/6039/teste-para-estagio-em-qa')
    cy.get('.login-mobile > .mat-icon').click();
  })

  it('must fill in the form fields correctly with an already registered user', () => {
    cy.get('#mat-input-1').type(`estagioQA@inchurch.com`);
    cy.get('#mat-input-2').type(`12345678`);
    cy.get('.mat-tooltip-trigger > .mat-focus-indicator').click();

  })
})

