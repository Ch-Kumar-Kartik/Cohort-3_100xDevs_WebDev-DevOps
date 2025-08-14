// const path = require("path");
// console.log(__dirname)
// console.log(path.join(__dirname, "index.mjs"))

const fs = require("fs")
const { Command } = require('commander');
const program = new Command(); // an object of the command class 

program
    .name('counter') // name of the cli command 
    .description('CLI to do file based task') // short description shown in the help section 
    .version('0.8.0')

program.command('count') // defines a new command called count
    .description('Count the number of lines in a file') // description for command in the help output
    .argument('<file>', 'file to count') // argument this command will be taking 
    .action((file) => { // function defined when the count is executed
        fs.readFile(file, 'utf8', (err, data) => {
            if (err){
                console.log(err);}
            else{
                const lines = data.split('\n').length; // splits the file content into an array of lines and counts them
                console.log(`There are ${lines} lines in ${file}`);
            }
        })
    })

program.parse()

/* 
another approach to implement the above function 
const fs = required("fs")
function main(fileName){
    fs.readFile(fileName, 'utf8', (err, data)=>{
        if (err){
            console.log(err)
        } else {
            let total = 0 
            for (let i = 0; i < data.length; i++){
                data[i] === " "
                total++ 

            }
            console.log(total + 1)
        }
    })
}

main(process.argv[2])
*/

