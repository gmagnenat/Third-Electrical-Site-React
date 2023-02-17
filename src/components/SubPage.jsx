import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CallNow from './CallNow';
import Cities from './Cities';
import Footer from './Footer';
import Nav from './Nav/Nav';

const SubPage = () => {

    const data = useLoaderData();

  return (
    <>
      <Nav  />
      <div className='
      bg-[url(./resources/imgs/artistic-scaffolding-600.webp)] 
      md:bg-[url(./resources/imgs/artistic-scaffolding-900.webp)]
      lg:bg-[url(./resources/imgs/artistic-scaffolding-1200.webp)]
      xl:bg-[url(./resources/imgs/artistic-scaffolding-1800.webp)]
      h-full w-full bg-cover pb-10 sm:pb-16' >
        <div className='w-[95%] sm:w-[80vw] sm:p-12 max-w-[1000px] bg-white/90 relative m-auto
        p-4 top-8 pb-16 rounded-md' >
            <h2 className='text-center m-8 text-xl' >{data.title}</h2>
            <p>{data.text}</p>
            <Cities  />
            <h2 className='text-center text-2xl' >Friendly and Fast Electrician</h2>
            <div className='bg-black h-[6px] w-24 my-4 mx-auto' />
            <CallNow  />
        </div>
      </div>
      <Footer  />
    </>
  )
}

export default SubPage