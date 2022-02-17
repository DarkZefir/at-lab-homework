describe("awesome-shop", () => {
    before(() => {
        cy.visit("https://awesome-shop.ru/");
        cy.xpath("//i[@class='fa fa-th-large']").click();
        cy.xpath("//ul[@class='list-unstyled']//a[contains(text(),'Login')]").click();
        cy.xpath("//input[@id='input-email']").type("chillout1@microsoft.com");
        cy.xpath("//input[@id='input-password']").type("123321123");
        cy.xpath("//input[@value='Login']").click();
        cy.xpath("//i[@class='fa fa-home']").click();
    })

    it("should check discounts, VAT and order in history", () => {
        cy.xpath("//div[@class='caption']//a[contains(text(),'Apple Cinema 30')]").click();
        cy.xpath("//input[@type='radio'][@value='6']").click();
        cy.xpath("//input[@type='checkbox'][@value='10']").click();
        cy.xpath("//input[@type='checkbox'][@value='11']").click();
        cy.xpath("//input[@id='input-option208']").type("very good Tv");
        cy.xpath("//select[@name ='option[217]']").select("2");
        cy.xpath("//textarea[@id ='input-option209']").type("I tell you most important secret about JavaScript, and this secret is ...");
        cy.xpath("//input[@name='quantity']").clear().type("4");
        cy.xpath("//button[@id='button-cart']").click();
        cy.xpath("//div[@class='alert alert-success alert-dismissible']").should("have.text", 'Success: You have added Apple Cinema 30" to your shopping cart!×');
        cy.xpath("//span[@id='cart-total']").click();
        cy.xpath("//a[contains(text(),'View Cart')]").click();
        cy.xpath("//div[@class='table-responsive']//tbody//td[@class='text-left'][1]/*").should("include.text", "Apple Cinema 30" && "Medium" && "Checkbox 3" && "Checkbox 4" & "Yellow")
        cy.xpath("//a[contains(text(),'Use Coupon Code')]/i[@class='fa fa-caret-down']").click();
        cy.xpath("//input[@id='input-coupon']").type("LuckyUser");
        cy.xpath("//input[@id='button-coupon']").click();
        cy.xpath("//div[@class='col-sm-4 col-sm-offset-8']//tr[1]/td[last()]").invoke("text").then((text) => {
            const subTotalNumber = text.replace("$", "")
            const realCoupon = (subTotalNumber * 15) / 100
            const realCouponNumb = Number(realCoupon)
            cy.xpath("//div[@class='col-sm-4 col-sm-offset-8']//tr[2]/td[2]").invoke("text").then((text) => {
                const couponFinal = Number(text.replace("$-", ""));
                expect(realCouponNumb).to.be.equal(couponFinal)
            });
        });
        cy.xpath("//div[@class='alert alert-success alert-dismissible']").should("include.text", "Success: Your coupon discount has been applied");
        cy.xpath("//div[@class='col-sm-4 col-sm-offset-8']//tr[1]/td[last()]").invoke("text").then((text) => {
            const subTotalNumber = text.replace("$", "");
            const finalVat = (subTotalNumber * 20) / 100;
            cy.xpath("//div[@class='col-sm-4 col-sm-offset-8']//tr[2]/td[last()]").invoke("text").then((text) => {
                const vatString = text.replace("$", "");
                const vatNumber = Number(vatString);
                expect(vatNumber).to.be.equal(finalVat + "0");
            });
        });
        cy.xpath("//div[@class='pull-right']").click();
        cy.xpath("//input[@id='input-payment-firstname']").type("Test");
        cy.xpath("//input[@id='input-payment-lastname']").type("Testov");
        cy.xpath("//input[@id='input-payment-address-1']").type("21Petrovskaya");
        cy.xpath("//input[@id='input-payment-city']").type("Minsk");
        cy.xpath("//select[@id='input-payment-country']").type("bela");
        cy.xpath("//select[@id='input-payment-zone']").select("Mahilyowskaya (Mahilyow)");
        cy.xpath("//input[@id='button-payment-address']").click();
        cy.xpath("//input[@id='button-shipping-address']").click();
        cy.xpath("//textarea[@name='comment']").type("This comment should write some text for this place. Merry Christmas");
        cy.xpath("//input[@id='button-shipping-method']").click();
        cy.xpath("//input[@name='payment_method'][@value='cod']").click();
        cy.xpath("//input[@name='agree']").click();
        cy.xpath("//input[@id='button-payment-method']").click();
        cy.xpath("//input[@id='button-confirm']").click();
        cy.xpath("//div[@id='content']/p[1]").should("include.text", "Your order has been successfully processed");
        cy.xpath("//a[contains(text(),'history')]").click();
        cy.xpath("//table//tr[*]/td").should("include.text", "Order ID");
    });
});