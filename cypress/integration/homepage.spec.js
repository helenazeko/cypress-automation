import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'

describe('Homepage review' , function () {
    beforeEach(function () {
        cy.visit('http://localhost/kino/')
        cy.fixture('login.json').as('login');
    })

    it('should click on button "NASLOVNICA"', function () {
        Navbar.clickOnHome()
        cy.get('#section-slider').should('be.visible')
    })

    it('should click on button "O NAMA"', function () {
        Navbar.clickOnInfo()
        cy.get('#section-about').should('be.visible')
    })
    it('should click on button "FILMOVI"', function () {
        Navbar.clickOnMovie()
        cy.get('#section-filmovi').should('be.visible')
    })
    it('should click on button "KONTAKT"', function () {
        Navbar.clickOnCONTACT()
        cy.get('#section-contact').should('be.visible')
    })

    it('should click on button "PRIJAVA"', function () {
        Navbar.clickOnLogin()
        cy.get('.naslov2').should('be.visible')
    })

    it('should click on button "PREGLED REZERVACIJE" after login', function () {
        cy.visit('http://localhost/kino/login.php')
        const email = this.login['valid'].email;
        const password = this.login['valid'].pwd;

        cy.get(LoginPage.selectors.EMAIL)
            .type(email)
            .get(LoginPage.selectors.PASSWORD)
            .type(password)
            .get(LoginPage.selectors.SUBMIT_BUTTON)
            .contains(LoginPage.selectors.SUBMIT_TEXT)
            .click({ force: true })
            .wait(2000);

        cy.url().should('contain', 'http://localhost/kino/index.php');
        cy.get('.nav-link').contains('PREGLED REZERVACIJE').should('be.visible')
        cy.get('.nav-link').contains('ODJAVA').should('be.visible')

        Navbar.clickOnPREGLED()
        cy.contains('Molimo unesi ID svoje rezervacije:').should('be.visible')
            
    });

    


    
})