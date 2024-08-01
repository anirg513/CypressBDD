var elements = require('./elements')

class HomePage {
    verifyOnHomePage() {
        return cy.get(elements.HOMEPAGE.HOME_PAGE_HEADING).should('be.visible')
    }
}

export default HomePage