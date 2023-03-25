import React from 'react'
import "../../styles/services.css";

const serviceData=[
    {
        icon: 'ri-apps-line',
        title:'App Development',
        desc:'earfgh erdftgvhb rdfgvbh tfgvhbn rtfgvhb rdfgvbn rtfgvhbn ftghbn rdfgvbh ftghbn yghbn  fgvjb gvbj gvb ghbshklqm^pq hshjqklq hsjkqkl jkkql hsjkq jksnsjqk'

    },
    {
        icon: 'ri-code-s-slash-line',
        title:'Web Design',
        desc:'earfgh erdftgvhb rdfgvbh tfgvhbn rtfgvhb rdfgvbn rtfgvhbn ftghbn rdfgvbh ftghbn yghbn  fgvjb gvbj gvb ghbshklqm^pq hshjqklq hsjkqkl jkkql hsjkq jksnsjqk'

    },
    {
        icon: 'ri-landscape-line',
        title:'Graphic Design',
        desc:'earfgh erdftgvhb rdfgvbh tfgvhbn rtfgvhb rdfgvbn rtfgvhbn ftghbn rdfgvbh ftghbn yghbn  fgvjb gvbj gvb ghbshklqm^pq hshjqklq hsjkqkl jkkql hsjkq jksnsjqk'

    },
    {
        icon: 'ri-rocket-line',
        title:'Digital Marketing',
        desc:'earfgh erdftgvhb rdfgvbh tfgvhbn rtfgvhb rdfgvbn rtfgvhbn ftghbn rdfgvbh ftghbn yghbn  fgvjb gvbj gvb ghbshklqm^pq hshjqklq hsjkqkl jkkql hsjkq jksnsjqk'

    },
]

const Services = () => {
  return <section id='service'>
    <div className="container">
        <div className="services_top-content">
            <h6 className="subtitle">Our Services</h6>
            <h2> Save time manging your business with</h2>
            <h2 className="highlight">our best services</h2>
        </div>
        <div className="service_item-wrapper">
            {
                serviceData.map((item,index)=>(
                    <div className="services_item" key={index}>
                        <span className='service_icon'>
                            <i class={item.icon}></i>

                        </span>
                        <h3 className="service_title">{item.title}</h3>
                        <p className="description">
                            {item.desc}
                        </p>

                    </div>
                ))
            }
        </div>
    </div>
  </section>
}

export default Services
