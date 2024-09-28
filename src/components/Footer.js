import React from 'react'
import { LOGO_URL } from '../utils/constant';

const Footer = () => {
  const aboutCompany = ["About", "Team", "Careers"];
  const contact = ["Help & Support", "Partner with us", "Ride with us"];
  const locationObject = ["Delhi", "Noida", "Mumbai", "Gurugram", "Bangaluru", "Pune", "Chennai", "Hyderabad"]

  return (
    <footer className="bg-[#02060c] text-white ">
      <div className="max-w-[1200px] mx-auto p-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
          <ul className="flex flex-col ">
            <li className="flex items-center">
              {/* <Link to="/"> */}
              <img src={LOGO_URL} alt="logo" className="w-6 inline mr-3" />
              {/* </Link> */}
              <span className="font-semibold text-2xl">Swiggy Clone</span>
            </li>
            <li className="text-gray-400 my-2">
              &copy; 2024 QuantMed Technology <br /> Pvt. Ltd
            </li>
          </ul>
          <ul className="flex flex-col">
            <li className="font-semibold text-xl mb-1">Company</li>
            {aboutCompany.map((item, ind) => (
              <li
                key={ind}
                className="text-gray-400 hover:text-white cursor-pointer my-1"
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col">
            <li className="font-semibold text-xl mb-1">Contact Us</li>
            {contact.map((item, ind) => (
              <li
                key={ind}
                className="text-gray-400 hover:text-white cursor-pointer my-1"
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col ">
            <li className="font-semibold text-xl">We Deliver to:</li>

            {locationObject.map((loc, ind) => (
              <li
                key={ind}
                className="text-gray-400 hover:text-white cursor-pointer my-1"
              >
                {loc}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center p-5">
        Made with ❤️ by Shubham Kumar Yadav
      </div>
    </footer>
  )
}

export default Footer
