class SignOutPage {
    verifyOnSignOutPage() {
        return cy.get("span[class='base']").should('be.visible')
    }
    
}

export default SignOutPage