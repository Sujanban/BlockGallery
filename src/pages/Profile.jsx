import React from 'react'
import { Hero_banner } from "../components/Hero_banner";

export const Profile = () => {
  return (
    <div className='mt-[10vh]'>
      <Hero_banner text={'User Profile'} />
      <div className='mx-auto md:px-4 lg:px-8 p-8 xl:w-4/5'>
        <h1 className='text-2xl font-bold text-txt'>Hello Creator!</h1>
        <div>
          
        </div>
      </div>
    </div>
  )
}
