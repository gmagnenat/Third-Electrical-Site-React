import React from 'react'
//map for WhatWeDo sections
const WhatWeDo = () => {
  return (
    <>
        <h2>What We Do</h2>
        <div></div>
        <div>
            <a href="./sub-pages/resi.html">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <polygon points="30.1,84.5 10.2,50 30.1,15.5 69.9,15.5 89.8,50 69.9,84.5" fill="currentColor"/>
                    </svg>
                    <i class="fa fa-wrench fa-2x" aria-hidden="true"></i>
                    <h3>Residential</h3>
                    <ul>
                        <li>Renovations</li>
                        <li>Panel Upgrades</li>
                        <li>New Construction</li>
                        <li>Landscape Lighting</li>
                        <li>Knob-and-Tube Replacement</li>
                    </ul>
                </div>
            </a>
            <a href="./sub-pages/commercial.html">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <polygon points="30.1,84.5 10.2,50 30.1,15.5 69.9,15.5 89.8,50 69.9,84.5" fill="currentColor"/>
                    </svg>
                    <i class="fa fa-bolt fa-2x" aria-hidden="true"></i>
                    <h3>Commercial</h3>
                    <ul>
                        <li>Data Wiring</li>
                        <li>Security Systems</li>
                        <li>Backup Generators</li>
                        <li>Fire Alarm Systems</li>
                        <li>Warehouse and Office Lighting</li>
                    </ul>
                </div>
            </a>
            <a href="./sub-pages/industrial.html">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <polygon points="30.1,84.5 10.2,50 30.1,15.5 69.9,15.5 89.8,50 69.9,84.5" fill="currentColor"/>
                    </svg>
                    <i class="fa fa-code-fork fa-2x" aria-hidden="true"></i>
                    <h3>Industrial</h3>
                    <ul>
                        <li>Switchboards</li>
                        <li>600v Systems</li>
                        <li>Motor Controls</li>
                        <li>3-Phase Circuits</li>
                        <li>Outdoor Lighting</li>
                    </ul>
                </div>
            </a>
        </div>
      </>
  )
}

export default WhatWeDo