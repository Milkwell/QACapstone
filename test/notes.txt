import { $ } from '@wdio/globals'

class PickupSelector {

    get dropDown () {
        return $('a[aria-label="pickup and delivery"]');
    }
    get btnShopPickup () {
        return $('a[data-tracking="Order Pickup"]');
    }

    async select () {
        await this.dropDown.click();
        await this.btnShopPickup.click();
    }

    get flashAlert () {
        return $('h1[class="sc-fe064f5c-0 eyeVYY h-display-inline-flex h-margin-t-tight"]');
    }
}

export default new PickupSelector();