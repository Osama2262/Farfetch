const BasePage = require("../base/BasePage");
const dataFaker = require("../utils/data_Faker");
const { test, expect } = require("playwright/test");

class CartPage extends BasePage
{
 counter = "//a[@title='Bag'] //span[@data-testid='counter']";
 bag_icon = "//a[@data-testid='bag']";
 change_button ="[data-testid='item-size-actionButton']";
 Size_dropdownlist='[data-testid="item-size-dropdown"]';
 select_size = ' //div[@data-testid="item-size-dropdown"] //div[@role="button"]';
 sizeValue = '[data-testid="item-size"]';
 before;
 after;
 Q_Showing_value = '//span[@data-testid="item-quantity"]';
 Quantity_button ='//button[@data-testid="item-quantity-actionButton"]';
 Last_1_Left_text ='//p[contains(.,"Last 1 left")]'; 
 Q_dropdownList = '//div[@data-testid="item-quantity-dropdown"]';
 One_Q = '[data-testid="option-1"]';
 Two_Q = '[data-testid="option-2"]';
 CartItems='//li[@data-testid="itemGroup"]';
 Remove_button = '[title="Remove"]';
 CartIsEmpty_message= "//p[contains(.,'There’s nothing in your bag yet...')]";
 numOfItem;

 async CheckIfTheCartHaveItem()
 {
    const counter = this.page.locator(this.counter);
    await counter.waitFor({ state: "visible", timeout: 5000 }).catch(() => {}); // Wait for the counter to be visible

    const isVisible = await counter.isVisible();
    if (!isVisible) {
        console.log("## This cart doesn't have any items yet ##");
    }
    return this;
}

 async clickOnBagIcon()
 {
   await this.page.locator(this.bag_icon).click();
   await this.page.waitForLoadState("load");
   return this;

 }


 async ChangeItemTheSize()
 {
    this.before = await this.page.locator(this.sizeValue).first().textContent();
    await this.page.locator(this.change_button).first().click();
    await this.page.waitForTimeout(1000);
    await this.page.locator(this.Size_dropdownlist).click();
    await this.page.locator(this.select_size).last().click();
    this.after = await this.page.locator(this.sizeValue).first().textContent();
    await this.page.waitForTimeout(2000);
    return this;

}
async printTheValueBeforeAndAfter()
{

    console.log("The value before is : ",this.before);
    console.log("The value after is : ",this.after);
}            


async Check_Last_1_Left()
{
    await this.page.waitForTimeout(2500);
    const LastItem = await this.page.locator(this.Last_1_Left_text).first().isVisible();
 if(LastItem)
    {
        console.log("## Can't change the quantity That is [only one item left in the stock]");
       
    }
}

async ChangeQuantity() {
    const check = await this.page.textContent(this.Q_Showing_value);
    const ChangeButton = await this.page.locator(this.Quantity_button).first().isVisible();
    if(check == '1' & ChangeButton)
    {
        await this.page.locator(this.Quantity_button).first().click();
        await this.page.locator(this.Q_dropdownList).click();
        await this.page.locator(this.Two_Q).click();
        await this.page.waitForTimeout(2000);
    }
    else if(check == "2" & ChangeButton)
    {
        await this.page.locator(this.Quantity_button).first().click();
        await this.page.locator(this.Q_dropdownList).click();
        await this.page.locator(this.One_Q).click();
        await this.page.waitForTimeout(2000);

    }
}

async RemoveAllCartItem()
    {
       this.numOfItem =  await this.page.locator(this.CartItems).count();
      while(this.numOfItem--)
      {
        await this.page.locator(this.Remove_button).last().click();
        await this.page.waitForTimeout(2500);
        if(this.numOfItem == 1)
        {
            await this.page.locator(this.Remove_button).first().click();
            break;
        }
      }
    }
    async verifyItemsDeleted()
    {
        await this.page.waitForTimeout(2000);
        const isDisabled = await this.page.locator(this.CartIsEmpty_message).isVisible();
        await expect(isDisabled).toBe(true);
    }
}
module.exports= CartPage;
