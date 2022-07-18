import React from 'react'
import './project1.css'
import graph1 from '../../img/LSTM.png'
const Project = () => {
  return (
    <div className='pr'>
      <div className='pr-browser'>

        <div className='pr-circles'></div>
        <div className='pr-circles'></div>
        <div className='pr-circles'></div>
        <div className='pr-cards'>
          <div className='pr-cfront'>
            <img src={graph1} alt="" className='pr-graph1' />
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
