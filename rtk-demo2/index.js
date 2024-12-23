const store = require('./app/store');
const {tasksActions} = require('./features/tasks/taskSlice');

console.log('Initial state:', store.getState())

store.dispatch(tasksActions.addTask({id:1, task:'Learn Redux Toolkit'}));
store.dispatch(tasksActions.addTask({id:2, task:'Wash dishes'}));
store.dispatch(tasksActions.addTask({id:3, task:'Take the dog for a walk'}));

store.dispatch(tasksActions.completeTask({id:2}))

console.log('Initial state:', store.getState().tasks)