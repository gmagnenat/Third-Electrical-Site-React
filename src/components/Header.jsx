import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='
    bg-[url(./resources/imgs/artistic-scaffolding-600.webp)] 
    min-[600]:bg-[url(./resources/imgs/artistic-scaffolding-900.webp)]
    min-[900]:bg-[url(./resources/imgs/artistic-scaffolding-1200.webp)]
    min-[1200]:bg-[url(./resources/imgs/artistic-scaffolding-1800.webp)]
    bg-cover z-0 h-screen-width max-h-96'>
        <div className='bg-[#ffffff4d] h-full w-screen m-auto z-20 flex flex-col items-center'>
            <h1 className='text-center text-text-light text-3xl p-2 sm:mt-[10vw]' >Victoria Licensed Electrician</h1>
            <div className='z-10 text-center flex flex-col sm:flex-row gap-x-8 justify-center'>
                <div className='text-text-light bg-accent w-[80vw] max-w-[240px] h-14 my-[10vw] lg:my-14 mx-auto p-2 mb-8 text-center no-underline duration-500 hover:scale-110 hover:rounded-xl'>
                    <a href="tel:250-555-5555">
                        <p className='text-xs m-auto'>CALL NOW FOR A FREE QUOTE</p>
                        <h5 className='text-xl'>250-555-5555</h5>
                    </a>
                </div>
                <div className='flex items-center justify-center p-2 mx-auto my-[10vw] lg:my-14 bg-accent duration-500 hover:scale-110 hover:rounded-xl h-14'>
                    <Link className='text-2xl text-text-light h-14 text-center no-underline m-auto w-[80vw] max-w-[240px]' to="about">About Us</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header