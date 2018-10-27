const totalFruit = function (tree) {
    let ans = 0;
    let ptr = 0;
    let count = new Map();

    for (let i = 0; i < tree.length; i++) {
        const type = tree[i];
        if (count.has(type)) {
            count.set(type, count.get(type) + 1);
        } else {
            count.set(type, 1);
        }

        while (count.size > 2) {
            const ptrType = tree[ptr];
            count.set(ptrType, count.get(ptrType) - 1);
            if (count.get(ptrType) === 0) {
                count.delete(ptrType);
            }
            ptr += 1;
        }

        ans = Math.max(ans, i - ptr + 1);
    }

    return ans;
};

module.exports = totalFruit;