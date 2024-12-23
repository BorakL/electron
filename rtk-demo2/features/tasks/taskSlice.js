const {createSlice} = require("@reduxjs/toolkit")

const initialState = {
    tasks: []
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({id: action.payload.id, task: action.payload.task, completed: false})
        },
        completeTask: (state, action) => {
            const task = state.tasks.find(task => task.id===action.payload.id)
            if(task){
                task.completed = !task.completed
            }
        },
        removeTask: (state, action) => {
            let index = state.tasks.findIndex(task => task.id === action.payload.id)
            if(index>=0){
                state.tasks.splice(index,1)
            }            
        }
    }
})

module.exports = tasksSlice.reducer;
module.exports.tasksActions = tasksSlice.actions;