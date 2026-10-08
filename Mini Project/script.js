const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

console.log("--- Initializing Inventory System");

let newName = "";
let newPrice = 0;

while (true) {
    newName = prompt("Enter product name (e.g., Monitor):");
    let priceInput = prompt("Enter product price (e.g., 150):");

    newPrice = Number(priceInput);

    if (!newName || isNaN(newPrice) || newPrice <= 0) {
        alert("Invalid input! Please enter a valid name and positive numerical price.");
        continue;
    } else {
        break;
    }
}

inventory.push({ name: newName, price: newPrice });
console.log(`[Prompt executed: User adds "${newName}" at "$${newPrice}"]`);

function getCategoryBadge(price) {
    let categoryKey;

    if (price >= 500) {
        categoryKey = "PREMIUM";
    } else if (price >= 100) {
        categoryKey = "STANDARD";
    } else {
        categoryKey = "BUDGET";
    }

    switch (categoryKey) {
        case "PREMIUM":
            return "Premium";
        case "STANDARD":
            return "Standard";
        case "BUDGET":
            return "Budget";
        default:
            return "General";
    }
}

console.log("---Processing Inventory Roster (forEach)---");
inventory.forEach((item) => {
    const category = getCategoryBadge(item.price);
    console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${category}`);
});

console.log("---Financial Analytics---");

function calculateTotalValue(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    return total;
}

const totalInventoryValue = calculateTotalValue(inventory);
console.log(`Total Inventory Value: $${totalInventoryValue}`);

const affordableItemNames = inventory
    .filter((item) => item.price < 200)
    .map((item) => item.name);

console.log("Filtered Affordable Items (Under $200):");
console.log(affordableItemNames);

const formattedReportList = inventory.map(
    (item) => `${item.name.toUpperCase()}: $${item.price}`
);

console.log("Formatted Report List:");
console.log(formattedReportList);