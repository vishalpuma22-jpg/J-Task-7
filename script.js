"use strict";

// ==========================================
// PART 1: ARRAY HIGHER-ORDER METHODS
// ==========================================

// Task 1: forEach() - Print 10 numbers
console.log("\nTASK 1");
const arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
arr1.forEach(num => console.log(num));

// Task 2: map() - Multiply each number by 5
console.log("\nTASK 2");
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.map(num => num * 5));

// Task 3: filter() - Numbers greater than 20
console.log("\nTASK 3");
const arr3 = [10, 20, 25, 30, 40, 50];
console.log(arr3.filter(num => num > 20));

// Employee array for Tasks 4, 5 and 36
const employees = [
    { name: "Arun", salary: 150000 },
    { name: "Priya", salary: 250000 },
    { name: "Kumar", salary: 350000 },
    { name: "Divya", salary: 200000 },
    { name: "Ravi", salary: 400000 }
];

// Task 4: Employees earning <= Rs. 300000
console.log("\nTASK 4");
console.log(employees.filter(emp => emp.salary <= 300000));

// Task 5: First employee earning more than Rs. 200000
console.log("\nTASK 5");
console.log(employees.find(emp => emp.salary > 200000));

// Task 6: reduce() - Calculate total
console.log("\nTASK 6");
const arr6 = [10, 20, 30, 40, 50];
console.log(arr6.reduce((total, num) => total + num, 0));

// Task 7: some() - Check for an even number
console.log("\nTASK 7");
const arr7 = [1, 3, 5, 8, 9];
console.log(arr7.some(num => num % 2 === 0));

// Task 8: every() - All numbers greater than zero
console.log("\nTASK 8");
const arr8 = [5, 10, 15, 20];
console.log(arr8.every(num => num > 0));

// Task 9: sort() - Ascending order
console.log("\nTASK 9");
const arr9 = [50, 10, 40, 20, 30];
console.log([...arr9].sort((a, b) => a - b));

// Task 10: sort() - Descending order
console.log("\nTASK 10");
const arr10 = [50, 10, 40, 20, 30];
console.log([...arr10].sort((a, b) => b - a));


// ==========================================
// PART 2: STRING METHODS
// ==========================================

// Task 11: charAt() - Character at index 4
console.log("\nTASK 11");
const str11 = "javascript";
console.log(str11.charAt(4));

// Task 12: charCodeAt() - Character code at index 2
console.log("\nTASK 12");
console.log(str11.charCodeAt(2));

// Task 13: trim() - Remove extra spaces
console.log("\nTASK 13");
const str13 = "   Welcome to JavaScript   ";
console.log(str13.trim());

// Task 14: Uppercase and lowercase
console.log("\nTASK 14");
const str14 = "Welcome JavaScript";
console.log(str14.toUpperCase());
console.log(str14.toLowerCase());

// Task 15: includes() - Check for "script"
console.log("\nTASK 15");
const str15 = "I am learning JavaScript";
console.log(str15.includes("script"));

// Task 16: startsWith() and endsWith()
console.log("\nTASK 16");
const str16 = "JavaScript";
console.log(str16.startsWith("Java"));
console.log(str16.endsWith("Script"));

// Task 17: replaceAll() - Replace java with python
console.log("\nTASK 17");
const str17 = "java is easy and java is useful";
console.log(str17.replaceAll("java", "python"));

// Task 18: split() - Convert string into an array
console.log("\nTASK 18");
const str18 = "html-css-javascript-react";
console.log(str18.split("-"));

// Task 19: join() - Convert names into a string
console.log("\nTASK 19");
const names19 = ["Arun", "Priya", "Kumar", "Divya"];
console.log(names19.join(","));

// Task 20: slice() - Extract part of a string
console.log("\nTASK 20");
const str20 = "JavaScript Programming";
console.log(str20.slice(0, 10));


// ==========================================
// PART 3: DATE METHODS
// ==========================================

// Task 21: Current year, month, date and day
console.log("\nTASK 21");
const today = new Date();
console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Date:", today.getDate());
console.log("Day:", today.getDay());

// Task 22: Display current month name
console.log("\nTASK 22");
const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];
console.log(months[today.getMonth()]);

// Task 23: Current hours, minutes and seconds
console.log("\nTASK 23");
console.log("Hours:", today.getHours());
console.log("Minutes:", today.getMinutes());
console.log("Seconds:", today.getSeconds());

// Task 24: Set year 2003, January and date 30
console.log("\nTASK 24");
const customDate = new Date();
customDate.setDate(1);
customDate.setFullYear(2003);
customDate.setMonth(0);
customDate.setDate(30);
console.log(customDate.toDateString());


// ==========================================
// PART 4: ASYNCHRONOUS JAVASCRIPT
// ==========================================

// Task 25: Print after 3 seconds
console.log("\nTASK 25");
setTimeout(() => {
    console.log("Welcome to JavaScript");
}, 3000);

// Task 26 and Task 27: Interval and stop after 8 seconds
console.log("\nTASK 26 AND TASK 27");
const intervalId = setInterval(() => {
    console.log("Learning JavaScript");
}, 2000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped after 8 seconds");
}, 8000);

// Task 28: Observe output order
console.log("\nTASK 28");
function one() {
    console.log("One");
}

function two() {
    console.log("Two");
}

function three() {
    console.log("Three");
}

one();
setTimeout(two, 0);
three();


// ==========================================
// PART 5: PROMISES AND API FETCHING
// ==========================================

// Task 29: Promise resolve using then()
console.log("\nTASK 29");
new Promise(resolve => {
    resolve("Login successful");
}).then(message => {
    console.log(message);
});

// Task 30: Promise reject using catch()
console.log("\nTASK 30");
new Promise((resolve, reject) => {
    reject("Invalid password");
}).catch(error => {
    console.log(error);
});

// Task 31: finally() - Process completed
console.log("\nTASK 31");
Promise.resolve("Promise resolved")
    .then(message => console.log(message))
    .catch(error => console.log(error))
    .finally(() => console.log("Process completed"));

// API URL used for Tasks 32-35 and 37-38, 40
const apiURL = "https://fakestoreapi.com/products";

// Task 32: Print all product titles
console.log("\nTASK 32");
fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then(products => {
        products.forEach(product => console.log(product.title));
    })
    .catch(error => console.warn(error.message));

// Task 33: Print title, price and category
console.log("\nTASK 33");
fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            console.log(
                "Title:", product.title,
                "Price:", product.price,
                "Category:", product.category
            );
        });
    })
    .catch(error => console.warn(error.message));

// Task 34: Handle API errors using catch()
console.log("\nTASK 34");
fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error("API request failed");
        }
        return response.json();
    })
    .then(products => console.log("Products received:", products.length))
    .catch(error => console.warn("API Error:", error.message));

// Task 35: finally() - API call completed
console.log("\nTASK 35");
fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error("API request failed");
        }
        return response.json();
    })
    .then(products => console.log("Products received:", products.length))
    .catch(error => console.warn("API Error:", error.message))
    .finally(() => console.log("API call completed"));


// ==========================================
// PART 6: REAL-TIME MINI TASKS
// ==========================================

// Task 36: Employee salary report
console.log("\nTASK 36");
employees
    .filter(emp => emp.salary < 300000)
    .forEach(emp => {
        console.log("Name:", emp.name, "Salary:", emp.salary);
    });

// Task 37: Product price calculator
console.log("\nTASK 37");
fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then(products => {
        const productPrices = products.map(product => ({
            title: product.title,
            price: product.price
        }));
        console.log(productPrices);
    })
    .catch(error => console.warn(error.message));

// Task 38: Product search using filter()
console.log("\nTASK 38");
fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then(products => {
        const category = "electronics";
        const filteredProducts = products.filter(
            product => product.category === category
        );
        console.log("Category:", category);
        console.log(filteredProducts);
    })
    .catch(error => console.warn(error.message));

// Task 39: Number analysis
console.log("\nTASK 39");
const numbers39 = [5, 10, 15, 20, 25, 30];

console.log("Original:", numbers39);
console.log("Doubled:", numbers39.map(num => num * 2));
console.log("Greater than 15:", numbers39.filter(num => num > 15));
console.log("Total:", numbers39.reduce((sum, num) => sum + num, 0));
console.log("Has number above 25:", numbers39.some(num => num > 25));
console.log("All numbers positive:", numbers39.every(num => num > 0));

// Task 40: Product listing with catch() and finally()
console.log("\nTASK 40");
fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch product listing");
        }
        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            console.log(
                "Title:", product.title,
                "Price:", product.price,
                "Category:", product.category
            );
        });
    })
    .catch(error => console.warn("Error:", error.message))
    .finally(() => console.log("Product listing completed"));