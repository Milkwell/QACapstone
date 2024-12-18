import { $ } from '@wdio/globals'
import { Key } from 'webdriverio'
import {expect} from '@wdio/globals'
import { browser } from '@wdio/globals'

class ItemSelector {

    get searchBarInput () {
        return $('input[id="search"]');
    }
    get shopChecker () {
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
    get cartChecker () {
        return $('div[aria-label="cart item ready to fulfill"]');
    }

    get btnQty () {
        return $('select[data-test="cartItem-qty"]');
    }
    get qtyNumber () {
        return $('option[value="11"]');
    }
    get qtyChecker () {
        return $('select[data-test="cartItem-qty"]');
    }

    get btnSaveLater () {
        return $('button[aria-label="Save for later Pilot 5ct FriXion Clicker Erasable Gel Pens Fine Point 0.7mm Assorted Inks: Colored Pens with Eraser, Retractable, 5-Pack"]');
    }
    get saveLaterChecker () {
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
    get substituteChecker () {
        return $('p[class="sc-de0434cf-2 gWhKOC h-text-overflow-ellipsis"]');
    }

    get selectDelivery () {
        return $('input[value="Same Day Delivery"]');
    }
    get deliveryChecker () {
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
    get shippingChecker () {
        return $('h2[data-test="grouped-cart-fulfillment-heading"]');
    }

    get btnX () {
        return $('button[aria-label="Remove Pilot 5ct FriXion Clicker Erasable Gel Pens Fine Point 0.7mm Assorted Inks: Colored Pens with Eraser, Retractable, 5-Pack from Cart"]');
    }
    get emptyCartChecker () {
        return $('h1[class="sc-fe064f5c-0 fJliSz"]');
    }

    async search (item) {
        await browser.url(`https://www.target.com/`);
        await this.searchBarInput.setValue(item);
        await browser.keys([Key.Enter]);
        await expect(this.shopChecker).toExist();
        await expect(this.shopChecker).toHaveText(
            expect.stringContaining('for “erasable pens”'));
    }

    async selectPen () {
        await this.penSelect.click();
        //await this.pickupSelect.click();
        await this.addToCart1.click();
        await this.cartSelect.click();
        await expect(this.cartChecker).toExist();
    }

    async selectQty () {
        await this.btnQty.click();
        await this.qtyNumber.click();
        await expect(this.qtyChecker).toExist();
        await expect(this.qtyChecker).toHaveText(
            expect.stringContaining('Qty 11'));
    }

    async selectSaveLater () {
        await this.btnSaveLater.click();
        await expect(this.saveLaterChecker).toExist();
    }

    async selectSubstitute () {
        await this.addBack.click();
        await this.addToCart2.click();
        await this.btnSubstitute.click();
        await this.substituteSelect.click();
        await this.btnSave.click();
        await expect(this.substituteChecker).toExist();
        await expect(this.substituteChecker).toHaveText(
            expect.stringContaining('8ct FriXion Clicker Erasable Gel Pens Fine Point 0.7mm Assorted Inks'));
    }

    async selectSameDayDelivery () {
        await this.selectDelivery.click();
        await expect(this.deliveryChecker).toExist();
    }

    async selectShipping () {
        await this.btnGoBack.click();
        await this.btnShipping.click();
        await expect(this.shippingChecker).toExist();
        await this.btnQty.click();
        await this.newQtyNumber.click();
        await expect(this.qtyChecker).toExist();
        await expect(this.qtyChecker).toHaveText(
            expect.stringContaining('Qty 24'));
    }

    async selectBtnX () {
        await this.btnX.click();
        await expect(this.emptyCartChecker).toExist();
        await expect(this.emptyCartChecker).toHaveText(
            expect.stringContaining('Your cart is empty'));
    }
}

export default new ItemSelector();