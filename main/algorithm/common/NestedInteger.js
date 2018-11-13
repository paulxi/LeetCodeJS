class NestedInteger {
    constructor(...values) {
        if (values.length === 1 && typeof values[0] === 'number') {
            this.intValue = values[0];
        } else {
            this.list = values;
        }
    }

    isInteger() {
        return !this.list;
    }

    getInteger() {
        return this.intValue;
    }

    getList() {
        return this.list;
    }
}

module.exports = NestedInteger;