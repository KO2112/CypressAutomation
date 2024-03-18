/// <reference types="cypress"/>

describe('Context: My first test case', ()=>{
    before(() =>{
        // runs once before all test cases in this describe block, like beforeclass in TestNG
    })
    beforeEach(()=>{
        // this will run before each test case, like beforemethod in testng
        cy.clearCookies();
    })
    after(()=>{
        // similar to afterclass in testng  runs once after all test finished
        
    })
    afterEach(()=>{
        // similar to aftermethod in testng 
    })
    it('Opening a web application', ()=>{
        cy.visit('/registration_form');
    })


})