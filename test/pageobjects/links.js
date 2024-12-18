import { $ } from '@wdio/globals'
import {expect} from '@wdio/globals'
import { browser } from '@wdio/globals'

class LinkSelector {

    bottomLinks (name) { 
        return $(`div[aria-label="${name}"]`);
    }
    pageCheckerString (string) {
        return $('');
    }
    
    pageChecker1 (name) {
        return $(`div[class="landing-page-hero--subheading h3"][contains(text(), "${name}")]`);
    }
    get pageChecker2 () {
        return $('h1[class="hero--title"]');
    }
    get homePageChecker () {
        return $('div[class="storycard--text"]');
    }

    get windowBullseyeShop () {
        return $('h2[data-test="modal-drawer-heading"]');
    }
    get closeWindowBullseyeShop () {
        return $('button[aria-label="close"]'); 
    } // not needed
    get pageAdvertise () {
        return $('img[class="custom-logo"]'); 
    }
    get pageAffiliatePartner () {
        return $('img[alt="Partner Logo"]');
    }
    get pageTargetPlus () {
        return $('a[aria-label="target plus home"]'); 
    }

    linkNamesAboutUs = ["About Target", "Careers", "News & Blog", "Target Brands", "Bullseye Shop", "Sustainability & Governance", "Press Center", "Advertise with Us", 
    "Investors", "Affiliates & Partners", "Suppliers", "TargetPlus"];

    /*pageCheckerAboutUs = {this.pageChecker1('About'), this.pageChecker1, this.pageChecker1, this.pageChecker2, this.windowBullseyeShop, this.pageChecker1, this.pageChecker1, this.pageAdvertise, 
    this.pageChecker1, this.pageAffiliatePartner, this.pageChecker2, this.pageTargetPlus};*/
/*
    pageStringCheckerAboutUs = ["About", "Careers", "News & Features", "Target Brands", "Sustainability & Governance", "Press", "Investors", "Suppliers",] 
*/
    async loopLinks () {
        for (let i = 0; i < this.linkNamesAboutUs.length; i++) {
            await browser.execute(() => {
                window.scrollTo(0, document.body.scrollHeight);
            });
            await this.bottomLinks(this.linkNamesAboutUs[i]).click();
            //await expect(this.pageCheckerAboutUs[i]).toExist();

            await browser.url(`https://www.target.com/`);
            await expect(this.homePageChecker).toExist();
        }
    }

    async selectAboutUs () {
        //here
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('About Target').click();
        await expect(this.pageChecker1).toExist(); // 1111111111
        await expect(this.pageChecker1).toHaveText(
            expect.stringContaining('About'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks("Careers").click();
        await expect(this.pageChecker1).toExist(); // 1111111111
        await expect(this.pageChecker1).toHaveText(
            expect.stringContaining('Careers'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('News & Blog').click();
        await expect(this.pageChecker1).toExist(); // 1111111111
        await expect(this.pageChecker1).toHaveText(
            expect.stringContaining('News & Features'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Target Brands').click();
        await expect(this.pageChecker2).toExist(); // 2222222222222
        await expect(this.pageChecker2).toHaveText(
            expect.stringContaining('Target Brands'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Bullseye Shop').click();
        await expect(this.windowBullseyeShop).toExist(); // needs and "if" statement
        await this.closeWindowBullseyeShop.click();

        await this.bottomLinks('Sustainability & Governance').click();
        await expect(this.pageChecker1).toExist(); // 1111111111
        await expect(this.pageChecker1).toHaveText(
            expect.stringContaining('Sustainability & Governance'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Press Center').click();
        await expect(this.pageChecker1).toExist(); // 1111111111
        await expect(this.pageChecker1).toHaveText(
            expect.stringContaining('Press'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Advertise with Us').click();
        await expect(this.pageAdvertise).toExist(); //needs to be an "if" statement
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Investors').click();
        await expect(this.pageChecker1).toExist(); // 1111111111
        await expect(this.pageChecker1).toHaveText(
            expect.stringContaining('Investors'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Affiliates & Partners').click();
        await expect(this.pageAffiliatePartner).toExist(); //needs to be an "if" statement
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Suppliers').click();
        await expect(this.pageChecker2).toExist(); // 2222222222222
        await expect(this.pageChecker2).toHaveText(
            expect.stringContaining('Suppliers'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('TargetPlus').click();
        await expect(this.pageTargetPlus).toExist(); //needs to be an "if" statement
        await browser.url(`https://www.target.com/`);
        
        await expect(this.homePageChecker).toExist();
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

    get pageTargetHelp () {
        return $('h2[class="custom-h2"]');
    }
    get pageContactUs () {
        return $('button[aria-labelledby="choose topic"]');
    }
    get pageFeedback () {
        return $('div[id="kampyleFormModal"]');
    } 
    get pageSecurity () {
        return $('b[class="navbar__title text--truncate"]');
    }
/*
    linkNamesHelp = ["Target Help", "Returns", "Track Orders", "Recalls", "Contact Us", "Feedback", "Accessibility", "Security & Fraud", "Team Member Services"]

    pageStringCheckerHelp = ["Target Return Policy", "Order history", "Product recalls", "Accessibility", "Team Member Services"]
*/
    async selectHelp () {
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Target Help').click();
        await expect(this.pageTargetHelp).toExist(); //needs to be an "if" statement
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Returns').click();
        await expect(this.pageChecker3).toExist(); // 333333333
        await expect(this.pageChecker3).toHaveText(
            expect.stringContaining('Target Return Policy'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Track Orders').click();
        await expect(this.pageChecker3).toExist(); // 333333333
        await expect(this.pageChecker3).toHaveText(
            expect.stringContaining('Order history'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Recalls').click();
        await expect(this.pageChecker4).toExist(); // 44444444444
        await expect(this.pageChecker4).toHaveText(
            expect.stringContaining('Product recalls'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Contact Us').click();
        await expect(this.pageContactUs).toExist(); //needs to be an "if" statement
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Feedback').click();
        await expect(this.pageFeedback).toExist(); //needs to be an "if" statement
        await browser.url(`https://www.target.com/`); 

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Accessibility').click();
        await expect(this.pageChecker4).toExist(); // 444444444444
        await expect(this.pageChecker4).toHaveText(
            expect.stringContaining('Accessibility'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Security & Fraud').click();
        await expect(this.pageSecurity).toExist(); //needs to be an "if" statement
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Team Member Services').click();
        await expect(this.pageChecker5).toExist(); // 555555555555555555
        await expect(this.pageChecker5).toHaveText(
            expect.stringContaining('Team Member Services'));
        await browser.url(`https://www.target.com/`);

        await expect(this.homePageChecker).toExist();
    }


    get pageFindStore () {
        return $('div[class="styles_container__JeY3m"]');
    }
/*
    linkNamesStores = ["Find a Store", "Clinic", "Pharmacy", "Optical", "More In-Store Services"]

    pageStringCheckerStores = ["Clinic", "Pharmacy", "Target Optical", "Services"]
*/
    async selectStores () {
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Find a Store').click();
        await expect(this.pageFindStore).toExist(); //needs to be an "if" statement
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Clinic').click();
        await expect(this.pageChecker5).toExist(); // 555555555555555555
        await expect(this.pageChecker5).toHaveText(
            expect.stringContaining('Clinic'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Pharmacy').click();
        await expect(this.pageChecker5).toExist(); // 555555555555555555
        await expect(this.pageChecker5).toHaveText(
            expect.stringContaining('Pharmacy'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Optical').click();
        await expect(this.pageChecker5).toExist(); // 555555555555555555
        await expect(this.pageChecker5).toHaveText(
            expect.stringContaining('Target Optical'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('More In-Store Services').click();
        await expect(this.pageChecker5).toExist(); // 555555555555555555
        await expect(this.pageChecker5).toHaveText(
            expect.stringContaining('Services'));
        await browser.url(`https://www.target.com/`);

        await expect(this.homePageChecker).toExist();
    }


    get pageTargetCircle () {
        return $('svg[aria-label="Target Circle 360 TM"]');
    }
    get pageTargetCard () {
        return $('img[alt="circle card logo"]');
    }
    get pageRegistry () {
        return $('h1[data-test="@site-registry/HomeBanner/heading"]');
    }
    get pageDelivery () {
        return $('h1[class="sc-fe064f5c-0 ezQRcX h-margin-t-tiny"]');
    }
    get pagePickup () {
        return $('h1[class="sc-fe064f5c-0 ezQRcX h-display-inline-flex h-margin-t-tight"]');
    }
    get pageDriveUp () {
        return $('span[style="line-height:90%;display:block;"]');
    }
/*
    linkNamesServices = ["Target Circle™", "Target Circle™ Card", "Target Circle 360™", "Target App", "Registry", "Same Day Delivery", "Order Pickup", "Drive Up", 
"Free 2-Day Shipping", "Shipping & Delivery", "More Services"]

    pageStringCheckerServices = ["Target App", "Free 2-Day Shipping", "Pickup & Delivery", "Services"]
*/
    async selectServices () {
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Target Circle™').click();
        await expect(this.pageTargetCircle).toExist(); //needs to be an "if" statement
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Target Circle™ Card').click();
        await expect(this.pageTargetCard).toExist(); //needs to be an "if" statement
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Target Circle 360™').click();
        await expect(this.pageTargetCircle).toExist(); //needs to be an "if" statement
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Target App').click();
        await expect(this.pageChecker5).toExist(); // 555555555555555555
        await expect(this.pageChecker5).toHaveText(
            expect.stringContaining('Target App'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Registry').click();
        await expect(this.pageRegistry).toExist(); //needs to be an "if" statement
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Same Day Delivery').click();
        await expect(this.pageDelivery).toExist(); //needs to be an "if" statement
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Order Pickup').click();
        await expect(this.pagePickup).toExist(); //needs to be an "if" statement
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Drive Up').click();
        await expect(this.pageDriveUp).toExist(); //needs to be an "if" statement
            await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Free 2-Day Shipping').click();
        await expect(this.pageChecker5).toExist(); // 555555555555555555
        await expect(this.pageChecker5).toHaveText(
            expect.stringContaining('Free 2-Day Shipping'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('Shipping & Delivery').click();
        await expect(this.pageChecker5).toExist(); // 555555555555555555
        await expect(this.pageChecker5).toHaveText(
            expect.stringContaining('Pickup & Delivery'));
        await browser.url(`https://www.target.com/`);

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks('More Services').click();
        await expect(this.pageChecker5).toExist(); // 555555555555555555
        await expect(this.pageChecker5).toHaveText(
            expect.stringContaining('Services'));
        await browser.url(`https://www.target.com/`);

        await expect(this.homePageChecker).toExist();
    }
}

export default new LinkSelector();