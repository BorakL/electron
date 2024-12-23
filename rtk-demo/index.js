const store = require('./app/store');
const { icecreamActions } = require('./features/icecream/icecreamSlice'); 
const {candyActions} = require('./features/candy/candySlice');
const { cakeActions } = require('./features/cake/cakeSlice');

console.log('initial state', store.getState())
// const unsubscribe = store.subscribe(()=>{
//     console.log('Updated state', store.getState())
// })

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(2)) 

// store.dispatch(candyActions.restocked(20))
// store.dispatch(candyActions.ordered())

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
console.log('state', store.getState())
