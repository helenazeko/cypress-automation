export default class Registration{
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

