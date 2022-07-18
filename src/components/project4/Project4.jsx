import React from 'react'
import './project4.css'
import graph4 from '../../img/LifePred.png'
const Project = () => {
  return (
    <div className='pr4'>
      <div className='pr-browser'>

        <div className='pr-circles'></div>
        <div className='pr-circles'></div>
        <div className='pr-circles'></div>
        <div className='pr-cards'>
          <div className='pr-cfront'>
            <img src={graph4} alt="" className='pr-graph' />
          </div>
          <div className='pr-cback'>
            back
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
