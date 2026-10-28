

console.log("Q1. Personalized Login Greeting");

let userName = "Priyanshu";
let currentHour = new Date().getHours();

if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}


console.log("\nQ2. Multi-Type Data Summary");

let userString = "Priyanshu";
let userNumber = 21;
let userBoolean = true;
let userArray = [10, 20, 30];
let userObject = { name: "Priyanshu", age: 21 };
let userNull = null;
let userUndefined;

console.table([
    { Label: "String", Value: userString, Type: typeof userString },
    { Label: "Number", Value: userNumber, Type: typeof userNumber },
    { Label: "Boolean", Value: userBoolean, Type: typeof userBoolean },
    { Label: "Array", Value: JSON.stringify(userArray), Type: Array.isArray(userArray) ? "array" : typeof userArray },
    { Label: "Object", Value: JSON.stringify(userObject), Type: typeof userObject },
    { Label: "Null", Value: userNull, Type: userNull === null ? "null" : typeof userNull },
    { Label: "Undefined", Value: userUndefined, Type: typeof userUndefined }
]);


console.log("\nQ3. Monthly Expense Tracker");

let expenses = {
    food: 5000,
    travel: 2000,
    rent: 8000,
    bills: 1500,
    leisure: 2500
};

let totalExpense = 0;

totalExpense += expenses.food;
totalExpense += expenses.travel;
totalExpense += expenses.rent;
totalExpense += expenses.bills;
totalExpense += expenses.leisure;

let averageExpense = totalExpense / Object.keys(expenses).length;
let tax = totalExpense * 0.10;
let finalAmount = totalExpense;
finalAmount += tax;

console.log("Total Expense: ₹" + totalExpense.toFixed(2));
console.log("Average Expense: ₹" + averageExpense.toFixed(2));
console.log("Tax (10%): ₹" + tax.toFixed(2));
console.log("Final Amount: ₹" + finalAmount.toFixed(2));


console.log("\nQ4. Academic Performance Evaluator");

let marks = [90, 85, 78, 88, 92];
let totalMarks = 0;
let hasFailed = false;

for (let mark of marks) {
    totalMarks += mark;

    if (mark < 35) {
        hasFailed = true;
    }
}

let averageMarks = totalMarks / marks.length;
let percentage = (totalMarks / (marks.length * 100)) * 100;

console.log("Average Marks: " + averageMarks.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");

if (hasFailed || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
} else {
    console.log("Detained");
}


console.log("\nQ5. Weather Activity Planner");

let temperature = 28;
let isRaining = false;
let windSpeed = 10;

if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else if (temperature >= 15 && temperature <= 35 && windSpeed <= 20) {
    console.log("Perfect day for a walk.");
} else {
    console.log("Consider the weather before going outside.");
}


console.log("\nQ6. Progressive Discount System");

let purchaseAmount = 7500;
let discountPercentage = 0;

if (purchaseAmount >= 10000) {
    discountPercentage = 25;
} else if (purchaseAmount >= 5000) {
    discountPercentage = 15;
} else if (purchaseAmount >= 2000) {
    discountPercentage = 5;
}

let discountAmount = Math.round(purchaseAmount * discountPercentage / 100);
let finalPrice = Math.round(purchaseAmount - discountAmount);

console.log("Original Total: ₹" + purchaseAmount);
console.log("Discount: " + discountPercentage + "%");
console.log("Discount Amount: ₹" + discountAmount);
console.log("Final Price: ₹" + finalPrice);


console.log("\nQ7. Smart Guessing Game");

let secretNumber = Math.floor(Math.random() * 50) + 1;
let userGuess = 25;

console.log("Secret Number: " + secretNumber);
console.log("Your Guess: " + userGuess);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}


console.log("\nQ8. Employee Salary Projection");

let currentSalary = 30000;
let annualIncrementRate = 10;
let projectedSalary = currentSalary;
let salaryProjection = [];

for (let year = 1; year <= 5; year++) {
    projectedSalary *= (1 + annualIncrementRate / 100);
    projectedSalary = Math.round(projectedSalary);

    salaryProjection.push({
        Year: year,
        Salary: "₹" + projectedSalary.toLocaleString("en-IN")
    });
}

console.table(salaryProjection);


console.log("\nQ9. Random Math Quiz Generator");

let number1 = Math.floor(Math.random() * 20) + 1;
let number2 = Math.floor(Math.random() * 20) + 1;
let operators = ["+", "-", "*", "/"];
let randomOperator = operators[Math.floor(Math.random() * operators.length)];
let correctAnswer;

switch (randomOperator) {
    case "+":
        correctAnswer = number1 + number2;
        break;
    case "-":
        correctAnswer = number1 - number2;
        break;
    case "*":
        correctAnswer = number1 * number2;
        break;
    case "/":
        correctAnswer = number1 / number2;
        break;
}

if (randomOperator === "/") {
    correctAnswer = correctAnswer.toFixed(2);
}

console.log(`Question: ${number1} ${randomOperator} ${number2}`);
console.log("Correct Answer: " + correctAnswer);


console.log("\nQ10. Citizen Eligibility Validator");

let age = 19;
let isCitizen = true;

if (isCitizen) {
    if (age >= 18) {
        if (age >= 21) {
            console.log("Eligible for all services.");
        } else {
            console.log("Eligible to vote only.");
        }
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}
