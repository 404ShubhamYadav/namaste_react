import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IMG_URL } from '../utils/constant';

import { useSelector } from 'react-redux';
import RestContainer from './RestContainer';

const TopRestaurant = () => {
    
  const resList = useSelector((store)=> store.restaurant?.carouselList);
  
  const handleScrollLeft = () => {
    const foodCategory = document.querySelector(".categories");
    foodCategory.scrollLeft = foodCategory.scrollLeft - 480;
  };

  const handleScrollRight = () => {
    const foodCategory = document.querySelector(".categories");
    foodCategory.scrollLeft = foodCategory.scrollLeft + 480;
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between my-3">
        <div className="text-[25px] font-extrabold p-[15px]">
          What's on your mind?
        </div>
        <div className="flex">
          <div
            className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] mx-2 bg-[#e2e2e7] rounded-full"
            onClick={handleScrollLeft}
          >
            <FaArrowLeft />
          </div>
          <div
            className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] mx-2 bg-[#e2e2e7] rounded-full"
            onClick={handleScrollRight}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="categories flex overflow-hidden scroll-smooth no-scrollbar">
        {
          resList.map((carouselImage) => (
            <div key={carouselImage?.id} className="w-[160px] shrink-0">
              <img
                src={IMG_URL + carouselImage?.imageId}
                alt={carouselImage?.accessibility?.altText}
              />
            </div>
          ))
        }
      </div>
      <hr className="my-6 border" />
        <RestContainer/>
    </div>
  )
}

export default TopRestaurant;
