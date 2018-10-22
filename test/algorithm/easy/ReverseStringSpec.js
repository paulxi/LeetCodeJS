const expect = require('chai').expect;
const reverseString =
    require('../../../main/algorithm/easy/ReverseString');

describe('Reverse String', function() {
    it('"hello" should return "olleh"', function() {
        expect(reverseString('hello'))
            .to.equal('olleh');
    });

    it('"A man, a plan, a canal: Panama" should return "amanaP :lanac a ,nalp a ,nam A"', function() {
        expect(reverseString('A man, a plan, a canal: Panama'))
            .to.equal('amanaP :lanac a ,nalp a ,nam A');
    });
});