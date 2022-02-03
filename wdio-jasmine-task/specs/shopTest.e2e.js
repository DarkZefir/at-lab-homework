const shopPage = require("../pageobjects/shopPage");
const loginPage = require("../pageobjects/login.page");

describe("Phone in awersome shop", () => {
    beforeAll(async function () {
        await shopPage.open();
        await shopPage.openDroplistIcon.click();
        await shopPage.loginButton.click();
        await shopPage.login("example1@gmail.com", "123321");
        await shopPage.returnHome.waitForClickable();
        await shopPage.returnHome.click();
        await shopPage.openIphone.click();
        await shopPage.selectQuantityAndAddToCart(7);
        await shopPage.shoppingCartAndView();
        await shopPage.openDropdownListCoupon.waitForClickable(shopPage.defaultWaitTimeout);
        await shopPage.openDropdownListCoupon.click();
        await shopPage.pasteCoupon();
    });

    afterAll(async function () {
        await browser.close();
    })

    it("should return sum with coupon", async () => {
        const subTotalText = await shopPage.subTotal.getText();
        const subTotalNumber = subTotalText.replace("$", "");
        const realCoupon = (subTotalNumber * 15) / 100;
        const couponText = await shopPage.luckyCoupon.getText();
        const couponFinal = Number(couponText.replace("$", ""));
        expect(couponFinal).toBe(realCoupon);
    });

    it("should contain message Sucsess", async () => {
        const text = "Success: Your coupon discount has been applied";
        const actualText = await shopPage.checkNotification.getText();
        expect(actualText).toContain(text);
    });

    it("should confirm message exist", async () => {
        await shopPage.pushCheckoutButton.click();
        await loginPage.pushNewAdress.click();
        await loginPage.pasteValuesInFirstName();
        await loginPage.pasteValuesInLastName();
        await loginPage.pasteValuesInAdress();
        await loginPage.pasteValuesInCity();
        await loginPage.selectCountry();
        await loginPage.selectRegion();
        await loginPage.continueStepTwoButton.click();
        await loginPage.continueStepThreeButton.click();
        await loginPage.textInStepFour();
        await loginPage.agreeStepFive();
        await loginPage.pushConfirmOrder.click();
        const successMessage = "Your order has been successfully processed"
        const textOptions = await loginPage.confirmMessage.getText();
        expect(textOptions).toContain(successMessage);
    });

    it("should show order in history", async () => {
        await loginPage.pushHistory.click();
        const order = await loginPage.checkOrderInHistory.getText()
        expect(order).toBe("Order ID");
    });
});