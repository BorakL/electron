const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [{ id: 1, name: "Apple", price: 2, quantity: 3 }],
        totalPrice: 0
    },
    reducers: {
        addItem: (state, action)=>{
            const existingItem = state.items.find(
                item => item.id===action.payload.id
            )
            if(existingItem){
                existingItem.quantity += action.payload.quantity;
            }else{
                state.items.push(action.payload)
            }
            state.totalPrice += action.payload.price * action.payload.quantity
        },
        removeItem: (state, action)=>{
            const itemIndex = state.findIndex(item => item.id===action.payload)
            if(itemIndex!==-1){
                const item = state.items[itemIndex];
                state.totalPrice -= item.price * item.quantity;
                state.items.splice(itemIndex,1)
            }
        },
        updateQuantity: (state,action)=>{
            let item = state.items.find((item) => item.id===id);
            if(item){
                const priceDifference = ( action.payload.quantity * item.price);
                item.quantity = action.payload.quantity;
                state.totalPrice += priceDifference;
            }
        }
    }
})

const cartReducer = cartSlice.reducer;
const cartActions = cartSlice.actions;

module.exports = {cartReducer, cartActions}