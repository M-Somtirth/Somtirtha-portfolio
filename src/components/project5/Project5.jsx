import React from 'react'
import './project5.css'
import graph5 from '../../img/portfolio.gif'
const Project = () => {
  return (
    <div className='pr5'>
      <div className='pr-browser'>

        <div className='pr-circles'></div>
        <div className='pr-circles'></div>
        <div className='pr-circles'></div>
        <div className='pr-cards'>
          <div className='pr-cfront'>
            <img src={graph5} alt="" className='pr-graph' />
          </div>
          <div className='pr-cback'>
          <div className='pr-texts'>
              Various Apache Solr related Projects
              <div className='pr-list'>
                <ul>
                  <li>Designed various RESTful API's for indexing documents on Apache Solr</li>
                  <li>Various Randomized Systems to keep Data-Sanity between Solr Index and Databases</li>
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
