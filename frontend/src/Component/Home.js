import React, { useEffect, useState } from 'react'
import './Home.css';
import gsap from 'gsap';
import { useTheme } from './ThemeContext';

const Home = () => {

  const [message,setmessage]=useState('')

  useEffect(() => {
    const animateElements = () => {
        gsap.fromTo("#element1", { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 1 });
        gsap.fromTo("#element2", { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 2 });
    };

    animateElements();
});

  useEffect(()=>{
    const date =new Date()
    const hour=date.getHours()
    let time

    if (hour >= 0 && hour < 12) {
      time = "Morning"
    } else if (hour >= 12 && hour < 18) {
      time = "Afternoon"
    } else {
      time = "Night"
    }

    setmessage(`Good ${time} ,\n Welcome to TravelVerse`)
  },[])

  const { theme } = useTheme()
  
  return (
    <div className='justify-center text-center'>
      <div className={` ${theme}`}>
            {theme === 'light' ? (
                <div id='bg1' className='background-imgl'></div>
            ) : (
              <div id='bg2' className='background-imgd'></div>
            )}
        </div>
      <div className='flex' >
        <div >
          <h1 id='element1' className={` text-7xl text-left font-bold pt-14 ml-14 text-${theme === 'light' ? 'white' : 'black'}`}>EXPLORE<br/>DREAM</h1>
          <h1 id='element1' className={` text-7xl text-left font-extrabold  ml-14 text-${theme === 'light' ? 'white' : 'black'}`}>DESTINATION</h1>
          <h2 id='element1' className={`text-2xl mr-4 font-semibold text-${theme === 'light' ? 'white' : 'black'}`}>{message}</h2>
          <p id='element1' className={`pt-5 text-2xl ml-14 text-left font-thin text-${theme === 'light' ? 'white' : 'black'}`}>Discover captivating landscapes,<br/>vibrant cultures, and hidden gems.<br/>Plan your next adventure with expert recommendations and personalized insights.</p>
          <button id='element1' className=' mt-7 bg-slate-300 text-black hover:bg-black justify-start hover:text-slate-300 font-bold py-3 px-9 rounded'>See more</button>
        </div>


        <div id='element1' className='pt-14 mr-16 flex'>
          <div className={`w-[250px] h-[550px] ml-16 bg-transparent text-${theme==='light'?'black':'white'}  rounded shadow-2xl overflow-hidden hover:scale-110 transition-all duration-700`}>
            <img id='element2' src="img/m.jpg"  alt='Description of the' className='w-full h-[300px] ' />
            <h1 className='font-semibold text-lg mb-2'>Exploring the Majestic Alps</h1>
            <p className='align-middle'>Discover the beauty of the Alps. This serene mountain landscape offers breathtaking views, perfect for hiking and photography. Plan your adventure today!</p>
            <button  className=' mt-7  bg-slate-300 text-black hover:bg-black hover:text-slate-300 font-bold py-3 px-9 rounded border-2 border-white'>Book Now</button>
          </div>
          <div  className={`w-[250px] h-[550px] ml-16 bg-transparent text-${theme==='light'?'black':'white'} rounded shadow-2xl overflow-hidden hover:scale-110 transition-all duration-700`}>
            <img id='element2' src="img/p.jpg"  alt='Description of the' className='w-full h-[300px] ' />
            <h1 className='font-semibold text-lg mb-2'>New York City from Above</h1>
            <p className='align-middle'>Experience the iconic skyline of New York City from the skies. Discover vibrant streets, dazzling lights, and endless adventures in the city that never sleeps!</p>
            <button className=' mt-7 bg-slate-300 text-black hover:bg-black hover:text-slate-300 font-bold py-3 px-9 rounded border-2 border-white'>Book Now</button>
          </div>
          <div  className={`w-[250px] h-[550px] ml-16 bg-transparent text-${theme==='light'?'black':'white'} rounded shadow-2xl overflow-hidden hover:scale-110 transition-all duration-700`}>
            <img id='element2' src="img/n.jpg"  alt='Description of the' className='w-full h-[300px] ' />
            <h1 className='font-semibold text-lg mb-2'>Exploring Petra</h1>
            <p className='align-middle'>Venture into the ancient city of Petra, Jordan. Marvel at its rock-cut architecture and rich history, a true wonder of the world. A must-visit for history enthusiasts!</p>
            <button  className=' mt-7 bg-slate-300 text-black hover:bg-black hover:text-slate-300 font-bold py-3 px-9 rounded border-2 border-white'>Book Now</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home