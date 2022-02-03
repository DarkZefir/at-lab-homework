const ShopModel = require("./shopModel")

class Factory {
    static getDefaultCalc() {
        const defaultAvParameters = {
            radio: '6',
            color: '1',
            checkboxTwo: '9',
            checkboxFour: '11',
        };
        return new ShopModel(defaultAvParameters);
    };
};

module.exports = Factory;