import React, { useState, useEffect } from 'react'

import RestCard from './RestCard'
import { useSelector } from 'react-redux';

const RestContainer = () => {
  const ListOfRestaurant = useSelector((store) => store.restaurant?.restaurantsList)

  const [filteredRestaurants, setFilteredRestaurants] = useState(ListOfRestaurant);
  const [searchRestaurants, setSearchRestaurants] = useState("");
  const [activeButton, setActiveButton] = useState("clear");

  useEffect(() => {
    setFilteredRestaurants(ListOfRestaurant);
  }, [ListOfRestaurant]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearchRestaurants();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchRestaurants]);


  const filters = [
    {
      name: "Clear",
      filterFunc: () => {
        setFilteredRestaurants(ListOfRestaurant);
      },
    },
    {
      name: "Fast Delivery",
      filterFunc: () => {
        const fastDelivery = ListOfRestaurant.filter(
          (rest) => rest.info.sla.deliveryTime < 30
        );
        setFilteredRestaurants(fastDelivery);
      },
    },
    {
      name: "Top Rated",
      filterFunc: () => {
        const topRated = ListOfRestaurant.filter(
          (rest) => rest.info.avgRating > 4
        );
        setFilteredRestaurants(topRated);
      },
    },
    {
      name: "Pure Veg",
      filterFunc: () => {
        const onlyVeg = ListOfRestaurant.filter((rest) => rest.info.veg == true);
        setFilteredRestaurants(onlyVeg);
      },
    },
    {
      name: "Less than 300",
      filterFunc: () => {
        const lessThan300 = ListOfRestaurant.filter(
          (rest) => rest.info.costForTwo.match(/\d+/)[0] < 300 == true
        );
        setFilteredRestaurants(lessThan300);
      },
    },
    {
      name: "Between 300 and 600",
      filterFunc: () => {
        const between300and600 = ListOfRestaurant.filter(
          (rest) =>
            rest.info.costForTwo.match(/\d+/)[0] >= 300 &&
            rest.info.costForTwo.match(/\d+/)[0] < 600
        );
        setFilteredRestaurants(between300and600);
      },
    },
  ];

  const handleSearchRestaurants = () => {
    const searchedRestaurants = ListOfRestaurant.filter((rest) =>
      rest?.info?.name.toLowerCase().includes(searchRestaurants.toLowerCase())
    );
    setFilteredRestaurants(searchedRestaurants);
    setActiveButton("Clear");
  }

  const handleClick = (filter) => {
    setActiveButton(filter.name);
  };

  return (
    <div>
      <div className="max-w-[1200px] mx-auto mb-10 p-[15px]">
        <div className='font-extrabold text-[25px]'>
          Restaurants with online food delivery in Delhi
        </div>
        <div className="flex-wrap md:flex gap-8 my-5">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`border py-2 px-3 mx-1 shadow-sm rounded-[18px] ${activeButton === filter.name &&
                "border-4 font-bold text-[#fc8019]"
                }`}
              onClick={() => {
                filter.filterFunc();
                handleClick(filter);
              }}
            >
              {filter.name}
            </button>
          ))}
          <input
            className="border p-2 mx-1 shadow-sm rounded-2xl"
            type="text"
            placeholder="Search Restaurants..."
            value={searchRestaurants}
            onChange={(e) => setSearchRestaurants(e.target.value)}
          ></input>
        </div>

      </div>

      <div className='flex flex-wrap py-1 px-2'>
        {
          filteredRestaurants.map((r) =>
            <RestCard key={r.info.id} resList={r} />)
        }
      </div>
    </div>
  )
}

export default RestContainer;
