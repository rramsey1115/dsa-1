// User database with O(1) lookup by ID
const userDatabase = new Map();

// Add users
userDatabase.set("user123", {
  name: "Alice",
  email: "alice@example.com",
  role: "admin",
});
userDatabase.set("user456", {
  name: "Bob",
  email: "bob@example.com",
  role: "editor",
});
userDatabase.set("user789", {
  name: "Charlie",
  email: "charlie@example.com",
  role: "viewer",
});

// Fast user lookup
function getUser(userId) {
  return userDatabase.has(userId) ? userDatabase.get(userId) : null;
}

// Example usage
const user = getUser("user456");
console.log(user); // { name: 'Bob', email: 'bob@example.com', role: 'editor' }
