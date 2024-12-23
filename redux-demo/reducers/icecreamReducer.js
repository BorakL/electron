const icecreamInitiState = {
    numberOfIcecreams: 0
}

const icecreamReducer = (state = icecreamInitiState, action)=>{
    switch(action.type){
        case "ICECREAM_ORDERED": {
            return {
                ...state, 
                numberOfIcecreams: state.numberOfIcecreams-1
            }
        }
        case "ICECREAM_RESTOCKED": {
            return {
                ...state, 
                numberOfIcecreams: state.numberOfIcecreams + action.payload.number
            }
        }
        case "CAKE_ORDERED": {
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams - 1
            }
        }
        default: {
            return state
        }
    }
}

module.exports.icecreamReducer = icecreamReducer;