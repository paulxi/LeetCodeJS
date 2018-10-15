const expect = require('chai').expect;
const isPalindrome = require('../../../main/algorithm/easy/PalindromeNumber');

describe('Palindrome Number', function () {
    it('121 should return true', function () {
        expect(isPalindrome(121)).to.equal(true);
    });

    it('-121 should return false', function () {
        expect(isPalindrome(-121)).to.equal(false);
    });

    it('10 should return true', function () {
        expect(isPalindrome(10)).to.equal(false);
    });
});