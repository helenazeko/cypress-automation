import Registration from "../page-objects/pages/Registration"

Cypress.Commands.add('login', () => {
	const email = Cypress.env('user').email;
	const password = Cypress.env('user').pwd;

    cy.request({
		method: 'POST',
		url: 'http://localhost/kino/login.php',
		form: true,
		body: {
			email: email,
			passwd: password,
		},
	}).then($response => {
		expect($response.status).to.be.eq(200);
		cy.visit('http://localhost/kino/login.php', { followRedirects: true });
	});
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