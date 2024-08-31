import React from 'react';
import './Main.scss'
import main from '../../assets/img/main1.png'
import man from '../../assets/img/man.png'
const Main = () => {
    return (
        <div className='main'>
         <div className="container">
         <div className="mains">
            <div className="main_">
                <div className="btn_btn">
                    <button>Hey, I'm Musa</button>
                </div>
                <h1>Building Digital
Products, Brands
& Experience.</h1>
<p>A Product Design and Visual Designer in SF I”m Specialize in
UI/UX, Responsive web design, and visual Development. </p>
<div className="btnw">
    <div className="btns1">
        <button>Hire Me</button>
    </div>
    <div className="btns2">
        <button>My Work</button>
    </div>
</div>
            </div>
            <div className="main_">
               <div className="imags">
                <img src={main} alt="" />
                <div className="img">
                     <div className="column">
                        <p>‘’Musa has benn an outstanding
contributor to our team’s UI Designer
needs highly recommened’’</p>

<div className="man">
<div className="man_s">
        <img src={man} alt="" />
    </div>
    <div className="man_ss">
       <h5>Jason Holder</h5>
     <span>UX Designer at Futura</span>
    </div>
</div>
                     </div>
                </div>
               </div>

              
            </div>
           </div>
           <div className="main_bottom">
                <div className="main_bottom_s">
                  <div className="mains_column">
                  <div className="main_bottoms">
                  <h1>STATISTIC</h1>
                  <div className="main_bootoms_row">
                  <div className="main_bootoms_row_list">
                    <h1>300+</h1>
                    <p>Project Delivery</p>
                   </div>
                   <div className="main_bootoms_row_list">
                    <h1>8</h1>
                    <p>Years Experience</p>
                   </div>
                   <div className="main_bootoms_row_list">
                    <h1>16</h1>
                    <p>Awards</p>
                   </div>
                   <div className="main_bootoms_row_list">
                    <h1>70+</h1>
                    <p>Happy Clients</p>
                   </div>
                  </div>
                  </div>
                  </div>
                </div>
               </div>
         </div>
        </div>
    );
}

export default Main;
