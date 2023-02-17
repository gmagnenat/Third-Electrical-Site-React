import React from 'react'
import { Link } from 'react-router-dom'
import { whatWeDo } from '../resources/data'
import Cities from './Cities'
//map for WhatWeDo sections
const WhatWeDo = () => {
  return (
    <div className='bg-main'>
        <h2 className='pt-12 text-center text-3xl text-text' >What We Do</h2>
        <div className='bg-black h-[6px] w-16 my-4 mx-auto' />
        <div className='flex flex-col md:flex-row justify-around leading-8 pb-16' >

            {whatWeDo.map((w, i) => (
                <Link className='md:w-1/4 group/item' key={i} to={w.path}>
                    <div>
                        <svg className='text-accent h-[100px] w-[100px] mx-auto mt-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <polygon className='duration-1000 origin-center group-hover/item:rotate-[360deg] group-hover/item:text-black' points="30.1,84.5 10.2,50 30.1,15.5 69.9,15.5 89.8,50 69.9,84.5" fill="currentColor"/>
                        </svg>
                        <div className='w-10 h-10 relative m-auto bottom-[70px] z-40 select-none pointer-events-none' >
                            {w.icon}
                        </div>
                        <h3 className='text-center text-xl mb-5' >{w.title}</h3>
                        <ul>
                            {w.list.map((l, i) => (
                                <li className='border-b-2 w-3/4 max-w-[220px] text-center m-auto list-none' key={i} >{l}</li>
                            ))}
                        </ul>
                    </div>
                </Link>
            ))}
        </div>
        <Cities  />
      </div>
  )
}

export default WhatWeDo