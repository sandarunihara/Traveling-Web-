import React, { useEffect, useState } from 'react'
import { useTheme } from './ThemeContext'
import './Home.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleonSubmit=(e)=>{
        e.preventDefault()
        if(!name || !email || !message){
            toast.error("Fill all Blanks")
        }else{
            toast.success("Your Message is Sent")
            setSubmitted(true)
        }
    }

    useEffect(()=>{
        setname('')
        setemail('')
        setmessage('')
    },[submitted])

    const { theme } = useTheme()



  return (
    <div>
        <div className={` ${theme}`}>
                {theme === 'light' ? (
                    <div id='bg1' className='background-cl'></div>
                ) : (
                <div id='bg2' className='background-cd'></div>
                )}
        </div>
        
        <div className={`bg-black  w-[1100px] h-[600px] bg-opacity-40 mx-auto mt-14`} >
            <form className=' text-xl text-center pt-12'  onSubmit={handleonSubmit} >
                <h2 className={`cursor-pointer font-bold text-3xl mb-5 text-${theme==='light'?'black':'white'}`} >Contact Us</h2>
                <div className='mb-5'>
                <input type='text' placeholder='Enter Your Name' required className=' w-[800px] h-[50px] mx-auto rounded' id='name' value={name} onChange={(e)=>setname(e.target.value)} />
                </div>
                <div className='mb-5'>
                <input type='email' id='email' placeholder='Enter Your Email' className='w-[800px] h-[50px] mx-auto rounded' value={email} onChange={(e)=>setemail(e.target.value)} />
                </div>
                <div>
                <textarea type='text' id='message' required  placeholder='Enter Your Message' className='w-[800px] h-[200px] mx-auto resize-none rounded' value={message} onChange={(e)=>setmessage(e.target.value)} />
                </div>
                <button type='submit' className=' mt-7 bg-slate-300 text-black hover:bg-black hover:text-slate-300 font-bold py-3 px-9 rounded text-center justify-center'>Submit</button>
            </form>
            <ToastContainer/>
            <h1 className='font-semibold'>
            Email : TravelVerse@domain.org<br/>
            Postal Address : 123 Main Street,Apt 4B, New York, NY 10001,USA<br/>
            Phone Number : +1 (555) 123-4567 
            </h1>
        </div>
        
        </div>
  )
}

export default ContactUs