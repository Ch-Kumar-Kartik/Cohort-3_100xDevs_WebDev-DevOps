// how to define variables
let firstName = "john";
const age = 30;
var isstudent = true;
console.log(firstName);
console.log(age);
console.log(isstudent);

// value overidden
var a = true;
a = 10;
a = "kirat";
console.log(a)

// difference between var let const

/// const var_name = "" (not meant to be changed)
/// var is no longer used 
/// let can be used to define a variable that can be reassigned 

// Data Types
let number = 79; // number 
let string = "hello world"; // string 
let isActive = false; // boolean 
let numbers = [56, 578, 8909]; // array similar to python

// Operators 
let sum = 10+5;
let isEqual = (10 === 10);
let isTrue = (true && false);
console.log(sum);
console.log(isEqual);
console.log(isTrue);

// Functions 
function greet(name){
    return"hello," + name;
}

let ans = greet("kirat");
let ans2 = greet("kartik");

console.log(ans);
console.log(ans2);

function sumation(a, b) {
    let total_sum = a + b;
    return total_sum;
}

let ans3 = sumation(3, 4);
console.log(ans3);

// assignment - 1 : write a function joins/concatenates strings 
// assignment - 2 : write a function can_vote which returns a boolean value if age of a user > 18 

function join_strings (a, b) {
    return a + b;
}

function can_vote (age) {
    return (age > 18);
}

let concat_str = join_strings("cat", "rat");
let voter = can_vote(15);

console.log(concat_str);
console.log(voter);

// conditional statements

function canVote(age) {
    if (age >= 18){
        console.log("u are adult");
    }
    else {
        console.log("u are minor");
    }
}

canVote(16);

// loops 

let users = ["harkirat", "kirat", "100XDevs", "kartik"];

let totalUsers = users.length;

for (let i = 0; i < totalUsers; i++){
    console.log(users[i]);
}

// Complex types

/// Objects which are a collection of key value pair where each key is a string and each value can be any valid js data type, including another object
/// similar to hashmaps in java/rust or maps in c++ 

let user1 = {
    name: "kirat",
    age: 20,
    gender: "male"
}

console.log(user1.name) // or console.log(user1["name"])

// assignment-1 : write a function that takes a user as an input and greets them 
function greets(user) {
    console.log("hi " + user.name + "your age is " + user.age);
}

greets(user1); // function is accepting complex data type instead of primitive data type

// assignment-2 : write a function to check whether the user can vote or not 
function vote_check(user){
    if (user.age > 18){
        console.log("u are adult and eligible to vote");
    }
    else {
        console.log("u are still a minor");
    }
}

vote_check(user1);

// array of objects

let arr = ["kirat", 21, {
    name: "kartik",
    age: 22,
    cities: ['delhi', "blr", "mumbai", {
        state: "up",
        city1: "gzb",
        city2: "kanpur",
        city3: "lucknow"
    }]
}]

console.log(arr[2]); // want to access the object
console.log(arr[2].cities[0]); // want to access delhi
console.log(arr[2].cities[3].city2); // want to access kanpur

// assignment-1 : Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
// assignment-2 : Create a function that takes an array of objects as input,and returns the users whose age > 18 and are male

// my approach (wrong)
let ar = []
function idk(array){
    // input parameter is an array of objects
    for (let i = 0; i < array.length; i++){
        if (array[i].age > 18 && array[i].gender == 'male') {
            ar.push(array[i].name) // or could also do .push(array[i])
        } 
    }
    return ar
}

// correct approach 
function idk(array) {
    // Create a new array to store filtered users
    const result = [];
    
    // Input validation
    if (!Array.isArray(array)) {
        return result; // Return empty array for invalid input
    }
    
    // Iterate through the array
    for (let i = 0; i < array.length; i++) {
        // Check if the current element is an object and has age > 18
        if (array[i] && typeof array[i] === 'object' && array[i].age > 18) {
            result.push(array[i]); // Push the entire user object
        }
    }
    
    return result;
}