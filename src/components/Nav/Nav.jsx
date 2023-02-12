import React from 'react';
import { useWindowWidth } from '../useWindowWidth';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Nav = () => {

    const width = useWindowWidth();

  return (
    <div>
        <div className='flex items-center' >
            <h1 className='text-2xl p-2 bg-accent text-text-light w-screen text-center' >Call us! 250-555-5555</h1>
        </div>
        {width > 976 ? <DesktopNav  /> : <MobileNav  />}
    </div>
  )
}





export default Nav