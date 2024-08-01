import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../e2e/pages/loginPage/LoginPage'
import SignUpPage from '../../e2e/pages/signUpPage/SignUpPage'
import HomePage from '../../e2e/pages/homePage/HomePage'

const loginPage = new LoginPage()
const signUpPage = new SignUpPage()
const homePage = new HomePage()

Given('I am on the Main page', () => {
    cy.visit('/')
})

When('I click on Create an Account link', () => {
    loginPage.clickOnSignUpLink()
})

Then('I should be on the sign up page', () => {
    signUpPage.verifyOnSignUpPage()
})

When('I type in my first name {string}', (value) => {
    signUpPage.TypeInFirstNameTextbox(value)
})

When('I type in my last name {string}', (value) => {
    signUpPage.TypeInLastNameTextbox(value)
})

When('I type in my email {string}', (value) => {
    signUpPage.TypeInEmailTextbox(value)
})

When('I type in my password {string}', (value) => {
    signUpPage.TypeInPasswordTextbox(value)
})

When('I type in my password again {string}', (value) => {
    signUpPage.TypeInConfirmPasswordTextbox(value)
})

When('I click on the sign up button', () => {
    signUpPage.clickOnSignUpButton()
})

Then('I should be on the home page', () => {
    homePage.verifyOnHomePage()
})
