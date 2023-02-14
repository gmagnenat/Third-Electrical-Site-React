import React from 'react'
import { aboutUs } from '../resources/data'

const AboutUs = () => {
  return (
    <div className='
    bg-[url(./resources/imgs/Office-Interior-600.webp)] 
    min-[600]:bg-[url(./resources/imgs/Office-Interior-900.webp)]
    min-[900]:bg-[url(./resources/imgs/Office-Interior-1200.webp)]
    min-[1200]:bg-[url(./resources/imgs/Office-Interior-1800.webp)]
    bg-cover'>
      <div className='bg-[#0002] h-full w-full z-10'>
          <svg className='text-main inline z-30 h-[30vw] w-full max-h-[150px]' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path fill="currentColor" d="M0 0 L100 0 L100 2 L0 100 Z"></path>
          </svg>
          <h2 className='p-8 text-3xl text-center text-text-light' >About Us</h2>
          <div className='bg-white w-1/4 h-px m-auto mb-5' />
          <div className='flex flex-col justify-center md:flex-row gap-y-4' >
              {aboutUs.map((a, i) => (
                <div className='
                z-20 border border-accent text-text-light bg-[#0002]
                flex flex-col justify-center text-center gap-y-4
                my-[2px] mx-auto p-3 w-11/12 max-w-[200px]
                hover:bg-[#797878] hover:rounded-[100px] hover:border-[#797878]
                transition-all duration-700 ease-in-out' >
                      {a.icon}
                    <h3>{a.number}</h3>
                    <div className='bg-white w-1/4 h-px m-auto' />
                    <p className='w-3/5 text-center mx-auto' >{a.text}</p>
                </div>
              ))}
          </div>
          <svg className='text-main inline z-30 h-[30vw] max-h-[150px] w-full mt-16' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
              <g transform="translate(0,-952.36218)">
                  <path fill="currentColor" d="m 0,1052.3622 100,0 0,-2 L 0,952.36218 z"></path>
              </g>
          </svg>
      </div>
    </div>
  )
}

export default AboutUs