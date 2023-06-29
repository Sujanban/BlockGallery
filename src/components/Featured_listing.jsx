import React from 'react'
import profile from "../images/profile.jpg";
import puzzle from "../images/puzzle.jpg";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaTelegram } from "react-icons/fa";

export const Featured_listing = () => {
    return (
        <div className='p-2 md:p-8 w-4/5 m-auto '>
            <div className='py-2 flex items-center'>
                <h1 className='py-4 text-txt font-bold text-xl sm:text-2xl'>Featured Product</h1>
                <p className='m-2 p-1 text-sm bg-blue-100 rounded-lg text-blue-600 '>Trending</p>
            </div>
            <div className='grid md:grid-cols-2 md:gap-4'>
                <div className='p-2 m-auto'>
                    <div className='flex items-center justify-between flex-wrap'>
                        <div className='flex items-center'>
                            <img src={profile} alt="" className='w-12 h-12 rounded-full object-cover' />
                            <p className='mx-2 text-txt font-bold'>0x62FD44H4HGJHG4</p>
                        </div>
                        <p className='flex items-center'>
                            <FaFacebookSquare className='m-1' />
                            <FaTwitterSquare className='m-1' />
                        </p>
                    </div>
                    <div className=' py-8 flex items-center justify-center '>
                        <span className='rounded-full flex items-center justify-center bg-blue-50'>
                            <span className='m-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600'></span>
                            <h1 className='pr-4 font-bold text-sm text-blue-700'>Best Popular</h1>
                        </span>
                    </div>
                    <h1 className='flex justify-center text-2xl sm:text-4xl font-bold'>Missing Puzzle</h1>
                    <p className='p-4 sm:p-8 text-center text-slate-500 '>A unique collection of missing puzzles. Attract appearance and attractive power in colored wooden blocks.</p>
                    <p className='text-center font-semibold'>Art Price</p>
                    <p className='py-4 text-center text-4xl font-bold'>2.95 ETH</p>
                    <div className='py-4 flex justify-center '>
                        <button className='py-2 px-12 sm:px-20 border-2 rounded border-blue-600 hover:bg-blue-500 duration-200'>Check Product </button>
                    </div>
                </div>
                <div className='bg-slate-200'>
                    <img src={puzzle} alt="" className='w-full h-[100%] object-cover'/>
                </div>
            </div>
        </div>
    )
}
