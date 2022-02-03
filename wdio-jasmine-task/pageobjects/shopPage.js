class ShopPage {

    constructor() {
        this.defaultWaitTimeout = 4000;
    }

    get openDroplistIcon() {
        return $("//i[@class='fa fa-th-large']");
    }

    get loginButton() {
        return $("//ul[@class='list-unstyled']//a[contains(text(),'Login')]");
    }

    get chooseQuantity() {
        return $("//input[@name='quantity']");
    }

    get inputMail() {
        return $("//input[@id='input-email']");
    }

    get inputPassword() {
        return $("//input[@id='input-password']");
    }

    get buttonSubmit() {
        return $("//input[@value='Login']");
    }

    get returnHome() {
        return $("//i[@class='fa fa-home']");
    }

    get openIphone() {
        return $("//a[contains(text(),'iPhone')]");
    }

    get clickAddToCartButton() {
        return $("//button[@id='button-cart']");
    }

    get shoppingCartButton() {
        return $("//span[@id='cart-total']");
    }

    get viewCartButton() {
        return $("//a[contains(text(),'View Cart')]");
    }

    get openDropdownListCoupon() {
        return $("//a[contains(text(),'Use Coupon Code')]/i[@class='fa fa-caret-down']");
    }

    get couponText() {
        return $("//input[@id='input-coupon']");
    }

    get pushApplyCouponButton() {
        return $("//input[@id='button-coupon']");
    }

    get subTotal() {
        return $("//div[@class='col-sm-4 col-sm-offset-8']//tr[1]/td[last()]");
    }

    get luckyCoupon() {
        return $("//div[@class='col-sm-4 col-sm-offset-8']//tr[2]/td[last()]");
    }

    get checkNotification() {
        return $("//div[@class='alert alert-success alert-dismissible']");
    }

    get pushCheckoutButton() {
        return $("//div[@class='pull-right']");
    }

    async pasteCoupon() {
        const coupon = 'LuckyUser';
        await this.couponText.waitForClickable(defaultWaitTimeout);
        await this.couponText.setValue(coupon);
        await this.pushApplyCouponButton.waitForClickable(defaultWaitTimeout);
        await this.pushApplyCouponButton.click();
    }

    async shoppingCartAndView() {
        await this.shoppingCartButton.click();
        await this.viewCartButton.waitForClickable(defaultWaitTimeout);
        await this.viewCartButton.click();
    }

    async login(username, password) {
        await this.inputMail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonSubmit.click();
    }

    async selectQuantityAndAddToCart(number) {
        await this.chooseQuantity.waitForClickable(defaultWaitTimeout);
        await this.chooseQuantity.setValue(number);
        await this.clickAddToCartButton.waitForClickable(defaultWaitTimeout);
        await this.clickAddToCartButton.click();
    }

    open() {
        return browser.url(`https://awesome-shop.ru/`);
    }
}

module.exports = new ShopPage();
