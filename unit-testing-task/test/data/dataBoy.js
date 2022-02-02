const { Girl } = require('../../Girl')
girlFriend = new Girl(true)

const isRichData = [
    { wealth: 500_000, return: true },
    { wealth: 40_000, return: false }
];

const isSummerMonthData = [
    { birthdayMonth: 'June', return: true },
    { birthdayMonth: 'July', return: true },
    { birthdayMonth: 'August', return: true },
    { birthdayMonth: 'October', return: false },
    { birthdayMonth: 'december', return: false },
];

const isPrettyGirlfriendData = [
    { girlFriend: girlFriend, return: girlFriend.isPretty },
    { girlFriend: undefined, return: undefined },
];

const spendSomeMoneyData = [
    { wealth: 500_000, amountForSpending: 120_000, return: true },
    { wealth: 100_000, amountForSpending: 120_000, return: `Not enough money! Requested amount is 120_000, but you can't spend more then 100_000` },
];

module.exports = { isRichData, isSummerMonthData, isPrettyGirlfriendData, spendSomeMoneyData };