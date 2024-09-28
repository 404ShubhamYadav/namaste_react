import { configureStore } from "@reduxjs/toolkit";
import topRestaurantReducer from "./restaurantSlice"
import cartReducer from "./cartSlice"


const appStore = configureStore({
    reducer:{
        restaurant:topRestaurantReducer,
        item:cartReducer,
    }
})

export default appStore;