const { createSlice } = require("@reduxjs/toolkit");

const initialState = []

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push({id:action.payload.id, text: action.payload.task, completed: false } )
        },
        removeTodo: (state, action) => {
            const indx = state.findIndex(todo => todo.id===action.payload);
            if(indx){
                state.splice(indx,1)
            }
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id===action.payload);
            if(todo){
                todo.completed = !todo.completed
            }
        }
    }
})

module.exports = todoSlice;