import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (
    <div className="border-b border-gray-300 hidden sm:block">
      <div className="container py-5">
        <div className="flex justify-between item-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon__wrapper"><BsFacebook /></div>
            <div className="header_top__icon__wrapper"><BsTwitter /></div>
            <div className="header_top__icon__wrapper"><BsInstagram /></div>
            <div className="header_top__icon__wrapper"><BsLinkedin /></div>
          </div>
          
          <div className='text-gray-500 text-[18px]'>
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
          </div>
          
          <div className='flex gap-4'>
            <select 
                className="select select-secondary text-gray-500 text-[14px]"
                name='currency'
                id='currency'
                >
                <option value='GBP £'> £ GBP </option>
                <option value='USD $'> $ USD </option>
                <option value='EUR €'> € EUR </option>
            </select>
            <select 
                className="select select-secondary text-gray-500 text-[14px]"
                name='language'
                id='language'
                >
                <option value='English'> English </option>
                <option value='French'> French </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header