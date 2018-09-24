const expect = require('chai').expect;
const LRUCache = require('../../../main/algorithm/hard/LRUCache');

describe('LRU Cache', function() {
    it('case 1', function() {
        const cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        expect(cache.get(1)).to.equal(1);
        cache.put(3, 3);
        expect(cache.get(2)).to.equal(-1);
        cache.put(4, 4);
        expect(cache.get(1)).to.equal(-1);
        expect(cache.get(3)).to.equal(3);
        expect(cache.get(4)).to.equal(4);
    });
});