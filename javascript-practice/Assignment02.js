
// Q1: Dynamic Data Parser
console.log("\n--- Q1: Dynamic Data Parser ---");

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (const value of apiData) {
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log(`Value: ${stringValue}, Number: ${numberValue}, Boolean: ${booleanValue}, String: ${stringValue}`);

    if (value === null || value === undefined || String(value).trim() === "" || Number.isNaN(numberValue)) {
        invalidNumbers.push(value);
        console.log("Invalid numeric value:", value);
    } else {
        validNumbers.push(numberValue);
    }
}

console.log("Valid Numbers:", validNumbers);
console.log("Invalid Numbers:", invalidNumbers);


// Q2: Employee Bonus Calculator
console.log("\n--- Q2: Employee Bonus Calculator ---");

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (const employee of employees) {
    try {
        if (!employee.name || employee.salary === undefined || employee.years === undefined) {
            throw new Error("Missing employee property");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error("Invalid salary or years");
        }

        const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

        console.log(`${employee.name} | Salary: ₹${salary} | Experience: ${years} years | Bonus: ₹${bonus}`);
    } catch (error) {
        console.log("Employee Error:", error.message);
    }
}


// Q3: Transaction Validator
console.log("\n--- Q3: Transaction Validator ---");

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

for (const transaction of transactions) {
    try {
        if (transaction === null) {
            throw new Error("NULL_ENTRY");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new Error("MISSING_PROPERTY");
        }

        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT");
        }

        validTransactions.push(transaction);
        console.log("Valid Transaction:", transaction);
    } catch (error) {
        invalidTransactions.push({
            transaction,
            error: error.message
        });

        console.log("Invalid Transaction:", error.message, transaction);
    }
}

console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);
console.log("Successful Count:", validTransactions.length);
console.log("Failed Count:", invalidTransactions.length);


// Q4: Debugging Mystery
console.log("\n--- Q4: Debugging Mystery ---");

function showMessage() {
    const greeting = "Welcome";
    console.log(greeting);
}

showMessage();


// Q5: Hoisting Lab
console.log("\n--- Q5: Hoisting Lab ---");

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

const announceArrow = () => console.log("Game started using arrow function");
const startGameArrow = () => console.log(status);

announceArrow();
startGameArrow();


// Q6: Pyramid Pattern Generator
console.log("\n--- Q6: Pyramid Pattern Generator ---");

const userInput = 5;
const limit = Number.isInteger(userInput) && userInput > 0 ? userInput : 5;

for (let i = 1; i <= limit; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern.trim());
}

for (var i = 1; i <= 4; i++) {
    var pattern = "";

    for (var j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log("Var Pattern:", pattern.trim());
}


// Q7: Smart Calculator
console.log("\n--- Q7: Smart Calculator ---");

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Invalid operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;

        case "divide":
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;

        case "power":
            return Math.pow(a, b);

        case "root":
            if (a < 0) {
                throw new Error("Cannot calculate square root of a negative number");
            }
            return Math.sqrt(a);

        case "subtract":
            return a - b;

        default:
            throw new InvalidOperationError(operation);
    }
}

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation} Error: ${error.message}`);
    }
}


// Q8: Strict Mode Showdown
console.log("\n--- Q8: Strict Mode Showdown ---");

function strictModeDemo(a, b) {
    const total = 10;
    console.log("Parameters:", a, b);
    console.log("Total:", total);
}

strictModeDemo(5, 10);


// Q9: JSON Audit
console.log("\n--- Q9: JSON Audit ---");

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const parsedData = JSON.parse(rawData[i]);

        if (parsedData.user === undefined || parsedData.age === undefined) {
            throw new Error("Missing user or age");
        }

        const age = Number(parsedData.age);

        if (!Number.isFinite(age)) {
            throw new Error("Invalid age");
        }

        const user = {
            ...parsedData,
            age
        };

        cleanData.push(user);
        console.log(`Line ${i + 1}: Valid JSON`, user);
    } catch (error) {
        console.log(`Line ${i + 1}: Error - ${error.message}`);
    }
}

const adults = cleanData.filter(user => user.age >= 18);
const under18Users = cleanData.filter(user => user.age < 18);

console.log("Clean Data:", cleanData);
console.log("Adult Users:", adults);
console.log("Under-18 Users:", under18Users);


// Q10: Nested Hoisting and Closures
console.log("\n--- Q10: Nested Hoisting and Closures ---");

function outer() {
    console.log("Outer count before initialization:", count);

    var count = 5;

    function inner() {
        console.log("Inner count before initialization:", count);

        var count = 10;

        console.log("Inner count after initialization:", count);
    }

    inner();

    const innerArrow = () => {
        console.log("Arrow function outer count:", count);
    };

    innerArrow();
    console.log("Outer count after inner:", count);
}

outer();

