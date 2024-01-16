import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className='mt-auto w-full text-white bg-black'>
                <div className="links text-center mt-3 p-3">
                    <Link to={"/about"} className='px-2 hover:text-gray-300'>About</Link> |
                    <Link to={"/contact"} className='px-2 hover:text-gray-300'>Contact</Link> |
                    <Link to={"/services"} className='px-2 hover:text-gray-300'>Services</Link> |
                </div>
                <div className='bg-black text-white p-3'>
                    <p className='text-center '>All rights reserved &copy; Rohtash Singh</p>
                </div>
            </footer>
        </>
    )
}

export default Footer