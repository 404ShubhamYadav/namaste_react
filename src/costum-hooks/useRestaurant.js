
import { SWIGGY_API } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addCarouselList, addRestaurantsList } from "../utils/restaurantSlice";
import { useEffect } from "react";

const useRestaurant = () => {

    const dispatch = useDispatch();

    // const restList = useSelector((store) => store.restaurant.restaurantsList);
    // const carolList = useSelector((store) => store.restaurant.carouselList);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json()
     
        dispatch(addRestaurantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
        dispatch(addCarouselList(json?.data?.cards[0]?.card?.card?.imageGridCards?.info));
    }

    useEffect(() => {
        fetchData();
    }, [])

}

export default useRestaurant;