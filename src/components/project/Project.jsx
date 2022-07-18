import React from 'react'
import './project.css'
import graph from '../../img/MyGraph.JPG'
const Project = () => {
  return (
    <div className='pr'>
      <div className='pr-browser'>

        <div className='pr-circles'></div>
        <div className='pr-circles'></div>
        <div className='pr-circles'></div>
        <div className='pr-cards'>
          <div className='pr-cfront'>
            <img src={graph} alt="" className='pr-graph' />
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
