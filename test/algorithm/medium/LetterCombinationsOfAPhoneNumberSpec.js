const expect = require('chai').expect;
const letterCombinations =
    require('../../../main/algorithm/medium/LetterCombinationsOfAPhoneNumber');

describe('Letter Combinations of a Phone Number', function() {
    it('"23" should return ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]', function() {
        expect(letterCombinations('23')).to.deep.equal(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
    });
});