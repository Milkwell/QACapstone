import { $ } from '@wdio/globals'

class CategoriesSelector {

    get pageChecker () {
        return $('h1[class="sc-fe064f5c-0 fJliSz"]');
    }
    get flashAlert () {
        return $('div[class="storycard--text"]');
    }
    get homePage () {
        return $('a[aria-label="Target home"]');
    }
    
    get btnCategories () {
        return $('a[aria-label="Categories"]');
    }
    get btnChristmas () {
        return $('a[data-url="/c/christmas/-/N-5xt30"]');
    }
    get chrisDeals () {
        return $('a[data-url="/c/christmas-deals/-/N-4rr05"]');
    }
    get chrisToys () {
        return $('a[data-url="/c/christmas-toys-games/-/N-appnx"]');
    }
    get allChris () {
        return $('a[class="sc-ddc722c0-0 sc-f1230b39-0 drTrmk jtKdbk h-display-flex"]');
    }
    get allChrisChecker () {
        return $('h2[class="sc-fe064f5c-0 sc-710d0ece-5 fJliSz jvuvQS"]');
    }
    get chrisDecor () {
        return $('a[data-url="/c/christmas-decorations/-/N-bshla"]');
    }
    get chrisOrnamnets () {
        return $('a[data-url="/c/christmas-ornaments-tree-decorations/-/N-5xt2u"]');
    }
    get chrisTrees () {
        return $('a[data-url="/c/christmas-trees/-/N-5xt2z"]');
    }
    get chrisLights () {
        return $('a[data-url="/c/christmas-lights/-/N-5xt2w"]');
    }
    get chrisStockings () {
        return $('a[data-url="/c/christmas-stockings-holders/-/N-5xt2q"]');
    }
    get chrisOutfits () {
        return $('a[data-url="/c/christmas-clothing-and-accessories/-/N-cfwzy"]');
    }
    get adventCalenders () {
        return $('a[data-url="/c/advent-calendars-indoor-christmas-decorations/-/N-2wx5d"]');
    }
    get chrisCrafts () {
        return $('a[data-url="/c/christmas-crafts/-/N-53hs2"]');
    }
    get chrisDining () {
        return $('a[data-url="/c/christmas-dining-entertaining/-/N-56i2u"]');
    }
    get chrisParty () {
        return $('a[data-url="/c/christmas-party-supplies/-/N-5xt2s"]');
    }
    get chrisCandy () {
        return $('a[data-url="/c/christmas-candy-treats-holiday-shop/-/N-iywcd"]');
    }
    get stockingStuffers () {
        return $('a[data-url="/c/stocking-stuffers/-/N-av00p"]');
    }
    get allCandy () {
        return $('a[class="sc-ddc722c0-0 sc-f1230b39-0 drTrmk jtKdbk h-display-flex"]');
    }
    get chrisSuppies () {
        return $('a[data-url="/c/christmas-wrapping-paper-supplies/-/N-4y5jk"]');
    }
    get chrisCards () {
        return $('a[data-url="/c/christmas-cards-stationery-invitations/-/N-5xt2r"]');
    }

    async selectChristmas () {
        await this.homePage.click();

        await this.btnCategories.click();
        await this.btnChristmas.click();
        await this.chrisDeals.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Christmas Deals'));

        await this.btnCategories.click();
        await this.btnChristmas.click();
        await this.chrisToys.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Christmas Toys & Games'));

        await this.btnCategories.click();
        await this.btnChristmas.click();
        await this.allChris.click();
        await expect(this.allChrisChecker).toExist();
        await expect(this.allChrisChecker).toHaveText(
            expect.stringContaining('Shop by category'));

        await this.btnCategories.click();
        await this.btnChristmas.click();
        await this.chrisDecor.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Christmas Decorations'));

        await this.btnCategories.click();
        await this.btnChristmas.click();
        await this.chrisOrnamnets.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Christmas Ornaments'));

        await this.btnCategories.click();
        await this.btnChristmas.click();
        await this.chrisTrees.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Christmas Trees'));

        await this.btnCategories.click();
        await this.btnChristmas.click();
        await this.chrisLights.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Christmas Lights'));

        await this.btnCategories.click();
        await this.btnChristmas.click();
        await this.chrisStockings.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Christmas Stockings & Holders'));

        await this.btnCategories.click();
        await this.btnChristmas.click();
        await this.chrisOutfits.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Christmas Outfits'));

        await this.btnCategories.click();
        await this.btnChristmas.click();
        await this.adventCalenders.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Advent Calendars'));

        await this.btnCategories.click();
        await this.btnChristmas.click();
        await this.chrisCrafts.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Christmas Crafts'));

        await this.btnCategories.click();
        await this.btnChristmas.click();
        await this.chrisDining.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Christmas Dining & Entertaining'));

        await this.btnCategories.click();
        await this.btnChristmas.click();
        await this.chrisParty.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Christmas Party Supplies'));

        await this.btnCategories.click();
        await this.btnChristmas.click();
        await this.chrisCandy.click();
        await this.stockingStuffers.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Stocking Stuffers'));

        await this.btnCategories.click();
        await this.btnChristmas.click();
        await this.chrisCandy.click();
        await this.allCandy.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Christmas Candy & Treats'));

        await this.btnCategories.click();
        await this.btnChristmas.click();
        await this.chrisSuppies.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Christmas Wrapping Paper & Supplies'));

        await this.btnCategories.click();
        await this.btnChristmas.click();
        await this.chrisCards.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Christmas Cards, Stationery & Invitations'));

        await this.homePage.click();
    }


    get btnHanukka () {
        return $('a[data-url="/c/hanukkah/-/N-5xt1l"]');
    }
    async selectHanukka () {
        await this.btnCategories.click();
        await this.btnHanukka.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Hanukkah'));

        await this.homePage.click();
    }
}

export default new CategoriesSelector();