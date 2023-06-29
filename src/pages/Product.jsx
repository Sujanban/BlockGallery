import React from 'react'
import { NavLink } from 'react-router-dom';
import puzzle from "../images/puzzle.jpg";
import profile from "../images/profile.jpg";
import { BsArrowRight } from "react-icons/bs";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import nfts from "../nfts.json";
import { Card } from '../components/Card';
import { Footer } from '../components/Footer';

export const Product = () => {
  return (
    <div className='mt-[10vh]'>
      <div className='mx-auto md:px-4 lg:px-8 p-8 xl:w-4/5'>
        <div className=''>
          <div className='py-2 flex items-center'>
            <h1 className='py-4 text-txt font-bold text-xl sm:text-2xl'>Product Details</h1>
            <p className='m-2 p-1 text-sm bg-blue-100 rounded-lg text-blue-600 '>The best choice</p>
          </div>
          <div className='grid sm:grid-cols-2 sm:gap-4 border'>
            <div className='p-2 sm:p-4'>
              <img src={puzzle} alt="" />
              <div className='p-2 sm:p-8'>
                <div className='flex items-center'>
                  <img src={profile} alt="" className='w-12 h-12 rounded-full object-cover' />
                  <p className='p-4'>0XBE4JSV6BSFY765</p>
                </div>
                <p className='py-2 text-slate-500'>Management of the application in terms of proper functioning and appearance with a greate emphasis on correct user experiance.</p>
              </div>
            </div>
            <div className='p-4'>
              <div className='flex justify-between items-center'>
                <p className='py-2 px-4 text-sm text-blue-600 bg-blue-100 rounded-full'>Creative Work</p>
                <span className='flex items-center'>
                  <BsTwitter className='m-1' />
                  <BsFacebook className='m-1' />
                </span>
              </div>
              <h1 className='py-2 font-bold text-2xl'>Glasstic Cosmos</h1>
              <p className='py-2 text-slate-500'>The creative representation of the rim elements together with the flash elements creates an abstract visions of the artist. The product is created in a dark but pleasent style.</p>
              <div className='my-4 border-2 rounded border-blue-600'>
                <p className='p-2 text-center'>Art Price</p>
                <p className='p-2 font-bold text-4xl text-center'>6.00 ETH</p>
                <div className='py-4 flex justify-center '>
                  <button className='py-2 px-12 sm:px-20 border-2 rounded bg-blue-600 text-white hover:bg-blue-500 duration-200'>Purchase NFT</button>
                </div>
              </div>
              <div className='py-2 flex items-center justify-between'>
                <h1 className='font-bold text-lg'>Project category</h1>
                <p className='text-slate-500'>Digital Artwork</p>
              </div>
              <div className='py-2 flex items-center justify-between'>
                <h1 className='font-bold text-lg'>File Type</h1>
                <p className='text-slate-500'>Image</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className='p-4 font-bold text-txt text-2xl'>Listed Nfts</h1>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          {
            nfts.slice(0, 4).map((nft, i) => (
              <Card
                name={nft.name}
                discription={nft.discription}
                image={nft.image}
                owner_img={nft.owner_img}
                owner={nft.owner}
              />
            ))
          }
        </div>
        <div className='p-4 flex justify-end'>
          <NavLink to="/explore" className='px-4 py-2 flex items-center bg-yelloww rounded-full hover:bg-yellow-500'>View More <BsArrowRight className='m-1' /></NavLink>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
