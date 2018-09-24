/**
 * LRU Cache
 */
class LRUCache {
    /**
     * Constructor
     * @param capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.count = 0;
        this.cache = new Map();
        this.header = {};
        this.tail = {};
        this.header.post = this.tail;
        this.tail.pre = this.header;
    }

    /**
     * get value from cachem, or -1
     * @param key
     * @returns {Number}
     */
    get(key) {
        const node = this.cache.get(key);
        if (node) {
            this.removeNode(node);
            this.addNode(node);
            return node.value;
        } else {
            return -1;
        }
    }

    /**
     * put value into cache
     * @param key
     * @param value
     */
    put(key, value) {
        let node = this.cache.get(key);
        if (node) {
            node.value = value;
            this.removeNode(node);
            this.addNode(node);
        } else {
            if (this.count == this.capacity) {
                this.cache.delete(this.tail.pre.key);
                this.removeNode(this.tail.pre);
                this.count -= 1;
            }

            node = {
              'key': key,
              'value': value
            };
            this.addNode(node);
            this.cache.set(key, node);
            this.count += 1;
        }
    }

    /**
     * add node next to header
     * @param node
     */
    addNode(node) {
        this.header.post.pre = node;
        node.post = this.header.post;
        this.header.post = node;
        node.pre = this.header;
    }

    /**
     * remove node
     * @param node
     */
    removeNode(node) {
        node.pre.post = node.post;
        node.post.pre = node.pre;
    }
}

module.exports = LRUCache;
