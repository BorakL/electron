const { combineReducers, createStore, legacy_createStore } = require("redux");
const counterReducer = require("./counterReducer");
const userReducer = require("./userReducer");

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})

const store = legacy_createStore(rootReducer)

module.exports = store;