const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: "user",
    initialState: {name: 'Anonymous', age:0},
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setAge: (state, action) => {
            state.age = action.payload
        }
    }
})

const userActions = userSlice.actions;
const userReducer = userSlice.reducer

module.exports = {userActions, userReducer}