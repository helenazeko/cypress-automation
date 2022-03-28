
import Navbar from '../page-objects/components/Navbar'

describe('Movie Review', () => {
    beforeEach(function () {
        cy.visit('http://localhost/kino/')
        Navbar.clickOnMovie()
        cy.fixture('review.json').as('review')
    })

    it ('Should show a selection of all movie', function () {
        cy.get('.book-btn').contains('Pogledaj više filmova').click()

        const film = this.review['film1'] 
        cy.get('.form-control').select(film)
        cy.contains('Pogledaj').click()

        cy.get('h5').contains('Naziv filma:').should('be.visible')
        cy.get('h5').contains('ŽANR filma:').should('be.visible')
        cy.get('h5').contains('TRAJANJE:').should('be.visible')
        cy.get('h5').contains('DATUM IZASKA:').should('be.visible')
        cy.get('h5').contains('REDATELJ filma:').should('be.visible')
        cy.get('h5').contains('GLUMCI:').should('be.visible')

    })
})


