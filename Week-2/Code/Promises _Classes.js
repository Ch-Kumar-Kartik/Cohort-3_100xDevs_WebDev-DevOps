// under complex types we have objects which are different from creating an instance of a class aka object
class Rectangle {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color
    }

    area(){
        const area = this.width * this.height
        const area2 = () => {
            return this.width * this.height
        }
        console.log(`area2 is`+ area2())
        return area;
    }

    paint(){
        console.log(`painting with color ${this.color}`)
    }
}

const rect = new Rectangle(2, 3, "red")
const area1 = rect.area()
rect.paint()
console.log(area1)

// built in classes in JS 
const now = new Date()
console.log(now.getTime)

const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));

// Promise Class 

function setTimeoutPromisified(ms){
    let p = new Promise(resolve => setTimeout(resolve, ms));
    return p; // returning an object/instance of the promise class
}

function callback(){
    console.log("3 seconds have passed")
}

setTimeoutPromisified(3000).then(callback)
 

// how to write own promise

function waitFor3s(resolve){
    setTimeout(resolve, 3000)
}

function setTimeoutPromisified(){
    return new Promise(waitFor3s) // intializing the promise class
}

// creating promisified version of read file

const fs = require("fs")

function print(data){
    console.log(data)
}

function promisifiedReadFile(){
    return new Promise((resolve, reject) => {
        fs.readFile("a.txt", "utf8", (err, data)=>{
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
})}

promisifiedReadFile().then(print).catch(error => {
        console.error('Error reading file:', error);
    });

// sup (output of the above code)

// understanding the work flow of the promise

//const fs = require("fs")
console.log("----top of the file----")

function readTheFile(resolve){
    console.log("readThe file called")
    setTimeout(()=>{
        console.log("callback based setTimeout completed");
        resolve()
    }, 3000)
}

function setTimeoutPromisified(fileName){
    console.log("setTimeoutPromisiifed called");
    // read the file and return its values
    return new Promise(readTheFile);
}

const p = setTimeoutPromisified();

function callback(){
    console.log("timer is done")
}

p.then(callback) //.then() is not called then function is lost and won't be consumed 

console.log("----end of the file----")

/* output of code is :
----top of the file----
setTimeoutPromisiifed called
readThe file called
----end of the file----
callback based setTimeout completed
timer is done

first the top of the file line gets printed, then line 106 gets executed where 
setTimeoutPromisified() gets called then line 101 gets printed and promise is 
returned where executor function i.e readTheFile is passed as an argument and gets called
and line 93 gets executed after this setTimeout is called which is  an async process so 
console log and resolve will get called after 3 sec meanwhile line 114 gets executed and after 
3 sec line 95 console log gets executed and resolved is called which changes the state of the promise to fullfilled from 
pending and then line 112 gets executed which calls the callback function and timer is done gets 
executed
*/

// creating own promise class 

class Promise2{
    constructor(fn){
        this.fn = fn;
        this.fn(()=>{
            this.resolve();
        })
    }
    then(callback){
        this.resolve = callback
    }
}