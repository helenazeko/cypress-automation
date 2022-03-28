import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'
import Reservation from '../page-objects/pages/Registration'

describe('Movie Reservation before Login', function () {
    before(function () {
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
    it ('Should show a reservation of movie but before login', function () {
        cy.contains('Rezerviraj').click()
        cy.wait(5000)
        cy.contains('Niste prijavljeni.').should('be.visible')
        cy.contains(' Pritisnite ovdje ').click()
        cy.get('.naslov2').should('be.visible')
    })
})

describe('Movie Reservation after Login', function ()  {
    before(function () {
        cy.fixture('login.json').as('login');
        cy.fixture('reservation.json').as('res');
    })

    it('Login, show movies and reservation ', function () {
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
    
    
        cy.get('.book-btn').contains('Pogledaj više filmova').click()

        cy.get('.form-control').select('Gospoda')
        
        
        cy.contains('Pogledaj').click()

        cy.get('h5').contains('Naziv filma:').should('be.visible')
        cy.get('h5').contains('ŽANR filma:').should('be.visible')
        cy.get('h5').contains('TRAJANJE:').should('be.visible')
        cy.get('h5').contains('DATUM IZASKA:').should('be.visible')
        cy.get('h5').contains('REDATELJ filma:').should('be.visible')
        cy.get('h5').contains('GLUMCI:').should('be.visible')

        cy.contains('Rezerviraj').click()
        cy.get('.booking-panel').should('be.visible')
  

    
   
    cy.get('#prikazivanje').select('33')
    cy.get(LoginPage.reser.NAME).type('Helena')
    cy.get(LoginPage.reser.LASTNAME).type('Zeko')
    cy.get(LoginPage.reser.NUM).type('063000333') 
    cy.get(LoginPage.reser.SUBMIT_BUTTON).click()

    cy.contains(LoginPage.reser.MSG).should('be.visible')
})

})