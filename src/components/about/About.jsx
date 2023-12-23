import React, { useContext } from 'react'
import './about.css'
import achiv from '../../img/achivements.png'
import gate from '../../img/GATE.png'
import net from '../../img/UGCNET.png'
import { ThemeContext } from '../../context'
const About = () => {
    const theme= useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    return (
        <div className='a'>
            
            <div className='a-left'>
                <div className='a-card bg' style={{backgroundColor: darkMode ? '#59b256': '#222' }}>
                </div>
                <div className='a-card'>
                    <img src={achiv} alt="" className='a-img' />
                </div>
            </div>
            <div className='a-right'>
                <div className='i-title'>
                    <h1> Achievements</h1>
                </div>
                <div className='a-desc'>
                    <p > 
                        B.Tech from MAKAUT in Computer Science and Engineering with DGPA 8.81 .
                        Master's in Computer Science Engineering from Jadavpur University with linear CGPA 9.0 .
                        Secured 726 All India Rank in GATE CS/IT 2020. 
                        Qualified UGC-NET in Computer Science 2022.
                    </p>
                </div>
                <div className='a-imgG'>
                    <img src={gate} alt="" className='a-imggate'/>
                    <div className='a-imgtitle'>
                        <h4>GATE 2020</h4>
                        <p>Qualified GATE 2019 and GATE 2020 with an AIR-726 in CS/IT domain.</p>

                    </div>
                </div>
                <div className='a-imgN'>
                    <img src={net} alt="" className='a-imgnet' />
                    <div className='a-imgtitle1'>
                        <h4>UGC-NET 2022</h4>
                        <p>Qualified UGC-NET-2022 Computer Science domain .</p>

                    </div>
                </div>
                </div>
        </div>
            )
}

            export default About
