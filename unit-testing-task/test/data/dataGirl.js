const poorBoy = {
    isRich() {
        return false;
    },
};

const richBoy = {
    isRich() {
        return true;
    },
    spendSomeMoney() {
        return true;
    }
};



module.exports = { richBoy, poorBoy }