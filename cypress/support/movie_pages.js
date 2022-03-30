export class LoginPage{
    static login(login_username, login_password){
        cy.login(login_username, login_password)
    }
    static displayErrorMessage(){
        cy.contains('Nevažeći email ili lozinka').should('be.visible')
    }

    static selectors = {
        EMAIL: 'input[name="emailp"]',
		PASSWORD: 'input[name="lozinkap"]',
		SUBMIT_BUTTON: 'button[name="btnprijava"]',
        SUBMIT_TEXT: 'Prijava',
        ERROR_MSG: 'Nevažeći email ili lozinka',
    }

    static reser = {
            NAME : 'input[name="fName"]',
            LASTNAME : 'input[name="lName"]',
            NUM : 'input[name="pNumber"]',
            SUBMIT_BUTTON: 'button[type="submit"]',
            MSG : 'Ako ne dođete pola sata ranije , vaša rezervacija bit će poništena.'
    }
}
export class Registration{
    static selectors = {
        FORM: 'form[method="post"]',
        NAME: 'input[name="ime"]',
        LASTNAME: 'input[name="prezime"]',
        EMAIL: 'input[name="email"]',
        PASSWORD: 'input[name="lozinka"]',
        SUBMIT_BUTTON: 'button[type="submit"]',
        SUCCESS_MSG: 'Uspjeh! Vaš račun je uspješno napravljen!',
        ERROR_MSG: '.alert-danger',
        USR_AVAILABILITY_ALERT: '.alert-danger',
        USERNAME_TAKEN: '.alert-danger',
        VALIDATION_MSG: '.alert-danger',
        EMAIL_WRONGFORMAT: '.alert-danger'
    }
    static msg = {
        FORM_ERROR: 'Registracija neuspješna.',
		USERNAME_TAKEN: 'Greška! Taj email već postoji..',
        EMAIL_WRONGFORMAT: 'Greška! Email nije dobar.'
    }
}
export class SearchForm{

	static selectors = {
		SEARCH_FORM: '.search-form',
		SEARCH_INPUT_FIELD: 'input[name="keyword"]',
		SEARCH_BUTTON: '.search',
	}
}

export class SearchResults{
	static selectors = {
		RESULTS_PANEL: '.box1',
		RESULT_ITEM_NAMES: 'Naziv filma:', 
		RESULT_ITEM_GANRE: 'ŽANR filma:',
		RESULT_ITEM_DURATION: 'TRAJANJE:',
		RESULTS_RELDATE: 'DATUM IZASKA:',
		RESULTS_DIRECTOR: 'REDATELJ filma:',
        RESULTS_ACTORS: 'GLUMCI:'
	}
	static msg = {
		NO_RESULTS: 'Rezultati pretraživanja:',
	}
}

export class Movie {
    static selectors = {
		RESULTS_PANEL: '.box1',
		RESULT_ITEM_NAMES: 'movieTitle',
		RESULT_ITEM_GANRE: 'movieGenre',
		RESULT_ITEM_DURATION: 'movieDuration',
		RESULTS_RELDATE: 'movieRelDate',
		RESULTS_DIRECTOR: 'movieDirector',
    }
}


