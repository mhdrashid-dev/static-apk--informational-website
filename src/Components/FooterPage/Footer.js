import React from 'react'
import Android from '../../Assets/playstorebadge.webp'
import Apple from '../../Assets/applebadge.webp'

function Footer() {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" className='w-full min-h-[40vh] md:min-h-[20vh] bg-white px-5 py-16'>
        <div className="contents font-jost md:flex md:justify-between container mx-auto lg:px-20 lg:items-center">
            <div className="content-1">
                <div className="heading flex my-3 md:mb-10">
                    <i class="fa-solid fa-layer-group text-2xl mr-3 md:text-3xl"></i>
                    <h1 className='text-xl md:text-2xl'>Go On</h1>
                </div>
                <div className="about-info md:my-5">
                    <div className="address-1">
                        <h1 className='font-extralight my-2 text-sm md:text-base'>Tel : 123-456-7890</h1>
                        <h1 className='font-extralight my-2 text-sm md:text-base'>Email : infomysite@gmail.com</h1>
                    </div>
                    <div className="address-2">
                        <h1 className='font-extralight my-2 text-sm md:text-base'>500 Terry Francois Street</h1>
                        <h1 className='font-extralight my-2 text-sm md:text-base'>San Francisco, CA 94158</h1>
                    </div>
                </div>
                <div className="icons flex my-3 md:mt-10">
                    <i class="fa-brands fa-twitter text-xl mr-5 md:mr-7"></i>
                    <i class="fa-brands fa-facebook-f text-xl mr-5 md:mr-7"></i>
                    <i class="fa-brands fa-linkedin text-xl mr-5 md:mr-7"></i>
                </div>
            </div>
            <div className="content-2 my-5">
                <div className="mobiles md:flex">
                    <img className='w-1/3 my-2 md:mr-3' src={Android} alt="" />
                    <img className='w-1/3 my-2 md:mr-3' src={Apple} alt="" />
                </div>
                <div className="para my-5">
                    <h1 className='text-sm font-extralight'>© 2035 by Go On. <br className='md:hidden'/> Powered and secured <br className='hidden md:block'/> by <br className='md:hidden' /> Rashid</h1>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default Footer
