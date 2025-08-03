function groupBy(array, keyFunc) {
  const groups = new Map();

  for (const item of array) {
    const key = keyFunc(item);

    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push(item);
  }

  return groups;
}

// Example: Group people by age
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "Dave", age: 30 },
  { name: "Eve", age: 35 },
];

const peopleByAge = groupBy(people, (person) => person.age);

console.log(peopleByAge.get(25)); // [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }]
console.log(peopleByAge.get(30)); // [{ name: 'Bob', age: 30 }, { name: 'Dave', age: 30 }]
