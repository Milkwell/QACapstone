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
    return $('button[aria-label="favorite Razer Kraken Kitty V2 USB Gaming Headset with Kitty Ears and Chroma RGB Lighting - Hello Kitty Edition to keep tabs on it"]');
    }
    get favoriteHeadset () {
        return $('button[aria-label="remove Razer Kraken Kitty V2 USB Gaming Headset with Kitty Ears and Chroma RGB Lighting - Hello Kitty Edition from your favorites"]');
    }
    get cartSelect () {
        return $('div[data-test="@web/CartIcon"]');
    }
    get favoriteList () {
        return $('a[data-test="tabFavoritesItemCount1"]');
    }
    async selectFavorite (item, staller) {
    await this.homePage.click();
    await this.searchBarInput.setValue(item);
    await browser.keys([Key.Enter]);
    await this.favoriteSelect.click();
    await expect(this.favoriteHeadset).toExist(); 
    await this.searchBarInput.setValue(staller);
    await this.cartSelect.click();
    await this.favoriteList.click();
    }
    get flashAlert1 () {
        return $('a[href="/p/razer-kraken-kitty-v2-usb-gaming-headset-with-kitty-ears-and-chroma-rgb-lighting---hello-kitty-edition/-/A-92711201"]');
    }


    get btnAddToCart () {
        return $('button[aria-label="Add Razer Kraken Kitty V2 USB Gaming Headset with Kitty Ears and Chroma RGB Lighting - Hello Kitty Edition to Cart"]');
    }
    get btnConfirm () {
        return $('button[aria-label="Add to cart for Razer Kraken Kitty V2 USB Gaming Headset with Kitty Ears and Chroma RGB Lighting - Hello Kitty Edition"]');
    }
    async selectAddToCart () {
        await this.btnAddToCart.click();
        await this.btnConfirm.click();
    }
    get flashAlert2 () {
        return $('div[aria-label="cart item ready to fulfill"]');
    }


    get btnX () {
        return $('button[aria-label="Remove Razer Kraken Kitty V2 USB Gaming Headset with Kitty Ears and Chroma RGB Lighting - Hello Kitty Edition from Cart"]');
    }
    get removeFavorite () {
        return $('button[aria-label="remove  from your favorites"]');
    }
    get emptyList () {
        return $('a[data-test="tabFavoritesItemCount0"]');
    }
    async selectRemove (item) {
        await this.btnX.click();
        await this.favoriteList.click();
        await this.removeFavorite.click();
        await expect(this.emptyList).toExist();
        await this.searchBarInput.setValue(item);
        await browser.keys([Key.Enter]);
    }
    get flashAlert3 () {
        return $('button[aria-label="favorite Razer Kraken Kitty V2 USB Gaming Headset with Kitty Ears and Chroma RGB Lighting - Hello Kitty Edition to keep tabs on it"]');
    }
}

export default new FavoriteSelector();