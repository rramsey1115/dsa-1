class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
    this.loadFactor = loadFactor;
    this.size = 0;
  }

  /**
   * Hash function to convert key to index
   * @param {string} key - The key to hash
   * @returns {number} The index in the buckets array
   */
  hash(key) {
    const stringKey = String(key);
    let hash = 0;

    for (let i = 0; i < stringKey.length; i++) {
      hash = (hash * 31 + stringKey.charCodeAt(i)) % this.buckets.length;
    }

    return hash;
  }

  /**
   * Set a key-value pair in the hash map
   * @param {string} key - The key
   * @param {*} value - The value to store
   */
  set(key, value) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    // Check if key already exists
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i].key === key) {
        this.buckets[index][i].value = value;
        return;
      }
    }

    // Key doesn't exist, add new entry
    this.buckets[index].push({ key, value });
    this.size++;

    // Check if resize is needed
    if (this.size > this.buckets.length * this.loadFactor) {
      this.resize();
    }
  }

  /**
   * Get a value by key
   * @param {string} key - The key to look up
   * @returns {*} The value, or undefined if key not found
   */
  get(key) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      return undefined;
    }

    for (const entry of this.buckets[index]) {
      if (entry.key === key) {
        return entry.value;
      }
    }

    return undefined;
  }

  /**
   * Check if a key exists in the hash map
   * @param {string} key - The key to check
   * @returns {boolean} True if the key exists, false otherwise
   */
  has(key) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      return false;
    }

    for (const entry of this.buckets[index]) {
      if (entry.key === key) {
        return true;
      }
    }

    return false;
  }

  /**
   * Delete a key-value pair from the hash map
   * @param {string} key - The key to delete
   * @returns {boolean} True if deleted, false if key not found
   */
  delete(key) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      return false;
    }

    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i].key === key) {
        this.buckets[index].splice(i, 1);
        this.size--;
        return true;
      }
    }

    return false;
  }

  /**
   * Get the number of key-value pairs in the hash map
   * @returns {number} The size of the hash map
   */
  getSize() {
    return this.size;
  }

  /**
   * Clear all entries from the hash map
   */
  clear() {
    this.buckets = new Array(this.buckets.length);
    this.size = 0;
  }

  /**
   * Resize the hash map when it gets too full
   * @private
   */
  resize() {
    const oldBuckets = this.buckets;
    this.buckets = new Array(oldBuckets.length * 2);
    this.size = 0;

    for (const bucket of oldBuckets) {
      if (bucket) {
        for (const entry of bucket) {
          this.set(entry.key, entry.value);
        }
      }
    }
  }

  /**
   * Get all keys in the hash map
   * @returns {Array} Array of all keys
   */
  keys() {
    const allKeys = [];

    for (const bucket of this.buckets) {
      if (bucket) {
        for (const entry of bucket) {
          allKeys.push(entry.key);
        }
      }
    }

    return allKeys;
  }

  /**
   * Get all values in the hash map
   * @returns {Array} Array of all values
   */
  values() {
    const allValues = [];

    for (const bucket of this.buckets) {
      if (bucket) {
        for (const entry of bucket) {
          allValues.push(entry.value);
        }
      }
    }

    return allValues;
  }

  /**
   * Get all entries in the hash map
   * @returns {Array} Array of [key, value] pairs
   */
  entries() {
    const allEntries = [];

    for (const bucket of this.buckets) {
      if (bucket) {
        for (const entry of bucket) {
          allEntries.push([entry.key, entry.value]);
        }
      }
    }

    return allEntries;
  }

  /**
   * Execute a function for each entry in the hash map
   * @param {Function} callback - Function to execute for each entry
   */
  forEach(callback) {
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const entry of bucket) {
          callback(entry.value, entry.key, this);
        }
      }
    }
  }
}


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Create a new hash map
const userMap = new HashMap();

// Add some users
userMap.set('user123', { name: 'Alice', role: 'Admin' });
userMap.set('user456', { name: 'Bob', role: 'Editor' });
userMap.set('user789', { name: 'Charlie', role: 'Viewer' });

// Get a user
const user = userMap.get('user456');
console.log(user); // { name: 'Bob', role: 'Editor' }

// Check if a user exists
console.log(userMap.has('user123')); // true
console.log(userMap.has('user999')); // false

// Delete a user
userMap.delete('user789');
console.log(userMap.getSize()); // 2

// Get all keys
console.log(userMap.keys()); // ['user123', 'user456']

// Iterate over all entries
userMap.forEach((value, key) => {
  console.log(`${key}: ${value.name}, ${value.role}`);
});