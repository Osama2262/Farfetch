const { chromium } = require('playwright-extra');
const stealth = require('puppeteer-extra-plugin-stealth')();
chromium.use(stealth);
class LoginPage  {

  //locators
  signInButton = '[title="Sign in"]';
  emailInput = "//input[@type='email' and @data-testid='slice-login-email-input']";
  passwordInput = "//input[@name='password']";
  submitButton = "[data-testid='slice-login-sign-in-button']";


  //use it only to visit loginPage
  async goToLoginPage() {
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext({
      bypassCSP: true, // Bypass Content Security Policy
    });
    this.page = await context.newPage();
    await this.page.goto("https://www.farfetch.com/sa");
    await this.page.waitForLoadState("load");
    return this;
  }


  //login function
  async login(email, password) {

    await this.page.locator(this.signInButton).click();
    await this.page.locator(this.emailInput).fill(email);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.submitButton).click();
    await this.page.waitForTimeout(4000);
    return this;
  }

  //tearDown 
  async teardown_loginPage() {
    await this.page.close();
  }
}

module.exports = LoginPage;
