const todos = require("./data/todos.json");
console.log("todos", todos)

const createList = () => {
    const existingList = document.querySelector("ul");
    if (existingList) existingList.remove();

    let list = document.createElement("ul")
    todos.forEach(todo => {
        let task = document.createElement("li");
        task.innerText = todo.task;
        if(todo.status){
            task.style.textDecoration="underline"
        }else{
            task.style.textDecoration = "none"
        }
        task.addEventListener("click",(e)=>{
            const index = todos.findIndex(t => t.id === todo.id);
            todos.splice(index,1,{...todo, status:!todo.status})
            console.log("todos",todos)
            createList()
        })
        list.appendChild(task)
    })
    document.body.append(list)
}


createList(); 