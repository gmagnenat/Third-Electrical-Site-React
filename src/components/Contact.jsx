import React from 'react'
import CallNow from './CallNow'
import Footer from './Footer'
import Nav from './Nav/Nav'

const Contact = () => {
  return (
    <>
      <Nav  />
      <div className='
      bg-[url(./resources/imgs/artistic-scaffolding-600.webp)] 
      md:bg-[url(./resources/imgs/artistic-scaffolding-900.webp)]
      lg:bg-[url(./resources/imgs/artistic-scaffolding-1200.webp)]
      xl:bg-[url(./resources/imgs/artistic-scaffolding-1800.webp)]
      h-full w-full bg-cover pb-10 sm:pb-16' >
        <div className='w-[95%] sm:w-[80vw] sm:p-12 max-w-[1000px] bg-white/80 relative m-auto
          p-4 top-8 pb-16 rounded-md' >
            <h2 className='text-center'>Contact Us</h2>
            <div className='flex flex-col justify-center md:flex-row md:justify-evenly'>
                <div className='flex justify-center flex-col gap-y-4 text-center mb-8'>
                    <div className='flex flex-col justify-center'>
                        <form className='flex flex-col justify-center' id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/mvolylne" method="post">
                          <fieldset className='flex flex-col justify-center text-center gap-y-2' id="fs-frm-inputs">
                            <label htmlFor="full-name">Full Name</label>
                            <input className='p-1 border-black border rounded-sm' type="text" name="name" id="full-name" placeholder="First and Last" required=""/>
                            <label htmlFor="email-address">Email Address</label>
                            <input className='p-1 border-black border rounded-sm' type="email" name="_replyto" id="email-address" placeholder="email@domain.com" required=""/>
                            <label htmlFor="message">Message</label>
                            <textarea className='p-1 border-black border rounded-sm' rows="5" name="message" id="message" placeholder="What can we do for you?" required=""/>
                            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
                          </fieldset>
                          <input className='my-8 mx-auto text-text-light bg-accent w-[80vw] max-w-[240px] h-14 
                          lg:my-14 p-2 mb-8 text-center no-underline duration-500 hover:scale-110 hover:rounded-xl' 
                          type="submit" value="Submit"/>
                        </form>
                      </div>
                </div>
                <div className='flex flex-col justify-center gap-y-2 text-center mb-8'>
                    <h3 className='underline mt-2' >Where to find us</h3>
                    <h4>Phone</h4>
                    <p>Office: 250-555-5555</p>
                    <p>Cell: 250-555-5556</p>
                    <p>Cell: 250-555-5557</p>
                    <h4>Email</h4>
                    <p>bennetthumphrey98@gmail.com</p>
                    <h3 className='underline mt-2' >Hours of Operation</h3>
                    <p>Mon - Fri: 8 - 4</p>
                    <p>Sat: 9 - 3</p>
                    <p>Sun: CLOSED</p>
                    <h3 className='underline mt-2' >Address</h3>
                    <p>1234 Fake St, Victoria BC V1E 9U4</p>
                </div>
            </div>
            
            <div className='text-text-light bg-accent w-[80vw] max-w-[240px] h-14 my-2 mx-auto p-2 mb-8 text-center no-underline duration-500 hover:scale-110 hover:rounded-xl'>
        <a href="tel:250-555-5555">
            <p className='text-xs m-auto'>CALL NOW FOR A FREE QUOTE</p>
            <h5 className='text-xl'>250-555-5555</h5>
        </a>
    </div>
        </div>
    </div>
    <Footer  />
  </>
  )
}

export default Contact