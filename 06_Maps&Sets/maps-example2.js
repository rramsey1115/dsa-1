// Creating a new Map
const userMap = new Map();

// Adding key-value pairs
userMap.set("user123", { name: "Alice", role: "Admin" });
userMap.set("user456", { name: "Bob", role: "Editor" });
userMap.set("user789", { name: "Charlie", role: "Viewer" });

// Getting a value by key
const user = userMap.get("user456");
console.log(user); // { name: 'Bob', role: 'Editor' }

// Checking if a key exists
console.log(userMap.has("user123")); // true
console.log(userMap.has("user999")); // false

// Deleting a key-value pair
userMap.delete("user789");

// Getting the size of the map
console.log(userMap.size); // 2

// Iterating over key-value pairs
for (const [userId, userData] of userMap) {
  console.log(`${userId}: ${userData.name}, ${userData.role}`);
}

// Clearing the map
userMap.clear();
console.log(userMap.size); // 0
