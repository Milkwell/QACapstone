import { $ } from '@wdio/globals'
import { Key } from 'webdriverio'
import {expect} from '@wdio/globals'
import { browser } from '@wdio/globals'

class FavoriteSelector {

    //get homePage () {
    //    return $('a[aria-label="Target home"]');
    //}
    get searchBarInput () {
        return $('input[id="search"]');
    }
    get favoriteSelect () {
    return $('button[aria-label="favorite BIC 10pk Xtra Life Ballpoint Pens Medium Tip Black ink: School Supplies, Stationery, 1.0mm Point, Office Essentials to keep tabs on it"]');
    }
    get favoritePen () {
        return $('button[aria-label="remove BIC 10pk Xtra Life Ballpoint Pens Medium Tip Black ink: School Supplies, Stationery, 1.0mm Point, Office Essentials from your favorites"]');
    }
    get cartSelect () {
        return $('div[data-test="@web/CartIcon"]');
    }
    get favoriteList () {
        return $('a[data-test="tabFavoritesItemCount1"]');
    }
    get checkFavorites () {
        return $('a[href="/p/bic-10pk-xtra-life-ballpoint-pens-medium-tip-black-ink--school-supplies--stationery--1-0mm-point--office-essentials/-/A-16951588"]');
    }

    get btnAddToCart () {
        return $('button[aria-label="Add BIC 10pk Xtra Life Ballpoint Pens Medium Tip Black ink: School Supplies, Stationery, 1.0mm Point, Office Essentials to Cart"]');
    }
    get btnConfirm () {
        return $('button[aria-label="Add to cart for BIC 10pk Xtra Life Ballpoint Pens Medium Tip Black ink: School Supplies, Stationery, 1.0mm Point, Office Essentials"]');
    }
    get checkCart () {
        return $('div[aria-label="cart item ready to fulfill"]');
    }

    get btnX () {
        return $('button[aria-label="Remove BIC 10pk Xtra Life Ballpoint Pens Medium Tip Black ink: School Supplies, Stationery, 1.0mm Point, Office Essentials from Cart"]');
    }
    get removeFavorite () {
        return $('button[aria-label="remove  from your favorites"]');
    }
    get emptyList () {
        return $('a[data-test="tabFavoritesItemCount0"]');
    }
    get checkShop () {
        return $('button[aria-label="favorite BIC 10pk Xtra Life Ballpoint Pens Medium Tip Black ink: School Supplies, Stationery, 1.0mm Point, Office Essentials to keep tabs on it"]');
    }

    async selectFavorite (item, staller) {
    await browser.url(`https://www.target.com/`);
    await this.searchBarInput.setValue(item);
    await browser.keys([Key.Enter]);
    await this.favoriteSelect.click();
    await expect(this.favoritePen).toExist(); 
    await this.searchBarInput.setValue(staller);
    await this.cartSelect.click();
    await this.favoriteList.click();
    await expect(this.checkFavorites).toExist();
    }

    async selectAddToCart () {
        await this.btnAddToCart.click();
        await this.btnConfirm.click();
        await expect(this.checkCart).toExist();
    }

    async selectRemove (item) {
        await this.btnX.click();
        await this.favoriteList.click();
        await this.removeFavorite.click();
        await expect(this.emptyList).toExist();
        await this.searchBarInput.setValue(item);
        await browser.keys([Key.Enter]);
        await expect(this.checkShop).toExist();
    }
}

export default new FavoriteSelector();