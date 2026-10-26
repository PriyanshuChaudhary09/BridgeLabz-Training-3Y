
// Q1: Salary Bonus
let bonus = 5000;

function calculateSalary() {
    let salary = 40000;
    let isPermanent = true;

    if (isPermanent) {
        salary = salary + bonus;
    }

    console.log("Final Salary:", salary);
    console.log("Bonus:", bonus);

    isPermanent = false;

    if (isPermanent) {
        salary = salary + bonus;
    }

    console.log("Updated Salary:", salary);
    console.log("Global Bonus:", bonus);
}

calculateSalary();


// Q2: String Operations
let productName = " wireless headphones PRO ";

productName = productName.trim();
productName = productName.toLowerCase();

productName = productName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

productName = productName.replace("Pro", "Pro Edition");

console.log("Product Name:", productName);
console.log("Product Name Length:", productName.length);


// Q3: Math Operations
let number = 16.75;

console.log("Rounded Number:", Math.round(number));
console.log("Square Root:", Math.sqrt(number));
console.log("Power:", Math.pow(number, 2));

let randomNumber = Math.floor(Math.random() * 41) + 10;
console.log("Random Number (10-50):", randomNumber);


// Q4: Array Operations
let marks = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

console.log("Marks:", marks);
console.log("Maximum Marks:", Math.max(...marks));
console.log("Minimum Marks:", Math.min(...marks));

let totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
let averageMarks = totalMarks / marks.length;

console.log("Average Marks:", averageMarks);

let passedMarks = marks.filter(mark => mark >= 40);
console.log("Passed Marks:", passedMarks);


// Q5: Logical Operators
let doorLocked = true;
let windowClosed = true;
let alarmOn = true;
let ownerInside = false;

if ((doorLocked && windowClosed && alarmOn) || ownerInside) {
    console.log("House is Secure");
} else {
    console.log("House is Not Secure");
}

windowClosed = false;

console.log("Window Open:", !windowClosed);
console.log("Door Locked OR Window Closed:", doorLocked || windowClosed);


// Q6: Scope and Functions
let count = 0;

function counterExample() {
    count++;
    console.log("Count after increment:", count);

    count--;
    console.log("Count after decrement:", count);

    function displayCount() {
        console.log("Current Count:", count);
    }

    displayCount();
}

counterExample();


// Q7: String Feedback Analysis
let feedback = "The product is good but the delivery was poor";

let words = feedback.trim().split(/\s+/);

console.log("Feedback:", feedback);
console.log("Word Count:", words.length);

let lowerFeedback = feedback.toLowerCase();

if (lowerFeedback.includes("bad") || lowerFeedback.includes("poor")) {
    console.log("Negative Feedback Found");
} else {
    console.log("No Negative Feedback Found");
}


// Q8: Shopping Cart Discount
let cart = [
    { name: "Laptop", category: "Electronics", price: 60000 },
    { name: "Shirt", category: "Fashion", price: 1000 },
    { name: "Headphones", category: "Electronics", price: 2000 }
];

let originalTotal = cart.reduce((total, item) => total + item.price, 0);

let discountedTotal = cart.reduce((total, item) => {
    let price = item.price;

    if (item.category === "Electronics") {
        price = price * 0.90;
    } else if (item.category === "Fashion") {
        price = price * 0.95;
    }

    return total + price;
}, 0);

if (discountedTotal > 50000) {
    discountedTotal = discountedTotal * 0.95;
}

console.log("Original Total:", originalTotal);
console.log("Total After Discount:", discountedTotal);


// Q9: FizzBuzz
let numbers = Array.from({ length: 30 }, (_, index) => index + 1);

let results = numbers.map(number => {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
});

console.log("FizzBuzz Results:", results);


// Q10: Department Ratings
let departments = [
    { name: "CSE", score: 85 },
    { name: "ECE", score: 72 },
    { name: "ME", score: 60 },
    { name: "IT", score: 92 }
];

departments.forEach(department => {
    let rating;

    if (department.score >= 90) {
        rating = "Excellent";
    } else if (department.score >= 75) {
        rating = "Good";
    } else if (department.score >= 60) {
        rating = "Average";
    } else {
        rating = "Poor";
    }

    console.log(department.name + ":", department.score, "-", rating);
});

