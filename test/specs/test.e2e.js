import { expect } from '@wdio/globals'

import LoginPage from '../pageobjects/login.js'

//import DropdownSelector from '../pageobjects/dropdownSelector.js'

//import ItemSelector from '../pageobjects/addToCart.js'

import FavoriteSelector from '../pageobjects/addToFavorites.js'

describe('This is', () => {
    it('step one', async () => {
        await LoginPage.open()

        await LoginPage.login('maxwellhilmo@gmail.com' ,'19778264mH!')
        await expect(LoginPage.flashAlert).toBeExisting()
    })
})
/*
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
    
        await DropdownSelector.select11()
        await expect(DropdownSelector.flashAlert11).toBeExisting()
        await expect(DropdownSelector.flashAlert11).toHaveText(
            expect.stringContaining('Top Deals'))

        await DropdownSelector.select12()
        await expect(DropdownSelector.flashAlert12).toBeExisting()

        await DropdownSelector.select13()
        await expect(DropdownSelector.flashAlert13).toBeExisting()

        await DropdownSelector.select14()
        await expect(DropdownSelector.flashAlert14).toBeExisting()
        await expect(DropdownSelector.flashAlert14).toHaveText(
            expect.stringContaining('Clearance'))
    })
})

describe('This is', () => {
    it('step three', async () => {
        await ItemSelector.search('erasable pens')
        await expect(ItemSelector.flashAlert1).toBeExisting()
        await expect(ItemSelector.flashAlert1).toHaveText(
            expect.stringContaining('for “erasable pens”')
        )
        
        await ItemSelector.selectPen()
        await expect(ItemSelector.flashAlert2).toBeExisting()

        await ItemSelector.selectQty()
        await expect(ItemSelector.flashAlert3).toBeExisting()
        await expect(ItemSelector.flashAlert3).toHaveText(
            expect.stringContaining('Qty 14')
        )

        await ItemSelector.selectSaveLater()
        await expect(ItemSelector.flashAlert4).toBeExisting()

        await ItemSelector.selectSubstitute()
        await expect(ItemSelector.flashAlert5).toBeExisting()
        await expect(ItemSelector.flashAlert5).toHaveText(
            expect.stringContaining('8ct FriXion Clicker Erasable Gel Pens Fine Point 0.7mm Assorted Inks')
        )

        await ItemSelector.selectSameDayDelivery()
        await expect(ItemSelector.flashAlert6).toBeExisting()

        await ItemSelector.selectShipping()
        await expect(ItemSelector.flashAlert7).toBeExisting()
        await expect(ItemSelector.flashAlert7).toHaveText(
            expect.stringContaining('Shipping')
        )
        await expect(ItemSelector.flashAlert3).toBeExisting()
        await expect(ItemSelector.flashAlert3).toHaveText(
            expect.stringContaining('Qty 24')
        )

        await ItemSelector.selectSaveLater()
        await expect(ItemSelector.flashAlert4).toBeExisting()

        await ItemSelector.selectBtnX()
        await expect(ItemSelector.flashAlert8).toBeExisting()
        await expect(ItemSelector.flashAlert8).toHaveText(
            expect.stringContaining('Your cart is empty')
        )
    })
}) */

describe('This is', () => {
    it('step four', async () => {
        await FavoriteSelector.select('gaming headset')

        await expect(FavoriteSelector.flashAlert).toBeExisting()
    })
})