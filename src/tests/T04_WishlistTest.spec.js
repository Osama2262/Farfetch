const { test } = require("playwright/test");
const ProductsListPage= require("../pages/ProductListPage");
const WishlistPage = require("../pages/WishlistPage");
const BasePage = require("../base/BasePage");

test.describe("WishlistTest",async()=>{
    test("TC006: Add items to Wishlist",async()=>{
        const plp = new ProductsListPage();
        await plp.setupPage();
        await plp.GoToMainSite();
        await plp.gotToManWear();
        await plp.goToShoes_category();
        await plp.selectTheRandomProduct();
        const wishlistPage =new WishlistPage(await plp.returnPage());
        await wishlistPage.addItemToWishlist();
        await wishlistPage.teardownWishlistPage();

    });
    
    test("TC007: Remove all items from the Wishlist",async()=>{
        const base = new BasePage();
        await base.setupPage();
        await base.GoToMainSite();
        const wishlist = new WishlistPage(await base.returnPage());
        await wishlist.CheckItemOnTheWishlist();
        await wishlist.RemoveAllItemInWishlist();
        await wishlist.verifyDelete();
        await wishlist.teardownWishlistPage();
    });
})
