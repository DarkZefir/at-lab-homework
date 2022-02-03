const factory = require('./factory');

const itemsOptions = factory.getDefaultCalc();
class ShopPage {

    constructor() {
        this.radio = "//input[@name ='option[218]'][@value='TEXT_PLACEHOLDER']";
        this.checkbox = "//input[@name ='option[223][]'][@value='TEXT_PLACEHOLDER']";
        this.defaultWaitTimeout = 4000;
    }

    get openTv() {
        return $(`//img[@alt='Apple Cinema 30"']`);
    }

    get chooseTextOption() {
        return $("//input[@id ='input-option208']");
    }

    get chooseTextArea() {
        return $("//textarea[@id ='input-option209']");
    }

    get openDropdownList() {
        return $("//select[@name ='option[217]']");
    }

    get chooseQuantity() {
        return $("//input[@name='quantity']");
    }

    get pushAddToCardButton() {
        return $("//button[@id='button-cart']");
    }

    get pushShoppingCartButton() {
        return $("//span[@id='cart-total']");
    }

    get pushViewCartButton() {
        return $("//a[contains(text(),'View Cart')]");
    }

    get summaryOptions() {
        return $("//div[@class='table-responsive']//tbody//td[@class='text-left'][1]/*");
    }

    get subTotal() {
        return $("//div[@class='col-sm-4 col-sm-offset-8']//tr[1]/td[last()]");
    }

    get vat() {
        return $("//div[@class='col-sm-4 col-sm-offset-8']//tr[2]/td[last()]")
    }

    async selectQuantity() {
        await this.chooseQuantity.waitForClickable(this.defaultWaitTimeout);
        await this.chooseQuantity.click();
        await this.chooseQuantity.keys('ArrowUp');
    }

    async openDropdownColor() {
        await this.openDropdownList.waitForClickable(this.defaultWaitTimeout);
        await this.openDropdownList.click();
        await this.openDropdownList.keys('ArrowDown');
        await this.openDropdownList.keys('ArrowDown');
        await this.openDropdownList.keys('ArrowDown');
        await this.openDropdownList.keys('Enter');
    }

    async chooseParameterRadio(text1) {
        const parameterItem = this.radio.replace('TEXT_PLACEHOLDER', text1);
        const parameterOption = $(parameterItem);
        await parameterOption.waitForClickable(this.defaultWaitTimeout);
        await parameterOption.click();
    }

    async chooseParameterCheckbox(text2) {
        const parameterItem = this.checkbox.replace('TEXT_PLACEHOLDER', text2);
        const parameterOption = $(parameterItem);
        await parameterOption.waitForClickable(this.defaultWaitTimeout);
        await parameterOption.click();
    }

    async chooseRadio() {
        await this.chooseParameterRadio(itemsOptions.radio);
    }

    async chooseCheckbox() {
        await this.chooseParameterCheckbox(itemsOptions.checkboxTwo);
        await this.chooseParameterCheckbox(itemsOptions.checkboxFour);
    }

    open() {
        return browser.url(`https://awesome-shop.ru/`);
    }

    async writeTextInTextPlace() {
        const textForTextPlace = "Simple testing words";
        await this.chooseTextOption.click();
        await this.chooseTextOption.keys(textForTextPlace);
        await this.chooseTextOption.keys('Enter');
    }

    async writeTextInTextArea() {
        const textForTextPlace = "I tell you most important secret about JavaScript, and this secret is ...";
        await this.chooseTextArea.click();
        await this.chooseTextArea.keys(textForTextPlace);
        await this.chooseTextArea.keys('Enter');
    }


}

module.exports = new ShopPage();
