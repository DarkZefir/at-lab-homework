const Factory = require("../pageobjects/factory");

const dropdownLists = Factory.getDefaultCalc();

class LoginPage {

    constructor() {
        this.stepTwoPlaceholder = "//input[@id='TEXT_PLACEHOLDER']";
        this.defaultWaitTimeout = 4000;
    }

    get pushNewAdress() {
        return $("//input[@name='payment_address'][@value='new']");
    }

    get openDropdownCountry() {
        return $("//select[@id='input-payment-country']");
    }

    get openDropdownRegion() {
        return $("//select[@id='input-payment-zone']");
    }

    get continueStepTwoButton() {
        return $("//input[@id='button-payment-address']");
    }

    get continueStepThreeButton() {
        return $("//input[@id='button-shipping-address']");
    }

    get textAreaStepFour() {
        return $("//textarea[@name='comment']");
    }

    get continueStepFourButton() {
        return $("//input[@id='button-shipping-method']");
    }

    get agreeCheckbox() {
        return $("//input[@name='agree']");
    }

    get continueStepFiveButton() {
        return $("//input[@id='button-payment-method']");
    }

    get pushCashOnDelivery() {
        return $("//input[@name='payment_method'][@value='cod']");
    }

    get pushConfirmOrder() {
        return $("//input[@id='button-confirm']");
    }

    get confirmMessage() {
        return $("//div[@id='content']/p[1]");
    }

    get pushHistory() {
        return $("//a[contains(text(),'history')]");
    }

    get checkOrderInHistory() {
        return $("//table//tr[*]/td");
    }

    async agreeStepFive() {
        await this.pushCashOnDelivery.waitForClickable(defaultWaitTimeout);
        await this.pushCashOnDelivery.click()
        await this.agreeCheckbox.waitForClickable(defaultWaitTimeout);
        await this.agreeCheckbox.click();
        await this.continueStepFiveButton.click();
    }

    async textInStepFour() {
        const comment = "This comment should write some text for this place. Merry Christmas";
        await this.textAreaStepFour.keys(comment);
        await this.continueStepFourButton.waitForClickable(defaultWaitTimeout)
        await this.continueStepFourButton.click();
    }

    async selectRegion() {
        await this.openDropdownRegion.click();
        await this.openDropdownRegion.waitForClickable(defaultWaitTimeout);
        await this.openDropdownRegion.keys("mahil");
        await this.openDropdownRegion.keys("Enter");
    }

    async selectCountry() {
        await this.openDropdownCountry.click();
        await this.openDropdownCountry.waitForClickable(defaultWaitTimeout);
        await this.openDropdownCountry.keys("bela");
        await this.openDropdownCountry.keys("Enter");
    }

    async choosePlaceholderStepTwo(text, text2) {
        const dropdownLocator = this.stepTwoPlaceholder.replace("TEXT_PLACEHOLDER", text);
        const dropdownOption = $(dropdownLocator);
        await dropdownOption.waitForClickable(defaultWaitTimeout);
        await dropdownOption.click();
        await dropdownOption.setValue(text2)
    }

    async pasteValuesInFirstName() {
        await this.choosePlaceholderStepTwo(dropdownLists.firstName, "Test");
    }

    async pasteValuesInLastName() {
        await this.choosePlaceholderStepTwo(dropdownLists.lastName, "Testov");
    }

    async pasteValuesInAdress() {
        await this.choosePlaceholderStepTwo(dropdownLists.adress, "21Petrovskaya");
    }

    async pasteValuesInCity() {
        await this.choosePlaceholderStepTwo(dropdownLists.city, "Minsk");
    }
}

module.exports = new LoginPage();
