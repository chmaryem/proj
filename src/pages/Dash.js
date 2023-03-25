import React from 'react'
import MainDash from '../components/MainDash/MainDash'
import RightSide from '../components/RigtSide/RightSide'
import Sidebar from '../components/Sidebar'
import "../styles/Dash.css"

export default function Dash() {
  return (
    <div className="Dash">
      <div className="DashGlass">
    <Sidebar/>
    <MainDash/>
    <RightSide/>
    </div>
    </div>
  )
}


