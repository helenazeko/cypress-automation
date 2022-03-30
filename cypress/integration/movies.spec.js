
describe('Movie Review', () => {
    beforeEach(function () {
        cy.visit('http://localhost/kino/')
        cy.contains('FILMOVI').click()
        cy.fixture('review.json').as('review')
    })

    it ('Should show a selection of all movie', function () {
        const film = this.review['film1'] 

        cy.get('.book-btn').contains('Pogledaj više filmova').click()
        cy.get('.form-control').select(film)
        cy.contains('Pogledaj').click()

        cy.contains('Naziv filma:').should('be.visible')
        cy.contains('ŽANR filma:').should('be.visible')
        cy.contains('TRAJANJE:').should('be.visible')
        cy.contains('DATUM IZASKA:').should('be.visible')
        cy.contains('REDATELJ filma:').should('be.visible')
        cycontains('GLUMCI:').should('be.visible')
    })
})


