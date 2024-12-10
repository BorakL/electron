const userInitialState = {
    name: "",
    age: 0
}

const userReducer = (state=userInitialState, action) => {
    switch (action.type){
        case 'SET_NAME':
            return {...state, name: action.payload.name}
        case 'SET_AGE':
            return {...state, age: action.payload.age}
        default: 
            return state
    }
}

module.exports = userReducer;