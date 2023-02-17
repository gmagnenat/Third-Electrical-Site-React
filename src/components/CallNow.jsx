import React from 'react'

const CallNow = () => {
  return (
    <div className='text-text-light bg-accent w-[80vw] max-w-[240px] h-14 my-[10vw] lg:my-14 mx-auto p-2 mb-8 text-center no-underline duration-500 hover:scale-110 hover:rounded-xl'>
        <a href="tel:250-555-5555">
            <p className='text-xs m-auto'>CALL NOW FOR A FREE QUOTE</p>
            <h5 className='text-xl'>250-555-5555</h5>
        </a>
    </div>
  )
}

export default CallNow