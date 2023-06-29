import React from 'react'
import { Card } from "../components/Card";
import { BsArrowRight } from "react-icons/bs";
import { Hero_banner } from "../components/Hero_banner";
import nfts from "../nfts.json";
import { Footer } from "../components/Footer";
import { Featured_listing } from '../components/Featured_listing';
import { Socials } from "../components/Socials";

export const Explore = () => {
  return (
    <div className="mt-[10vh]">
      <Hero_banner text={'Explore Nfts'} />
      <Featured_listing />
      <div className='bg-slate-100'>
        <div className='mx-auto md:px-4 lg:px-8 p-8 xl:w-4/5'>
          <h1 className='pt-4 text-4xl font-bold text-txt flex justify-center'>Explore New Listings</h1>
          <div className="my-8 flex md:mx-4 justify-center">
            <input className="w-96 md:w-44 lg:w-80 p-2 rounded text-gray-600 bg-white-200 focus:outline-none" type="search" />
            <button type="submit" className="font-bold text-txt lg:text-md rounded-lg px-3 py-2 bg-yelloww hover:bg-yellow-500">Search</button>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
            {
              nfts && nfts.map((nft, i) => (
                <Card name={nft.name} discription={nft.discription} image={nft.image} owner_img={nft.owner_img} owner={nft.owner} />
              ))
            }
          </div>
        </div>
      </div>
      <Socials />
      <Footer />
    </div>
  )
}
