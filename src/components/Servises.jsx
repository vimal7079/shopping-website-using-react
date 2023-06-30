import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb';
import {MdOutlineReplay} from 'react-icons/md';
import {BiSupport} from 'react-icons/bi';
import back from '../image/loging_bg.png';
import logo from '../image/logshoes.png'

const Servises = () => {
  return (
    <div name='Servises' >
        <div className='flex  justify-center items-center mt-[110px] '>
            <h1 className='text-[60px] font-bold'>OUR<span className='px-4  text-transparent bg-clip-text bg-gradient-to-r from-[#ae3889] to-[#501396]'>SERVICES</span></h1>
        </div>
        <div className=' flex justify-center items-center md:px-8 mt-[60px] px-3'>
             <div className='md:px-[50px] md:w-[300px] '>
                <div className='flex justify-center items-center'>
                    <TbTruckDelivery className='flex justify-center items-center md:text-[90px] text-[70px]  text-[#FFA500] '/> 
                </div>
                 
                <h1 className='flex justify-center items-center py-2 font-bold md:text-lg text-[15px]'>Fast Delivery</h1>
                <p className='text-slate-500 text-[10px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className='md:px-[50px] md:w-[300px]'>
                <div className='flex justify-center items-center'>
                <MdOutlineReplay className='md:text-[90px] text-[70px] text-[#FFA500]'/>
                </div>
                
                <h1 className='flex justify-center items-center py-2 font-bold md:text-lg text-[15px]'>10 Days Replacement</h1>
                <p className='text-slate-500 text-[10px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className='md:px-[50px] md:w-[300px]'>
                <div className='flex justify-center items-center'>
                     <BiSupport className='md:text-[90px] text-[70px] text-[#FFA500]'/> 
                </div>
                
                <h1 className='flex justify-center items-center py-2 font-bold md:text-lg text-[15px]'>24 x 7 Support</h1>
                <p className='text-slate-500 text-[10px] md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            
        </div>
        <div>
            <img src={back} alt="background"  className='w-full absolute z-[-100px]'/>
            
            <img src={logo} alt="shoe" className='absolute  z-[100px] w-[190px] mt-[20px] ml-[30px] md:w-[650px] md:mt-[90px] md:ml-[80px]' />
            
            <div className='absolute justify-between items-center z-[100px] ml-12 md:ml-[900px] md:mt-[200px] mt-20 '>
  <h1 className='text-4xl font-bold font-serif'>Welcome Back!</h1>
  <div className='flex flex-col justify-center items-center mt-[30px] md:[50px]  md:mr-[60px]'>
    <form action="" className='flex flex-col md:mb-0 mb-12'>
      <label htmlFor="text" className='py-2'>User Name</label>
      <input
        type="text"
        placeholder='User Name'
        className='w-full md:w-[340px] h-[40px] bg-transparent border border-[#501396] rounded-md px-4 py-2 focus:outline-none focus:border-blue-500'
      />
      <label htmlFor="Password" className='py-2'>Password</label>
      <input
        type="Password"
        placeholder='Password'
        className='w-full md:w-[340px] h-[40px] bg-transparent border border-[#501396] rounded-md px-4 py-2 focus:outline-none focus:border-blue-500'
      />
      <label htmlFor="" className='cursor-pointer py-4'>Forget Password?</label>
      <button className='w-full md:w-[340px] h-[40px] bg-gradient-to-r from-[#ae3889] to-[#501396] rounded-md hover:scale-105 duration-300'>Login</button>
    </form>
  </div>
</div>

            
        </div>
    </div>
  )
}

export default Servises