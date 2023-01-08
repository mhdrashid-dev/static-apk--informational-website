import React from 'react'

function Navbar() {
  return (
    <div className='navabr  bg-[rgb(22,22,53)] fixed top-0 left-0 w-full z-50'>
        <div className="content flex justify-between items-center px-5 lg:px-10 text-white w-full h-[10vh]">
            <div className="logo font-jost">
                <h1 className='text-xl lg:text-2xl 2xl:text-3xl'><i class="fa-solid fa-layer-group"></i>Go On</h1>
            </div>   
            <div className="mobile-navbar lg:hidden">
                <div className="navbar-btn-sec">
                    <button className='text-xl'><i class="fa-solid fa-bars"></i></button>
                </div>
            </div>     
            <div className="navlink-pc hidden lg:block">
                <ul className='flex'>
                    <li className='mx-6 text-base font-extralight'><a href="">Home</a></li>
                    <li className='mx-6 text-base font-extralight'><a href="">The App</a></li>
                    <li className='mx-6 text-base font-extralight'><a href="">Features</a></li>
                    <li className='mx-6 text-base font-extralight'><a href="">About Us</a></li>
                    <li className='mx-6 text-base font-extralight'><a href="">Reviews</a></li>
                    <li className='mx-6 text-base font-extralight'><a href="">Contact</a></li>
                </ul>
            </div>
        </div>      
        <div className="mobile-navlink h-screen w-full fixed top-0 left-0 bg-[rgb(22,22,53)] hidden lg:hidden">
            <button className='fixed top-5 text-2xl right-5'><i class="fa-solid fa-xmark text-white"></i></button>
            <ul className='h-full flex flex-col justify-center items-center text-white font-jost'>
                <li className='my-5 font-extralight'><a href="">Home</a></li>
                <li className='my-5 font-extralight'><a href="">The App</a></li>
                <li className='my-5 font-extralight'><a href="">Features</a></li>
                <li className='my-5 font-extralight'><a href="">About Us</a></li>
                <li className='my-5 font-extralight'><a href="">Reviews</a></li>
                <li className='my-5 font-extralight'><a href="">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
