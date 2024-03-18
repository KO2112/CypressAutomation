/// <reference types="Cypress" />
describe('my first test suite',function()
{
    it('my first test case',function()
    {


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type('ca')
        cy.get('.search-keyword')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)

        cy.get('.products').find('.product').should('have.length',4)
        
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        

        
    
    })



        

    } )
    

