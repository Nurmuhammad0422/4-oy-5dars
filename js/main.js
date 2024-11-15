// ----------- 1-rasm 
// 1-.
let person = {
    name: "Abdulloh",
    age: 19,
    job: "Logistic company",
    interest: "game",
    hobby: "sleep",
    number: "+998944683325",
    username: "AU"
};

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key} - ${value}`);
});
// 2-.
const person1 = { name: "Abdulloh", age: 19 };
const person2 = { hobby: "Volleyball", interest: "Sleep" };

const combinedPerson = Object.assign({}, person1, person2);
console.log(combinedPerson);
// 3-.
let numbers = [1, 2, 3, 4];
numbers[numbers.length - 1] += 1;
console.log(numbers);
// 4-.
let numbe = [1, 2, 3, 4];
let sum = 0;

numbe.forEach(num => {
    if (num % 2 === 0) {
        sum += num;
    } else {
        numbe.push(num);
    }
});

console.log(sum, numbe);
// 5-.
let arr4 = [1, 2, 3, 4];
[arr4[0], arr4[arr4.length - 1]] = [arr4[arr4.length - 1], arr4[0]];
console.log(arr4);
// 6-.
function addWords(arr5 = []) {
    if (arr5.length === 6) return arr5;
    let word = prompt("So'z kiriting:");
    arr5.push(word);
    return addWords(arr5);
}

let words = addWords();
console.log(words);
// 7-.
function askQuestion(arr) {
    if (arr.length >= 3) return arr;
    let answer = prompt("Savolga javob bering:");
    arr.push(answer);
    return askQuestion(arr);
}

let answers = askQuestion([]);
answers.forEach(answers => console.log(answers));

// --------------2-rasm
// 1-.
function addNumbers(arr = []) {
    if (arr.length === 5) return arr;
    let number1 = Number(prompt("Son kiriting:"));
    arr.push(number1);
    return addNumbers(arr);
}

let number1 = addNumbers();
let maxNumber = Math.max(...number1);
console.log(`Array: ${number1}, Eng katta son: ${maxNumber}`);
// 2-.
const array = [5, 6, true, null, 8];
const arr3 = [0, 2, 5, false, 6];

const mergedArr1 = [...array, ...arr3];
let sum1 = mergedArr1.reduce((acc, val) => acc + (typeof val === "number" ? val : 0), 0);
console.log(`Yig'indi: ${sum}`);
// 3-.
let number = [15, 4, 6, 5, 3, 7, 1];
let minValue = Math.min(...numbers);
let minIndices = [];

numbers.forEach((num, index) => {
    if (num === minValue) {
        minIndices.push(index);
    }
});

console.log(`Eng kichik sonning indekslari: ${minIndices}`);
// 4-.
let arr1 = [5, 4, 3, 6, 3, 7, 1];
let arr2 = [22, 4, 42, 34, 55, 67, 11, 32];

let mergedArr = [...arr1, ...arr2].sort((a, b) => a - b);
console.log(`Tartiblangan array: ${mergedArr}`);
// 5-.
let carsArr = [
    { name: "Lasetti", price: 9000 },
    { name: "Damas", price: 7800 },
    { name: "Cobalt", price: 12500 },
    { name: "Gentra", price: 14000 },
    { name: "Onix", price: 17000 }
];

carsArr.sort((a, b) => a.price - b.price || a.name.localeCompare(b.name));
console.log(carsArr);
// 6-.
let arr = ["Salom", "Raxmat"];
arr.splice(1, 0, "Yangi", "So'zlar");
console.log(arr);
// 7-.
function reverseOrCheck(value) {
    if (typeof value === "string") {
        return value.split("").reverse().join("");
    } else if (typeof value === "number" && value.toString().length > 1) {
        return "Ko'p xonali raqam";
    }
    return value;
}

console.log(reverseOrCheck("Hello"));
console.log(reverseOrCheck(12345));
