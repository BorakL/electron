const { configureStore } = require("@reduxjs/toolkit");
const taskReducer = require('../features/tasks/taskSlice');
const notificationsReducer = require('../features/notifications/notificationsSlice')

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        notifications: notificationsReducer
    }
})

module.exports = store;