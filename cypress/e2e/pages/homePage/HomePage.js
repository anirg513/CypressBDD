var elements = require('./elements')

class HomePage {
    verifyOnHomePage() {
        return cy.get(elements.HOMEPAGE.HOME_PAGE_HEADING).should('be.visible')
    }
    clickOnArrow(){
        return cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').wait(5000).click()
    }
    clickOnSignOutButton(){

        return cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click()

    }

}

export default HomePage