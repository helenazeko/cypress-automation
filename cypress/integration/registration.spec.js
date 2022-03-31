import { generateStringWithRandomPrefix } from '../support/utils'
import { Registration } from '../support/movie_pages'

describe('User Registration Process', () => {
	describe('User Registration Valid Scenario', () => {
		before(function () {
			cy.visit('http://localhost/kino/')
			cy.contains('PRIJAVA').click()
			cy.fixture('registration.json').as('users')
		})

		it('Should regiser user properly', function () {
			const name = generateStringWithRandomPrefix(
				this.users['valid_name'].allowed
			)
			const lastname = generateStringWithRandomPrefix(
				this.users['valid_lastname'].allowed
			)
			const password = this.users['valid_password'].allowed
			const email = generateStringWithRandomPrefix(
				this.users['valid_email'].allowed
			)

			cy.fillRegisterMandatoryFields(name, lastname, email, password)

			cy.contains('Registracija').click()

			cy.get('.alert-success').should(
				'contain',
				Registration.selectors.SUCCESS_MSG
			)
		})
	})

	describe('Validate correctly invalid user registration data', () => {
		before(function () {
			cy.visit('http://localhost/kino/')
			cy.contains('PRIJAVA').click()
			cy.fixture('registration.json').as('users')
		})

		it('Should validate properly username taken after submitting', function () {
			const name = generateStringWithRandomPrefix(
				this.users['valid_name'].allowed
			)
			const lastname = generateStringWithRandomPrefix(
				this.users['valid_lastname'].allowed
			)

			const password = this.users['valid_password'].allowed
			const email = this.users['invalid_email'].email_taken

			cy.fillRegisterMandatoryFields(name, lastname, email, password)
			cy.registerFieldsValidation(
				Registration.selectors.VALIDATION_MSG,
				Registration.msg.USERNAME_TAKEN
			)
		})
	})

	describe('Validate correctly invalid user registration data', () => {
		before(function () {
			cy.visit('http://localhost/kino/')
			cy.contains('PRIJAVA').click()
			cy.fixture('registration.json').as('users')
		})

		it('Should validate properly when email is wrong', function () {
			const name = generateStringWithRandomPrefix(
				this.users['valid_name'].allowed
			)
			const lastname = generateStringWithRandomPrefix(
				this.users['valid_lastname'].allowed
			)
			const password = this.users['valid_password'].allowed

			cy.fillRegisterMandatoryFields(
				name,
				lastname,
				this.users['invalid_email'].not_allowed,
				password
			)

			cy.get(Registration.selectors.SUBMIT_BUTTON)
				.contains('Registracija')
				.click({ force: true })

			cy.contains(Registration.msg.EMAIL_WRONGFORMAT).should('be.visible')
		})
	})

	describe('Validate correctly invalid user registration data', () => {
		before(function () {
			cy.visit('http://localhost/kino/')
			cy.contains('PRIJAVA').click()
			cy.fixture('registration.json').as('users')
		})
		it('Should validate properly when email has only numbers', function () {
			const name = this.users['valid_name'].allowed
			const lastname = this.users['valid_lastname'].allowed
			const password = this.users['valid_password'].allowed

			cy.fillRegisterMandatoryFields(
				name,
				lastname,
				this.users['invalid_email'].only_numbers,
				password
			)
			cy.get(Registration.selectors.SUBMIT_BUTTON)
				.contains('Registracija')
				.click({ force: true })

			cy.contains(Registration.msg.EMAIL_WRONGFORMAT).should('be.visible')
		})
	})
})
