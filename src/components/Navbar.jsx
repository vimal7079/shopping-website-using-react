import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faCartShopping ,faUser,faXmark, faBars} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-scroll"

const Navbar = () => {
  const myarray=['Home','Product','About','Review','Servises'];
  const[color,setcolor]=useState(false);
  const changecolor = ()=>{
    if(window.screenY >= 80){
      setcolor(true);
    }
    else{
      setcolor(false);
    }
  }; 
  const[n,setnav]=useState(false);
  window.addEventListener('scroll',changecolor);
  return (
    
    <div className={color ? 'bg-black':'bg-white'}>
    <div className='top-0 left-0 right-0 mb-20'>
      <div className=' flex justify-between font-semibold shadow-sm'>
        <h2 className='ml-8 mt-4 text-4xl font-bold text-[#c72092]'>Shoe<span className='text-[#6c14d0] underline'>s</span></h2>
        <ul className='hidden md:flex justify-center text-xl py-6 '>
          {myarray.map((name) => (<li className='px-6 hover:scale-105 duration-300 cursor-pointer hover:text-[#c72092]' > <Link to={name} smooth duration={500}>{name}</Link> </li>))}
        </ul>
        <ul className='hidden md:flex justify-end mr-8 text-xl py-6'>
        <li className='px-6 hover:scale-105 duration-300 cursor-pointer hover:text-[#c72092]'><FontAwesomeIcon icon={faHeart} /></li>
        <li className='px-4 hover:scale-105 duration-300 cursor-pointer hover:text-[#c72092]'><FontAwesomeIcon icon={faCartShopping} /></li>
        <li className='px-6 hover:scale-105 duration-300 cursor-pointer hover:text-[#c72092]'><FontAwesomeIcon icon={faUser} /></li>
        </ul>
        <ul className='md:hidden text-xl py-6 flex'>
        <li className='px-6 hover:scale-105 duration-300 cursor-pointer hover:text-[#c72092]'><FontAwesomeIcon icon={faCartShopping} /></li>
        <li onClick={() => setnav(!n) } className='flex cursor-pointer hover:scale-75 duration-300 text-2xl px-6 hover:text-[#c72092]'>
        {n ?  <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars} />}
        </li>
        </ul>

        {n && (<ul className='flex flex-col justify-center items-center absolute top-16 left-10 right-10 bottom-5 backdrop-blur bg-white/30 rounded-2xl z-[200]'>
          {myarray.map((e) => (<li className='px-6 py-2 flex flex-col justify-center items-center hover:scale-105 duration-300 cursor-pointer text-2xl hover:text-[#c72092]' ><Link to={e} smooth duration={500}>{e}</Link> </li>))}
        </ul>)}
        
      </div>
      </div>
      </div>
  )
}

export default Navbar