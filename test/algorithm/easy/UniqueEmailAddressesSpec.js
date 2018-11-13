const expect = require('chai').expect;
const numUniqueEmails = require('../../../main/algorithm/easy/UniqueEmailAddresses');

describe('Unique Email Addresses', function() {
    it('should return 2 numbers', function() {
        const emails = ['test.email+alex@leetcode.com',
            'test.e.mail+bob.cathy@leetcode.com',
            'testemail+david@lee.tcode.com'];
        expect(numUniqueEmails(emails)).to.equal(2);
    });
});