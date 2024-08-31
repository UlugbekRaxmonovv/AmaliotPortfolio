import React from 'react';
import './Services.scss'
import { TbDeviceImac } from "react-icons/tb";
import { FiEye } from "react-icons/fi";



const Services = () => {
    return (
       <section id='services'>
        <div className="services container">
        <h1>Services</h1>
        <h2>Building Digital Product
With Better Experience</h2>
<div className="services_row">
<div className="services_row_column">
  <div className="hammasi">
 <div className="svg">
 <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 9.5C16.5711 9.5 18.25 7.82107 18.25 5.75C18.25 3.67893 16.5711 2 14.5 2C12.4289 2 10.75 3.67893 10.75 5.75C10.75 7.82107 12.4289 9.5 14.5 9.5Z"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 27V9.5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.75 14.5H2C2 17.8152 3.31696 20.9946 5.66117 23.3388C8.00537 25.683 11.1848 27 14.5 27C17.8152 27 20.9946 25.683 23.3388 23.3388C25.683 20.9946 27 17.8152 27 14.5H23.25"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 </div>

    <h3>UI/UX Design</h3>
    <p>I’ve created a user interface
and user experience with
some proccess and method.</p>
  </div>
</div>

<div className="services_row_column">
  <div className="hammasi">
 <div className="svg">
<TbDeviceImac/>
 </div>

    <h3>Web Development</h3>
    <p>I’ve created a user interface
and user experience with
some proccess and method.</p>
  </div>
</div>


<div className="services_row_column">
  <div className="hammasi">
 <div className="svg">
 <FiEye />
 </div>

    <h3>Visual Branding</h3>
    <p>I’ve created a user interface
and user experience with
some proccess and method.</p>
  </div>
</div>


<div className="services_row_column">
  <div className="hammasi">
 <div className="svg">
 <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 9.5C16.5711 9.5 18.25 7.82107 18.25 5.75C18.25 3.67893 16.5711 2 14.5 2C12.4289 2 10.75 3.67893 10.75 5.75C10.75 7.82107 12.4289 9.5 14.5 9.5Z"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 27V9.5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.75 14.5H2C2 17.8152 3.31696 20.9946 5.66117 23.3388C8.00537 25.683 11.1848 27 14.5 27C17.8152 27 20.9946 25.683 23.3388 23.3388C25.683 20.9946 27 17.8152 27 14.5H23.25"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 </div>

    <h3>App Development</h3>
    <p>I’ve created a user interface
and user experience with
some proccess and method.</p>
  </div>
</div>
</div>
        </div>
       </section>
    );
}

export default Services;
