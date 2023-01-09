import React from 'react'

function Service() {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" className='service w-full h-[70vh] bg-white flex flex-col justify-around items-start p-5 md:flex-row md:items-start md:h-[38vh] md:pt-16 lg:h-[65vh] lg:px-7 lg:py-10 xl:h-[50vh] xl:px-20 2xl:px-52 2xl:py-20'>
        <div className="para-1 font-jost md:w-1/2 xl:w-2/3 2xl:w-3/4">
            <h1 className='text-3xl text-gray-700 xl:text-4xl 2xl:text-5xl'>Reinviting Mobile <br /> Technology</h1>
        </div>
        <div className="para-2 font-jost md:w-1/2 mt-3 xl:w-1/3 2xlw-1/4">
            <h1 className='text-xl font-extralight text-gray-700'>Join more than a million <br /> of happy users</h1>
            <p className='font-extralight my-3 text-gray-700'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <button className='mt-3 px-5 py-2 border border-black rounded-md text-gray-700'>Download the App</button>
        </div>      
    </div>
  )
}

export default Service
