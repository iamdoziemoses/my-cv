import React, { Component } from 'react';
import './Education.css';

const Education = () => {
    return ( 
       <div className='section-education'>
        <h2 className='general-title'>Education</h2> 
         <ul>
             <li>
                <div class="info">
                        <p class="semi-bold">Torchbearers International School -- Primary School Education</p> 
                        <div class="date">September 2006 - September 2011</div> 
                 </div>
             </li>

             <li>
                <div class="info">
                        <p class="semi-bold">Topfield College -- Primary/Secondary School Education</p> 
                        <div class="date">September 2011 - July 2020</div> 
                 </div>
             </li>

             <li>
                <div class="info">
                        <p class="semi-bold">Federal University Technology Owerri -- Tertiary Education</p> 
                        <div class="date">August 2021 - Present</div> 
                 </div>
             </li>
            </ul>
            </div>
     );
}
 
export default Education;