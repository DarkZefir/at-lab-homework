class Girl {
  constructor(isPretty, isSlimFriendGotAFewKilos) {
    this._isPretty = isPretty;
    this._isSlimFriendGotAFewKilos = isSlimFriendGotAFewKilos;
  }

  get isPretty() {
    return this._isPretty;
  }

  set isPretty(isPretty) {
    this._isPretty = isPretty;
  }

  get isSlimFriendGotAFewKilos() {
    return this._isSlimFriendGotAFewKilos;
  }

  set isSlimFriendGotAFewKilos(isSlimFriendGotAFewKilos) {
    this._isSlimFriendGotAFewKilos = isSlimFriendGotAFewKilos;
  }

  get boyFriend() {
    return this._boyFriend;
  }

  set boyFriend(boyFriend) {
    this._boyFriend = boyFriend;
  }

  //need remove '!' in EXCELLENT, GOOD mod - isPretty not a function and isBoyfriendRich(),
  // in NEUTRAL need '!' and need fix isSlimFriendBecameFat.
  getMood() {
    if (!this.isBoyFriendWillBuyNewShoes()) {
      return 'EXCELLENT';
    } else if (this.isPretty() || this.isBoyfriendRich()) {
      return 'GOOD';
    } else if (this.isSlimFriendBecameFat()) {
      return 'NEUTRAL';
    } else {
      return 'BAD';
    }
  }

  // need fix isBoyfriendRich and need return
  spendBoyFriendMoney(amountForSpending) {
    if (this.isBoyfriendRich()) {
      this.boyFriend.spendSomeMoney(amountForSpending);
    }
  }

  // need delete '!'
  isBoyfriendRich() {
    return !this.boyFriend?.isRich();
  }

  // need fix isBoyfriendRich
  isBoyFriendWillBuyNewShoes() {
    return this.isBoyfriendRich() && this.isPretty;
  }

  // isSlimFriendGotAFewKilos not a function and don't need '!'
  isSlimFriendBecameFat() {
    return this.isSlimFriendGotAFewKilos() && !this.isPretty;
  }
}

module.exports = { Girl };
