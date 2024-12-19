import { $ } from '@wdio/globals';
import {expect} from '@wdio/globals';

//Match Imports like the other classes with extending base and not using browser? Like "extends Website" from login.js - do it for all tests.js
class DropdownSelector extends Website {

    get homePageChecker () {
        return $('div[class="storycard--text"]');
    }

    get dropDownPickupDelivery () {
        return $('a[aria-label="pickup and delivery"]');
    }
    get btnShopPickup () {
        return $('a[data-tracking="Order Pickup"]');
    }
    get checkerShopPickup () {
        return $('h1[class="sc-fe064f5c-0 ezQRcX h-display-inline-flex h-margin-t-tight"]');
    }
    get btnShopDelivery () {
        return $('a[data-tracking="Same Day Delivery"]');
    }
    get checkerShopDelivery () {
        return $('h1[class="sc-fe064f5c-0 ezQRcX h-margin-t-tiny"]');
    }

    get dropDownNewFeatured () {
        return $('a[aria-label="New & featured"]');
    }
    get btnTargetArrivals () {
        return $('a[data-tracking="Target New Arrivals "]');
    }
    get checkerTargetArrivals () {
        return $('h1[data-test="page-title"]');
    }
    get btnTargetFinds () {
        return $('a[data-tracking="Target Finds "]');
    }
    get checkerTargetFinds () {
        return $('a[href="/finds"]');
    }
    get btnTargetStyle () {
        return $('a[data-tracking="#TargetStyle"]');
    }
    get checkerTargetStyle () {
        return $('a[href="/finds/targetstyle"]');
    }
    get btnBlackBeyondMeasure () {
        return $('a[data-tracking="Black Beyond Measure"]');
    }
    get checkerBlackBeyondMeasuer () {
        return $('div[data-test="storycardWrapperElement"]');
    }
    get btnMasQue () {
        return $('a[data-tracking="Más Que"]');
    }
    get checkerMasQue () {
        return $('span[data-test="@web/Breadcrumbs/BreadcrumbLink"]');
    }
    get btnWomenBrands () {
        return $('a[data-tracking="Women-Owned Brands at Target"]');
    }
    get checkerSpecialDeals () {
        return $('h1[class="sc-fe064f5c-0 fJliSz"]');
    }
    get btnAsianBrands () {
        return $('a[data-tracking="Asian-Owned Brands at Target "]');
    }
    get btnLGBShop () {
        return $('a[data-tracking="LGBTQIA+ Shop"]');
    }

    get dropDownDeals () {
        return $('a[aria-label="Deals"]');
    }
    get btnTopDeals () {
        return $('a[data-tracking="top-deals"]');
    }
    get btnCircleDeals () {
        return $('a[data-tracking="target-circle-deals"]');
    }
    get checkerCircleDeals () {
        return $('svg[aria-label="Target Circle trademark logo"]');
    }
    get btnWeekly () {
        return $('a[data-tracking="weekly-ad"]');
    }
    get checkerWeekly () {
        return $('h2[class="sc-fe064f5c-0 sc-187e5a58-2 fJliSz iOAmGa"]');
    }
    get btnClearance () {
        return $('a[data-tracking="clearance"]');
    }

    async selectPickupDelivery () {
        await this.dropDownPickupDelivery.click();
        await this.btnShopPickup.click();
        await expect(this.checkerShopPickup).toExist();

        await this.dropDownPickupDelivery.click();
        await this.btnShopDelivery.click();
        await expect(this.checkerShopDelivery).toExist();

        await browser.url(`https://www.target.com/`);
        await expect(this.homePageChecker).toExist();
    }

    async selectNewFeatured () {
        await this.dropDownNewFeatured.click();
        await this.btnTargetArrivals.click();
        await expect(this.checkerTargetArrivals).toExist();
        await expect(this.checkerTargetArrivals).toHaveText(
            expect.stringContaining('Target New Arrivals'));

        await this.dropDownNewFeatured.click();
        await this.btnTargetFinds.click();
        await expect(this.checkerTargetFinds).toExist();

        await this.dropDownNewFeatured.click();
        await this.btnTargetStyle.click();
        await expect(this.checkerTargetStyle).toExist();

        await this.dropDownNewFeatured.click();
        await this.btnBlackBeyondMeasure.click();
        await expect(this.checkerBlackBeyondMeasuer).toExist();
    
        await this.dropDownNewFeatured.click();
        await this.btnMasQue.click();
        await expect(this.checkerMasQue).toExist();
 
        await this.dropDownNewFeatured.click();
        await this.btnWomenBrands.click();
        await expect(this.checkerSpecialDeals).toExist();
        await expect(this.checkerSpecialDeals).toHaveText(
            expect.stringContaining('Women-Owned Brands at Target'));
 
        await this.dropDownNewFeatured.click();
        await this.btnAsianBrands.click();
        await expect(this.checkerSpecialDeals).toExist();
        await expect(this.checkerSpecialDeals).toHaveText(
            expect.stringContaining('Asian-Owned Brands at Target'));

        await this.dropDownNewFeatured.click();
        await this.btnLGBShop.click();
        await expect(this.checkerSpecialDeals).toExist();
        await expect(this.checkerSpecialDeals).toHaveText(
            expect.stringContaining('LGBTQIA+ Shop'));

        await browser.url(`https://www.target.com/`);
        await expect(this.homePageChecker).toExist();
    }

    async selectDeals () {
        await this.dropDownDeals.click();
        await this.btnTopDeals.click();
        await expect(this.checkerSpecialDeals).toExist();
        await expect(this.checkerSpecialDeals).toHaveText(
            expect.stringContaining('Top Deals'));

        await this.dropDownDeals.click();
        await this.btnCircleDeals.click();
        await expect(this.checkerCircleDeals).toExist();
  
        await this.dropDownDeals.click();
        await this.btnWeekly.click();
        await expect(this.checkerWeekly).toExist();

        await this.dropDownDeals.click();
        await this.btnClearance.click();
        await expect(this.checkerSpecialDeals).toExist();
        await expect(this.checkerSpecialDeals).toHaveText(
            expect.stringContaining('Clearance'));

        await browser.url(`https://www.target.com/`);
        await expect(this.homePageChecker).toExist();
    }
}

export default new DropdownSelector();