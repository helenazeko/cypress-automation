export default class LoginPage{
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
