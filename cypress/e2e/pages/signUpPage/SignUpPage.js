var elements = require('./elements')

class SignUpPage {
    verifyOnSignUpPage() {
        return cy.get(elements.SIGNUPPAGE.SIGNUP_PAGE_HEADING)
                    .should('be.visible')
    }

    TypeInFirstNameTextbox(value) {
        return cy.get('#firstname').type(value)
    }

    TypeInLastNameTextbox(value) {
        return cy.get('#lastname').type(value)
    }

    TypeInEmailTextbox(value) {
        return cy.get('#email_address').type(value)
    }

    TypeInPasswordTextbox(value) {
        return cy.get('#password').type(value)
    }

    TypeInConfirmPasswordTextbox(value) {
        return cy.get('#password-confirmation').type(value)
    }

    clickOnSignUpButton() {
        return cy.get("button[type='submit']").eq(1).click()
    }
}

export default SignUpPage