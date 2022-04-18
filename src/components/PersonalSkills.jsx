import React, { Component } from 'react';
import './PersonalSkills.css';

const PersonalSkills = () => {
    return ( 
        <div>
            <h2 className='skills-title'>Personal Skills</h2>
            <p>HTML</p>
            <div class="container">
              <div class="skills html">90%</div>
            </div>

            <p>CSS</p>
            <div class="container">
              <div class="skills css">70%</div>
            </div>

            <p>JavaScript</p>
            <div class="container">
              <div class="skills js">65%</div>
            </div>

            <p>BootStrap/SASS</p>
            <div class="container">
              <div class="skills bs">80%</div>
            </div>

            <p>Wordpress</p>
            <div class="container">
              <div class="skills wp">80%</div>
            </div>

            <p>Git and Github</p>
            <div class="container">
              <div class="skills git">80%</div>
            </div>

            <p>Canva</p>
            <div class="container">
              <div class="skills canva">70%</div>
            </div>

            <p>Soft Skils</p>
            <div class="container">
              <div class="skills softskill">80%</div>
            </div>
            </div>
     );
}
 
export default PersonalSkills;