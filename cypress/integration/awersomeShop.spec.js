describe("awesome-shop", () => {
    before(() => {
        cy.visit("https://awesome-shop.ru/");
        cy.get("button[type='button']>.fa-th-large").click();
        cy.get("ul>li>.list-unstyled>li>[href*='login']").click();
        cy.get("#input-email").type("chillout1@microsoft.com");
        cy.get("#input-password").type("123321123");
        cy.get("input[value='Login']").click();
        cy.get(".fa.fa-home").click();
    })

    it("should check discounts, VAT and order in history", () => {
        cy.get(".caption>h4>a[href$='product_id=42']").click();
        cy.get("input[value='7']").click();
        cy.get("input[value='10']").click();
        cy.get("input[value='11']").click();
        cy.get("#input-option208").type("very good Tv");
        cy.get("#input-option217").select("3");
        cy.get("#input-option209").type("I tell you most important secret about JavaScript, and this secret is ...");
        cy.get("#input-quantity").clear().type("4");
        cy.get("#button-cart").click();
        cy.get(".alert.alert-success.alert-dismissible").should("have.text", 'Success: You have added Apple Cinema 30" to your shopping cart!×');
        cy.get("#cart-total").click();
        cy.get("p>a[href$='route=checkout/cart']").click();
        cy.get(".table-responsive>table>tbody>tr>.text-left>*").should("include.text", "Apple Cinema 30" && "Medium" && "Checkbox 3" && "Checkbox 4" & "Yellow")
        cy.get("a[href$='collapse-coupon']>.fa").click();
        cy.get("#input-coupon").type("LuckyUser");
        cy.get("#button-coupon").click();
        cy.get(".col-sm-4.col-sm-offset-8>table>tbody>:first-child>:last-child").invoke("text").then((text) => {
            const subTotalNumber = text.replace("$", "")
            const realCoupon = (subTotalNumber * 15) / 100
            cy.get(".col-sm-4.col-sm-offset-8>table>tbody>:nth-child(2)>:last-child").invoke("text").then((text) => {
                const couponFinal = text.replace("$-", "");
                expect(realCoupon).to.be.equal(couponFinal)
            });
        });
        cy.get(".alert.alert-success.alert-dismissible").should("include.text", "Success: Your coupon discount has been applied");
        cy.get(".col-sm-4.col-sm-offset-8>table>tbody>:first-child>:last-child").invoke("text").then((text) => {
            const subTotalNumber = text.replace("$", "");
            const finalVat = (subTotalNumber * 20) / 100;
            cy.get(".col-sm-4.col-sm-offset-8>table>tbody>:nth-child(3)>:last-child").invoke("text").then((text) => {
                const vatString = text.replace("$", "");
                const vatNumber = vatString;
                expect(vatNumber).to.be.equal(finalVat + "0");
            });
        });
        cy.get(".pull-right>.btn.btn-primary").click();
        cy.get("#input-payment-firstname").type("Test");
        cy.get("#input-payment-lastname").type("Testov");
        cy.get("#input-payment-address-1").type("21Petrovskaya");
        cy.get("#input-payment-city").type("Minsk");
        cy.get("#input-payment-country").type("bela");
        cy.get("#input-payment-zone").select("Mahilyowskaya (Mahilyow)");
        cy.get("#button-payment-address").click();
        cy.get("#button-shipping-address").click();
        cy.get("[name='comment']").type("This comment should write some text for this place. Merry Christmas");
        cy.get("#button-shipping-method").click();
        cy.get("[value='cod']").click();
        cy.get("[name='agree']").click();
        cy.get("#button-payment-method").click();
        cy.get("#button-confirm").click();
        cy.get("#content>:nth-child(2)").should("include.text", "Your order has been successfully processed");
        cy.get("#content>p>a[href$='route=account/order'").click();
        cy.get("table>thead>tr>:nth-child(1)").should("include.text", "Order ID");
    });
});