import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { reviews } from '../resources/data';


const Reviews = () => {
  return (
    <div className='
    bg-[url(./resources/imgs/City-Skyline-600.webp)] 
    md:bg-[url(./resources/imgs/City-Skyline-900.webp)]
    lg:bg-[url(./resources/imgs/City-Skyline-1200.webp)]
    xl:bg-[url(./resources/imgs/City-Skyline-1800.webp)]
    bg-cover bg-center h-[700px]' >
      <div className='bg-[#00000080] h-full w-full z-10 pb-12' >
        <svg className='text-main inline z-30 h-[30vw] w-full max-h-[150px]' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path fill="currentColor" d="M0 0 L100 0 L100 2 L0 100 Z"></path>
        </svg>
        <h2 className='text-center text-2xl text-text-light m-8 pt-14' >Reviews</h2>
        <div className='bg-white w-1/4 h-px m-auto mb-5' />
        {reviews && <Carousel 
        key={reviews.length}
        showThumbs={false}
        showStatus={false}
        autoplay={true}
        infiniteLoop={true}
        className='max-w-[500px] relative m-auto'>
          {reviews.map((r, i) => (
            <div key={i} 
            className='w-full text-text-light py-6 px-10 leading-6'>
              <p>{r.text}</p>
              <p className='pb-4 pt-6' >{r.name}</p>
            </div>
          ))}
        </Carousel>}
      </div>
    </div>
  )
}

export default Reviews