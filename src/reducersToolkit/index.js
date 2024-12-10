const { configureStore } = require("@reduxjs/toolkit");
const {reducer: counterReducer} = require("../reducers/counterReducer");

const store = configureStore({
    reducer: counterReducer
})

module.exports = store;