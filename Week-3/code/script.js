let ctr = 0

function toUpdateit(){
    setInterval(()=>{
        document.querySelector("h4")[0].innerHTML = ctr;
        ctr+= 1 ;
    }, 1000)
}

// toUpdateit();

function toDisplayonConsole( ){
    let element_to_displayed = event.target
    console.log(element_to_displayed.innerText)
}

document.addEventListener('click', toDisplayonConsole)

function toDeleteTodo( index){
    const element = document.getElementById("todo-" + index)
    element.parentNode.removeChild(element)
}
