// const store = require("./src/reducers"); 

const store = require("./src/reducersToolkit")
const { counterActions } = require("./src/reducersToolkit/counterReducer")
const { todoActions } = require("./src/reducersToolkit/todoReducer")
const { userActions } = require("./src/reducersToolkit/userReducer")

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

store.dispatch(counterActions.increment())
store.dispatch(userActions.setName("Peter"))
store.dispatch(userActions.setAge(4))
store.dispatch(todoActions.addTodo("Go for a running"))
store.dispatch(todoActions.addTodo("Do laundry"))
store.dispatch(todoActions.toggleTodo(1))
store.dispatch(todoActions.addTodo("Go for a gym"))
store.dispatch(todoActions.toggleTodo(3))
store.dispatch(todoActions.deleteTodo(3))
store.dispatch(todoActions.addTodo("Go for a gym"))



console.log("state", store.getState())