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
          <div className='pr-texts'>
              Using EvalML and Random-Forest Life prediction after Lobectomy.
              <div className='pr-list'>
                <ul>
                  <li>Developed Random-Forest Model for life prediction.</li>
                  <li>Used EvalML to verify no other model would outperform the predictions made by 
                    Random_Forest for that particular dataset.</li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
