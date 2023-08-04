import React,{useState} from 'react'
import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    const [nav, setNav] = useState(false)
    function togglehan(){
        setNav(!nav)
    }

  return (
    <div className='w-screen px-5 h-[80px] bg-zinc-200 fixed drop-shadow-lg flex justify-center items-center'>
      <div className='flex items-center justify-between w-[1240px] mx-auto'>
            <h1 className='text-3xl font-bold uppercase text-[#0d0dfbaa]'>AFRI<span className='text-black'>CLOUD</span>.</h1>
            <div className='hidden md:flex items-center text-[1.4rem]'>
                <ul className=' flex mx-7'>
                    <li className='px-3 cursor-pointer hover:text-[#0d0dfbaa] '>Home</li>
                    <li className='px-3 cursor-pointer hover:text-[#0d0dfbaa] '>About</li>
                    <li className='px-3 cursor-pointer hover:text-[#0d0dfbaa] '>Support</li>
                    <li className='px-3 cursor-pointer hover:text-[#0d0dfbaa] '>Platforms</li>
                    <li className='px-3 cursor-pointer hover:text-[#0d0dfbaa] '>Princing</li>
                </ul>
                <div className=''>
                    <button className='mx-2 px-3 py-2 hover:text-[#0d0dfbaa] cursor-pointer '>Sign In</button>
                    <button className='px-8 py-2 bg-[#0d0dfbaa] rounded-xl text-white hover:bg-[#4747f797]'>Sign Up</button>
                </div>
            </div>
            <div className='md:hidden' onClick={togglehan}>
                {!nav ? (<AiOutlineMenu size={"2rem"} />):(<AiOutlineClose size={"2rem"} />) }
                
            </div>
            <div className={nav ? ('absolute z-20 top-[80px] left-0 pt-5 bg-zinc-200 h-screen w-[70%] px-5'):('absolute z-20 top-[80px] left-[-100rem] pt-5 bg-zinc-200 h-screen w-[70%] px-5') }>
                <div className='text-[1.4rem] flex flex-col items-start'>
                    <ul className='flex flex-col justify-start items-start'>
                        <li className='py-2 cursor-pointer hover:text-[#0d0dfbaa] '>Home</li>
                        <li className='py-2 cursor-pointer hover:text-[#0d0dfbaa] '>About</li>
                        <li className='py-2 cursor-pointer hover:text-[#0d0dfbaa] '>Support</li>
                        <li className='py-2 cursor-pointer hover:text-[#0d0dfbaa] '>Platforms</li>
                        <li className='py-2 cursor-pointer hover:text-[#0d0dfbaa] '>Princing</li>
                    </ul>
                    <div className='flex flex-col my-5 w-full'>
                        <button className='px-5 border border-[#0d0dfbaa] rounded-lg my-3 text-[#0d0dfbaa]  py-3 hover:text-[#0d0dfbaa] cursor-pointer '>Sign In</button>
                        <button className=' px-5 py-3 bg-[#0d0dfbaa] rounded-xl text-white hover:bg-[#4747f797]'>Sign Up</button>
                    </div>
                </div>
            </div>
            
      </div>
    </div>
  )
}

export default Header
