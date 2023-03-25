import React from 'react'
import './footer.css';

const quickLinks01=[
    {
        path:'#',
        display:'Hello@afroser.com'
    },
    {
        path:'#',
        display:''
    },
    {
        path:'#',
        display:'(+216) 53 312 313'
    },
]

const Footer = () => {
  return <footer className="footer">
    <div className="container">
        <div className="footer_wrapper">
            <div className="footer_logo">
                <h2>Afroser</h2>
                <p className="description">Osez la digitalisation autrement!</p>
                <p className="small_text description"></p>

            </div>
            <div className="footer_quick-links">
                <h3 className="quick_links-title">
                    Contact
                </h3>
                <ul className="quick_links">
                    {
                        quickLinks01.map((item,index)=>(
                            <li className='quick_link-item' key={index}>
                                <a href={item.path}>{item.display}</a>
                            </li>
                            
                        ))
                    }
                </ul>
            </div>
            
        </div>
    </div>
  </footer>
}

export default Footer
