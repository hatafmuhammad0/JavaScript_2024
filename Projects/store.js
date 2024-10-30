let store = {
    todos: [
        {
            id: "1",
            title: "Complete task A",
            completed: false
        },
        {
            id: "2",
            title: "Complete task B",
            completed: false
        },

    ]
}


const storeHandler = {
    // Creating traps : get , set
    get(target,property){
        return target[property]
    },
    set(target,property,value){
        target[property] = value
        if(property=="todos"){
            window.dispatchEvent(new Event("todochange"))
        }
        localStorage.setItem("store",JSON.stringify(store))
        return true
    }
    
}

const storeProxy = new Proxy(store,storeHandler)

function addTodo(newTodo){
    storeProxy.todos= [...storeProxy.todos,newTodo]
}
function deleteTodo(id){
    storeProxy.todos = storeProxy.todos.filter((todo)=> todo.id!=id)
}
function toggleComplete(id,completed){
    storeProxy.todos = storeProxy.todos.map((todo)=>{
        if(todo.id == id){
            return {...todo,completed:completed}
        }else{
            return todo
        }
    })
}

export { addTodo };
export { deleteTodo };
export { toggleComplete };
export default storeProxy