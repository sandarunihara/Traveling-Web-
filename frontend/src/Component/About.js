import React, { useEffect } from 'react'
import { useTheme } from './ThemeContext'
import gsap from 'gsap';

const About = () => {

  useEffect(() => {
    const animateElements = () => {
        gsap.fromTo("#element1", { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 1 });
        gsap.fromTo("#element2", { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 2 });
    };

    animateElements();
});
    
    const { theme } = useTheme()

  return (
    <div className='justify-center text-center'>
       
        <div className={` ${theme}`}>
            {theme === 'light' ? (
                <div id='bg1' className='background-imgal'></div>
            ) : (
              <div id='bg2' className='background-imgad'></div>
            )}</div>

        <h1 id='element1' className={` text-5xl font-bold pt-14  text-${theme === 'light' ? 'black' : 'white'}`}>About Us</h1>
      
        <div>
      <p id='element2' className={`pt-5 text-2xl text-${theme === 'light' ? 'black' : 'white'}`}>We are a company commited to providing the best services</p>
      </div>


      <div id='element2' className='flex justify-between' >
        <div className='w-[400px] bg-black bg-opacity-45  ml-5 h-[480px]'>
        <img src="img/who.jpg"  alt='Description of the' className='w-full h-[280px] ' />
        <p className={`pt-5 text-xl font-bold text-${theme === 'light' ? 'black' : 'white'}`}>Who We Are</p> 
        <p className={`pt-5 text-lg text-${theme === 'light' ? 'black' : 'white'}`}>Travel Treasures is an international travel technology and travel software company and we serve travel
        companies four</p> 
        </div>
        <div className='w-[400px] bg-black bg-opacity-45 h-[480px]'>
        <img  src="img/what.jpg"  alt='Description of the' className='w-full h-[280px] ' />
        <p className={`pt-5 text-xl font-bold text-${theme === 'light' ? 'black' : 'white'}`}>What We Do</p> 
        <p className={`pt-5 text-lg text-${theme === 'light' ? 'black' : 'white'}`}>We partner with our clients to provide strong distribution capabilities B2B/B2C/B2B2C travel technology. autoomate travel buisness process</p> 
        </div>
        <div className='w-[400px] bg-black bg-opacity-45 mr-5 h-[480px]'>
        <img src="img/us.jpg"  alt='Description of the' className='w-full h-[280px] ' />
        <p className={`pt-5 text-xl font-bold text-${theme === 'light' ? 'black' : 'white'}`}>Why Us</p> 
        <p className={`pt-5 text-lg text-${theme === 'light' ? 'black' : 'white'}`}>Travel Treasures develop and enable access to extensive range of travel suppliers which includes all GDS.LCC 600,000+ Hotels</p> 
        </div>
      </div>

        
    </div>
  )
}

export default About