import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
const sidebarD=[
  {
      path:'/dashboard/user',
      display:'Dashboard'
  },
  {
      path:'/profile',
      display:'Profil'
  },
  
]

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logoside">
        <img src={Logo} alt="logoside" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      <div className="menuside">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItemside active" : "menuItemside"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>
              <a href={item.path} className="menu_link">
                                {item.heading}
                                </a></span>
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItemside">
          <UilSignOutAlt />
          
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
