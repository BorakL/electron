const { createSlice, configureStore } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
    name:'counter',
    initialState: {value:0},
    reducers: {
        increment: (state)=>{
            state.value += 1;
        },
        decrement: (state)=>{
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

const counterActions = counterSlice.actions;
const counterReducer = counterSlice.reducer;

module.exports = { counterActions, counterReducer}