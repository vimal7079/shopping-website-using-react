import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle ,AiFillInstagram ,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'

const Sociallink = () => {
    const social=[
        {
            id:1,
            name:'Facebook',
            links:'https://www.facebook.com/',
            logo: (<><BsFacebook size={30}/></>),
        },
        {
            id:2,
            name:'Twitter',
            links:'https://twitter.com/',
            logo: (<><AiFillTwitterCircle size={30}/></>),
        },
        {
            id:3,
            name:'Instagram',
            links:'https://www.instagram.com/',
            logo: (<><AiFillInstagram size={30}/></>),
        },
        {
            id:4,
            name:'Linkedin',
            links:'https://www.linkedin.com/in/vimal-k-424ab7252/',
            logo: (<><AiFillGithub size={30}/></>),
        },
        {
            id:5,
            name:'Github',
            links:'https://github.com/vimal7079',
            logo: (<><AiFillLinkedin size={30} /></>),
        },
    ]
  return (
    <div className='hidden md:flex flex-col top-[35%] left-0 absolute sm:hidden'>
        <ul >
        {social.map((e)=>(<li key={e.id} className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
            <a href={e.links} className='flex justify-between items-center w-full text-[#881c92] '><>{e.name }</> {e.logo}</a></li>))}
        </ul>
    </div>
  )
}

export default Sociallink