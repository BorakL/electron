const { configureStore } = require("@reduxjs/toolkit"); 
const {counterReducer} = require("./counterReducer");
const { userReducer } = require("./userReducer");
const { todoReducer } = require("./todoReducer");
const { cartReducer } = require("./cartReducer");

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        todo: todoReducer,
        cart: cartReducer
    }
})

module.exports = store