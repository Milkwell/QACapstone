import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.js'
import LoginInfo from '../pageobjects/loginCredentials.js'
import DropdownSelector from '../pageobjects/dropdownSelector.js'
import CategoriesSelector from '../pageobjects/categories.js'
import LinkSelector from '../pageobjects/links.js'
import ItemSelector from '../pageobjects/addToCart.js'
import FavoriteSelector from '../pageobjects/addToFavorites.js'

describe('This is', () => {
    it('step one', async () => {
        await LoginPage.open()

        await LoginPage.login(LoginInfo.email ,LoginInfo.password)
        await expect(LoginPage.flashAlert).toBeExisting()
    })
})
/*
describe('This is', () => {
    it('step two', async () => {
        await DropdownSelector.selectPickupDelivery()
        await expect(DropdownSelector.flashAlert).toBeExisting()

        await DropdownSelector.selectNewFeatured()
        await expect(DropdownSelector.flashAlert).toBeExisting()

        await DropdownSelector.selectDeals()
        await expect(DropdownSelector.flashAlert).toBeExisting()

        await CategoriesSelector.selectCategories()
        await expect(CategoriesSelector.flashAlert).toBeExisting()
    })
})
*/
describe('This is', () => {
    it('step three', async () => {
        await LinkSelector.selectAboutUs()
        await expect(LinkSelector.flashAlert).toBeExisting()
        await expect(LinkSelector.flashAlert).toHaveText(
            expect.stringContaining('Save on, saver'))

        await LinkSelector.selectHelp()
        await expect(LinkSelector.flashAlert).toBeExisting()
        await expect(LinkSelector.flashAlert).toHaveText(
            expect.stringContaining('Save on, saver'))

        await LinkSelector.selectStores()
        await expect(LinkSelector.flashAlert).toBeExisting()
        await expect(LinkSelector.flashAlert).toHaveText(
            expect.stringContaining('Save on, saver'))

        await LinkSelector.selectServices()
        await expect(LinkSelector.flashAlert).toBeExisting()
        await expect(LinkSelector.flashAlert).toHaveText(
            expect.stringContaining('Save on, saver'))
    })
}) 
/*
describe('This is', () => {
    it('step four', async () => {
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
}) 

describe('This is', () => {
    it('step five', async () => {
        await FavoriteSelector.selectFavorite('hello kitty headset', 'Hello, the quick brown fox jumped over the lazy dog')
        await expect(FavoriteSelector.flashAlert1).toBeExisting()

        await FavoriteSelector.selectAddToCart()
        await expect(FavoriteSelector.flashAlert2).toBeExisting()

        await FavoriteSelector.selectRemove('hello kitty headset')
        await expect(FavoriteSelector.flashAlert3).toBeExisting()
    })
})*/