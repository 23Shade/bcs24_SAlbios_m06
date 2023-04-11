// Function for Odd/Even Checker
function oddEvenChecker(num) {
    typeof num !== 'number' 
    ? console.log('Invalid Input.') 
    : num % 2 === 0 
        ? console.log('The number is even.') 
        : console.log('The number is odd.');
}

// Function for Budget Checker
function budgetChecker(num) {
    typeof num !== 'number' 
    ? console.log('Invalid Input.') 
    : num > 40000 
        ? console.log('You are over the budget.') 
        : console.log('You have resources left.');
}

// Odd/Even Checker
oddEvenChecker(10); 
oddEvenChecker(12); 
oddEvenChecker('Hello'); 

// Budget Check
budgetChecker(50000); 
budgetChecker(30000); 
budgetChecker('Hi');
