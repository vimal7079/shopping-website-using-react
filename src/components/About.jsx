import React, { useState } from 'react';
import shoes1 from '../image/red_shoes1.png';
import shoes2 from '../image/red_shoes2.png';
import shoes3 from '../image/red_shoes3.png';
import shoes4 from '../image/red_shoes4.png';

const About = () => {
  const [image, setImage] = useState(shoes1);

  return (
      <div name="About" >
        <div>
          <h1 className="flex text-[60px] font-bold justify-center items-center mt-[50px]">
            WEB
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ae3889] to-[#501396] px-4">ABOUT</span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-stretch mt-[50px]">
          <div className="w-[420px] px-4 md:w-[750px] md:h-[450px] flex md:ml-[40px] py-2">
            <div className="w-[200px] h-full flex flex-col">
              <div
                className="w-full h-[100px] mb-3 mt-2 rounded-2xl bg-gradient-to-r from-[#6c14d0] to-[#c72092] cursor-pointer"
                onClick={() => setImage(shoes1)}
              >
                <img className="px-2 py-1" src={shoes1} alt="first" />
              </div>
              <div
                className="w-full h-[100px] bg-gradient-to-r from-[#6c14d0] to-[#c72092] mb-3 rounded-2xl cursor-pointer"
                onClick={() => setImage(shoes2)}
              >
                <img className="px-2 py-1" src={shoes2} alt="first" />
              </div>
              <div
                className="w-full h-[100px] bg-gradient-to-r from-[#6c14d0] to-[#c72092] mb-3 rounded-2xl cursor-pointer"
                onClick={() => setImage(shoes3)}
              >
                <img className="px-2 py-1" src={shoes3} alt="first" />
              </div>
              <div
                className="w-full h-[100px] bg-gradient-to-r from-[#6c14d0] to-[#c72092] mb-3 rounded-2xl cursor-pointer"
                onClick={() => setImage(shoes4)}
              >
                <img className="px-2 py-1" src={shoes4} alt="first" />
              </div>
            </div>
            <div className="bg outline outline-offset-2 outline-[#501396] w-full ml-5 rounded-2xl shadow-2xl shadow-[#501396] ">
              <div className=" mt-[100px] md:px-2 md:mt-[10px] py-2" >
                  <img src={image} alt="shoes"  />
              </div>
              
            </div>
          </div>
          <div className="w-[400px] md:w-[600px]  mx-auto md:h-[420px] md:mr-[40px] rounded-2xl px-6 py-6 mt-12 md:mt-4 shadow-2xl shadow-[#ae3889] outline outline-offset-2 outline-[#e44db4] text-transparent bg-clip-text bg-gradient-to-r from-[#ae3889] to-[#501396]">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
              Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
              ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
              comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
              also reproduced in their exact original form, accompanied by English versions from the 1914 translation by
              H. Rackham.
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center mt-[60px]'>
          <button className='w-[100px] h-10 bg-gradient-to-r from-[#6c14d0] to-[#c72092] rounded-lg hover:scale-105 duration-300'>buy</button>
        </div>
      </div>
  );
};
 
export default About;
