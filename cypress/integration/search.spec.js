import {SearchForm, SearchResults, Movie } from '../page-objects/pages/SearchForm' ;

describe('Search feature', () => {
	describe('Search Movies using Search Form on Home Page with default options', () => {
		beforeEach(function () {
			cy.visit('http://localhost/kino/');
			cy.fixture('search.json').as('search');
		});

		it('Should return list of results after searching one movie', function () {
			const movie = this.search.movie['single'].searchTerm;
		
			cy.get(SearchForm.selectors.SEARCH_INPUT_FIELD)
				.type(movie)
				.get(SearchForm.selectors.SEARCH_BUTTON)
				.click();
			
            cy.get('h5').contains('Naziv filma:').should('be.visible')
            cy.get('h5').contains('ŽANR filma:').should('be.visible')
            cy.get('h5').contains('TRAJANJE:').should('be.visible')
            cy.get('h5').contains('DATUM IZASKA:').should('be.visible')
            cy.get('h5').contains('REDATELJ filma:').should('be.visible')
            cy.get('h5').contains('GLUMCI:').should('be.visible')

					});
		});
    });

    describe('Search Movies using Search Form on Home Page with default options', () => {
		beforeEach(function () {
			cy.visit('http://localhost/kino/');
			cy.fixture('search.json').as('search');
		});

        it('Should display all the movies when just search submit button is clicked', function () {
			cy.get(SearchForm.selectors.SEARCH_BUTTON)
				.click();

            cy.get('h5').contains('Naziv filma:').should('be.visible')
            cy.get('h5').contains('ŽANR filma:').should('be.visible')
            cy.get('h5').contains('TRAJANJE:').should('be.visible')
            cy.get('h5').contains('DATUM IZASKA:').should('be.visible')
            cy.get('h5').contains('REDATELJ filma:').should('be.visible')
            cy.get('h5').contains('GLUMCI:').should('be.visible')
			
				
			});	
    });	




