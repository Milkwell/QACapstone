import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import {expect} from '@wdio/globals'
import { Key } from 'webdriverio'

export default class Website {
    async open () {
         await browser.url('https://www.target.com/'); 
         await browser.maximizeWindow();
    }
}
