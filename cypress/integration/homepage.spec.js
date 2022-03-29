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
        cy.login()

        Navbar.clickOnPREGLED()
        cy.contains('Molimo unesi ID svoje rezervacije:').should('be.visible')
            
    });

    


    
})