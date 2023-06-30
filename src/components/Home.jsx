import React from 'react'
import shoes from '../image/shoes.png'
import background from '../image/bg1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'


function Home() {
    return (
        <div name='Home' className=''>
            <div className="text-transparent text-[90px] leading-[80px] bg-clip-text bg-gradient-to-r from-[#ae3889] to-[#1b0238] ml-24 ">
                    <h1 className='font-serif mt-[350px]  text-[45px] leading-[60px] md:mt-[250px]  md:leading-[90px]    md:text-[90px]  sm:-ml-0 sm:mt-[260px] sm:text-[60px] sm:leading-[80px]'>NIKE <br />
                    <span className='md:mt-52 md:mb-0 md:text-[70px] sm:text-[55px] '>Collection</span></h1>
                    </div><br/>
                    <p className='px-12 md:ml-[60px] md:w-[600px] mx-auto sm:ml-[50px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                        a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
       <img src={background} className='w-full top-[100px] sm:w-full md:w-full lg:w-full xl:w-full xl:top-0 z-[-100] absolute right-[40px] overflow-hidden  ' alt='background'/>
        <img src={shoes} className='w-[180px] right-[65px] top-[140px] sm:w-[310px]  sm:right-[60px] sm:top-[150px] md:w-[350px]  lg:w-[500px] lg:right-32  lg:top-48 xl:w-[650px]  xl:top-[100px] xl:right-[100px] absolute z-[100] ' alt='shoe'/>

       <a href="#product"><button className='bg-gradient-to-r from-[#ae3889] to-[#3b0e6e] mt-[70px] px-6 py-2 rounded-[40px] ml-24 hover:scale-105 duration-300 '>SHOP NOW <FontAwesomeIcon icon={faChevronRight} /></button></a> 
        </div>
    )
}
export default Home