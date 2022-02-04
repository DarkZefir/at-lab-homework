class LoginModel {
    constructor(parameters) {
        this.firstName = parameters.firstName;
        this.lastName = parameters.lastName;
        this.adress = parameters.adress;
        this.city = parameters.city;
    };
};

module.exports = LoginModel;