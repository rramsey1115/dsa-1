class HashSet {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    // We'll use our HashMap implementation internally
    this.map = new HashMap(initialCapacity, loadFactor);
  }

  /**
   * Add a value to the set
   * @param {*} value - The value to add
   * @returns {boolean} True if the value was added, false if it already existed
   */
  add(value) {
    if (this.has(value)) {
      return false;
    }

    this.map.set(value, true);
    return true;
  }

  /**
   * Check if a value exists in the set
   * @param {*} value - The value to check
   * @returns {boolean} True if the value exists, false otherwise
   */
  has(value) {
    return this.map.has(value);
  }

  /**
   * Delete a value from the set
   * @param {*} value - The value to delete
   * @returns {boolean} True if deleted, false if value not found
   */
  delete(value) {
    return this.map.delete(value);
  }

  /**
   * Get the number of values in the set
   * @returns {number} The size of the set
   */
  size() {
    return this.map.getSize();
  }

  /**
   * Clear all values from the set
   */
  clear() {
    this.map.clear();
  }

  /**
   * Get all values in the set
   * @returns {Array} Array of all values
   */
  values() {
    return this.map.keys();
  }

  /**
   * Execute a function for each value in the set
   * @param {Function} callback - Function to execute for each value
   */
  forEach(callback) {
    this.map.forEach((_, value) => {
      callback(value, value, this);
    });
  }
}


//  -----------------------------------------------------------------------------------------------------------
class HashSet {
  // ... previous methods ...

  /**
   * Create a new set with all values from this set and another set
   * @param {HashSet} otherSet - The other set to union with
   * @returns {HashSet} A new set containing the union
   */
  union(otherSet) {
    const resultSet = new HashSet();

    // Add all values from this set
    this.forEach((value) => {
      resultSet.add(value);
    });

    // Add all values from the other set
    otherSet.forEach((value) => {
      resultSet.add(value);
    });

    return resultSet;
  }

  /**
   * Create a new set with values that exist in both this set and another set
   * @param {HashSet} otherSet - The other set to intersect with
   * @returns {HashSet} A new set containing the intersection
   */
  intersection(otherSet) {
    const resultSet = new HashSet();

    // Add values that exist in both sets
    this.forEach((value) => {
      if (otherSet.has(value)) {
        resultSet.add(value);
      }
    });

    return resultSet;
  }

  /**
   * Create a new set with values from this set that don't exist in another set
   * @param {HashSet} otherSet - The other set to difference with
   * @returns {HashSet} A new set containing the difference
   */
  difference(otherSet) {
    const resultSet = new HashSet();

    // Add values from this set that don't exist in the other set
    this.forEach((value) => {
      if (!otherSet.has(value)) {
        resultSet.add(value);
      }
    });

    return resultSet;
  }

  /**
   * Check if this set is a subset of another set
   * @param {HashSet} otherSet - The other set to check against
   * @returns {boolean} True if this set is a subset, false otherwise
   */
  isSubsetOf(otherSet) {
    // If this set is larger, it can't be a subset
    if (this.size() > otherSet.size()) {
      return false;
    }

    // Check if all values in this set exist in the other set
    let isSubset = true;
    this.forEach((value) => {
      if (!otherSet.has(value)) {
        isSubset = false;
      }
    });

    return isSubset;
  }
}


// ---------------------------------------------------------------------------------------------------------------------

// Create a new set
const colors = new HashSet();

// Add some values
colors.add('red');
colors.add('green');
colors.add('blue');
colors.add('red'); // Duplicate, won't be added

// Check the size
console.log(colors.size()); // 3

// Check if a value exists
console.log(colors.has('green')); // true
console.log(colors.has('yellow')); // false

// Delete a value
colors.delete('blue');
console.log(colors.size()); // 2

// Get all values
console.log(colors.values()); // ['red', 'green']

// Iterate over all values
colors.forEach(color => {
  console.log(color);
});

// Set operations
const primaryColors = new HashSet();
primaryColors.add('red');
primaryColors.add('blue');
primaryColors.add('yellow');

const secondaryColors = new HashSet();
secondaryColors.add('green');
secondaryColors.add('purple');
secondaryColors.add('orange');

// Union: all colors
const allColors = primaryColors.union(secondaryColors);
console.log(allColors.values()); // ['red', 'blue', 'yellow', 'green', 'purple', 'orange']

// Intersection: colors in both sets
const commonColors = primaryColors.intersection(colors);
console.log(commonColors.values()); // ['red']

// Difference: colors in primaryColors but not in colors
const uniqueColors = primaryColors.difference(colors);
console.log(uniqueColors.values()); // ['blue', 'yellow']