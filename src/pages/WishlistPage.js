class WishlistPage
{
    constructor(page)
    {
        this.page = page;
    }

    //locators
    none_filled_heart = '[aria-pressed="false"]';
    Wishlist_button = '[title="Wishlist"]';
    wishlist_counter ="//a[@title='Wishlist'] //span[@data-testid='counter']";
    itemsInWishlist = '[data-component="ProductCard"]';
    remove_Button = "//button[@data-testid='wishlistCard-removeButton']";
    WishlistIsEmpty = "//p[contains(.,'Add your favourite items to your wishlist and they’ll appear here')]";
    num;
    async CheckItemOnTheWishlist()
    {
        await this.page.waitForTimeout(1000);
        const isVisible = await this.page.locator(this.wishlist_counter).isVisible();
        if(!isVisible)
         throw Error("# There are no items on the Wishlist #");
    }

    async addItemToWishlist()
    {
        await this.page.waitForTimeout(3000);
        const none_heart = await this.page.locator(this.none_filled_heart).isVisible();
       if(none_heart)
       {
        await this.page.locator(this.none_filled_heart).click();
        await this.page.waitForTimeout(2200);
       }
       else
       {
        throw Error("\n## items is already added to Wishlist ##\n ");
       }
    }
    async RemoveAllItemInWishlist()
    {
            await this.page.locator(this.Wishlist_button).click();
            await this.page.waitForLoadState('load');
            const wishlistProducts = await this.page.locator(this.itemsInWishlist).count();
            this.num = wishlistProducts;
            while(this.num --)
            {
                await this.page.locator(this.remove_Button).last().click();
                await this.page.waitForTimeout(2000);
                if(this.num  == 1)
                {
                    await this.page.waitForTimeout(1500);
                    await this.page.locator(this.remove_Button).last().click();
                    break;
                }
            }
    }
    async verifyDelete()
    {
        await this.page.locator(this.WishlistIsEmpty).isDisabled();
    }
    async teardownWishlistPage()
    {
        await this.page.close();
    }


}
module.exports =WishlistPage;