const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    numberOfCandies: 0
}

const candySlice = createSlice({
    name: "candy",
    initialState,
    reducers: {
        ordered: state => {
            state.numberOfCandies --
        },
        restocked: (state,action) => {
            state.numberOfCandies += action.payload 
        }
    }
})

module.exports = candySlice.reducer;
module.exports.candyActions = candySlice.actions