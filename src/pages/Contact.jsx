import React from 'react'
import { Hero_banner } from '../components/Hero_banner'
import { HiOutlineMail,HiOutlinePhoneMissedCall } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Socials } from '../components/Socials';

export const Contact = () => {
    return (
        <div className='mt-[10vh]'>
            <Hero_banner text={'Contact'} />
            <div className='mx-auto md:px-4 lg:px-8 p-4 sm:p-8 xl:w-4/5'>
                <div>
                    <h1 className='px-2 py-4 text-txt text-center text-3xl font-bold'>Lets Have a Talk</h1>
                    <div className='p-4 sm:flex justify-center gap-8'>
                        <Link to="mailto:bansujan@gmail.com" className='p-8 flex items-center border rounded hover:border-yellow-500 duration-200'>
                            <HiOutlineMail className='text-5xl text-yelloww '/>
                            <div className='px-4'>
                                <h1 className='text-xl font-bold'>Email</h1>
                                <p className='text-slate-500'>bansujan@gmail.com</p>
                            </div>
                        </Link>
                        <Link  to="tel:9823456789" className='p-8  flex items-center border rounded hover:border-yellow-500 duration-200'>
                            <HiOutlinePhoneMissedCall className='text-5xl text-yelloww'/>
                            <div className='px-4'>
                                <h1 className='text-xl font-bold'>Phone Number</h1>
                                <p className='text-slate-500'>(977) 9823421386</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Socials/>
            <Footer/>
        </div>
    )
}
