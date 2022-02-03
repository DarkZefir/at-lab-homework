const loginModel = require("./buissnesModel")

class Factory {
    static getDefaultCalc() {
        const defaultAvParameters = {
            firstName: 'input-payment-firstname',
            lastName: 'input-payment-lastname',
            adress: 'input-payment-address-1',
            city: 'input-payment-city'
        };
        return new loginModel(defaultAvParameters);
    };
};

module.exports = Factory;