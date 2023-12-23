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
            <div className='pr-texts'>
              Evidence-based Drug Repurposing using Graph Neural Network.
              <div className='pr-list'>
                <ul>
                  <li>Heterogeneous-Graph of Disease-Genes-Drugs.</li>
                  <li>R-GCN variants Parallel, Residual, JK-Net used for link prediction.</li>
                  <li>Validation was performed on new Drug-Gene pairs based on heighest 
                    scores and the results were validated with evidence.</li>
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
