import { LoginPage } from '../support/movie_pages'

describe('Login Success Test', () => {
	before(function () {
		cy.visit('http://localhost/kino/')
		cy.contains('PRIJAVA').click()
		cy.fixture('login.json').as('login')
	})

	it('Login with previously manually registered user credentials', function () {
		cy.login()
	})
})

describe('Logout Test', () => {
	before(function () {
		cy.visit('http://localhost/kino/')
		cy.contains('PRIJAVA').click()
		cy.fixture('login.json').as('login')
	})

	it('Logout properly', function () {
		cy.login()
		cy.get('.nav-link').contains('ODJAVA').click({ force: true })
		cy.url().should('contain', 'http://localhost/kino/login.php')
	})
})

describe('Login with invalid credentials', () => {
	before(function () {
		cy.visit('http://localhost/kino/')
		cy.contains('PRIJAVA').click()
		cy.fixture('login.json').as('login')
	})

	it('Try to Login with invalid email', function () {
		const email = this.login['invalid_email'].email
		const password = this.login['valid'].pwd

		cy.get(LoginPage.selectors.EMAIL)
			.type(email)
			.get(LoginPage.selectors.PASSWORD)
			.type(password)
			.get(LoginPage.selectors.SUBMIT_BUTTON)
			.contains(LoginPage.selectors.SUBMIT_TEXT)
			.click({ force: true })
			.wait(2000)

		cy.url().should('contain', 'http://localhost/kino/login.php')
		cy.contains('Nevažeći email ili lozinka').should('be.visible')
	})
})

describe('Login with invalid credentials', () => {
	before(function () {
		cy.visit('http://localhost/kino/')
		cy.contains('PRIJAVA').click()
		cy.fixture('login.json').as('login')
	})

	it('Try to Login with invalid password', function () {
		const email = this.login['valid'].email
		const password = this.login['invalid_password'].pwd

		cy.get(LoginPage.selectors.EMAIL)
			.type(email)
			.get(LoginPage.selectors.PASSWORD)
			.type(password)
			.get(LoginPage.selectors.SUBMIT_BUTTON)
			.contains(LoginPage.selectors.SUBMIT_TEXT)
			.click({ force: true })
			.wait(2000)

		cy.url().should('contain', 'http://localhost/kino/login.php')
		cy.contains('Nevažeći email ili lozinka').should('be.visible')
	})
})
