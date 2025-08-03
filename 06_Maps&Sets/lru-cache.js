class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    // Get value and refresh position by deleting and re-adding
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }

  put(key, value) {
    // If key exists, remove it first
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // If at capacity, remove oldest item (first item in map)
    else if (this.cache.size >= this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }

    // Add new key-value pair
    this.cache.set(key, value);
  }
}

// Example usage
const cache = new LRUCache(2);
cache.put(1, 1); // cache is {1=1}
cache.put(2, 2); // cache is {1=1, 2=2}
console.log(cache.get(1)); // returns 1, cache is now {2=2, 1=1}
cache.put(3, 3); // removes key 2, cache is {1=1, 3=3}
console.log(cache.get(2)); // returns -1 (not found)
