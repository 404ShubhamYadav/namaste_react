import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name:"restaurants",
    initialState:{
        restaurantsList:[],
        carouselList:[],
    },
    reducers:{
        addRestaurantsList:(state, action)=>{
            state.restaurantsList = action.payload;
        },
        addCarouselList:(state, action)=>{
            state.carouselList = action.payload;
        }
    }
});

export const {addRestaurantsList, addCarouselList} = restaurantSlice.actions;
export default restaurantSlice.reducer;