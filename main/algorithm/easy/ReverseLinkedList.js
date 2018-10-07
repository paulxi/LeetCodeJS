const reverseList = function(head) {
    // if (!head || !head.next) {
    //     return head;
    // }
    //
    // const result = reverseList(head.next);
    // head.next.next = head;
    // head.next = null;
    // return result;

    let curr = head;
    let prev = null;
    while (curr) {
        const temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
};

module.exports = reverseList;