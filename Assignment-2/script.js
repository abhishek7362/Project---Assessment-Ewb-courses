let billAmount = Number(prompt("Enter the bill amount:"));
let tipPercentage = Number(prompt("Enter the tip percentage:"));

let calculatedTip = (billAmount * tipPercentage) / 100;
let totalAmount = billAmount;
totalAmount += calculatedTip;

console.log(`Subtotal: $${billAmount}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${calculatedTip}`);
console.log(`Total Amount to Pay: $${totalAmount}`);