const { configureStore } = require("@reduxjs/toolkit"); 
const {counterReducer} = require("./counterReducer");
const { userReducer } = require("./userReducer");
const { todoReducer } = require("./todoReducer");

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        todo: todoReducer
    }
})

module.exports = store