const { chromium } = require('playwright-extra');
const stealth = require('puppeteer-extra-plugin-stealth')();
chromium.use(stealth);
class BasePage {
  
   NeverMissThing_PopupWindow = '//div[@class="ltr-1qaawqi"] //div[@data-testid="newsletter-modal"]';
   PopupExitButton= '//button[@data-testid="btnClose"]';
    
    async setupPage()
    {
      const browser = await chromium.launch({headless: false});
      const context = await browser.newContext({
        storageState: 'user_auth.json', // Pass storageState here
      });
       this.page = await context.newPage();
      await this.page.setViewportSize({ width: 1400, height: 740 });
      return this;
    } 

    async GoToMainSite()
    {
      await this.page.goto("https://www.farfetch.com/sa");
      await this.page.waitForLoadState("load");
      return this;
     }

     async skipThePOPWindow()
     {
      await this.page.waitForTimeout(3000);
       if (await this.page.locator(this.NeverMissThing_PopupWindow).isVisible()) {this.page.locator(this.PopupExitButton).click();}
       return this;
      }
      //this method returns the setting of the page to any class used by [WishlistPage.js]
      async returnPage()
      {
        return this.page;
      }
      async closePage()
      {
        await this.page.close();
      }

 }
 module.exports = BasePage;
