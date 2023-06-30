import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar , faStarHalfStroke,faShare,faHeart} from '@fortawesome/free-solid-svg-icons';
import shoes1 from '../image/shoes1.png';
import shoes2 from '../image/shoes2.png';
import shoes3 from '../image/shoes3.png';
import shoes4 from '../image/shoes4.png';
import shoes5 from '../image/shoes5.png';
import shoes6 from '../image/shoes6.png';
import shoes7 from '../image/shoes7.png';
import shoes8 from '../image/shoes8.png';
import { Link } from 'react-scroll';
import Home from './Home';

const Product = () => {
    const array =[
        {
            id:1,
            image:shoes1,
            price:100.99,
            about:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            review: (<div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>),
        },
        {
            id:2,
            image:shoes2,
            price:200.99,
            about:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            review: (<div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
            </div>),
        },
        {
            id:3,
            image:shoes3,
            price:100.99,
            about:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            review: (<div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
                <FontAwesomeIcon icon={faStar} />
            </div>),
        },
        {
            id:4,
            image:shoes4,
            price:100.99,
            about:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            review: (<div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>),
        },
        {
            id:5,
            image:shoes5,
            price:100.99,
            about:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            review: (<div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>),
        },
        {
            id:6,
            image:shoes6,
            price:100.99,
            about:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            review: (<div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>),
        },
        {
            id:7,
            image:shoes7,
            price:100.99,
            about:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            review: (<div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>),
        },
        {
            id:8,
            image:shoes8,
            price:100.99,
            about:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            review: (<div >
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>),
        },
    ];
    return (
        <div name="Product" >
          <div>
            <h1 className="flex justify-center items-center text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ae3889] to-[#501396] sm:text-[50px] sm:mb-6">
              PRODUCTS
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
            {array.map((e) => (
              <div key={e.id} className="shadow-md  shadow-[#3b0e6e] rounded-lg py-6 px-4 hover:scale-105 duration-300 relative">
                <div className="relative">
                  <div className="h-[200px] w-[200px] mx-auto">
                    <img src={e.image} alt="shoes" className="h-full w-full object-contain" />
                  </div>
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex items-start justify-start opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="py-3 px-3 absolute shadow-md  shadow-[#3b0e6e] rounded-md text-2xl mt-0 hover:text-[#c72092] hover:scale-105 duration-300"
                    />
                    <FontAwesomeIcon
                      icon={faShare}
                      className="py-3 px-3 absolute shadow-md  shadow-[#3b0e6e] rounded-md text-2xl mt-14 hover:text-[#c72092] hover:scale-105 duration-300"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <h2 className="flex justify-center items-center py-2 text-lg font-bold">NIKE</h2>
                  <p className="flex flex-row justify-center items-center mx-auto px-3 py-2">{e.about}</p>
                  <p className="flex justify-center items-center py-2 font-bold">${e.price}</p>
                  <p className="flex justify-center items-center py-2 text-[#ffd700]">{e.review}</p>
                  <button className="bg-gradient-to-r from-[#ae3889] to-[#3b0e6e] px-6 py-2 rounded-[40px] ml-24 mt-4 cursor-pointer hover:scale-105 duration-300">
                    <Link to={Home} smooth duration={500}>
                      Add to Cart
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
export default Product;