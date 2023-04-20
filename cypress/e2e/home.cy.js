/// <reference types="cypress" />

describe('Acessando o site', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Preenchimento dos campos nome, email e telefone e inclusão do contato', () => {
    cy.get('[type="text"]').type('Ana Vitória')
    cy.get('[type="email"]').type('anavitoriarj@gmail.com')
    cy.get('[type="tel"]').type('21 34529315')
    cy.get('[type="submit"]').click()
    cy.get(':nth-child(5) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('have.text', 'Ana Vitória')
  })

  it('Alteração de um contato', () => {
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
    cy.get('[type="text"]').clear().type('Lucas Bastitel Silva')
    cy.get('[type="email"]').clear().type('lucasbastitel@hotmail.com')
    cy.get('[type="tel"]').clear().type('21 34529318')
    cy.get('[type="submit"]').click()

    cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('have.text', 'Lucas Bastitel Silva')
  })


  it('Remoção de um contato', () => {
    cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
  })
})
