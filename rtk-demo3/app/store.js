const {configureStore} = require("@reduxjs/toolkit")
const counterSlice = require("../features/counter/counterSlice");
const todoSlice = require("../features/todo/todoSlice");
const messagesSlice = require("../features/messages/messagesSlice");

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        todo: todoSlice.reducer,
        message: messagesSlice.reducer
    }
})

module.exports = store;