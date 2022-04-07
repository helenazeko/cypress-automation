describe('Reservation  review', function () {
	before(function () {
		cy.visit('kino')
		cy.contains('PRIJAVA').click()
		cy.fixture('login.json').as('login')
		cy.fixture('reservation.json').as('reservation')
	})

	it('Review of reservation by number', function () {
		cy.login()
		cy.contains('PREGLED REZERVACIJE').click()
		cy.contains('Molimo unesi ID svoje rezervacije:').should('be.visible')
		cy.get('input[name="id"]').type('58')
		cy.contains('Potvrdi').click()
		cy.get('.pregledrezervacije').should('be.visible')
	})
})
