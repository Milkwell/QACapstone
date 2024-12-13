import { $ } from '@wdio/globals'
import Website from './website.js';
import {expect} from '@wdio/globals'


class LoginPage extends Website {

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
    get loginSuccess () {
        return $('a[aria-label="Target home"]');
    }

    async login (email, password) {
        await this.btnSignIn.click();
        await this.accountSignIn.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await expect(this.loginSuccess).toExist();
    }
}

export default new LoginPage();