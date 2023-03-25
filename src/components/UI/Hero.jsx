import React from 'react'
import "../../styles/hero.css";
import heroDarkImg from "../../images/hero-img.png";
import lightImg from '../../images/light-hero-bg.jpg';


const Hero = ({theme}) => {
  return <section className='hero_section' id='projects'>
    <div className='container'>
        <div className="hero_wrapper">
            <div className="hero_content">
             <div>
                <h2>Cette Application </h2>
                <h2>est destiné pour </h2>
                <h2 className='highlight'> les employés d'Afroser</h2>
             </div>
             <p className='description'> </p>
             <div className="hero_btns">
                <button className="primary_btn">Login</button>
                <button className="secondary_btn">Discover More</button>
             </div>
            </div>
            <div className='hero_img'>
            <img src={theme ==='light-them' ? lightImg:heroDarkImg} alt="hero-img"/>
            </div>
        
         
        </div>
    </div>

  </section>
}

export default Hero
