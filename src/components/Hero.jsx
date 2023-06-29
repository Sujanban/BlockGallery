import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";

export const Hero = () => {
  return (
    <div>
        <div className="px-8 md:px-4 lg:px-8 mt-[10vh] w-full h-[90vh]">
            <div className="xl:w-4/5 mx-auto h-full">
                <div className="h-full my-auto sm:grid grid-cols-2">
                    <div className="flex items-center my-auto h-full">
                        <div>
                        <h1 className="py-6 md:py-0 text-txt text-5xl md:text-7xl xl:text-8xl font-bold my-auto">Discover Rare Collection of Art and NFT's.</h1>
                        <h1 className="text-txt py-3 md:py-6 text-xl font-semibold">Digital Marketplace for crypto collectionles and non-fungible token. NFT's</h1>
                        <button className="my-4 md:my-0 px-4 py-2 bg-yelloww hover:bg-yellow-500 rounded-full text-txt flex items-center">Create NFT<HiArrowNarrowRight /></button>
                        </div>
                        {/* <h1 className="py-6 md:py-0 text-slate-800 text-5xl md:text-7xl xl:text-8xl font-bold my-auto">Discover <b className="text-stone-800">Rare</b> Collection of <b className="text-stone-800">Art and NFT's.</b></h1>
                        <h1 className="text-slate-500 py-3 md:py-6 text-xl font-semibold">Digital Marketplace for crypto collectionles and non-fungible token. NFT's</h1>
                        <button className="my-4 md:my-0 px-4 py-2 bg-stone-800 rounded-full text-white flex items-center">Create NFT<HiArrowNarrowRight /></button> */}
                    </div>
                    {/* <div class="hidden sm:grid md:h-full relative bg-indigo-00 flex items-center justify-center">
                        <img className=" w-96 -translate-y-8 -rotate-3 rounded-xl" src={boredape} alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}
