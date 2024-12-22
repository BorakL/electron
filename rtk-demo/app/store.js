const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
const candyReducer = require('../features/candy/candySlice')

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        candy: candyReducer
    }
})

module.exports = store;