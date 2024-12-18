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
    })
})

describe('This is', () => {
    it('step two', async () => {
        await DropdownSelector.selectPickupDelivery()
        await DropdownSelector.selectNewFeatured()
        await DropdownSelector.selectDeals()
        await CategoriesSelector.selectCategories()
    })
})

describe('This is', () => {
    it('step three', async () => {
        await LinkSelector.selectAboutUs()
        await LinkSelector.selectHelp()
        await LinkSelector.selectStores()
        await LinkSelector.selectServices()
    })
}) 
/*
describe('This is', () => {
    it('step four', async () => {
        await ItemSelector.search('erasable pens')
        await ItemSelector.selectPen()
        await ItemSelector.selectQty()
        await ItemSelector.selectSaveLater()
        await ItemSelector.selectSubstitute()
        await ItemSelector.selectSameDayDelivery()
        await ItemSelector.selectShipping()
        await ItemSelector.selectSaveLater()
        await ItemSelector.selectBtnX()
    })
}) 

describe('This is', () => {
    it('step five', async () => {
        await FavoriteSelector.selectFavorite('pens ballpoint', 'Hello, the quick brown fox jumped over the lazy dog')
        await FavoriteSelector.selectAddToCart()
        await FavoriteSelector.selectRemove('pens ballpoint')
    })
}) */