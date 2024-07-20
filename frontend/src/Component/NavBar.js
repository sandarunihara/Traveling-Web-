import React, { useEffect, useState } from 'react'
import {  NavLink } from 'react-router-dom'
import { useTheme } from './ThemeContext'
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
    const { theme, toggleTheme } = useTheme()
    const [time, setTime] = useState(new Date());
    const [menu,setmenu]=useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);
  return (
    <div>
    <header className='h-20  '>
    <nav className=' h-full container mx-auto flex items-center pt-4 pr-9 pl-9  justify-between '>
        <div>
        <h2 className='cursor-pointer font-bold text-3xl' >TravelVerse</h2>
        <h2 className='text-xl '>{time.toLocaleTimeString()}</h2>
        </div>
        <div className='hidden sm:block'>
            <NavLink className='mx-5 text-xl font-bold cursor-pointer px-4 py-1 rounded-full  hover:bg-black hover:text-white' to={"/"}>Home</NavLink>
            <NavLink className='mx-5 font-bold text-xl cursor-pointer px-4 py-1 rounded-full  hover:bg-black hover:text-white' to={"/about"}>About</NavLink>
            <NavLink className='mx-5 font-bold text-xl cursor-pointer px-4 py-1 rounded-full  hover:bg-black hover:text-white' to={"/contact"}>Contact Us</NavLink>
        </div>
        <button onClick={toggleTheme} className='text-2xl hover:text-3xl transition-all duration-400 hidden sm:block'>
            {theme === 'light' ? <MdOutlineDarkMode/> :  <div className='text-white'> < MdLightMode/> </div>}
        </button>
        <button onClick={()=>{setmenu(pre=>!pre)}} className='sm:hidden text-xl hover:text-2xl transition-all duration-400'>
            <IoMenu/>
        </button>
    </nav>            
    </header>
                <div className={`sm:hidden z-20 left-0 top-0  justify-items-end grid ${menu?'visible opacity-100':'invisible opacity-0'} transition-all duration-400` }>
                    
                  <NavLink className='mx-5 text-xl font-bold cursor-pointer px-4 py-1 rounded-full hover:bg-black hover:text-white' to={"/"}>Home</NavLink>
                  <NavLink className='mx-5 font-bold text-xl cursor-pointer px-4 py-1 rounded-full hover:bg-black hover:text-white' to={"/about"}>About</NavLink>
                  <NavLink className='mx-5 font-bold text-xl cursor-pointer px-4 py-1 rounded-full hover:bg-black hover:text-white' to={"/contact"}>Contact Us</NavLink>
                    
                </div>
    </div>
  )
}

export default NavBar