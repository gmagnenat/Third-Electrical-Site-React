import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navOptions } from '../../resources/data'
import { dropBtnStyles } from './NavStyles'

const MobileNav = () => {

    const [dropdownActive, setDropdownActive] = useState(false)

  return (
    <div onClick={() => setDropdownActive(!dropdownActive)} style={{...dropBtnStyles.btn}} >
            <div style={dropdownActive ? {...dropBtnStyles.barOne, ...dropBtnStyles.bars, ...dropBtnStyles.barOneX} : {...dropBtnStyles.barOne, ...dropBtnStyles.bars}} />
            <div style={dropdownActive ? {...dropBtnStyles.barTwo, ...dropBtnStyles.bars, ...dropBtnStyles.barTwoX} : {...dropBtnStyles.barTwo, ...dropBtnStyles.bars}} />
            <div style={dropdownActive ? {...dropBtnStyles.barThree, ...dropBtnStyles.bars, ...dropBtnStyles.barThreeX} : {...dropBtnStyles.barThree, ...dropBtnStyles.bars}}/>
            <div style={dropdownActive ? {...dropBtnStyles.dropContent, ...dropBtnStyles.dropContentShow} : {...dropBtnStyles.dropContent}} >
            {navOptions.map((o, i) => (
                        <Link style={dropBtnStyles.dropItem} to={o.href}>{o.title}</Link>
                ))}
            </div>
        </div>
  )
}

export default MobileNav