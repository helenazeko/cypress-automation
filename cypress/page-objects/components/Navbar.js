export default class Navbar {
    static clickOnLogo() {
        cy.get('.navbar-brand').click()
    }

    static search(text) {
        cy.get('.search-form').type(`${text} {enter}`)
    }

    static clickOnLogin(){
        cy.contains('PRIJAVA').click()
    }

    static clickOnMovie(){
        cy.contains('FILMOVI').click()
    }

    static clickOnHome(){
        cy.contains('NASLOVNICA').click()
    }
    static clickOnInfo(){
        cy.contains('O NAMA').click()
    }
    static clickOnCONTACT(){
        cy.contains('KONTAKT').click()
    }
    static clickOnPREGLED(){
        cy.contains('PREGLED REZERVACIJE').click()
    }
}
