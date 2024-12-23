const { combineReducers, createStore } = require("redux")
const { cakeReducer } = require("./cakeReducer");
const { icecreamReducer } = require("./icecreamReducer");

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

const store = createStore(rootReducer)

module.exports = store