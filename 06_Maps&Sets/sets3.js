// Union: A ∪ B (all elements from both sets)
function union(setA, setB) {
  const result = new Set(setA);
  for (const elem of setB) {
    result.add(elem);
  }
  return result;
}

// Intersection: A ∩ B (elements common to both sets)
function intersection(setA, setB) {
  const result = new Set();
  for (const elem of setA) {
    if (setB.has(elem)) {
      result.add(elem);
    }
  }
  return result;
}

// Difference: A - B (elements in A but not in B)
function difference(setA, setB) {
  const result = new Set(setA);
  for (const elem of setB) {
    result.delete(elem);
  }
  return result;
}

// Symmetric Difference: A △ B (elements in either set but not in both)
function symmetricDifference(setA, setB) {
  const result = new Set(setA);
  for (const elem of setB) {
    if (result.has(elem)) {
      result.delete(elem);
    } else {
      result.add(elem);
    }
  }
  return result;
}

// Is Subset: A ⊆ B (all elements of A are also in B)
function isSubset(setA, setB) {
  for (const elem of setA) {
    if (!setB.has(elem)) {
      return false;
    }
  }
  return true;
}

// Example usage
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

console.log([...union(setA, setB)]); // [1, 2, 3, 4, 5, 6]
console.log([...intersection(setA, setB)]); // [3, 4]
console.log([...difference(setA, setB)]); // [1, 2]
console.log([...symmetricDifference(setA, setB)]); // [1, 2, 5, 6]
console.log(isSubset(new Set([3, 4]), setA)); // true
