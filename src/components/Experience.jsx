import React, { Component } from 'react';
import Education from './Education';
import PersonalSkills from './PersonalSkills';
import './Experience.css';

const Experience = () => {
    return ( 
        <div className='section-work'>
           <h2 className='general-title'>Experience</h2> 
            <ul>
                <li>
                  <div class="date">February 2022 - present</div> 
                   <div class="info">
                     <p class="semi-bold">LBDIGITAL -- Frontend Developer Intern</p> 
                        <p>LBDIGITAL is a result-focused web design and digital marketing agency focused on delivering top-notch for their clients. 
                            As a Frontend Developer intern, I am/was responsible for building good and beautiful user interfaces for the web which at the end
                            convert for the business owners and brand. I got to learn other skills such as SEO, content marketing amongst others.
                     </p>
                    </div>
                </li>

                <li>
                  <div class="date">May 2020 - December 2020</div> 
                   <div class="info">
                     <p class="semi-bold">Transforming Ajegunle Projects -- Volunteer</p> 
                     <p>Transforming Ajegunle Projects is an organization helping to foster change in my community. Their drive is towards quality education,
                        good governance. I was a volunteer and I helped in coordinating their events. I also impacted young minds on Sustainable Development Goals.</p>
                    </div>
                </li>

                <li>
                  <div class="date">May 2021</div> 
                   <div class="info">
                     <p class="semi-bold">Teens World Empowerment -- Project Lead</p> 
                        <p>In May 2021, I worked with Teens world empowerment and we
                            embarked on a school tour where we visited five schools. We taught
                            the students how to build a basic blog using Agility CMS and deploy to
                            Vercel.</p>
                    </div>
                </li>

                 <li>
                  <div class="date">February 2020</div> 
                   <div class="info">
                     <p class="semi-bold">Youth Empowerment and Growth Initiative -- Volunteer</p> 
                     <p>Youth Empowerment and Growth Initiative is an NGO aimed at making Nigeria a beggar free nation.
                           On one of their events, we went to visit
                           the beggars in the street in my community where we distributed to
                        them books and pens thereby motivating them to get back to school.</p>
                    </div>
                </li>
        </ul>

        <Education />
        <PersonalSkills/>
        </div>
     );
}
 
export default Experience;