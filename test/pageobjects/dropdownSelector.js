import { $ } from '@wdio/globals'

class DropdownSelector {

    get dropDownPD () {
        return $('a[aria-label="pickup and delivery"]');
    }
    get btnShopDelivery () {
        return $('a[data-tracking="Same Day Delivery"]');
    }
    async select1 () {
        await this.dropDownPD.click();
        await this.btnShopDelivery.click();
    }
    get flashAlert1 () {
        return $('h1[class="sc-fe064f5c-0 eyeVYY h-margin-t-tiny"]');
    }

    
    get btnShopPickup () {
        return $('a[data-tracking="Order Pickup"]');
    }
    async select2 () {
        await this.dropDownPD.click();
        await this.btnShopPickup.click();
    }
    get flashAlert2 () {
        return $('h1[class="sc-fe064f5c-0 eyeVYY h-display-inline-flex h-margin-t-tight"]');
    }


    get dropDownNF () {
        return $('a[aria-label="New & featured"]');
    }
    get btnTargetArrivals () {
        return $('a[data-tracking="Target New Arrivals "]');
    }
    async select3 () {
        await this.dropDownNF.click();
        await this.btnTargetArrivals.click();
    }
    get flashAlert3 () {
        return $('h1[data-test="page-title"]');
    }


    get btnTargetFinds () {
        return $('a[data-tracking="Target Finds "]');
    }
    async select4 () {
        await this.dropDownNF.click();
        await this.btnTargetFinds.click();
    }
    get flashAlert4 () {
        return $('a[href="/finds"]');
    }

    get btnTargetStyle () {
        return $('a[data-tracking="#TargetStyle"]');
    }
    async select5 () {
        await this.dropDownNF.click();
        await this.btnTargetStyle.click();
    }
    get flashAlert5 () {
        return $('a[href="/finds/targetstyle"]');
    }


    get btnBeyondMeasure () {
        return $('a[data-tracking="Black Beyond Measure"]');
    }
    async select6 () {
        await this.dropDownNF.click();
        await this.btnBeyondMeasure.click();
    }
    get flashAlert6 () {
        return $('div[class="sc-d348f832-1 jVqgIa storycard--text"]');
    }


    get btnMasQue () {
        return $('a[data-tracking="Más Que"]');
    }
    async select7 () {
        await this.dropDownNF.click();
        await this.btnMasQue.click();
    }
    get flashAlert7 () {
        return $('span[data-test="@web/Breadcrumbs/BreadcrumbLink"]');
    }


    get btnWomenBrands () {
        return $('a[data-tracking="Women-Owned Brands at Target"]');
    }
    async select8 () {
        await this.dropDownNF.click();
        await this.btnWomenBrands.click();
    }
    get flashAlert8 () {
        return $('h1[class="sc-fe064f5c-0 dtCtuk"]');
    }


    get btnAsianBrands () {
        return $('a[data-tracking="Asian-Owned Brands at Target "]');
    }
    async select9 () {
        await this.dropDownNF.click();
        await this.btnAsianBrands.click();
    }
    get flashAlert9 () {
        return $('h1[class="sc-fe064f5c-0 dtCtuk"]');
    }


    get btnLGBShop () {
        return $('a[data-tracking="LGBTQIA+ Shop"]');
    }
    async select10 () {
        await this.dropDownNF.click();
        await this.btnLGBShop.click();
    }
    get flashAlert10 () {
        return $('h1[class="sc-fe064f5c-0 dtCtuk"]');
    }
}

export default new DropdownSelector();