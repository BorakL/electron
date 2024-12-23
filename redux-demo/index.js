const store = require("./reducers")

const orderCake = ()=>{
    return {type: "CAKE_ORDERED"}
}
const restockCake = (num) => {
    return {
        type: "CAKE_RESTOCKED",
        payload: {
            number:num
        }
    }

}

const orderIcecream = ()=>{
    return {type: "ICECREAM_ORDERED"}
}
const restockIcecream = (num)=>{
    return {
        type: "ICECREAM_RESTOCKED",
        payload: {
            number: num
        }
    }
}

store.dispatch(restockIcecream(30));
store.dispatch(restockCake(20));
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderIcecream())

console.log(store.getState());
