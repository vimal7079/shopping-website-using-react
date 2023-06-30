import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import person1 from '../image/girl_dp1.jpg'
import person2 from '../image/man_dp3.jpg'
import person3 from '../image/gir_dp2.jpg'
import person4 from '../image/man_dp2.jpg'
import person5 from '../image/man_dp1.jpg'
import person6 from '../image/gir_dp3.jpg'

const Review = () => {
    const array=[
        {
            id:1,
            image:person1,
            name:'Ranidi Lochana',
            star:(<div><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></div>),
            review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!'
        },
        {
            id:2,
            image:person2,
            name:'Sayuru Tharanga',
            star:(<div><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></div>),
            review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!'
        },
        {
            id:3,
            image:person3,
            name:'John Deo',
            star:(<div><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></div>),
            review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!'
        },
        {
            id:4,
            image:person4,
            name:'Senuda Dilwan',
            star:(<div><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></div>),
            review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!'
        },
        {
            id:5,
            image:person5,
            name:'Charith Aruna',
            star:(<div><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></div>),
            review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!'
        },
        {
            id:6,
            image:person6,
            name:'Kaveesha Vidurangi',
            star:(<div><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></div>),
            review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!'
        }
    ];
  return (
    <div name='Review' >
        <div className='font-bold flex justify-center items-center '>
            <h1 className='mt-[20px] text-[60px]'>CUSTOMER'S <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ae3889] to-[#501396] px-1'>REVIEW</span></h1>
        </div>
        <div className='grid sm:grid md:grid-cols-3 px-12 gap-8 md:px-12 mt-[60px]'>
            {array.map((t)=>(
            <div key={t.id} className='shadow-xl  px-6 py-5 rounded-md bg-slate-50'>
                 <div className='flex flex-row py-4'>
                 <img src={t.image} alt="person" className='rounded-full flex flex-row w-16 h-16 shadow-md shadow-black' />
                 <div className='px-6'>
                     <p className='flex flex-row font-bold'>{t.name}</p>
                     <p className='flex flex-row font-light text-[#ffd700] text-sm'>{t.star}</p>
                 </div>
                 
                </div> 
                <div>
                    <p>{t.review}</p>
                </div>
            </div>))}
        </div>
    </div>
  )
}

export default Review