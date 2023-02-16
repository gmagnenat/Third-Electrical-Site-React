import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


const Reviews = () => {
  return (
    <div>
      <svg className='text-main inline z-30 h-[30vw] w-full max-h-[150px]' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path fill="currentColor" d="M0 0 L100 0 L100 2 L0 100 Z"></path>
      </svg>
      <Carousel >
        {/* map reviews */}
      </Carousel>

    </div>
  )
}

export default Reviews