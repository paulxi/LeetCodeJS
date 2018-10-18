const expect = require('chai').expect;
const licenseKeyFormatting = require('../../../main/algorithm/easy/LicenseKeyFormatting');

describe('License Key Formatting', function() {
    it('S = "5F3Z-2e-9-w", K = 4 should return "5F3Z-2E9W"', function() {
        expect(licenseKeyFormatting('5F3Z-2e-9-w', 4)).to.equal('5F3Z-2E9W');
    });

    it('S = "2-5g-3-J", K = 2 should return "2-5G-3J"', function() {
        expect(licenseKeyFormatting('2-5g-3-J', 2)).to.equal('2-5G-3J');
    });

    it('S = "-5g-3-J", K = 2 should return "5G-3J"', function() {
        expect(licenseKeyFormatting('-5g-3-J', 2)).to.equal('5G-3J');
    });
});