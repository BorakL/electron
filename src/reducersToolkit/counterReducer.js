const { createSlice } = require("@reduxjs/toolkit");

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

module.exports = {
    reducer: counterSlice.reducer
};