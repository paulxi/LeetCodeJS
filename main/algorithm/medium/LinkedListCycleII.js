const detectCycle = function(head) {
    let fast = head;
    let slow = head;
    let intersect = null;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            intersect = slow;
            break;
        }
    }

    if (intersect === null) {
        return null;
    }

    let ptr = head;
    while (ptr !== intersect) {
        ptr = ptr.next;
        intersect = intersect.next;
    }

    return ptr;
};

module.exports = detectCycle;