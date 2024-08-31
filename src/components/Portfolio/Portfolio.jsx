import React from 'react';
import './Portfolio.scss'
import { VscArrowRight } from "react-icons/vsc";
import img from '../../assets/img/portfolio.png'
import img1 from  '../../assets/img/porfolio1.png'
import img2 from '../../assets/img/portfolio2.png'
import img3 from '../../assets/img/portfolio3.png'

const data =[
    {
        id:1,
        title: 'Website Design',
        description: 'Our website designers have penetrated the mysteries of emotional response to color, image, and eye-tracking. Every element is geared to create maximum appeal.',
        caseStudy: 'Read Case Study',
        arrow: <VscArrowRight />,
        img: img,
    },

    {
        id:2,
        title: 'Product Design',
        description: 'Our website designers have penetrated the mysteries of emotional response to color, image, and eye-tracking. Every element is geared to create maximum appeal.',
        caseStudy: 'Read Case Study',
        arrow: <VscArrowRight />,
        img: img1,
    },

    {
        id:3,
        title: 'App Design',
        description: 'Our website designers have penetrated the mysteries of emotional response to color, image, and eye-tracking. Every element is geared to create maximum appeal.',
        caseStudy: 'Read Case Study',
        arrow: <VscArrowRight />,
        img: img2,
    },

    {
        id:4,
        title: 'DashBoard Design',
        description: 'Our website designers have penetrated the mysteries of emotional response to color, image, and eye-tracking. Every element is geared to create maximum appeal.',
        caseStudy: 'Read Case Study',
        arrow: <VscArrowRight />,
        img: img3,
    },
]


let  list = data?.map((data,inx) =>(
<div className="portfolios" key={inx.id}>
                    <img src={data.img} alt="" />
                <h1>{data.title}</h1>
                <p>{data.description}</p>
  <div className="p1">
  <div className="p2">
        <p>{data.caseStudy}</p>
    </div>
    <div className="p2">
      {data.arrow}
    </div>
  </div>
                </div>
))


const Portfolio = () => {
    return (
      <>
      <section id='portfolio'> 
         <div className="portfolio container">
            <h1>Featured My Portfolio</h1>
            <p>Explore some of my latest website projects. Non suscipit ex blandit
vitae. Pellentesque vel urna id massa sagittis luctus Fusce iaculis.</p>
            <div className="portfolio_row">
                {list}
            </div>
         </div>
      </section>
      </>
    );
}

export default Portfolio;
