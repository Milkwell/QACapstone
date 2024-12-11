import { $ } from '@wdio/globals'
import {expect} from '@wdio/globals'
import { browser } from '@wdio/globals'

class LinkSelector {

    get homePage () {
        return $('a[aria-label="Target home"]');
    }
    get pageChecker1 () {
        return $('div[class="landing-page-hero--subheading h3"]');
    }
    get pageChecker2 () {
        return $('h1[class="hero--title"]');
    }
    get flashAlert () {
        return $('div[class="storycard--text"]');
    }


    get linkAboutTarget () {
        return $('div[aria-label="About Target"]');
    }
    get linkCareers () {
        return $('div[aria-label="Careers"]');
    }
    get linkNewsBlog () {
        return $('div[aria-label="News & Blog"]');
    }
    get linkTargetBrands () {
        return $('div[aria-label="Target Brands"]');
    }
    get linkBullseyeShop () {
        return $('div[aria-label="Bullseye Shop"]');
    }
    get windowBullseyeShop () {
        return $('h2[data-test="modal-drawer-heading"]');
    }
    get closeWindowBullseyeShop () {
        return $('button[aria-label="close"]');
    }
    get linkSustainGovern () {
        return $('div[aria-label="Sustainability & Governance"]');
    }
    get linkPressCenter () {
        return $('div[aria-label="Press Center"]');
    }
    get linkAdvertise () {
        return $('div[aria-label="Advertise with Us"]');
    }
    get pageAdvertise () {
        return $('img[class="custom-logo"]');
    }
    get linkInvestors () {
        return $('div[aria-label="Investors"]');
    }
    get linkAffiliatePartner () {
        return $('div[aria-label="Affiliates & Partners"]');
    }
    get pageAffiliatePartner () {
        return $('img[alt="Partner Logo"]');
    }
    get linkSuppliers () {
        return $('div[aria-label="Suppliers"]');
    }
    get linkTargetPlus () {
        return $('div[aria-label="TargetPlus"]');
    }
    get pageTargetPlus () {
        return $('a[aria-label="target plus home"]');
    }

    async selectAboutUs () {
        await this.homePage.click();

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkAboutTarget.click();
        await expect(this.pageChecker1).toExist();
        await expect(this.pageChecker1).toHaveText(
            expect.stringContaining('About'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkCareers.click();
        await expect(this.pageChecker1).toExist();
        await expect(this.pageChecker1).toHaveText(
            expect.stringContaining('Careers'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkNewsBlog.click();
        await expect(this.pageChecker1).toExist();
        await expect(this.pageChecker1).toHaveText(
            expect.stringContaining('News & Features'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkTargetBrands.click();
        await expect(this.pageChecker2).toExist();
        await expect(this.pageChecker2).toHaveText(
            expect.stringContaining('Target Brands'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkBullseyeShop.click();
        await expect(this.windowBullseyeShop).toExist();
        await this.closeWindowBullseyeShop.click();

        await this.linkSustainGovern.click();
        await expect(this.pageChecker1).toExist();
        await expect(this.pageChecker1).toHaveText(
            expect.stringContaining('Sustainability & Governance'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkPressCenter.click();
        await expect(this.pageChecker1).toExist();
        await expect(this.pageChecker1).toHaveText(
            expect.stringContaining('Press'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkAdvertise.click();
        await expect(this.pageAdvertise).toExist();
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkInvestors.click();
        await expect(this.pageChecker1).toExist();
        await expect(this.pageChecker1).toHaveText(
            expect.stringContaining('Investors'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkAffiliatePartner.click();
        await expect(this.pageAffiliatePartner).toExist();
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkSuppliers.click();
        await expect(this.pageChecker2).toExist();
        await expect(this.pageChecker2).toHaveText(
            expect.stringContaining('Suppliers'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkTargetPlus.click();
        await expect(this.pageTargetPlus).toExist();
        await browser.url(`https://www.target.com/`);

        await this.homePage.click();
    }

    get homeLink () {
        return $('a[href="https://www.target.com"]');
    }
    get pageChecker3 () {
        return $('h1[class="sc-fe064f5c-0 WObnm"]');
    }
    get pageChecker4 () {
        return $('h1[style="font-size: 28px;"]');
    }
    get pageChecker5 () {
        return $('h1[class="sc-fe064f5c-0 fJliSz"]');
    }

    get linkTargetHelp () {
        return $('div[aria-label="Target Help"]');
    }
    get pageTargetHelp () {
        return $('h2[class="custom-h2"]');
    }
    get linkReturns () {
        return $('div[aria-label="Returns"]');
    }
    get linkTrackOrders () {
        return $('div[aria-label="Track Orders"]');
    }
    get linkRecalls () {
        return $('div[aria-label="Recalls"]');
    }
    get linkContactUs () {
        return $('div[aria-label="Contact Us"]');
    }
    get pageContactUs () {
        return $('button[aria-labelledby="choose topic"]');
    }
    get linkFeedback () {
        return $('div[aria-label="Feedback"]');
    }
    get pageFeedback () {
        return $('div[id="kampyleFormModal"]');
    } 
    get linkAccessibility () {
        return $('div[aria-label="Accessibility"]');
    }
    get linkSecurity () {
        return $('div[aria-label="Security & Fraud"]');
    }
    get pageSecurity () {
        return $('b[class="navbar__title text--truncate"]');
    }
    get linkTeamServices () {
        return $('div[aria-label="Team Member Services"]');
    }

    async selectHelp () {
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkTargetHelp.click();
        await expect(this.pageTargetHelp).toExist();
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkReturns.click();
        await expect(this.pageChecker3).toExist();
        await expect(this.pageChecker3).toHaveText(
            expect.stringContaining('Target Return Policy'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkTrackOrders.click();
        await expect(this.pageChecker3).toExist();
        await expect(this.pageChecker3).toHaveText(
            expect.stringContaining('Order history'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkRecalls.click();
        await expect(this.pageChecker4).toExist();
        await expect(this.pageChecker4).toHaveText(
            expect.stringContaining('Product recalls'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkContactUs.click();
        await expect(this.pageContactUs).toExist();
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkFeedback.click();
        await expect(this.pageFeedback).toExist();
        await browser.url(`https://www.target.com/`); 

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkAccessibility.click();
        await expect(this.pageChecker4).toExist();
        await expect(this.pageChecker4).toHaveText(
            expect.stringContaining('Accessibility'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkSecurity.click();
        await expect(this.pageSecurity).toExist();
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkTeamServices.click();
        await expect(this.pageChecker5).toExist();
        await expect(this.pageChecker5).toHaveText(
            expect.stringContaining('Team Member Services'));
        await this.homePage.click();
    }


    get linkFindStore () {
        return $('div[aria-label="Find a Store"]');
    }
    get pageFindStore () {
        return $('div[class="styles_container__JeY3m"]');
    }
    get linkClinic () {
        return $('div[aria-label="Clinic"]');
    }
    get linkPharmacy () {
        return $('div[aria-label="Pharmacy"]');
    }
    get linkOptical () {
        return $('div[aria-label="Optical"]');
    }
    get linkStoreServices () {
        return $('div[aria-label="More In-Store Services"]');
    }

    async selectStores () {
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkFindStore.click();
        await expect(this.pageFindStore).toExist();
        await this.homePage.click();

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkClinic.click();
        await expect(this.pageChecker5).toExist();
        await expect(this.pageChecker5).toHaveText(
            expect.stringContaining('Clinic'));
        await this.homePage.click();

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkPharmacy.click();
        await expect(this.pageChecker5).toExist();
        await expect(this.pageChecker5).toHaveText(
            expect.stringContaining('Pharmacy'));
        await this.homePage.click();

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkOptical.click();
        await expect(this.pageChecker5).toExist();
        await expect(this.pageChecker5).toHaveText(
            expect.stringContaining('Target Optical'));
        await this.homePage.click();

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkStoreServices.click();
        await expect(this.pageChecker5).toExist();
        await expect(this.pageChecker5).toHaveText(
            expect.stringContaining('Services'));
        await this.homePage.click();
    }


    get linkTargetCircle () {
        return $('div[aria-label="Target Circle™"]');
    }
    get pageTargetCircle () {
        return $('svg[aria-label="Target Circle 360 TM"]');
    }
    get linkTargetCard () {
        return $('div[aria-label="Target Circle™ Card"]');
    }
    get pageTargetCard () {
        return $('h2[class="sc-fe064f5c-0 WObnm"]');
    }
    get linkTarget360 () {
        return $('div[aria-label="Target Circle 360™"]');
    }
    get linkTargetApp () {
        return $('div[aria-label="Target App"]');
    }
    get linkRegistry () {
        return $('div[aria-label="Registry"]');
    }
    get pageRegistry () {
        return $('h1[data-test="@site-registry/HomeBanner/heading"]');
    }
    get linkDelivery () {
        return $('div[aria-label="Same Day Delivery"]');
    }
    get pageDelivery () {
        return $('h1[class="sc-fe064f5c-0 ezQRcX h-margin-t-tiny"]');
    }
    get linkPickup () {
        return $('div[aria-label="Order Pickup"]');
    }
    get pagePickup () {
        return $('h1[class="sc-fe064f5c-0 ezQRcX h-display-inline-flex h-margin-t-tight"]');
    }
    get linkDriveUp () {
        return $('div[aria-label="Drive Up"]');
    }
    get pageDriveUp () {
        return $('span[style="line-height:90%;display:block;"]');
    }
    get linkShipping () {
        return $('div[aria-label="Free 2-Day Shipping"]');
    }
    get linkShipDelivery () {
        return $('div[aria-label="Shipping & Delivery"]');
    }
    get pageShipDelivery () {
        return $();
    }
    get linkMoreServices () {
        return $('div[aria-label="More Services"]');
    }

    async selectServices () {
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkTargetCircle.click();
        await expect(this.pageTargetCircle).toExist();
        await this.homePage.click();

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkTargetCard.click();
        await expect(this.pageTargetCard).toExist();
        await this.homePage.click();

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkTarget360.click();
        await expect(this.pageTargetCircle).toExist();
        await this.homePage.click();

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkTargetApp.click();
        await expect(this.pageChecker5).toExist();
        await expect(this.pageChecker5).toHaveText(
            expect.stringContaining('Target App'));
        await this.homePage.click();

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkRegistry.click();
        await expect(this.pageRegistry).toExist();
        await this.homePage.click();

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkDelivery.click();
        await expect(this.pageDelivery).toExist();
        await this.homePage.click();

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkPickup.click();
        await expect(this.pagePickup).toExist();
        await this.homePage.click();

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkDriveUp.click();
        await expect(this.pageDriveUp).toExist();
        await expect(this.pageDriveUp).toHaveText(
            expect.stringContaining('Fast, easy & always free'));
        await this.homePage.click();

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkShipping.click();
        await expect(this.pageChecker5).toExist();
        await expect(this.pageChecker5).toHaveText(
            expect.stringContaining('Free 2-Day Shipping'));
        await this.homePage.click();

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkShipDelivery.click();
        await expect(this.pageChecker5).toExist();
        await expect(this.pageChecker5).toHaveText(
            expect.stringContaining('Pickup & Delivery'));
        await this.homePage.click();

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.linkMoreServices.click();
        await expect(this.pageChecker5).toExist();
        await expect(this.pageChecker5).toHaveText(
            expect.stringContaining('Services'));
        await this.homePage.click();
    }
}

export default new LinkSelector();