import React from 'react'
import Image from "next/image";
import pic1 from "/public/image/user.jpg";
import { BsSearch } from 'react-icons/bs'
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {
  return (
    <div className='border-b border-gray-200 py-6'>
        <div className='container sm:flex justify-between item-center'>
            <div className='font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish'>
                Logo
            </div>
            
            <div className='w-full sm:w-[300px] md:w-[70%] relative'>
              <input 
                type="text"
                placeholder="Enter any product" 
                className="input input-bordered input-secondary w-full p-2 px-7"
              />
                <BsSearch 
                    className='absolute right-0 top-3 mr-3 text-gray-500'
                    size={20}
                />
            </div>
        <div className='hidden lg:flex gap-4 text-gray-500 text-[30px]'>
            
                <div className='relative cursor-pointer'>
                    <FiHeart size={45} />
                    <div 
                        className='bg-red-500 rounded-full absolute top-0 right-0 w-[23px] h-[22px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1'
                        >
                        0
                    </div>
                </div>
                <div className='relative cursor-pointer'>
                      <HiOutlineShoppingBag size={45} />
                    <div 
                        className='bg-red-500 rounded-full absolute top-0 right-0 w-[23px] h-[22px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1'
                        >
                        0
                    </div>
                </div>
                
            <div className="dropdown dropdown-end items-center">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <Image src={pic1} alt="Profile image" />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                <li>
                    <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                    </a>
                </li>
                <li>
                    <a>Settings</a>
                </li>
                <li>
                    <a>Logout</a>
                </li>
              </ul>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default HeaderMain