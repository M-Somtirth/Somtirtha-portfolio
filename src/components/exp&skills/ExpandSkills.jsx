import React, { useContext } from 'react'

import { ThemeContext } from '../../context'
import './ExpandSkills.css'


const ExpandSkills
 = () => {
  const theme= useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className='i'>
      <div className='i-left'>
        <div className='i-leftwrapper' style={{backgroundColor: darkMode && '#333'}}>
          <div className='i-title'><h1> Experience </h1>
              <p className='i-exp'>
                  Backend developer experienced in Java, Python, Apache Solr and various other server health monitoring tools.
                  Experienced data analyst managing a variety of reporting and automation projects, with additional expertise in system design through the development of multiple systems from scratch.
              </p>
            </div>
        </div>
      </div>
      <div className='i-right'>
        <div className='i-rightwrapper' style={{backgroundColor: darkMode && '#555'}}>
            <div className='i-rtitle'><h1> Skills </h1>
                <ul className='i-list'>
                  <li>Languages: Python, Java, C#</li>
                  <li>Frameworks: Spring, .Net</li>
                  <li>Databases: Oracle, MySQL</li>
                  <li>Apache Solr</li>
                </ul>
              </div>
          </div>
      </div>
      
    </div>
  )
}

export default ExpandSkills