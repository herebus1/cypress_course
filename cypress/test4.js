/// <reference types="cypress" /> 

describe('This is the third test case, automating web elements II', function()
{
    it('Third test case, DOM options [Checkbox]', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
    }) 
})