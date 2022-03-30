describe('Homepage review', function () {
	beforeEach(function () {
		cy.visit('http://localhost/kino/')
		cy.fixture('login.json').as('login')
	})

	it('should click on button "NASLOVNICA"', function () {
		cy.contains('NASLOVNICA').click()
		cy.get('#section-slider').should('be.visible')
	})

	it('should click on button "O NAMA"', function () {
		cy.contains('O NAMA').click()
		cy.get('#section-about').should('be.visible')
	})
	it('should click on button "FILMOVI"', function () {
		cy.contains('FILMOVI').click()
		cy.get('#section-filmovi').should('be.visible')
	})
	it('should click on button "KONTAKT"', function () {
		cy.contains('KONTAKT').click()
		cy.get('#section-contact').should('be.visible')
	})

	it('should click on button "PRIJAVA"', function () {
		cy.contains('PRIJAVA').click()
		cy.get('.naslov2').should('be.visible')
	})

	it('should click on button "PREGLED REZERVACIJE" after login', function () {
		cy.visit('http://localhost/kino/login.php')
		cy.login()
		cy.contains('PREGLED REZERVACIJE').click()
		cy.contains('Molimo unesi ID svoje rezervacije:').should('be.visible')
	})
})
