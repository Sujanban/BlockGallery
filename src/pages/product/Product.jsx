import React from 'react'
import { Card } from '../../components/Card';
import { BsArrowRight } from "react-icons/bs";
import nfts from "../../nfts.json";
import { NavLink } from "react-router-dom";



export const Product = () => {
    return (
        <div className='bg-slate-100'>
            <div className='mx-auto md:px-4 lg:px-8 p-8 xl:w-4/5'>
                <h1 className='pt-4 text-4xl font-bold text-txt flex justify-center'>Popular Listings</h1>
                <div className="my-8 flex md:mx-4 justify-center">
                    <input className="w-96 md:w-44 lg:w-80 p-2 rounded text-gray-600 bg-white-200 focus:outline-none" type="search" />
                    <button type="submit" className="font-bold text-txt lg:text-md rounded-lg px-3 py-2 bg-yelloww hover:bg-yellow-500">Search</button>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                    {
                        nfts && nfts.slice(0, 4).map((nft, i) => (
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
        </div>
    )
}
