const { expect } = require('chai');

const ShopPage = require('../pageobjects/shopPage');

describe('TV in awersome shop', () => {
    before(async function () {
        await ShopPage.open();
        await ShopPage.openTv.click();
        await ShopPage.chooseRadio();
        await ShopPage.chooseCheckbox();
        await ShopPage.writeTextInTextPlace();
        await ShopPage.openDropdownColor();
        await ShopPage.writeTextInTextArea();
        await ShopPage.selectQuantity();
        await ShopPage.pushAddToCardButton.click();
        await ShopPage.pushShoppingCartButton.click();
        await ShopPage.pushViewCartButton.click();
    });

    it('should return that selected options', async () => {
        const options = 'Apple Cinema 30' && 'Medium' && 'Checkbox 2' && 'Checkbox 4' & 'Green';
        const textOptions = await ShopPage.summaryOptions.getText();
        expect(textOptions).to.be.include(options);
    });

    it('should return that VAT 20% is calculated correctly', async () => {
        const total = await ShopPage.totalSum.getText();
        expect(total).to.be.include('615.6');
    });
});