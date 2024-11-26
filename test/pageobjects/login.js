import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {

    get btnSignIn () {
        return $('a[id="account-sign-in"]');
    }

    get accountSignIn () {
        return $('button[data-test="accountNav-signIn"]');
    }

    get inputEmail () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async login (email, password) {
        await this.btnSignIn.click();
        await this.accountSignIn.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    get flashAlert () {
        return $('a[aria-label="Target home"]');
    }
}

export default new LoginPage();
