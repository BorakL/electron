const cakeInitialState = {
    numberOfCakes:0,
    message: ""
}

const cakeReducer = (state=cakeInitialState, action)=>{
    switch(action.type){
        case "CAKE_ORDERED":
            return {
                ...state,
                numberOfCakes: state.numberOfCakes>0 ? state.numberOfCakes - 1 : state.numberOfCakes,
                message: state.numberOfCakes===0 ? "There is no any more cake in store" : ""
            }
        case "CAKE_RESTOCKED":
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload.number
            }
        default: 
            return state
    }
}

module.exports.cakeReducer = cakeReducer