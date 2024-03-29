import React from 'react'
import './project2.css'
import graph from '../../img/optunaexp.png'
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
          <div className='pr-texts'>
              Using Optuna and Tensorflow analysis of SMF.
              <div className='pr-list'>
                <ul>
                  <li>Optuna single as well as multi objective function was used to perform analysis.</li>
                  <li>Finally the best resulting Neural Network model was taken and analysis was made.</li>
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
