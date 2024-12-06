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
    get addToCart1 () {
        return $('button[data-test="orderPickupButton"]');
    }
    get cartSelect () {
        return $('a[href="/cart"]');
    }
    async selectPen () {
        await this.penSelect.click();
        // VVV add an if else statment where if pick up is already selected, then it will follow different orders, because it could break other wise
        //await this.pickupSelect.click();
        await this.addToCart1.click();
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


    get btnSaveLater () {
        return $('button[aria-label="Save for later Pilot 5ct FriXion Clicker Erasable Gel Pens Fine Point 0.7mm Assorted Inks: Colored Pens with Eraser, Retractable, 5-Pack"]');
    }
    async selectSaveLater () {
        await this.btnSaveLater.click();
    }
    get flashAlert4 () {
        return $('div[data-test="tab-tabContent-tab-Savedforlateritemcount1"]');
    }


    get addBack () {
        return $('button[aria-label="Add Pilot 5ct FriXion Clicker Erasable Gel Pens Fine Point 0.7mm Assorted Inks: Colored Pens with Eraser, Retractable, 5-Pack to Cart"]');
    }
    get addToCart2 () {
        return $('button[aria-label="Add to cart for Pilot 5ct FriXion Clicker Erasable Gel Pens Fine Point 0.7mm Assorted Inks: Colored Pens with Eraser, Retractable, 5-Pack"]');
    }
    get btnSubstitute () {
        return $(`button[aria-label="Add note or backup for Pilot 5ct FriXion Clicker Erasable Gel Pens Fine Point 0.7mm Assorted Inks: Colored Pens with Eraser, Retractable, 5-Pack"]`);
    }
    get substituteSelect () {
        return $('input[id="backup-item-78025475"]');
    }
    get btnSave () {
        return $('button[class="sc-ddc722c0-0 sc-f1230b39-0 flfJAZ jtKdbk"]');
    }
    async selectSubstitute () {
        await this.addBack.click();
        await this.addToCart2.click();
        await this.btnSubstitute.click();
        await this.substituteSelect.click();
        await this.btnSave.click();
    }
    get flashAlert5 () {
        return $('p[class="sc-de0434cf-2 gWhKOC h-text-overflow-ellipsis"]');
    }


    get selectDelivery () {
        return $('input[value="Same Day Delivery"]');
    }
    async selectSameDayDelivery () {
        await this.selectDelivery.click();
    }
    get flashAlert6 () {
        return $('h2[data-test="modal-drawer-heading"]');
    }


    get btnGoBack () {
        return $('button[data-test="go-back-button"]');
    }
    get btnShipping () {
        return $('input[value="STANDARD"]');
    }
    get newQtyNumber () {
        return $('option[value="24"]');
    }
    async selectShipping () {
        await this.btnGoBack.click();
        await this.btnShipping.click();
        await this.btnQty.click();
        await this.newQtyNumber.click();
    }
    get flashAlert7 () {
        return $('h2[data-test="grouped-cart-fulfillment-heading"]');
    }


    get btnX () {
        return $('button[aria-label="Remove Pilot 5ct FriXion Clicker Erasable Gel Pens Fine Point 0.7mm Assorted Inks: Colored Pens with Eraser, Retractable, 5-Pack from Cart"]');
    }
    async selectBtnX () {
        await this.btnX.click();
    }
    get flashAlert8 () {
        return $('h1[class="sc-fe064f5c-0 fJliSz"]');
    }
}

export default new ItemSelector();