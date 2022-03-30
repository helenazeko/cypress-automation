import {LoginPage, Registration} from "../support/movie_pages"


Cypress.Commands.add('login', function () {
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

});

Cypress.Commands.add('fillRegisterMandatoryFields',
	(name, lastname, email, password ) => {
		cy.get(Registration.selectors.NAME).clear().type(name);
		cy.get(Registration.selectors.LASTNAME).clear().type(lastname);
		cy.get(Registration.selectors.EMAIL).clear().type(email);
        cy.get(Registration.selectors.PASSWORD).clear().type(password);
		
	}
);

Cypress.Commands.add('registerFieldsValidation', (selector, msg) => {
	cy.get(Registration.selectors.SUBMIT_BUTTON)
		.contains('Registracija')
		.click({ force: true });
	cy.get(selector).contains(msg).should('be.visible');
	cy.get('.alert-danger').should(
		'contain', Registration.msg.USERNAME_TAKEN);

	cy.url('http://localhost/kino/login.php').should('contain', 'login.php');
});

Cypress.Commands.add('registerFieldsValidationE', (selector, msg) => {
	cy.get(Registration.selectors.SUBMIT_BUTTON)
		.contains('Registracija')
		.click({ force: true });
	cy.get(selector).contains(msg).should('be.visible');
	cy.get('.alert-danger').should(
		'contain', Registration.msg.EMAIL_WRONGFORMAT);

	cy.url('http://localhost/kino/login.php').should('contain', 'login.php');
});