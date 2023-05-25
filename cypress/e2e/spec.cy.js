/// <reference types="cypress" />

describe('Adding a todo item to the todo list', () => {
  it('Should add a new item to the list', () => {
    cy.visit('https://todomvc.com/examples/angularjs/#/')
    cy.get('.new-todo').type('feed the cats{enter}')
    cy.contains('.todo-list li', 'feed the cats').should('be.visible')
  })
})