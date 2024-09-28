import React from 'react'
import { IMG_URL } from '../utils/constant';
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const RestCard = ({ resList }) => {

  const truncateCusines = (cuisineStr) => {
    return cuisineStr.length > 34
      ? `${cuisineStr.substring(0, 33)}...`
      : cuisineStr;
  };

  const { cloudinaryImageId,id, name, cuisines, sla, locality, aggregatedDiscountInfoV3, avgRating } = resList?.info;
  return (
    <Link to={"/restaurants/" + id}>
    <div className='w-[273px] mb-3 hover:scale-95 duration-150 cursor-pointer px-2'>
      <div className='h-[182px] rounded-[15px] overflow-hidden relative'>
        <img className='duration-150 object-cover w-full h-full'
          src={IMG_URL + cloudinaryImageId} alt='img'
        />
        <div className="bg-gradient-to-b from-transparent to-black absolute w-full h-full top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tighter">
          {aggregatedDiscountInfoV3?.header}{" "}
          {aggregatedDiscountInfoV3?.subHeader}
        </div>
      </div>
      <div className="px-2 py-1">
        <div className="text-lg font-bold">
          {name.length > 26 ? `${name.substring(0, 25)}...` : name}
        </div>
        <div className="flex items-center gap-2">
        <FaStar /> {avgRating}
          <span>{sla?.slaString}</span>
        </div>
        <div className="text-slate-700">
          {truncateCusines(cuisines.join(", "))}
          <br />
          {locality}
        </div>
      </div>
    </div>
    </Link>
  )
}

export default RestCard;
