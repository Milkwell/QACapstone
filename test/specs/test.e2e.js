import { expect } from '@wdio/globals'

import LoginPage from '../pageobjects/login.js'

import DropdownSelector from '../pageobjects/dropdownSelector.js'

//import SearchPens from '../pageobjects/searchBar.js'
//import ItemSelector from '../pageobjects/addToCart.js'

//mport FavoriteSelector from '../pageobjects/addToFavorites.js'

describe('This is', () => {
    it('step one', async () => {
        await LoginPage.open()

        await LoginPage.login('maxwellhilmo@gmail.com' ,'19778264mH!')
        await expect(LoginPage.flashAlert).toBeExisting()
    })
})

describe('This is', () => {
    it('step two', async () => {
        await DropdownSelector.select1()
        await expect(DropdownSelector.flashAlert1).toBeExisting()

        await DropdownSelector.select2()
        await expect(DropdownSelector.flashAlert2).toBeExisting()

        await DropdownSelector.select3()
        await expect(DropdownSelector.flashAlert3).toBeExisting()
        await expect(DropdownSelector.flashAlert3).toHaveText(
            expect.stringContaining('Target New Arrivals'))

        await DropdownSelector.select4()
        await expect(DropdownSelector.flashAlert4).toBeExisting()

        await DropdownSelector.select5()
        await expect(DropdownSelector.flashAlert5).toBeExisting()

        await DropdownSelector.select6()
        await expect(DropdownSelector.flashAlert6).toBeExisting()

        await DropdownSelector.select7()
        await expect(DropdownSelector.flashAlert7).toBeExisting()

        await DropdownSelector.select8()
        await expect(DropdownSelector.flashAlert8).toBeExisting()
        await expect(DropdownSelector.flashAlert8).toHaveText(
            expect.stringContaining('Women-Owned Brands at Target'))

        await DropdownSelector.select9()
        await expect(DropdownSelector.flashAlert9).toBeExisting()
        await expect(DropdownSelector.flashAlert9).toHaveText(
            expect.stringContaining('Asian-Owned Brands at Target'))

        await DropdownSelector.select10()
        await expect(DropdownSelector.flashAlert10).toBeExisting()
        await expect(DropdownSelector.flashAlert10).toHaveText(
            expect.stringContaining('LGBTQIA+ Shop'))
    })
})
/*
describe('This is', () => {
    it('step three', async () => {
        await SearchPens.select('pens')

        await expect(SearchPens.flashAlert).toBeExisting()
    })
})

describe('This is', () => {
    it('step four', async () => {
        await ItemSelector.select()

        await expect(ItemSelector.flashAlert).toBeExisting()
    })
}) 

describe('This is', () => {
    it('step five', async () => {
        await FavoriteSelector.select('gaming headset')

        await expect(FavoriteSelector.flashAlert).toBeExisting()
    })
}) */