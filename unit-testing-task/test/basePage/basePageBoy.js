const isRichBase = [
    { wealth: 500_000, return: true },
    { wealth: 40_000, return: false }
];

const isSummerMonthBase = [
    { birthdayMonth: 'June', return: true },
    { birthdayMonth: 'July', return: true },
    { birthdayMonth: 'August', return: true },
    { birthdayMonth: 'October', return: false },
    { birthdayMonth: 'december', return: false },
];

const isPrettyGirlFriendBase = [
    { girlFriend: 'Kate', return: 'Kate'.isPretty },
    { girlFriend: '', return: undefined },
];

const spendSomeMoneyBase = [
    { wealth: 500_000, amountForSpending: 120_000, return: true },
    { wealth: 100_000, amountForSpending: 120_000, return: `Not enough money! Requested amount is 120_000, but you can't spend more then 100_000` },
];

module.exports = { isRichBase, isSummerMonthBase, isPrettyGirlFriendBase, spendSomeMoneyBase };