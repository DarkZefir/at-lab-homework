const { Boy } = require("../Boy.js");
const { isRichBase, isSummerMonthBase, isPrettyGirlFriendBase, spendSomeMoneyBase } = require('./basePage/basePageBoy');

const { expect } = require("chai");

describe('Boy isRich, isSummerMonth, spendSomeMoney scenarios', function () {
    const boy = new Boy();

    it('should isRich return true or false', function () {
        isRichBase.forEach((i) => {
            boy.wealth = i.wealth;
            expect(boy.isRich()).to.be.equal(i.return);
        });
    });
    it(`should isSummerMonth return true or false`, function () {
        isSummerMonthBase.forEach((i) => {
            boy.birthdayMonth = i.birthdayMonth;
            expect(boy.isSummerMonth()).to.be.equal(i.return);
        });
    });
    it('should isPrettyGirlFriend return girlfriends name or undefined', function () {
        isPrettyGirlFriendBase.forEach((i) => {
            boy.girlFriend = i.girlFriend;
            expect(boy.isPrettyGirlFriend()).to.be.equal(i.return);
        });
    });
    it('spendSomeMoney should return true or error notification', function () {
        spendSomeMoneyBase.forEach((i) => {
            boy.wealth = i.wealth;
            expect(boy.spendSomeMoney(i.amountForSpending)).to.be.equal(i.return);
        });
    });
});

describe('Boy mood scenarios', function () {
    const boy = new Boy();

    it('should return mood EXCELLENT', function () {
        boy.wealth = 500_000;
        boy.girlFriend = 'Kate';
        boy.birthdayMonth = 'june'
        expect(boy.getMood()).to.be.equal('EXCELLENT');
    });
    it('should should return mood NEUTRAL', function () {
        boy.wealth = 500_000;
        expect(boy.getMood()).to.be.equal('NEUTRAL');
    });
    it('should should return mood GOOD', function () {
        boy.wealth = 500_000;
        boy.girlFriend = 'Kate';
        expect(boy.getMood()).to.be.equal('GOOD');
    });
    it('should should return mood BAD', function () {
        boy.wealth = 99_000;
        expect(boy.getMood()).to.be.equal('BAD');
    });
});

describe('Boy getters', function () {
    const boy = new Boy();

    it('should birthdayMonth return MAY', function () {
        boy._birthdayMonth = 'MAY';
        expect(boy.birthdayMonth).to.be.equal('MAY');
    });
    it('should wealth return 150_000', function () {
        boy._wealth = 150_000;
        expect(boy.wealth).to.be.equal(150_000);
    });
    it('should girlfriend return Kate', function () {
        boy._girlFriend = 'Kate';
        expect(boy.girlFriend).to.be.equal('Kate');
    });
});

describe('Boy setters', function () {
    const boy = new Boy();

    it('should set birthdayMonth December', function () {
        boy.birthdayMonth = 'December';
        expect(boy._birthdayMonth).to.be.equal('December');
    });
    it('should set wealth 120_000', function () {
        boy.wealth = 120_000;
        expect(boy._wealth).to.be.equal(120_000);
    });
    it('should set girlfriend Mary', function () {
        boy.girlFriend = 'Mary';
        expect(boy._girlFriend).to.be.equal('Mary');
    });
});