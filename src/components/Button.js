import React from 'react'
import { Link } from "react-router-dom";

const Button = () => {
    return (
        <>
        <Link to = "/About" >
            <button className='hover:text-white button text-base  w-[50%] sm:w-[220px] px-2 py-2   home-font font-medium'>View More</button>
        </Link>
        </>
    )
}

export default Button