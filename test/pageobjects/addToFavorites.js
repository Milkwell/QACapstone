import { $ } from '@wdio/globals'
import { Key } from 'webdriverio'
import {expect} from '@wdio/globals'

class FavoriteSelector {

    get homePage () {
        return $('a[aria-label="Target home"]');
    }
    get searchBarInput () {
        return $('input[id="search"]');
    }
    get favoriteSelect () {
    return $('button[aria-label="favorite Turtle Beach Recon 50 Wired Gaming Headset for Nintendo Switch/Xbox Series X|S/Xbox One/ PlayStation 4/5 - Red/Blue to keep tabs on it"]');
    }
    get favoriteHeadset () {
        return $('button[aria-label="remove Turtle Beach Recon 50 Wired Gaming Headset for Nintendo Switch/Xbox Series X|S/Xbox One/ PlayStation 4/5 - Red/Blue from your favorites"]');
    }
    get cartSelect () {
        return $('div[data-test="@web/CartIcon"]');
    }
    get favoriteList () {
        return $('a[class="sc-e851bd29-0 dmfVmE sc-71934497-2 fifuch"]');
    }

    async select (item) {
    await this.homePage.click();
    await this.searchBarInput.setValue(item);
    await browser.keys([Key.Enter]);
    await this.favoriteSelect.click();
    await expect(this.favoriteHeadset).toExist();
    await this.cartSelect.click();
    await this.favoriteList.click();
    }
    get flashAlert () {
        return $('a[href="/p/turtle-beach-recon-50-wired-gaming-headset-for-nintendo-switch-xbox-series-x-s-xbox-one--playstation-4-5---red-blue/-/A-88743553"]');
    }
}

export default new FavoriteSelector();