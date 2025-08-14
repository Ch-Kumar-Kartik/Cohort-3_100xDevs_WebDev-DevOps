const thenables = {
    then: function(onFulfilled){
        setTimeout(() => onFulfilled(42), 1000)
    }
}

async function main(){
    await thenable
    console.log("hi there");
}

main()
// every promise is a thenable 
// every thenable is not a promise 

