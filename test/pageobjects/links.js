import { $ } from '@wdio/globals';
import { browser } from '@wdio/globals';
import {expect} from '@wdio/globals';

class LinkSelector {
    
    bottomLinks (name) { 
        return $(`div[aria-label="${name}"]`);
    }
    get homePageChecker () {
        return $('div[class="storycard--text"]');
    }
    get windowBullseyeShop () {
        return $('h2[data-test="modal-drawer-heading"]');
    }
    get windowFeedback () {
        return $('div[id="kampyleFormModal"]');
    } 

    linkNamesAboutUs = ["About Target", "Careers", "News & Blog", "Target Brands", "Bullseye Shop", "Sustainability & Governance", "Press Center", "Advertise with Us", 
"Investors", "Affiliates & Partners", "Suppliers", "TargetPlus"];

    urlCheckerAboutUs = ['https://corporate.target.com/about', 'https://corporate.target.com/careers', 'https://corporate.target.com/news-features', 
    'https://corporate.target.com/about/products-services/target-brands', 'https://www.target.com/', 
    'https://corporate.target.com/sustainability-governance', 'https://corporate.target.com/press', 
    'https://roundel.com/?utm_source=Referral&utm_medium=Targetwebsite&utm_campaign=advertisewithus', 
    'https://corporate.target.com/investors', 'https://partners.target.com/', 'https://corporate.target.com/sustainability-governance/responsible-supply-chains/suppliers#?lnk=fnav_t_spc_1_16', 
'https://plus.target.com/'];

    linkNamesHelp = ["Target Help", "Returns", "Track Orders", "Recalls", "Contact Us", "Feedback", "Accessibility", "Security & Fraud", "Team Member Services"];

    urlCheckerHelp = ['https://help.target.com/help', 'https://www.target.com/returns', 'https://www.target.com/orders', 
    'https://help.target.com/help/productrecallpage?childcat=Product+recalls&parentcat=Product+Safety+%26+Recalls&searchQuery=search+help', 
    'https://contactus.target.com/ContactUs?Con=ContactUs&searchQuery=search+help', 
    'https://www.target.com/', 'https://help.target.com/help/subcategoryarticle?parentcat=Compliance&childcat=Accessibility&lnk=fnav_t_spc_1_21', 
    'https://security.target.com/', 'https://www.target.com/c/team-member-services/-/N-4srq9'];

linkNamesStores = ["Find a Store", "Clinic", "Pharmacy", "Optical", "More In-Store Services"];

    urlCheckerStores = ['https://www.target.com/store-locator/find-stores', 'https://www.target.com/c/clinic/-/N-54x94', 'https://www.target.com/c/pharmacy-health/-/N-54y52', 
'https://www.target.com/c/optical/-/N-4y8o9', 'https://www.target.com/c/services/-/N-oq1wk'];

    linkNamesServices = ["Target Circle™", "Target Circle™ Card", "Target Circle 360™", "Target App", "Registry", "Same Day Delivery", "Order Pickup", "Drive Up", 
    "Free 2-Day Shipping", "Shipping & Delivery", "More Services"];

    urlCheckerServices = ['https://www.target.com/l/target-circle/-/N-pzno9', 'https://www.target.com/circlecard', 'https://www.target.com/l/target-circle/-/N-pzno9#Circle360', 
    'https://www.target.com/c/target-app/-/N-4th2r', 'https://www.target.com/gift-registry', 'https://www.target.com/c/same-day-delivery/-/N-bswkz', 
    'https://www.target.com/c/order-pickup/-/N-ng0a0', 'https://www.target.com/c/drive-up/-/N-9d42z', 'https://www.target.com/c/free-2-day-shipping/-/N-49cz6', 
'https://www.target.com/c/shipping-order-services/-/N-551st', 'https://www.target.com/c/services/-/N-oq1wk'];

    async loopLinksAboutUs () {
        for (let i = 0; i < this.linkNamesAboutUs.length; i++) {
            if (i == 4) {
                await browser.execute(() => {
                        window.scrollTo(0, document.body.scrollHeight);
                    });
                    await this.bottomLinks(this.linkNamesAboutUs[i]).click();
                    await expect(this.windowBullseyeShop).toExist();
                    await browser.url(`https://www.target.com/`);
                    await expect(this.homePageChecker).toExist();
            }
            else {
            await browser.execute(() => {
                window.scrollTo(0, document.body.scrollHeight);
            });
            await this.bottomLinks(this.linkNamesAboutUs[i]).click();
            await expect(browser).toHaveUrl(this.urlCheckerAboutUs[i]);
            await browser.url(`https://www.target.com/`);
            await expect(this.homePageChecker).toExist();
        }
    }
} 

    async loopLinksHelp () {
        for (let i = 0; i < this.linkNamesHelp.length; i++) {
            if (i == 5) {
                await browser.execute(() => {
                        window.scrollTo(0, document.body.scrollHeight);
                    });
                    await this.bottomLinks(this.linkNamesHelp[i]).click();
                    await expect(this.windowFeedback).toExist();
                    await browser.url(`https://www.target.com/`);
                    await expect(this.homePageChecker).toExist();
            }
            else {
            await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
            });
            await this.bottomLinks(this.linkNamesHelp[i]).click();
            await expect(browser).toHaveUrl(this.urlCheckerHelp[i]);
            await browser.url(`https://www.target.com/`);
            await expect(this.homePageChecker).toExist();
        }
    }
} 

    async loopLinksStores () {
        for (let i = 0; i < this.linkNamesStores.length; i++) {
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks(this.linkNamesStores[i]).click();
        await expect(browser).toHaveUrl(this.urlCheckerStores[i]);
        await browser.url(`https://www.target.com/`);
        await expect(this.homePageChecker).toExist();
    }
}

    async loopLinksServices () {
    for (let i = 0; i < this.linkNamesServices.length; i++) {
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await this.bottomLinks(this.linkNamesServices[i]).click();
        await expect(browser).toHaveUrl(this.urlCheckerServices[i]);
        await browser.url(`https://www.target.com/`);
        await expect(this.homePageChecker).toExist();
    }
}
}

export default new LinkSelector();