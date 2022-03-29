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
        cy.login()

        Navbar.clickOnPREGLED()
        cy.contains('Molimo unesi ID svoje rezervacije:').should('be.visible')

        cy.get('input[name="id"]').type('58')
        cy.contains('Potvrdi').click()
        cy.get('.pregledrezervacije').should('be.visible')

    })


 })
