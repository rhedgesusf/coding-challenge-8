//////////////////////////////////
// Task 1: Function Declaration //
//////////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Function Declaration");

function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    console.log(`Net Salary: $${netSalary.toFixed(2)}`);    
}

calculateSalary(5000, 500, 0.1);
calculateSalary(7000, 1000, 0.15);

/////////////////////////////////
// Task 2: Function Expression //
/////////////////////////////////

console.log("--------------------------------------");
console.log("Task 2: Function Expression");

const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    console.log(`Final Price: $${finalPrice.toFixed(2)}`)
}

calculateDiscount(100, 0.2);
calculateDiscount(250, 0.15);