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
            <div className='pr-texts'>
              Ship Market Forecasting using Sliding Window and LSTM.
              <div className='pr-list'>
                <ul>
                  <li>Using Sliding Window of size x-days and Mirroring Technique.</li>
                  <li>A LSTM model was build to perform Ship Market Forecasting.</li>
                  <li>Permutation Combination pf many analsys features were done 
                    to find out best results.</li>
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
