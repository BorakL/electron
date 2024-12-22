const store = require('./app/store');
const { icecreamActions } = require('./features/icecream/icecreamSlice');
const cakeActions = require('./features/cake/cakeSlice').cakeActions

console.log('initial state', store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log('Updated state', store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.restocked(2))

unsubscribe();