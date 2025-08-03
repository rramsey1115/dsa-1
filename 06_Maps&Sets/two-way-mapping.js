class BiMap {
  constructor() {
    this.map = new Map();
    this.reverseMap = new Map();
  }

  set(key, value) {
    this.map.set(key, value);
    this.reverseMap.set(value, key);
  }

  get(key) {
    return this.map.get(key);
  }

  getKey(value) {
    return this.reverseMap.get(value);
  }

  has(key) {
    return this.map.has(key);
  }

  hasValue(value) {
    return this.reverseMap.has(value);
  }

  delete(key) {
    const value = this.map.get(key);
    this.map.delete(key);
    this.reverseMap.delete(value);
  }

  size() {
    return this.map.size;
  }
}

// Example: Country code mapping
const countryMap = new BiMap();
countryMap.set("US", "United States");
countryMap.set("CA", "Canada");
countryMap.set("MX", "Mexico");

console.log(countryMap.get("CA")); // 'Canada'
console.log(countryMap.getKey("Mexico")); // 'MX'
