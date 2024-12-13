import { browser } from '@wdio/globals'

export default class Website {
    async open () {
         await browser.url('https://www.target.com/'); 
         await browser.maximizeWindow();
    }
}
