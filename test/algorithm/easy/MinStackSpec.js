const expect = require('chai').expect;
const MinStack = require('../../../main/algorithm/easy/MinStack');

describe('Min Stack', function () {
    it('Min Stack should work', function () {
        const minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        expect(minStack.getMin()).to.equal(-3);
        minStack.pop();
        expect(minStack.top()).to.equal(0);
        expect(minStack.getMin()).to.equal(-2);
    });
});