/// QA homework for Salsita! From Misa (https://github.com/mispulino) in Cypress.io
/// Find "how to" in readme.md

/// Start the browser and open 'https://qa-engineer.herokuapp.com'

describe('My homework', function() {
  it('Visits Salsita page', function() {
    cy.visit('https://qa-engineer.herokuapp.com')

/// Hit the Enter button -- "code" page loads

    cy.get('#enter').click()

    cy.url().should('include', '/code')

/// Find a "secret" input element and enter its value into the input field
	cy.get('input[type=hidden]')
	.invoke('val')
	.then(val => {
  	cy.get('input[type="text"]').type(val);
})

/// Ensure that the "robot" checkbox is checked

	cy.get(':nth-child(3) > input').check() 
	  .check({ force: true }).should('be.checked')

/// Submit the form  

	cy.get('button').click()
	cy.url().should('include', '/lists')

/// Verify that all the categories and their quotes are displayed. No extra quotes, no missing ones.

	cy.get('body > ul').contains('Famous Quotes')
	cy.get(':nth-child(1) > ul').find('li').should('have.length', 5)
	cy.get('body > ul').contains('Awesome Quotes')
	cy.get('li:nth-child(2) > ul').find('li').should('have.length', 5)

/// Verify that the "Total score:" is the sum of all quote scores

	cy.get('.score').invoke('innerText')


  })
})