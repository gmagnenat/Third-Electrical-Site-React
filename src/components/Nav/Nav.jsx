import React from 'react';
import { useWindowWidth } from '../useWindowWidth';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Nav = () => {

    const width = useWindowWidth();

  return (
    <div>
        <div>
            <h1>Call us! 250-555-5555</h1>
        </div>
        {width > 976 ? <DesktopNav  /> : <MobileNav  />}
        <div>
                
                {/* <img src='../resources/imgs/bolt.svg' /> */}
                {/* {navOptions.map((o, i) => (
                    <li key={i} >
                        <Link to={o.href}>{o.title}</Link>
                    </li>
                ))} */}
        </div>
    </div>
  )
}





export default Nav