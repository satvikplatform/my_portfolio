import React from 'react';
import Button from './Button';
import CoverImage from '../assets/my_cover_image.png';

const HomeTwo = () => {

    return (
        <div name="homeTwo" className='text-white border-l-2 border-[#c31432] flex  w-full h-screen'>
            <div className='flex flex-col justify-start sm:justify-center h-full md:w-[50%] ml-6' >
                <div className='animation-one mt-[250px] sm:mt-0'>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>H</span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>i</span><br />
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>I'</span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>m </span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>S</span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>a</span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>t</span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>v</span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>i</span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>k</span><br />
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>W</span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>e</span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>b </span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>D</span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>e</span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>v</span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>e</span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>l</span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>o</span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>p</span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>e</span>
                    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl home-font font-bold'>r</span>
                </div>
                <div className='animation-two'>
                    <p className='text-sm sm:text-lg animate-pulse text-[#a6ff67]  py-4 sm:py-2  font-semibold'>Front End Developer</p>
                    <div className='pt-6  hover:animate-none'>
                        <Button />
                    </div>
                </div>
            </div>
            <div className='hidden md:flex  w-[50%] h-[90%] flex-col md:justify-center items-center'>
                <div className='md:w-[80%] md:h-[80%] xl:w-[65%] xl:h-[100%] animation-cover'>
                    <img src={CoverImage} className=""  alt="satvik developer" style={{width:"100%", height:"100%", filter:"drop-shadow(-5px -5px 5px #8d2bd3)"}} />
                </div>
            </div>

        </div>
    )
}

export default HomeTwo;