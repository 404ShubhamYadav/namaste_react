import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "../utils/constant"

const useRestaurantMenu = (resId) => {

    const [restaurantMenu, setRestaurantMenu] = useState([]);
    const [restaurantDetails, setRestaurantDetails] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, [resId])

    const fetchMenu = async () => {
        const response = await fetch(SWIGGY_MENU_API+ resId);
        const json = await response.json();
        setRestaurantMenu(
            json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        );
        setRestaurantDetails(json?.data?.cards[2]?.card?.card?.info);

        // return [restaurantMenu, restaurantDetails];

    }
    return [restaurantMenu, restaurantDetails];
}

export default useRestaurantMenu;