import React, { Component } from 'react';
import './General.css';
import Experience from './Experience';
import dozie from '../dozie.jpg';
import fontawesome from '../font-awesome/css/all.min.css';

const General = () => {
    return ( 
      <div className='main'>
        <div className='general-info'>
            <h2 className='general-title'>Chidozie <br /><span className='moses'>Moses</span></h2>
            <img src={dozie} alt="my-picture" width={300} height={400} />
            <figcaption>WEB DESIGNER</figcaption>
            <p className='general-description'>With over 2 years of experience in building mind compelling and responsive websites and web apps. I am the one fit to do the job 
                perfectly. I combine the power of my soft skills and hard skills to provide value to the company I work with. Hire me today and
                your company's goals wil be 10X.
            </p>
            <div className='general-info__contact'>
                <div className='contact-data'>
                    <i className='fa fa-envelope icon'></i>
                    <p><span className='contact-title'>Email</span> <br/>moseschidoziemitchel@gmail.com</p>
                </div>

                <div className='contact-data'>
                    <i className='fa fa-home icon'></i>
                    <p><span className='contact-title'>Address</span> <br/>8, Cardoso Street</p>
                </div>

                <div className='contact-data'>
                    <i className='fa fa-phone icon'></i>
                    <p><span className='contact-title'>Phone</span> <br/>08148369497</p>
                    </div>
                    
                <div className='contact-data'>
                    <i className='fa fa-code icon'></i>
                    <p><span className='contact-title'>Github</span> <br/>iamdoziemoses</p>
                </div>
            </div>
        </div>
        <Experience/>
        </div>
     );
}
 
export default General;