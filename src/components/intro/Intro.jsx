import React, { useContext } from 'react'
import './Intro.css'
import Me from "../../img/my_pic-bg1.png"
import { ThemeContext } from '../../context'
const Intro = () => {
  const theme= useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className='i'>
      <div className='i-left'>
        <div className='i-leftwrapper' style={{backgroundColor: darkMode && '#333'}}>
          <div className='i-welcome'><h2>Hello, My Name is</h2></div>
          <div className='i-name'><h1>Somtirtha Mukherjee.</h1></div>
          <div className='i-itemmain'>
            <div className='i-itemwrapper'>
              <div className='i-item'>System Engineer</div>
              <div className='i-item'>Data Analyst</div>
              <div className='i-item'>Software Developer</div>
              <div className='i-item'>Machine Learning Enthusiast</div>
              <div className='i-item'>Coder</div>
              <div className='i-item'>Singer</div>
            </div>
          </div>
          <p className='i-desc'>Master's in Computer Science and Engineering from Jadavpur University. A System's Engineer at Indiamart Intermesh Ltd.
            Served as Data Analyst at MOL-IT India. Qualified GATE and NET examinations 2020 and 2022 respectively. </p>
        </div>
        
        <svg className='i-scroll' width="200" height="200" viewBox="-100 -100 200 200">
          <defs>
            <path
              id="branch"
              d="
              M 0 0 L 0 -90
              M 0 -20 L 20 -34
              M 0 -20 L -20 -34
              M 0 -40 L 20 -54
              M 0 -40 L -20 -54
              M 0 -60 L 20 -74
              M 0 -60 L -20 -74"
              stroke= {darkMode ? "#59b256":"#333"}
              strokeWidth="5"
            />
          </defs>

          <use href="#branch" />
          <use href="#branch" transform="rotate(60)" />
          <use href="#branch" transform="rotate(120)" />
          <use href="#branch" transform="rotate(180)" />
          <use href="#branch" transform="rotate(240)" />
          <use href="#branch" transform="rotate(300)" />
        </svg>
      </div>
      <div className='i-right'>
        <div className='i-bg'></div>
        <img src={Me} alt='' className='i-img'></img>
      </div>
    </div>
  )
}

export default Intro
