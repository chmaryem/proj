import React, { useEffect, useRef } from 'react'
import Header from '../components/Layout/Header'
import lottie from 'lottie-web';
import '../welcome.json';
import '../styles/welcome.css'

export default function Welcome() {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../welcome.json')
    })
  }, [])
  return (
    <>
    <Header/>
    
    <div className="lottie" ref={container}></div>
    </>
  )
}

