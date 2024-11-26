import { $ } from '@wdio/globals'

class DeliverySelector {

    get dropDown () {
        return $('a[aria-label="pickup and delivery"]');
    }
    get btnShopDelivery () {
        return $('a[data-tracking="Same Day Delivery"]');
    }

    async select () {
        await this.dropDown.click();
        await this.btnShopDelivery.click();
    }

    get flashAlert () {
        return $('h1[class="sc-fe064f5c-0 eyeVYY h-margin-t-tiny"]');
    }
}

export default new DeliverySelector();