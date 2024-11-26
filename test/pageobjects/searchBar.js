import { $ } from '@wdio/globals'
import { Key } from 'webdriverio'

class SearchPens {

    get homePage () {
        return $('a[aria-label="Target home"]');
    }
    get searchBarInput () {
        return $('input[id="search"]');
    }
    async select (item) {
        await this.homePage.click();
        await this.searchBarInput.setValue(item);
        await browser.keys([Key.Enter]);
    }
    get flashAlert () {
        return $('a[href="/s?searchTerm=pens&tref=typeahead%7Cterm%7Cpens%7C%7C%7Chistory&ignoreBrandExactness=true&Nao=0&facetedValue=xf87j"]');
    }
}

export default new SearchPens();
