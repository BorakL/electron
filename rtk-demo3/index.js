const store = require("./app/store")
const counterSlice = require("./features/counter/counterSlice")
const todoSlice = require("./features/todo/todoSlice")
const userSlice = require("./features/user/userSlice")

store.dispatch(counterSlice.actions.increment())
store.dispatch(counterSlice.actions.increment())
store.dispatch(counterSlice.actions.increment())
store.dispatch(counterSlice.actions.reset())
store.dispatch(counterSlice.actions.increment())
store.dispatch(counterSlice.actions.increment())
store.dispatch(counterSlice.actions.decrement())

store.dispatch(todoSlice.actions.addTodo({id:1, task:"Take a dog for a walk"}));
store.dispatch(todoSlice.actions.addTodo({id:2, task:"Make a pizza"}))
store.dispatch(todoSlice.actions.addTodo({id:3, task:"Clean the house"}))
store.dispatch(todoSlice.actions.addTodo({id:4, task:"Wahs the dishes"}))
store.dispatch(todoSlice.actions.addTodo({id:5, task:"make the bed"}))
store.dispatch(todoSlice.actions.removeTodo({id:4}))


store.dispatch(userSlice.fetchUsers())
    .then((data)=>console.log(store.getState()))
    .catch((error)=>console.log('Error: ',error))
