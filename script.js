// Part 1: Variables and Conditionals
console.log("Winagode Systems");

// Get elements from the DOM
const nameInput = document.getElementById("name");
const greetButton = document.getElementById("greetButton");
const greetingOutput = document.getElementById("greeting");

greetButton.addEventListener("click", function () {
    const name = nameInput.value;
    if (name) {
        greetingOutput.textContent = "Welcome, " + name + "!";
    } else {
        greetingOutput.textContent = "Please Enter Your Name.";
    }
});


// Part 2: Functions
const profitInput = document.getElementById("profit");
const bonusInput = document.getElementById("bonus");
const totalIncomeButton = document.getElementById("totalIncomeButton");
const totalIncomeOutput = document.getElementById("totalIncome");

function calculateIncome(a, b) {
    return Number(a) + Number(b); // Convert to numbers
}

function displayMessage(message, element) {
    element.textContent = message;
}

totalIncomeButton.addEventListener("click", function () {
    const profit = profitInput.value;
    const bonus = bonusInput.value;
    const totalIncome = calculateIncome(profit, bonus);
    displayMessage("The Total Income is: " + totalIncome, totalIncomeOutput);
});


// Part 3: Loops
const loopList = document.getElementById("loopList");

// Example 1: For Loop
for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = "Item " + i;
    loopList.appendChild(listItem);
}

// Example 2: While Loop
let count = 0;
while (count < 3) {
    const listItem = document.createElement("li");
    listItem.textContent = "While Loop Item " + (count + 1);
    loopList.appendChild(listItem);
    count++;
}

// Part 4: DOM Manipulation
const toggleButton = document.getElementById("toggleButton");
const toggleTarget = document.getElementById("toggleTarget");
const dynamicList = document.getElementById("dynamicList");
const addButton = document.getElementById("addButton");

toggleButton.addEventListener("click", function () {
    toggleTarget.classList.toggle("highlighted");
});


let itemCount = 1; // Track the number of items added dynamically
addButton.addEventListener("click", function () {
    const newListItem = document.createElement("li");
    newListItem.textContent = "Dynamic Item " + itemCount;
    dynamicList.appendChild(newListItem);
    itemCount++;
});
