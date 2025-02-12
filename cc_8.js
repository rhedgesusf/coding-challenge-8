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

////////////////////////////
// Task 3: Arrow Function //
////////////////////////////

console.log("--------------------------------------");
console.log("Task 3: Arrow Function");

const calculateServiceFee = (amount, serviceType) => {
    let feeRates = { "Basic": .05, "Standard": .1, "Premium": .15 };
    let fee = feeRates[serviceType] * amount;
    
    console.log(`Service Fee:  $${fee.toFixed(2)}`);
};

calculateServiceFee(200, "Premium");
calculateServiceFee(500, "Standard"); 

//////////////////////////////////////
// Task 4: Parameters and Arguments //
//////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 4: Parameters and Arguments");

function calculateRentalCost(days, carType, insurance = false) {
    let rentRates = { "Economy": 40, "Standard": 60, "Luxury": 100 }
    let cost = (days * rentRates[carType]);
    if (insurance) {
        cost += days * 20;
    }
    console.log(`Total Rental Cost: $${cost.toFixed(2)}`) 
}

calculateRentalCost(3, "Economy", true);
calculateRentalCost(5, "Luxury", false);

//////////////////////////////
// Task 5: Returning Values //
//////////////////////////////

console.log("--------------------------------------");
console.log("Task 5: Returning Values");

function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    console.log(`Total Payment: $${totalPayment.toFixed(2)}`)
    return totalPayment; // returning value because instructions say "return loan payment"
}

calculateLoanPayment(1000, 0.05, 2);
calculateLoanPayment(5000, 0.07, 3);

////////////////////////////////////
// Task 6: Higher-Order Functions //
////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 6: Higher-Order Functions");

function filterLargeTransactions(transactions, filterFunction) {
    let filteredTransactions = transactions.filter(filterFunction);
    console.log(`Filter Transactions: `, filteredTransactions)
}

let transactions = [200, 1500, 3200, 800, 2500];

filterLargeTransactions(transactions, amount => amount > 1000);