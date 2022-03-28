import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'

describe('Reservation  review', function() {
    before(function () {
        cy.visit('http://localhost/kino/')
        Navbar.clickOnLogin()
        cy.fixture('login.json').as('login');
        cy.fixture('reservation.json').as('reservation');
    })

    it('Review of reservation by number', function () {
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

        cy.get('input[name="id"]').type('58')
        cy.contains('Potvrdi').click()
        cy.get('.pregledrezervacije').should('be.visible')

    })


 })
