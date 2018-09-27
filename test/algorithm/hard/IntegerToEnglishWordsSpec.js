const expect = require('chai').expect;
const numberToWords
    = require('../../../main/algorithm/hard/IntegerToEnglishWords');

describe('Integer to English Words', function() {
    it('case 1', function() {
        expect(numberToWords(123)).to.equal('One Hundred Twenty Three');
    });

    it('case 2', function() {
        expect(numberToWords(12345)).to.equal('Twelve Thousand Three Hundred Forty Five');
    });

    it('case 3', function() {
        expect(numberToWords(1234567)).to.equal('One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven');
    });

    it('case 4', function() {
        expect(numberToWords(1234567891)).to.equal('One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One');
    });
});