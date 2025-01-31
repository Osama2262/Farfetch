const {test} = require("@playwright/test");
const BasePage =require("../base/BasePage");
const ProductsListPage= require("../pages/ProductListPage");

test("TC002: add random items to the cart",async()=>{

   const PLP = new ProductsListPage();
    await PLP.setupPage();
    await PLP.GoToMainSite();
    await PLP.skipThePOPWindow();
    await PLP.gotToManWear();
    await PLP.goToShoes_category();
    await PLP.selectTheRandomProduct();
    await PLP.selectSize();
    await PLP.CheckCounterBefore();
    await PLP.clickOnAddToCart_button();
    await PLP.CheckCounterAfter();
    await PLP.verifyAddingProduct();
    await PLP.closePage();
})