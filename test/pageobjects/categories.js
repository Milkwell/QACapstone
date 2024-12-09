import { $ } from '@wdio/globals'
import {expect} from '@wdio/globals'

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
    } // done


    get btnGiftIdeas () {
        return $('a[data-url="/c/gift-ideas/-/N-96d2i"]');
    }
    get btnGiftForHer () {
        return $('a[data-url="/c/gift-ideas-for-women/-/N-22vn7"]');
    }
    get btnGiftForHim () {
        return $('a[data-url="/c/gift-ideas-for-men/-/N-x738m"]');
    }
    get btnGiftForKids () {
        return $('a[data-url="/c/gift-ideas-for-kids/-/N-t13mx"]');
    }
    get btnShowMoreGiftsForKids () {
        return $('div[data-test="@web/CategoryMenu/FeaturedCategories/ToggleButton"]');
    }
    get btnToysForKids () {
        return $('a[data-url="/c/kids-toys-games-craft-gift-ideas/-/N-sgzh8"]');
    }
    get btnOutdoorForKids () {
        return $('a[data-url="/c/kids-outdoor-play-gifts/-/N-ldskx"]');
    }
    get btnTechForKids () {
        return $('a[data-url="/c/kids-video-games-tech-gifts/-/N-rwok7"]');
    }
    get btnHomeGiftForKids () {
        return $('a[data-url="/c/kids-home-gift-ideas/-/N-9vaee"]');
    }
    get btnClothingForKids () {
        return $('a[data-url="/c/kids-clothing-accessory-gifts/-/N-z0zg8"]');
    }
    get btnEntertainmentForKids () {
        return $('a[data-url="/c/kids-entertainment-gift-ideas/-/N-rk1uu"]');
    }
    get btnAllGiftIdeasForKids () {
        return $('a[class="sc-ddc722c0-0 sc-f1230b39-0 drTrmk jtKdbk h-display-flex"]');
    }
    get btnGiftForTeens () {
        return $('a[data-url="/c/gift-ideas-for-teens/-/N-4d3bq"]');
    }
    get btnAllGiftIdeas () {
        return $('a[class="sc-ddc722c0-0 sc-f1230b39-0 drTrmk jtKdbk h-display-flex"]');
    }
    
    async selectGiftIdeas () {
        await this.btnCategories.click();
        await this.btnGiftIdeas.click();
        await this.btnGiftForHer.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Gift Ideas for Her'));

        await this.btnCategories.click();
        await this.btnGiftIdeas.click();
        await this.btnGiftForHim.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Gift Ideas for Him'));

        await this.btnCategories.click();
        await this.btnGiftIdeas.click();
        await this.btnGiftForKids.click();
        await this.btnToysForKids.click();
        await expect(this.pageChecker).toExist();

        await this.btnCategories.click();
        await this.btnGiftIdeas.click();
        await this.btnGiftForKids.click();
        await this.btnOutdoorForKids.click();
        await expect(this.pageChecker).toExist();
        await this.homePage.click();

        await this.btnCategories.click();
        await this.btnGiftIdeas.click();
        await this.btnGiftForKids.click();
        await this.btnTechForKids.click();
        await expect(this.pageChecker).toExist();
        await this.homePage.click();

        await this.btnCategories.click();
        await this.btnGiftIdeas.click();
        await this.btnGiftForKids.click();
        await this.btnHomeGiftForKids.click();
        await expect(this.pageChecker).toExist();
        await this.homePage.click();

        await this.btnCategories.click();
        await this.btnGiftIdeas.click();
        await this.btnGiftForKids.click();
        await this.btnShowMoreGiftsForKids.click();
        await this.btnClothingForKids.click();
        await expect(this.pageChecker).toExist();
        await this.homePage.click();

        await this.btnCategories.click();
        await this.btnGiftIdeas.click();
        await this.btnGiftForKids.click();
        await this.btnShowMoreGiftsForKids.click();
        await this.btnEntertainmentForKids.click();
        await expect(this.pageChecker).toExist();
        await this.homePage.click();

        await this.btnCategories.click();
        await this.btnGiftIdeas.click();
        await this.btnGiftForKids.click();
        await this.btnAllGiftIdeasForKids.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Gift Ideas for Kids'));

        await this.btnCategories.click();
        await this.btnGiftIdeas.click();
        await this.btnGiftForTeens.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Gift Ideas for Teens'));

        await this.btnCategories.click();
        await this.btnGiftIdeas.click();
        await this.btnAllGiftIdeas.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Gift Ideas'));

        await this.homePage.click();
    } //done


    get btnGiftCards () {
        return $('a[data-url="/c/gift-cards/-/N-5xsxu"]');
    }
    get btnCardHolders () {
        return $('a[data-url="/c/gift-card-holders/-/N-xwmo7"]');
    }
    get btnCreditcardGifts () {
        return $('a[data-url="/c/visa-mastercard-and-american-express-gift-cards/-/N-x7n3r"]');
    }
    get btnCorporateCards () {
        return $('a[data-url="/c/corporate-bulk-gift-cards/-/N-4sro1"]');
    }
    get btnAllGiftCards () {
        return $('a[class="sc-ddc722c0-0 sc-f1230b39-0 drTrmk jtKdbk h-display-flex"]');
    }
    get btnTargetGiftCards () {
        return $('a[data-url="/c/target-giftcards-gift-cards/-/N-5xsxt"]');
    }
    get btnSpecialGiftCards () {
        return $('a[data-url="/c/specialty-gift-cards/-/N-5xsxs"]');
    }
    get btnVideoGameCards () {
        return $('a[data-url="/c/video-game-gift-cards-games/-/N-5xtfh"]');
    }
    async selectGiftCards () {
        await this.btnCategories.click();
        await this.btnGiftCards.click();
        await this.btnCardHolders.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Gift Card Holders'));
        
        await this.btnCategories.click();
        await this.btnGiftCards.click();
        await this.btnCreditcardGifts.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Visa, Mastercard, and American Express Gift Cards'));

        await this.btnCategories.click();
        await this.btnGiftCards.click();
        await this.btnCorporateCards.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Corporate & Bulk Gift Cards'));

        await this.btnCategories.click();
        await this.btnGiftCards.click();
        await this.btnAllGiftCards.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Gift Cards'));
        await this.homePage.click();

        await this.btnCategories.click();
        await this.btnGiftCards.click();
        await this.btnTargetGiftCards.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Target GiftCards'));
        await this.homePage.click();

        await this.btnCategories.click();
        await this.btnGiftCards.click();
        await this.btnSpecialGiftCards.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Specialty Gift Cards'));

        await this.btnCategories.click();
        await this.btnGiftCards.click();
        await this.btnVideoGameCards.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Video Game Gift Cards'));

        await this.homePage.click();
    }


    get btnHolidayHosting () {
        return $('a[data-url="/c/holiday-hosting-entertainment-holiday-shop/-/N-5xt1f"]');
    }
    async selectHolidayHosting () {
        await this.btnCategories.click();
        await this.btnHolidayHosting.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Holiday Hosting & Entertainment'));

        await this.homePage.click();
    } // done


    get btnElectronics () {
        return $('a[]');
    }
    async selectElectronics () {
        await this.btnCategories.click();
        await this.btnElectronics.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnVideoGames () {
        return $('a[]');
    }
    async selectVideoGames () {
        await this.btnCategories.click();
        await this.btnVideoGames.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnToys () {
        return $('a[]');
    }
    async selectToys () {
        await this.btnCategories.click();
        await this.btnToys.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnClothing () {
        return $('a[]');
    }
    async selectClothing () {
        await this.btnCategories.click();
        await this.btnClothing.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnGrocery () {
        return $('a[]');
    }
    async selectGrocery () {
        await this.btnCategories.click();
        await this.btnGrocery.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnHome () {
        return $('a[]');
    }
    async selectHome () {
        await this.btnCategories.click();
        await this.btnHome.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnKitchen () {
        return $('a[]');
    }
    async selectKitchen () {
        await this.btnCategories.click();
        await this.btnKitchen.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnFurniture () {
        return $('a[]');
    }
    async selectFurniture () {
        await this.btnCategories.click();
        await this.btnFurniture.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnSports () {
        return $('a[]');
    }
    async selectSports () {
        await this.btnCategories.click();
        await this.btnSports.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnMovies () {
        return $('a[]');
    }
    async selectMovies () {
        await this.btnCategories.click();
        await this.btnMovies.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnBaby () {
        return $('a[]');
    }
    async selectBaby () {
        await this.btnCategories.click();
        await this.btnBaby.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnHousholdEssentials () {
        return $('a[]');
    }
    async selectHouseholdEssentials () {
        await this.btnCategories.click();
        await this.btnHousholdEssentials.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnBeauty () {
        return $('a[]');
    }
    async selectBeauty () {
        await this.btnCategories.click();
        await this.btnBeauty.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnUltaBeauty () {
        return $('a[]');
    }
    async selectUltaBeauty () {
        await this.btnCategories.click();
        await this.btnUltaBeauty.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnPeronalCare () {
        return $('a[]');
    }
    async selectPersonalCare () {
        await this.btnCategories.click();
        await this.btnPeronalCare.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnHealth () {
        return $('a[]');
    }
    async selectHealth () {
        await this.btnCategories.click();
        await this.btnHealth.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnPets () {
        return $('a[]');
    }
    async selectPets () {
        await this.btnCategories.click();
        await this.btnPets.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnLuggage () {
        return $('a[]');
    }
    async selectLuggage () {
        await this.btnCategories.click();
        await this.btnLuggage.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnSchool () {
        return $('a[]');
    }
    async selectSchool () {
        await this.btnCategories.click();
        await this.btnSchool.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnArts () {
        return $('a[]');
    }
    async selectArts () {
        await this.btnCategories.click();
        await this.btnArts.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnParty () {
        return $('a[]');
    }
    async selectParty () {
        await this.btnCategories.click();
        await this.btnParty.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnOutdoorLiving () {
        return $('a[]');
    }
    async selectOutdoorLiving () {
        await this.btnCategories.click();
        await this.btnOutdoorLiving.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnCharacter () {
        return $('a[]');
    }
    async selectCharacter () {
        await this.btnCategories.click();
        await this.btnCharacter.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnBullseye () {
        return $('a[]');
    }
    async selectBullseye () {
        await this.btnCategories.click();
        await this.btnBullseye.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }


    get btnClearance () {
        return $('a[]');
    }
    async selectClearance () {
        await this.btnCategories.click();
        await this.btnClearance.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining(''));

        await this.homePage.click();
    }
}

export default new CategoriesSelector();