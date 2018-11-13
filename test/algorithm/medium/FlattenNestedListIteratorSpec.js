const expect = require('chai').expect;
const NestedInteger = require('../../../main/algorithm/common/NestedInteger');
const NestedIterator =
    require('../../../main/algorithm/medium/FlattenNestedListIterator');

describe('Flatten Nested List Iterator', function () {
    it('[[1,1],2,[1,1]] should return [1,1,2,1,1]', function () {
        let input = [];
        input.push(new NestedInteger(new NestedInteger(1), new NestedInteger(1)));
        input.push(new NestedInteger(2));
        input.push(new NestedInteger(new NestedInteger(1), new NestedInteger(1)));
        const nestedIterator = new NestedIterator(input);

        let output = [];
        while (nestedIterator.hasNext()) {
            output.push(nestedIterator.next());
        }

        expect(output).to.deep.equal([1, 1, 2, 1, 1]);
    });

    it('[1,[4,[6]]] should return [1, 4, 6]', function () {
        let input = [];
        input.push(new NestedInteger(1));
        input.push(new NestedInteger(new NestedInteger(4), new NestedInteger(new NestedInteger(6))));
        const nestedIterator = new NestedIterator(input);

        let output = [];
        while (nestedIterator.hasNext()) {
            output.push(nestedIterator.next());
        }

        expect(output).to.deep.equal([1, 4, 6]);
    });
});