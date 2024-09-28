import React from 'react';
import { IMG_URL, NON_VEG_ICON, VEG_ICON } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { addItem } from "../utils/cartSlice";

const CategoryItems = ({ items }) => {
  // console.log(items)

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.item.items);


  const handleAddItem = (item) => {
    const isItemInCart = cartItems.some(
      (cartItem) => cartItem?.card?.info?.id === item?.card?.info?.id
    );
    if (isItemInCart) {
      toast.error(item?.card?.info?.name + " already in cart!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      dispatch(addItem(item));
      toast.success(item?.card?.info?.name + " added to cart", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };


return (
  <>
    {items.map((item) => (
      <React.Fragment key={item?.card?.info?.id}>
        <div className="px-6 pt-1 flex flex-col-reverse md:flex-row md:justify-between gap-10 ">
          <div>
            <div className="w-6 h-6">
              <img
                src={
                  item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                    ? VEG_ICON
                    : NON_VEG_ICON
                } alt='img'
                className="w-full h-full"
              />
            </div>
            <p>{item?.card?.info?.name}</p>
            <p>
              ₹{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </p>
            <p>{item?.card?.info?.description}</p>
          </div>
          <div className="relative mx-auto md:mx-0">
            <div className="w-40 h-32">
              <img
                src={
                  item?.card?.info?.imageId
                    ? IMG_URL + item?.card?.info?.imageId
                    : "https://www.facoelche.com/images/placeholder-noimage.jpg"
                } alt='img'
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-12 top-[105px]">
              <button
                className="bg-white text-[#1ba672] font-bold shadow-lg px-4 py-2 rounded-lg"
              onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
        <div className="border px-10 my-6" />
      </React.Fragment>
    ))}
  </>
);
};

export default CategoryItems;
