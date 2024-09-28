import React from 'react'
import useRestaurant from '../costum-hooks/useRestaurant';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Body = () => {
  useRestaurant();

  return (
    <div className=''>
      <Header />
      <div className='px-18 mx-9'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Body;
