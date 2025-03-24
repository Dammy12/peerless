import { Login } from "../fixtures/selectors.js";


describe("Given i am on the landing page", function () {
  beforeEach(function () {
    cy.visit('/')
  })
  
 
it(" Valid login", function(){
    cy.get(Login.usernameField).type('standard_user')
    cy.get(Login.passwordField).type('secret_sauce')
    cy.get(Login.loginBtn).click()

})

it(" Invalid login", function(){
    cy.get(Login.usernameField).type('locked_out_user')
    cy.get(Login.passwordField).type('secret_sauce')
    cy.get(Login.loginBtn).click()

})


 
})