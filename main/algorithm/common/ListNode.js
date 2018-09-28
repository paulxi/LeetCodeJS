/**
 * list node class
 */
class ListNode {
    /**
     * constructor
     * @param {integer} val
     */
    constructor(val) {
        this.val = val;
        this.next = null;
    }

    /**
     * toString
     * @return {string}
     */
    toString() {
        if (this.next) {
            return `${this.val} -> ${this.next.toString()}`;
        }
        return `${this.val}`;
    }
}

module.exports = ListNode;
