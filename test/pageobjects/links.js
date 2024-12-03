import { $ } from '@wdio/globals'

class LinkSelector {

    get homePage () {
        return $('a[aria-label="Target home"]');
    }

    get returnToShop () {
        return $('a[class="global-header--shop cta"]');
    }
    get pageChecker () {
        return $('div[class="landing-page-hero--subheading h3"]');
    }
    // need to add another page checker for the "hero title" selector. Make pageCheker 1 and 2, fix the old labels. Work on the other links a little bit later.

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
    get pageTargetBrands () {
        return $('h1[class="hero--title"]');
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

    /*get linkAdvertise () {
        return $('div[aria-label="Advertise with Us"]');
    }
    get pageAdvertise () {
        return $();
    }*/

    get linkInvestors () {
        return $('div[aria-label="Investors"]');
    }

    /*get linkAffiliatePartner () {
        return $('div[aria-label="Affiliates & Partners"]');
    }
    get pageAffiliatePartner () {
        return $();
    }*/

    get linkSuppliers () {
        return $('div[aria-label="Suppliers"]');
    }
    get pageSuppliers () {
        return $('h1[class="hero--title"]');
    }

    get linkTargetPlus () {
        return $('div[aria-label="TargetPlus"]');
    }
    get pageTargetPlus () {
        return $();
    }

    async selectAboutUs () {
        await this.homePage.click();

        await this.linkAboutTarget.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('About'));
        await this.returnToShop.click();

        await this.linkCareers.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Careers'));
        await this.returnToShop.click();

        await this.link.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('News & Features'));
        await this.returnToShop.click();

        await this.linkTargetBrands.click();
        await expect(this.pageTargetBrands).toExist();
        await this.returnToShop.click();

        await this.linkBullseyeShop.click();
        await expect(this.windowBullseyeShop).toExist();
        await this.closeWindowBullseyeShop.click();

        await this.linkSustainGovern.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Sustainability & Governance'));
        await this.returnToShop.click();

        await this.linkPressCenter.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Press'));
        await this.returnToShop.click();

        //await this.link.click();
        //await expect(this.page).toExist();

        await this.linkInvestors.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Investors'));
        await this.returnToShop.click();

        //await this.link.click();
        //await expect(this.page).toExist();

        await this.link.click(); //last working point was here !!!
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.homePage.click();
    }
    get flashAlert () {
        return $('div[class="storycard--text"]');
    }


    get linkTargetHelp () {
        return $('div[]');
    }
    get pageTargetHelp () {
        return $();
    }

    get linkReturns () {
        return $('div[]');
    }
    get pageReturns () {
        return $();
    }

    get linkTrackOrders () {
        return $('div[]');
    }
    get pageTrackOrders () {
        return $();
    }

    get linkRecalls () {
        return $('div[]');
    }
    get pageRecalls () {
        return $();
    }

    get linkContactUs () {
        return $('div[]');
    }
    get pageContactUs () {
        return $();
    }

    get linkFeedback () {
        return $('div[]');
    }
    get pageFeedback () {
        return $();
    }

    get linkAccessibility () {
        return $('div[]');
    }
    get pageAccessibility () {
        return $();
    }

    get linkSecurity () {
        return $('div[]');
    }
    get pageSecurity () {
        return $();
    }

    get linkTeamServices () {
        return $('div[]');
    }
    get pageTeamServices () {
        return $();
    }

    async selectHelp () {
        await this.homePage.click();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.homePage.click();
    }


    get linkFindStore () {
        return $('div[]');
    }
    get pageFindStore () {
        return $();
    }

    get linkClinic () {
        return $('div[]');
    }
    get pageClinic () {
        return $();
    }

    get linkPharmacy () {
        return $('div[]');
    }
    get pagePharmacy () {
        return $();
    }

    get linkOptical () {
        return $('div[]');
    }
    get pageOptical () {
        return $();
    }

    get linkStoreServices () {
        return $('div[]');
    }
    get pageStoreServices () {
        return $();
    }

    async selectStores () {
        await this.homePage.click();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.homePage.click();
    }


    get linkTargetCircle () {
        return $('div[]');
    }
    get pageTargetCircle () {
        return $();
    }

    get linkTargetCard () {
        return $('div[]');
    }
    get pageTargetCard () {
        return $();
    }

    get linkTarget360 () {
        return $('div[]');
    }
    get pageTarget360 () {
        return $();
    }

    get linkTargetApp () {
        return $('div[]');
    }
    get pageTargetApp () {
        return $();
    }

    get linkRegistry () {
        return $('div[]');
    }
    get pageRegistry () {
        return $();
    }

    get linkDelivery () {
        return $('div[]');
    }
    get pageDelivery () {
        return $();
    }

    get linkPickup () {
        return $('div[]');
    }
    get pagePickup () {
        return $();
    }

    get linkDriveUp () {
        return $('div[]');
    }
    get pageDriveUp () {
        return $();
    }

    get linkShipping () {
        return $('div[]');
    }
    get pageShipping () {
        return $();
    }

    get linkShipDelivery () {
        return $('div[]');
    }
    get pageShipDelivery () {
        return $();
    }

    get linkMoreServices () {
        return $('div[]');
    }
    get pageMoreServices () {
        return $();
    }

    async selectServices () {
        await this.homePage.click();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.link.click();
        await expect(this.page).toExist();

        await this.homePage.click();
    }
}

export default new LinkSelector();