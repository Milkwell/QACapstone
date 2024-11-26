import { $ } from '@wdio/globals'

class ItemSelector {

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
        await this.pickupSelect.click();
        await this.addToCart.click();
        await this.cartSelect.click();
    }

    get flashAlert () {
        return $('div[aria-label="cart item ready to fulfill"]');
    }
}

export default new ItemSelector();