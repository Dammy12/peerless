import { addToCart } from "../fixtures/selectors";
const access = require ('./validLogin.cy.js')

describe("Given i am on the shopping page", function () {
  beforeEach(function () {
    cy.visit('/')
    access.validLogin();
  })
  
 
it(" User successfully adds item to cart ", function(){
    cy.get(addToCart.addToCartBtn).click()
    cy.get(addToCart.shoppingCartBtn).click()
    cy.get(addToCart.checkoutBtn).click( )
    cy.get(addToCart.checkoutFirstname).type('Damilola')
    cy.get(addToCart.checkoutLastName).type('Adeyemi')
    cy.get(addToCart.checkoutZipCode).type('10027')
    cy.get(addToCart.continueBtn).click()
    cy.get(addToCart.finishBtn).click()
    cy.get(addToCart.checkoutCompletePage).should('have.text', 'Thank you for your order!Your order has been dispatched, and will arrive just as fast as the pony can get there!Back Home')

})
it(" User successfully removes item to cart ", function(){
  cy.get(addToCart.addToCartBtn).click()
  cy.get(addToCart.removeBtn).click()
})
it(" Missing Last name on your information form ", function(){
    cy.get(addToCart.addToCartBtn).click()
    cy.get(addToCart.shoppingCartBtn).click()
    cy.get(addToCart.checkoutBtn).click( )
    cy.get(addToCart.checkoutFirstname).type('Damilola')
    cy.get(addToCart.checkoutZipCode).type('10027')
    cy.get(addToCart.continueBtn).click()
    cy.get(addToCart.errorContainer).should('have.text', 'Error: Last Name is required')

})
it(" Missing First name on your information form ", function(){
  cy.get(addToCart.addToCartBtn).click()
  cy.get(addToCart.shoppingCartBtn).click()
  cy.get(addToCart.checkoutBtn).click( )
  cy.get(addToCart.checkoutLastName).type('Damilola')
  cy.get(addToCart.checkoutZipCode).type('10027')
  cy.get(addToCart.continueBtn).click()
  cy.get(addToCart.errorContainer).should('have.text', 'Error: First Name is required')

})
it.only(" Cancel checkout ", function(){
  cy.get(addToCart.addToCartBtn).click()
  cy.get(addToCart.shoppingCartBtn).click()
  cy.get(addToCart.checkoutBtn).click( )
  cy.get(addToCart.checkoutFirstname).type('Damilola')
  cy.get(addToCart.checkoutLastName).type('Adeyemi')
  cy.get(addToCart.checkoutZipCode).type('10027')
  cy.get(addToCart.continueBtn).click()
  cy.get(addToCart.cancelCheckoutBtn).click()

})

})