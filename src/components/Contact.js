import React from 'react'
import Map from "../assets/satvik_location.png";

const Contact = () => {
  return (
    <div className='h-screen  w-full border-l-2 border-[#af5beb] '>
      <div className='px-4 sm:mx-6 '>
        <h1 className="text-3xl text-white md:text-4xl mt-20  border-b-4 inline-block border-b-[#eb1c3e]  font-bold">Contact me:</h1>
        {/*   <p className="text-sm text-white sm:text-lg font-medium text-justify py-1"></p> */}
      </div>
      <div className='sm:flex justify-center w-[100%] h-[100%]'>
        <div className='sm:w-[50%] mt-7 sm:mt-16'>
          <div className="flex flex-col items-center p-2 w-[100%]">
            <form className="w-[100%]  flex flex-col items-center">
              <input className="w-[100%] outline-none custom-input focus:bg-cyan-400 bg-gray-300 font-bold p-2 rounded" type="text" placeholder='Name'></input>
              <input className="w-[100%]  outline-none custom-input focus:bg-cyan-400 bg-gray-300 p-2 rounded font-bold my-4" type="email" placeholder='Email'></input>
              <textarea className="w-[100%]  outline-none custom-input focus:bg-cyan-400 bg-gray-300 p-2 font-bold rounded" placeholder='Message' rows="10"></textarea>
              <button className='border-2 text-white button px-8 py-2 my-4'>Send Message</button>
            </form>
          </div>
        </div>
        {/*  <div className='sm:mt-14 w-[100%] sm:w-[50%] h-[30%] relative sm:h-[50%]'>
         <a href="https://goo.gl/maps/mSkJguE93MxdD5eg9" target="_blank" >
          <img src={Map} className="rounded" alt="Satvik Location" style={{width:"100%",height:"100%"}}></img>
          <div className='absolute bottom-2 left-2 sm:bottom-6 sm:left-6'>
         <p className=' font-sans font-semibold p-2 text-white rounded-md custom-p'>2-5-90/3,<br/>Satram Street,<br/>Allagadda - 518543,<br/>
         Nandyal District,<br/>Andhra Pradesh<br/><br/>ksvsatvik@gmail.com</p>
         </div>
        </a>
        </div> */}
      </div>


    </div>
  )
}

export default Contact;