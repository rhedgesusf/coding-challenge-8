//////////////////////////////////
// Task 1: Function Declaration //
//////////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Function Declaration");

// create function to calculate salary including bonus and taxes
// inputs:
//  baseSalary - the base salary amount in dollars
//  bonus - the bonus amount in dollars
//  taxRate - the tax rate in decimal format
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

// create function to price after discount applied
// inputs:
//  price - the price of the unit
//  discountRate - the discount rate in decimal format
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

// create function to calculate service fee based on service type
// inputs:
//  amount - the service charge in dollars
//  serviceType - the type of service and associated service fee percentage (Basic 5%, Standard 10%, Premium 15%)
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

// create function to calculate rental cost for an automobile
// inputs:
//  days - the # of days for the rental
//  carType - the type of car and daily rental rate (Economy $40, Standard $60, Luxury $100)
//  insurance - boolean flag if insurance was chosen
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

// create function to calculate loan payment amount
// inputs:
//  principal - the principal amount of the loan
//  rate - the interest rate on the loan (decimal format)
//  time - the years of the loan
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

// create function to filter out high value transactions from array given a filter function
// inputs:
//  transactions - an array of transactions
//  filterFunction - the function to filter out values
function filterLargeTransactions(transactions, filterFunction) {
    let filteredTransactions = transactions.filter(filterFunction);
    console.log("Filter Transactions: ", filteredTransactions)
}

let transactions = [200, 1500, 3200, 800, 2500];

filterLargeTransactions(transactions, amount => amount > 1000);

//////////////////////
// Task 7: Closures //
//////////////////////

console.log("--------------------------------------");
console.log("Task 7: Closures");

// create function to track total charge in a shopping car. The function will return a function to be used to track the charges.
function createCartTracker() {
    let totalCart = 0;
    
    // function to accumulate charges to a running total
    return function(val) {
        totalCart += val;
        return `Total Cart Value: $${totalCart}`;
    };
}

let cart = createCartTracker();
console.log(cart(20));
console.log(cart(35));

/////////////////////////////////////
// Task 8: Recursion in Javascript //
/////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 8: Recursion in Javascript");

// create function to calculate savings growth at 5% annual growth rate. Limit is 10 years
// inputs:
//  years - the current year mark
//  amount - the current savings amount
function calculateSavings(years, amount) {

    // process savings growth rate up to 10 years
    if (years < 10)
    {
        return calculateSavings(years + 1, amount * 1.05);
    }
    return amount.toFixed(2);
}

console.log(`Projected Savings(8, 1000): $${calculateSavings(8, 1000)}`);
console.log(`Projected Savings(5, 5000): $${calculateSavings(5, 5000)}`);