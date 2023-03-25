import React,{useEffect,useState} from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/UI/Hero'
import '../styles/home.css'

const Home = () => {
    const[theme, setTheme]=useState('light-theme')
  const toggleTheme=()=>{
    theme===''?setTheme('light-theme'):setTheme('')
  }

  useEffect(()=>{
    document.body.className=theme
  },[theme])
  return <>
    <Header theme={theme} toggleTheme={toggleTheme}/>
    <Hero theme={theme}/>
    <Footer/> 
    </>
}

export default Home
