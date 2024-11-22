import { combineReducers, createStore } from "redux";

import { cartReducer } from "../features/cart/cartSlice";
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice";
import { inventoryReducer } from "../features/inventory/inventorySlice";


const reducers = {
    inventory: inventoryReducer,
    cart: cartReducer,
    currencyFilter: currencyFilterReducer
}

const rootReducer = combineReducers(reducers)
const store = createStore(rootReducer)

export default store;