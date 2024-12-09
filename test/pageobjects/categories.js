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
    get btnAllCategorie () {
        return $('a[class="sc-ddc722c0-0 sc-f1230b39-0 drTrmk jtKdbk h-display-flex"]');
    }


    get btnChristmas () {
        return $('a[data-url="/c/christmas/-/N-5xt30"]'); //1
    }
    get btnHanukka () {
        return $('a[data-url="/c/hanukkah/-/N-5xt1l"]');//2
    }
    get btnGiftIdeas () {
        return $('a[data-url="/c/gift-ideas/-/N-96d2i"]');//3
    }
    get btnGiftCards () {
        return $('a[data-url="/c/gift-cards/-/N-5xsxu"]');//4
    }
    get btnHolidayHosting () {
        return $('a[data-url="/c/holiday-hosting-entertainment-holiday-shop/-/N-5xt1f"]');//5
    }
    get btnElectronics () {
        return $('a[data-url="/c/electronics/-/N-5xtg6"]');//6
    }
    get btnVideoGames () {
        return $('a[data-url="/c/video-games/-/N-5xtg5"]');//7
    }
    get btnToys () {
        return $('a[data-url="/c/toys/-/N-5xtb0"]');//8
    }
    get btnClothingShoesAccessories () {
        return $('a[data-url="/c/clothing-shoes-accessories/-/N-rdihz"]');//9
    }
    get btnGrocery () {
        return $('a[data-url="/c/grocery/-/N-5xt1a"]');//10
    }
    get btnHome () {
        return $('a[data-url="/c/home/-/N-5xtvd"]');//11
    }
    get btnKitchenDining () {
        return $('a[data-url="/c/kitchen-dining/-/N-hz89j"]');//12
    }
    get btnFurniture () {
        return $('a[data-url="/c/furniture/-/N-5xtnr"]');//13
    }
    get btnSportsOutdoors () {
        return $('a[data-url="/c/sports-outdoors/-/N-5xt85"]');//14
    }
    get btnMoviesMusicBooks () {
        return $('a[data-url="/c/movies-music-books/-/N-5xsxe"]');//15
    }
    get btnBaby () {
        return $('a[data-url="/c/baby/-/N-5xtly"]');//16
    }
    get btnHousholdEssentials () {
        return $('a[data-url="/c/household-essentials/-/N-5xsz1"]');//17
    }
    get btnBeauty () {
        return $('a[data-url="/c/beauty/-/N-55r1x"]');//18
    }
    get btnUltaBeauty () {
        return $('a[data-url="/c/ulta-beauty-at-target/-/N-ueo8r"]');//19
    }
    get btnPeronalCare () {
        return $('a[data-url="/c/personal-care/-/N-5xtzq"]');//20
    }
    get btnHealth () {
        return $('a[data-url="/c/health/-/N-5xu1n"]');//21
    }
    get btnPets () {
        return $('a[data-url="/c/pets/-/N-5xt44"]');//22
    }
    get btnLuggage () {
        return $('a[data-url="/c/luggage/-/N-5xtz1"]');//23
    }
    get btnSchoolOfficeSupplies () {
        return $('a[data-url="/c/school-office-supplies/-/N-5xsxr"]');//24
    }
    get btnArtsCraftsSewing () {
        return $('a[data-url="/c/arts-crafts-sewing-home/-/N-5xt4g"]');//25
    }
    get btnPartySupplies () {
        return $('a[data-url="/c/party-supplies/-/N-5xt3c"]');//26
    }
    get btnOutdoorLivingGarden () {
        return $('a[data-url="/c/outdoor-living-garden/-/N-5xtq9"]');//27
    }
    get btnCharacterShop () {
        return $('a[data-url="/c/character-shop/-/N-5oux8"]');//28
    }
    get btnBullseyePlayground () {
        return $('a[data-url="/c/bullseye-s-playground/-/N-tr36l"]');//29
    }
    get btnClearance () {
        return $('a[data-url="/c/clearance/-/N-5q0ga"]');//30
    }
    
    async selectCategories () {
        await this.homePage.click();

        await this.btnCategories.click();
        await this.btnChristmas.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Christmas'));

        await this.btnCategories.click();
        await this.btnHanukka.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Hanukkah'));

        await this.btnCategories.click();
        await this.btnGiftIdeas.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Gift Ideas'));

        await this.btnCategories.click();
        await this.btnGiftCards.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Gift Cards'));

        await this.btnCategories.click();
        await this.btnHolidayHosting.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Holiday Hosting & Entertaining')); //Holiday Hosting & Entertainment?

        await this.btnCategories.click();
        await this.btnElectronics.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Electronics'));

        await this.btnCategories.click();
        await this.btnVideoGames.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Video Games'));

        await this.btnCategories.click();
        await this.btnToys.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Toys'));

        await this.btnCategories.click();
        await this.btnClothingShoesAccessories.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Clothing, Shoes & Accessories'));

        await this.btnCategories.click();
        await this.btnGrocery.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Grocery'));

        await this.btnCategories.click();
        await this.btnHome.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Home'));

        await this.btnCategories.click();
        await this.btnKitchenDining.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Kitchen & Dining'));

        await this.btnCategories.click();
        await this.btnFurniture.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Furniture'));

        await this.btnCategories.click();
        await this.btnSportsOutdoors.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Sports & Outdoors'));

        await this.btnCategories.click();
        await this.btnMoviesMusicBooks.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Movies, Music & Books'));

        await this.btnCategories.click();
        await this.btnBaby.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Baby'));

        await this.btnCategories.click();
        await this.btnHousholdEssentials.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Household Essentials'));

        await this.btnCategories.click();
        await this.btnBeauty.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Beauty'));

        await this.btnCategories.click();
        await this.btnUltaBeauty.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Ulta Beauty at Target'));

        await this.btnCategories.click();
        await this.btnPeronalCare.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Personal Care'));

        await this.btnCategories.click();
        await this.btnHealth.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Health'));

        await this.btnCategories.click();
        await this.btnPets.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Pets'));

        await this.btnCategories.click();
        await this.btnLuggage.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Luggage'));

        await this.btnCategories.click();
        await this.btnSchoolOfficeSupplies.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('School & Office Supplies'));

        await this.btnCategories.click();
        await this.btnArtsCraftsSewing.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Arts, Crafts & Sewing'));

        await this.btnCategories.click();
        await this.btnPartySupplies.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Party Supplies'));

        await this.btnCategories.click();
        await this.btnOutdoorLivingGarden.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Outdoor Living & Garden'));

        await this.btnCategories.click();
        await this.btnCharacterShop.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Character Shop'));

        /*await this.btnCategories.click();
        await this.btnBullseyePlayground.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Bullseye’s Playground'));*/ 
    //learn how to select text with a (') in it.

        await this.btnCategories.click();
        await this.btnClearance.click();
        await this.btnAllCategorie.click();
        await expect(this.pageChecker).toExist();
        await expect(this.pageChecker).toHaveText(
            expect.stringContaining('Clearance'));

        await this.homePage.click();
    }
}

export default new CategoriesSelector();