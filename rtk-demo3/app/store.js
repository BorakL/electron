const {configureStore} = require("@reduxjs/toolkit")
const counterSlice = require("../features/counter/counterSlice");
const todoSlice = require("../features/todo/todoSlice");
const messagesSlice = require("../features/messages/messagesSlice");
const userSlice = require("../features/user/userSlice");

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        todo: todoSlice.reducer,
        message: messagesSlice.reducer,
        user: userSlice.reducer
    }
})

module.exports = store;