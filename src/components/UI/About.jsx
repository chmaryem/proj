import React from 'react'
import '../../styles/about.css'
import aboutImg from '../../images/about-us.jpg';

const chooseData=[
    {
        icon:'ri-wifi-line',
        title:'First working processus',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi fugit ipsam, quaerat in accusamus voluptas eligendi? Optio dolore dignissimos doloremque?'

    },
    {
        icon:'ri-team-line',
        title:'Dedicated team',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi fugit ipsam, quaerat in accusamus voluptas eligendi? Optio dolore dignissimos doloremque?'

    },
    {
        icon:'ri-customer-service-2-line',
        title:'24/7 Hours support',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi fugit ipsam, quaerat in accusamus voluptas eligendi? Optio dolore dignissimos doloremque?'

    },
]

const About = () => {
  return <section id="about">
    <div className="container">
        <div className="about_wrapper">
            <div className="about_content">
                <h6 className="subtitle">why choose us</h6>
                <h2> specailist in aviding clients on</h2>
                <h2 className="highlight">financial challenges</h2>
                <p className="description about_content-desc">earfgh erdftgvhb rdfgvbh tfgvhbn rtfgvhb rdfgvbn rtfgvhbn ftghbn rdfgvbh ftghbn yghbn  fgvjb gvbj gvb ghbshklqm^pq hshjqklq hsjkqkl jkkql hsjkq jksnsjqk
                </p>
                <div className='choose_item-wrapper'>
                    {
                        chooseData.map((item,index)=>(
                            <div className="choose_us-item" key={index}>
                                <span className="choose_us-icon">
                                    <i class={item.icon}></i>

                                </span>
                                <div>
                                    <h4 className="choose_us-title">{item.title}</h4>
                                    <p className="description">{item.desc}</p>
                                </div>
                            </div>
                        ))

                    }
                </div>


            </div>
            <div className="about_img">
                <img src={aboutImg} alt="about_img" />

            </div>
        </div>
    </div>
  </section>
}

export default About
