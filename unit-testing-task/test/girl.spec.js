const { Girl } = require('../Girl');
const { Boy } = require("../Boy.js");
const { richBoy, poorBoy } = require('./basePage/basePageGirl');

const { expect } = require('chai');

describe('Girl positive scenarios', function () {
    const girl = new Girl();

    before(function () {
        girl.boyFriend = richBoy;
        girl.isPretty = true;
    });

    it('should isBoyfriendRich return true', function () {
        expect(girl.isBoyfriendRich()).to.be.equal(true);
    });
    it('should spendBoyFriendMoney return true', function () {
        expect(girl.spendBoyFriendMoney(100_000)).to.be.equal(true);
    });
    it('should isBoyFriendWillBuyNewShoes return true', function () {
        expect(girl.isBoyFriendWillBuyNewShoes()).to.be.equal(true);
    });
    it('should isSlimFriendBecameFat return true', function () {
        girl.isSlimFriendGotAFewKilos = true;
        expect(girl.isSlimFriendBecameFat()).to.be.equal(true);
    });
});

describe('Girl negative scenarios', function () {
    const girl = new Girl();

    before(function () {
        girl.boyFriend = poorBoy;
        girl.isPretty = false;
    });
    it('should isBoyfriendRich return false', function () {
        expect(girl.isBoyfriendRich()).to.be.equal(false);
    });
    it('should spendBoyFriendMoney return undefined', function () {
        expect(girl.spendBoyFriendMoney(100_000)).to.be.equal(undefined);
    });
    it('should isBoyFriendWillBuyNewShoes return false', function () {
        expect(girl.isBoyFriendWillBuyNewShoes()).to.be.equal(false);
    });
    it('should isSlimFriendBecameFat return false', function () {
        girl.isSlimFriendGotAFewKilos = false;
        expect(girl.isSlimFriendBecameFat()).to.be.equal(false);
    });
});

describe('Girl mood scenarios', function () {
    const girl = new Girl();

    it('should return mood EXCELLENT', function () {
        girl.boyFriend = richBoy;
        girl.isPretty = true;
        expect(girl.getMood()).to.be.equal('EXCELLENT');
    });
    it('should return mood GOOD', function () {
        girl.boyFriend = poorBoy;
        girl.isPretty = true;
        expect(girl.getMood()).to.be.equal('GOOD');
    });
    it('should return mood NEUTRAL', function () {
        girl.boyFriend = poorBoy;
        girl.isPretty = false;
        girl.isSlimFriendGotAFewKilos = false;
        expect(girl.getMood()).to.be.equal('NEUTRAL');
    });
    it('should return mood BAD', function () {
        girl.boyFriend = poorBoy;
        girl.isPretty = false;
        girl.isSlimFriendGotAFewKilos = true;
        expect(girl.getMood()).to.be.equal('BAD');
    });
});

describe('Girl getters', function () {
    const girl = new Girl();

    it('should isPretty need true', function () {
        girl._isPretty = true;
        expect(girl.isPretty).to.be.equal(true);
    });
    it('should isSlimFriendGotAFewKilos need true', function () {
        girl._isSlimFriendGotAFewKilos = true;
        expect(girl.isSlimFriendGotAFewKilos).to.be.equal(true);
    });
    it('should boyFriend need true', function () {
        girl._boyFriend = true;
        expect(girl.boyFriend).to.be.equal(true);
    });
});

describe('Girl setters', function () {
    const girl = new Girl();

    it('should set isPretty need true', function () {
        girl.isPretty = true;
        expect(girl._isPretty).to.be.equal(true);
    });
    it('should set isSlimFriendGotAFewKilos need true', function () {
        girl.isSlimFriendGotAFewKilos = true;
        expect(girl._isSlimFriendGotAFewKilos).to.be.equal(true);
    });
    it('should set boyFriend need true', function () {
        girl.boyFriend = true;
        expect(girl._boyFriend).to.be.equal(true);
    });
});