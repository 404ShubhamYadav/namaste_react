import React from 'react'
import { LOGO_URL } from '../utils/constant'
import { useSelector } from 'react-redux'
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Header = () => {
    const cartItem = useSelector((store) => store.item.items.length);
    // console.log(cartItem)
    return (
        <div className='flex flex-row justify-between bg-white shadow-lg'>
            <div className=' h-13'>
                <img className=' w-[90px] p-3'
                    src={LOGO_URL} alt="logo" />
            </div>
            <div className=''>
                <ul className='flex m-2 p-3 font-bold text-lg'>
                    <li  className='px-3 cursor-pointer hover:text-[#fc8019]'><Link to={"/"}> Home </Link> </li>
                    <li className='px-3'>🔍 Search </li>
                    <li className='px-3'>Help</li>
                    <li className='px-3'>Sign In</li>
                    <li className='px-3'>Offers</li>
                    <Link to={"/cart"}>
                    <li className="flex items-center gap-2 cursor-pointer hover:text-[#fc8019]">
                        <FiShoppingCart />
                        <span>[{cartItem}]</span>
                        <span>Cart</span>
                    </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header
