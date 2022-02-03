const { expect } = require("chai");

const shopPage = require("../pageobjects/shopPage");

describe("TV in awersome shop", () => {

    before(async function () {
        await shopPage.open();
        await shopPage.openTv.click();
        await shopPage.chooseRadio();
        await shopPage.chooseCheckbox();
        await shopPage.writeTextInTextPlace();
        await shopPage.openDropdownColor();
        await shopPage.writeTextInTextArea();
        await shopPage.selectQuantity();
        await shopPage.pushAddToCardButton.click();
        await shopPage.pushShoppingCartButton.click();
        await shopPage.pushViewCartButton.click();
    });

    it("should return that selected options", async () => {
        const options = "Apple Cinema 30" && "Medium" && "Checkbox 2" && "Checkbox 4" & "Green";
        const textOptions = await shopPage.summaryOptions.getText();
        expect(textOptions).to.be.include(options);
    });

    it("should return that VAT 20% is calculated correctly", async () => {
        const subTotalText = await shopPage.subTotal.getText();
        const subTotalNumber = subTotalText.replace("$", "");
        const vatText = await shopPage.vat.getText();
        const vatString = vatText.replace("$", "");
        const vatNumber = Number(vatString);
        const finalVat = (subTotalNumber * 20) / 100;
        expect(vatNumber).to.be.equal(finalVat);
    });
});