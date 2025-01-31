const BasePage = require("../base/BasePage");
const {expect} = require("@playwright/test");
const data_faker = require("../utils/data_Faker");
class ProductsListPage extends BasePage
{
    
    //locators
    manWear_button = "//a[@role='radio' and contains(text(),'Menswear')]";
    Shoes_tab =  "//a[@data-nav='Shoes']";
    randomProduct = `//li[@data-testid='productCard'][${data_faker.randomNum()}]`;
    selectSize_dropdownList = "[role='combobox'] ";
    selectValue ="[role='option']";
    Add_to_cart_button="//button[@aria-label='Add To Bag']";
    TheBagCounter="//a[@title='Bag'] //span[@data-testid='counter']";
    newValue;
    G_counter;
    
   async gotToManWear()
   {
    await this.page.locator(this.manWear_button).click();
    return this;
   }


   async goToShoes_category()
   {
    await this.page.locator(this.Shoes_tab).click();
            return this;

   }


   async selectTheRandomProduct()
   {
    await this.page.locator(this.randomProduct).click();
    return this;

   }


    async selectSize()
   {
    await this.page.locator(this.selectSize_dropdownList).click();
    await this.page.locator(this.selectValue).first().click();
    return this;

   }

   async CheckCounterBefore()
   {
     const counter = await this.page.locator(this.TheBagCounter);
     const temp = await counter.isVisible();
    if(temp)
    {
      const text = await counter.textContent();
       this.G_counter = Number(text);
       return this;
    }
   }

   async clickOnAddToCart_button()
   {
    await this.page.locator(this.Add_to_cart_button).click();
    await this.page.waitForTimeout(4000);
        return this;

   }
   async CheckCounterAfter()
   {   const counter = await this.page.locator(this.TheBagCounter);
       const text = await counter.textContent();
       this.newValue =Number(text);
       return this;
   }
   //Assertion
   async verifyAddingProduct()
   {
    if(this.G_counter)
    {
        await expect(this.G_counter).toBe(this.newValue-1);
    }else {
        await expect(this.newValue).toBe(1);
    }
   }

}
module.exports=ProductsListPage;