const { createSlice } = require("@reduxjs/toolkit");

let i=0;
const counter = ()=>{
    i++;
    return i;
}

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state,action)=>{
            state.push({id:counter(), task: action.payload, completed: false})
        },
        toggleTodo: (state, action)=>{ 
            let todo = state.find(todo => todo.id===action.payload)  
            console.log("todo",JSON.parse(JSON.stringify(todo)))
            if(todo){ 
                todo.completed = !todo.completed
            }
        },
        deleteTodo: (state, action)=>{
            return state.filter(t => t.id !== action.payload)
        }
    }
})

const todoReducer = todoSlice.reducer;
const todoActions = todoSlice.actions;

module.exports = {
    todoReducer,
    todoActions
}