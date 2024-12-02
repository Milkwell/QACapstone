import { $ } from '@wdio/globals'
import { Key } from 'webdriverio'

class ItemSelector {

    get homePage () {
        return $('a[aria-label="Target home"]');
    }
    get searchBarInput () {
        return $('input[id="search"]');
    }
    async search (item) {
        await this.homePage.click();
        await this.searchBarInput.setValue(item);
        await browser.keys([Key.Enter]);
    }
    get flashAlert1 () {
        return $('span[class="h-text-bs h-display-flex h-flex-align-center h-text-grayDark h-margin-l-x2"]');
    }


    get penSelect () {
        return $('button[aria-label="Add Pilot 5ct FriXion Clicker Erasable Gel Pens Fine Point 0.7mm Assorted Inks: Colored Pens with Eraser, Retractable, 5-Pack to cart"]');
    }
    get pickupSelect () {
        return $('button[aria-label="pickup - unselected - 1 of 3 - Ready within 2 hours"]');
    }
    get addToCart () {
        return $('button[aria-label="Add to cart for Pilot 5ct FriXion Clicker Erasable Gel Pens Fine Point 0.7mm Assorted Inks: Colored Pens with Eraser, Retractable, 5-Pack"]');
    }
    get cartSelect () {
        return $('a[href="/cart"]');
    }
    async select () {
        await this.penSelect.click();
        //add an if else statment where if pick up is already selected, then it will follow different orders, because it will break other wise
        await this.pickupSelect.click();
        await this.addToCart.click();
        await this.cartSelect.click();
    }
    get flashAlert2 () {
        return $('div[aria-label="cart item ready to fulfill"]');
    }


    get btnQty () {
        return $('select[data-test="cartItem-qty"]');
    }
    get qtyNumber () {
        return $('option[value="14"]');
    }
    async selectQty () {
        await this.btnQty.click();
        await this.qtyNumber.click();
    }
    get flashAlert3 () {
        return $('select[data-test="cartItem-qty"]');
    }


    /* get btnSaveLater () {
        $('button[aria-label="Save for later Pilot 5ct FriXion Clicker Erasable Gel Pens Fine Point 0.7mm Assorted Inks: Colored Pens with Eraser, Retractable, 5-Pack"]');
    } */
}

export default new ItemSelector();