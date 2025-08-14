let ctr = 1;

function deleteTodo(index){
    const ele = document.getElementById(index)
    ele.parentNode.removeChild(ele)
}

function addTodo(){
   const newEle = document.createElement('div')
   newEle.setAttribute("id", ctr); 
   newEle.innerHTML = "<div>" + document.getElementById('inp1').value + '</div><button onclick = "deleteTodo(' + ctr + ')">delete</button>'
   ctr+=1
   parent = document.querySelector('body')
   parent.appendChild(newEle)
}
