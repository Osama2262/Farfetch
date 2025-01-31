const { test } = require("playwright/test");
const CartPage = require("../pages/CartPage");
test.describe("CartPage",async()=>{
    test("TC003: Change the item size from cart",async()=>{
        const cartPage = new CartPage();
        (await cartPage
         .setupPage())
        .GoToMainSite();
     
         (await cartPage
             .CheckIfTheCartHaveItem())
             .clickOnBagIcon();
     
         (await cartPage
             .ChangeItemTheSize())
             .printTheValueBeforeAndAfter();
             await cartPage.closePage();
     });
     
     
     test("TC004: Change Quantity of item",async()=>{
         const cartPage = new CartPage();
         await cartPage.setupPage();
         await cartPage.GoToMainSite();
         await cartPage.CheckIfTheCartHaveItem();
         await cartPage.clickOnBagIcon();
         await cartPage.Check_Last_1_Left();
         await cartPage.ChangeQuantity();
         await cartPage.closePage();
         
     });
     
     test("TC005: remove all item from the cart",async()=>{
         const cartPage = new CartPage();
         await cartPage.setupPage();
         await cartPage.GoToMainSite();
         await cartPage.CheckIfTheCartHaveItem();
         await cartPage.clickOnBagIcon();
         await cartPage.RemoveAllCartItem();
         await cartPage.verifyItemsDeleted();
         await cartPage.closePage();
     })
})
