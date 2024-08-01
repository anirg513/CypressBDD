import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../e2e/pages/loginPage/LoginPage'
import SignUpPage from '../../e2e/pages/signUpPage/SignUpPage'
import HomePage from '../../e2e/pages/homePage/HomePage'
import SignOutPage from '../../e2e/pages/signOutPage/SignOutPage'

const loginPage = new LoginPage()
const signUpPage = new SignUpPage()
const homePage = new HomePage()
const signOutPage = new SignOutPage()

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

When('I click on the arrow', () => {
    homePage.clickOnArrow()
})

Then('I click on the signout button', () => {
    homePage.clickOnSignOutButton()
})

Then('user is signed out', () => {
    signOutPage.verifyOnSignOutPage()
})

When('I click on Sign In link', () => {
    loginPage.clickOnSignInLink()
})

When('I type in my email id {string}', (value) => {
    loginPage.typeInEmailTextbox(value)
})

When('I type in my password generated {string}', (value) => {
    loginPage.typeInPasswordTextbox(value)
})

When('I click on the sign in button', () => {
    loginPage.clickOnSignInButton()
})