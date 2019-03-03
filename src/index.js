module.exports = function makeExchange(currency) {
    const dict = {'H': 50, 'Q': 25, 'D': 10, 'N': 5, 'P': 1};
    var result = {};
    if (currency <= 0) {
        return result;
    } else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        for (var value in dict) {
            if (currency >= dict[value]) {
                result[value] = Math.trunc(currency / dict[value]);
                currency = currency % dict[value];
            }
        }
        return result;
    }
};