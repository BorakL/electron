// const store = require("./src/reducers"); 

const store = require("./src/reducersToolkit");
const counterSlice = require("./src/reducersToolkit/counterReducer");
const {increment} = counterSlice.actions

// store.dispatch({
//     type: 'INCREMENT'
// })
// store.dispatch({
//     type: 'INCREMENT'
// })
// store.dispatch({
//     type: 'INCREMENT'
// })
// store.dispatch({
//     type: 'SET_NAME',
//     payload: {
//         name: 'John'
//     }
// })
// store.dispatch({
//     type: 'SET_NAME',
//     payload: {
//         name: 'Peter'
//     }
// })
// store.dispatch({
//     type:'SET_AGE',
//     payload: {
//         age:3
//     }
// })
 
// console.log("store.getState()",store.getState())

// const count = store.getState().counter.count;
// const name = store.getState().user.name
// const name1 = store.getState().user.name
// const age = store.getState().user.age;

// console.log("count",count)
// console.log("name",name)
// console.log("name",name1)
// console.log("age",age)

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
console.log("gfds",store.getState())