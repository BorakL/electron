const { createSlice } = require("@reduxjs/toolkit");
const todoSlice = require("../todo/todoSlice");

const initialState = [];

const messagesSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        add: (state, action)=>{
            state.push(action.payload)
        },
        remove: (state, action) => {
            const index = state.findIndex(message => message.id===action.payload);
            if(index>-1){
                state.splice(index, 1)
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(todoSlice.actions.addTodo, (state, action)=>{
                state.push(`Added task with id: ${action.payload.id}`)
            })
            .addCase(todoSlice.actions.removeTodo, (state, action)=>{
                state.push(`Removed task with id ${action.payload.id}`)
            })
    }
})

module.exports = messagesSlice;