const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    messages: []    
}

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
    },
    extraReducers: (builder)=>{
        builder
            .addCase('tasks/addTask', (state, action)=>{
                state.messages.push(`Task added ${action.payload.task}`)
            })
            .addCase('task/completeTask', (state, action)=>{
                state.messages.push(`Task with id ${action.payload.id} completed.`)
            })
    }
})

module.exports = notificationsSlice.reducer;