// // Example of synchronus code 
const fs = require("fs");
const contents = fs.readFileSync("a.txt", "utf-8")
console.log(contents)

let user = {
    age : 21,
    name : "kirat"
}

console.log(user.name)

/*
The readFileSync method is a synchronous function 
in the Node.js fs module. It reads the file a.txt 
and blocks the execution of the program until the 
file is fully read. The contents are then returned
and stored in the contents variable
*/

const content2 = fs.readFileSync("b.txt", "utf-8")
console.log(content2)

// output :
//sup
//kirat
//sup from b (note : due to sync code, sequential order if followed)

// writing the above code async
/*
const fs = require("fs").promises
async function readFilesAsync(){
    try {

        const contentsAsync = await fs.readFile("a.txt" , "utf-8")
        console.log(contentsAsync)
    } catch (error){
        console.error("error readong the txt", error.message);
    }

    try {
        const contentsAsync2 = await fs.readFile("b.txt", "utf-8")
        console.log(contentsAsync2)
    } catch(error) {
        console.log("error reading b.txt", error.message)        
        
    }

}

readFilesAsync()
*/
// const fs = require("fs")
function print(data){
    console.log(data);
}

fs.readFile("a.txt", "utf8", print); // why not print() ? 
fs.readFile("b.txt", "utf8", print);

setTimeout(() => {
    console.log("timeout done");
}, 1000);

console.log("done");

// output
// done
// Hello from a.txt // or null if file is missing
// Hello from b.txt // or null if file is missing
// timeout done

// why not print() in fs.readFile() ?
/* Basically if i call print() then i will be passing 
whatever print() returns (i.e undefined in our case) to 
fs.readFile() 
s = print() // which will be undefined
fs.readFile("a.txt", "utf8" , s) // this is what i meant to say */

function timeout(){
    console.log("click the button")
}

console.log("hi")

setTimeout(timeout , 1000); // this here is i/o task

console.log("welcome to loupe")

let c = 0; // this for loop task is synchronus
for (let i = 0; i < 100000; i++){ // this here is cpu intensive task
    c += 1;
}

console.log("expensive task is done");

/*
hi
welcome to loupe
expensive task is done
click the button
*/

/* why click the button is being printed after expensive task is done ?

The for loop  a CPU-intensive task that runs synchronously.
This loop iterates 100000 times, incrementing c. Since 
it’s synchronous, it blocks the main thread (call stack) 
until it completes.
Depending on your system’s CPU, this loop may take 
significant time (e.g., 10-100ms or more). During this 
time, the Node.js event loop is blocked because the main 
thread is busy executing the loop. No other tasks 
(including the setTimeout callback) can run until the loop 
finishes.
*/