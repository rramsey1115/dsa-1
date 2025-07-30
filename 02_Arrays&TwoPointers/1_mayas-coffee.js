// ==============================
// Exercise 1: Help Maya Add Multiple Orders
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Create a function `addOrders` that helps Maya add multiple orders to her array
// The function should add: "Flat White", "Cold Brew", "Double Espresso"

function addOrders(orderList) {
  // Add the three orders to Maya's list
  const newOrders = ["Flat White", "Cold Brew", "Double Espresso"];
  for (order of newOrders) {
    orderList.push(order);
  }
  // Return the updated array
  return orderList;
}

let mayasOrders = ["Latte", "Cappuccino"];
mayasOrders = addOrders(mayasOrders);
// console.log("Maya's updated orders:", mayasOrders); // Should show all 5 orders

// ==============================
// Exercise 2: Handle Priority Orders During Rush
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Help Maya insert two VIP orders at the front of her queue
// Insert "VIP: Affogato" and "VIP: Cortado" at positions 0 and 1

// Insert both VIP orders at the beginning
// Use splice to insert "VIP: Affogato" at index 0
// Then insert "VIP: Cortado" at index 1

let rushQueue = ["Americano", "Latte", "Mocha", "Espresso"];

function insertVIP(array, vipOrders) {
  array.splice(0, 0, ...vipOrders);
  return array;
}

// console.log(
//   "Rush queue with VIP orders:",
//   insertVIP(rushQueue, ["VIP: Affogato", "VIP: Cortado"])
// );

// ==============================
// Exercise 3: Fix Multiple Order Mistakes
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Maya made some mistakes! Help her fix them:
// 1. Remove the two incorrect orders at indices 2 and 3
// 2. Update the first order from "Latter" to "Latte"

let mistakeOrders = [
  "Large Latter",
  "Cappuccino",
  "Wrong Order 1",
  "Wrong Order 2",
  "Espresso",
];
// Fix the typo in the first order
mistakeOrders[0] = "Large Latte";

// Remove the two wrong orders (indices 2 and 3)
mistakeOrders.splice(2, 2);

// console.log("Fixed orders:", mistakeOrders);

// ==============================
// Exercise 4: Create an Efficient Order Processing System
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Help Maya create a function that processes orders and shows progress
// The function should loop through all orders and print each one with its position

// Use a for...of loop or traditional for loop
function processOrders(orders) {
  let index = 0;
  let total = orders.length;
  for (let order of orders) {
    console.log(`Making order ${index + 1} of ${total}: ${order}`);
    index++;
  }
  // Print each order with format: "Making order X of Y: [order name]"
}

let afternoonOrders = ["Cappuccino", "Iced Latte", "Americano", "Mocha"];
// processOrders(afternoonOrders);
