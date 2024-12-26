const {createSlice} = require("@reduxjs/toolkit")
const todoSlice = require("../todo/todoSlice")

const initialState = {counter: 0}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.counter ++
        },
        decrement: (state, action) => {
            state.counter --
        },
        reset: (state, action) => {
            state.counter = 0
        }
    },
    extraReducers: (builder)=>{
        builder
            .addCase(todoSlice.actions.addTodo, state => {
                state.counter++
            })
            .addCase(todoSlice.actions.removeTodo, state => {
                state.counter--
            })
    }
})

module.exports = counterSlice
module.exports.counterActions = counterSlice.actions