const ShopPage = require('../pageobjects/shopPage');
const LoginPage = require('../pageobjects/login.page');
const { isBrowser } = require('mocha/lib/utils');

describe('Phone in awersome shop', () => {
    beforeAll(async function () {
        await ShopPage.open();
        await ShopPage.openDroplistIcon.click();
        await ShopPage.loginButton.click();
        await ShopPage.login('example1@gmail.com', '123321');
        await ShopPage.returnHome.waitForClickable(4000);
        await ShopPage.returnHome.click();
        await ShopPage.openIphone.click();
        await ShopPage.selectQuantityAndAddToCart(7);
        await ShopPage.shoppingCartAndView();
        await ShopPage.openDropdownListCoupon.waitForClickable(4000);
        await ShopPage.openDropdownListCoupon.click();
        await ShopPage.pasteCoupon();
    });

    beforeAll(async function () {
        await isBrowser.close();
    })

    it('should return sum with coupon', async () => {
        const textOptions = await ShopPage.totalSum.getText();
        expect(textOptions).toBe('$721.14');
    });

    it('should contain message Sucsess', async () => {
        const text = 'Success: Your coupon discount has been applied';
        const actualText = await ShopPage.checkNotification.getText();
        expect(actualText).toContain(text);
    });

    it('should confirm message exist', async () => {
        await ShopPage.pushCheckoutButton.click();
        await LoginPage.pushNewAdress.click();
        await LoginPage.pasteValuesInFirstName();
        await LoginPage.pasteValuesInLastName();
        await LoginPage.pasteValuesInAdress();
        await LoginPage.pasteValuesInCity();
        await LoginPage.selectCountry();
        await LoginPage.selectRegion();
        await LoginPage.continueStepTwoButton.click();
        await LoginPage.continueStepThreeButton.click();
        await LoginPage.textInStepFour();
        await LoginPage.agreeStepFive();
        await LoginPage.pushConfirmOrder.click();
        const successMessage = 'Your order has been successfully processed'
        const textOptions = await LoginPage.confirmMessage.getText();
        expect(textOptions).toContain(successMessage);
    });

    it('should show order in history', async () => {
        await LoginPage.pushHistory.click();
        const order = await LoginPage.checkOrderInHistory.getText()
        expect(order).toBe('Order ID');
    });
});