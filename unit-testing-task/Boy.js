class Boy {
  constructor(birthdayMonth, wealth) {
    this._birthdayMonth = birthdayMonth;
    this._wealth = wealth;
  }

  get birthdayMonth() {
    return this._birthdayMonth;
  }

  set birthdayMonth(birthdayMonth) {
    this._birthdayMonth = birthdayMonth;
  }

  get wealth() {
    return this._wealth;
  }

  set wealth(wealth) {
    this._wealth = wealth;
  }

  get girlFriend() {
    return this._girlFriend;
  }

  set girlFriend(girlFriend) {
    this._girlFriend = girlFriend;
  }

  //this method don't return EXCELLENT and GOOD. Need fix isSummerMonth and change place neutral block
  getMood() {
    if (this.isRich() && this.isPrettyGirlFriend() && this.isSummerMonth()) {
      return 'EXCELLENT';
    } else if (this.isRich() || this.isSummerMonth() || this.isPrettyGirlFriend()) {
      return 'NEUTRAL';
    } else if (this.isRich() && this.isPrettyGirlFriend()) {
      return 'GOOD';
    } else {
      return 'BAD';
    }
  }

  //this.wealth is not a function
  spendSomeMoney(amountForSpending) {
    if (amountForSpending <= this.wealth()) {
      this.wealth += amountForSpending;
    } else {
      throw new Error(`Not enough money! Requested amount is ${amountForSpending}, but you can't spend more then ${this.wealth}`);
    }
  }

  //don't work. return false, but need true. Need add to all .toUpperCase and need all || 
  isSummerMonth() {
    return this.birthdayMonth.toLowerCase() === 'JUNE' || this.birthdayMonth.toUpperCase() === 'JULY' && this.birthdayMonth.toUpperCase() === 'AUGUST';
  }

  isRich() {
    return this.wealth >= 100_000;
  }

  isPrettyGirlFriend() {
    return this.girlFriend?.isPretty;
  }
}

module.exports = { Boy };