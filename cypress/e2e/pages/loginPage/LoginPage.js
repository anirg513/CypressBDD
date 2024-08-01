var elements = require('./elements')

class LoginPage {

    verifyOnLoginPage() {
        return cy.get(elements.LOGINPAGE.LOGIN_PAGE_HEADING)
                    .should('be.visible')
    }

    
    typeInEmailTextbox(value) {
        return cy.get('#email').type(value)
    }

    typeInPasswordTextbox(value) {
        return cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(value)
    }

    clickOnSignInButton() {
        return cy.get("button[type='submit']").eq(1).click()
    }

    clickOnSignUpLink() {
        return cy.get("a[href='https://magento.softwaretestingboard.com/customer/account/create/']").eq(0).click()
    }

    clickOnSignInLink() {
        return cy.get('.panel > .header > .authorization-link > a').click()
    }

}

export default LoginPage