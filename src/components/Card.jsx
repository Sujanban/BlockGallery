import React from 'react'
import { NavLink } from 'react-router-dom'

export const Card = ({ name, image, discription, owner, owner_img }) => {
  return (
    // <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
    <NavLink to="/product">
      <div className='mx-auto'>
        <div className='m-2 shadow rounded mx-auto'>
          <img className='mx-auto w-60 h-60 object-cover rounded' src={image} alt="" />
          <div className='p-4'>
            <h1 className='font-bold'>{name}</h1>
            <p className='text-slate-600'>{discription}</p>
            <div className='flex items-center'>
              <img className='my-4 mr-2 w-8 h-8 object-cover rounded-full ' src={owner_img} alt="" />
              <h2>{owner}</h2>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
    // </div>
  )
}


