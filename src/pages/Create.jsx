import React from 'react'
import { Footer } from '../components/Footer'
import profile from "../images/profile.jpg";
import { Hero_banner } from '../components/Hero_banner';

export const Create = () => {
  return (
    <div className="mt-[10vh]">
      <Hero_banner text={"Create NFTs"}/>
      <div className=' mx-auto md:px-4 lg:px-8 p-4 sm:p-8 xl:w-4/5' >
        <h1 className='p-4 text-2xl font-bold text-txt'>Fillup your details and start selling</h1>
        <div className='grid md:grid-cols-2 sm:gap-4'>
          <div className=''>
            <form action="" className='mx-auto p-4 space-y-3 border rounded border-gray-900/10 '>
              <div>
                <h1 className='py-2'>NFT Title</h1>
                <input type="text" required className="w-full  border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 " placeholder="NFT Title..." />

                {/* <input type="text" className='text-slate-900 border-2 border-slate-300 outline-none rounded p-1 focus:ring-1 focus:border-collapse' placeholder='Enter NFT Title Here' /> */}
              </div>
              <div>
                <h1 className='py-2'>NFT Discription</h1>
                <textarea rows="4" required className="w-full  border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 " placeholder="NFT Discription..."></textarea>
              </div>
              <div>
                <h1 className='py-2'>Listing Price (Eth)</h1>
                <input type="number" required min="0.001" step="0.001" className="w-full  border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 " placeholder="Listing Price..." />
              </div>
              <div>
                <h1 className='py-2'>Upload File (jpg,jpeg,png,webp)</h1>
                <input accept="image/*" required type="file" min="0.001" step="0.001" className="w-full  border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 " />
              </div>
              <div className='py-2 mx-auto '>
                <button type='submit' className='w-full px-4 py-2 mx-auto bg-yelloww hover:bg-yellow-500 text-txt rounded'>
                  Create
                </button>
              </div>
            </form>
          </div>
          <div className='flex justify-center items-center md:relative'>
            <div className='p-8  md:96 lg:w-[30rem] rounded bg-slate-100 md:absolute -top-36'>
              <h1 className='flex justify-center font-bold text-blue-700 text-5xl'>20k+</h1>
              <h2 className='py-4 text-bold text-2xl'>Gain on viewership. Our platform generates a lots of views.</h2>
              <p className='text-slate-600'>Blockgallery is relatively new and is actively working on integration on many others chains. Due to which it is gaining popularity among thousands of visitors every day.</p>

              <div className='py-8'>
                <h1 className='text-2xl font-semibold'>Need help creating your NFT?</h1>
                <img className="my-4 h-20 w-20 object-cover rounded-full" src={profile} alt="" />
                <h2 className='my-4'>Sujan Ban<br /> <b>CEO Manager Assistant</b></h2>
                <p className=' text-slate-600'>Quick support this is a very important elements of this platform. If you have any question please leave us a message. We will respond back as soon as possible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
