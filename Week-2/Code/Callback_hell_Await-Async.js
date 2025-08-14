/*
Task for today : 
Q: Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2
*/

// Solution with call back hell
setTimeout(function () {
  console.log("hi");
  setTimeout(function () {
    console.log("hello");

    setTimeout(function () {
      console.log("hello there");
    }, 5000);
  }, 3000);
}, 1000);

// another solution with no call back hell
function step3Done() {
  console.log("hello there");
}

function step2Done() {
  console.log("hello");
  setTimeout(step3Done, 5000);
}

function step1Done() {
  console.log("hi");
  setTimeout(step2Done, 3000);
}

setTimeout(step1Done, 1000);

// Promisified version with call back hell
function setTimeoutPromisified0(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
setTimeoutPromisified0(1000).then(function () {
  console.log("hi");
  setTimeoutPromisified0(3000).then(function () {
    console.log("hello");
    setTimeoutPromisified0(5000).then(function () {
      console.log("hello there");
    }); 2   
  });
});

// another way with no call back hell (promise chaining)
setTimeoutPromisified(1000)
  .then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("hello there");
  });

// use of async and await keywords (syntactic sugar)
// in async await always use try-catch
// async and await always returns a promise
function setTimeoutPromisified(duration){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
}

async function solve() {
    await setTimeoutPromisified(1000)
    console.log("hi")
    await setTimeoutPromisified(3000)
    console.log("hello")
    await setTimeoutPromisified(5000)
    console.log("hi there")
}

solve()
console.log("after solve function")
/*
after solve function
hi,
hello
hi there
*/

// my version of the above code 
function setTimeoutPromisified(message, duration){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${message}`)
            resolve()
        }, duration)
    })
}

async function solve() {
    await setTimeoutPromisified("hi,", 1000)
    await setTimeoutPromisified("hello", 3000)
    await setTimeoutPromisified("hi there", 5000)
}

solve()
console.log("after solve function")
/*
after solve function
hi,
hello
hi there
*/

// promisified readFile fn with async and await 
const fs = require("fs")
function readFilePromisified(filename){
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf8", (err, data) => {
            if (err){
                console.log(`the error is: ${err}`)
                reject()
            } else{
                console.log(data)
                resolve()
            }
        })
    })
}

async function solve2() {
    await readFilePromisified("a.txt")
    await readFilePromisified("b.txt")
}

solve2()

/*
sup
sup from b
*/