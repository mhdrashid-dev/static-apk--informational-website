import React from 'react'

function About() {
  return (
    <div className='about min-h-[50vh] md:min-h-[25vh] lg:min-h-[60vh] md:px-20 w-full bg-gradient-to-tl from-third to-second p-6 text-white font-jost md:flex md:justify-between md:items-center ' style={{boxShadow:'inset 0px 0px 100px 10px black'}}>
      <div className='container mx-auto w-full h-full md:flex md:justify-between md:items-center'>
        <div className="heading md:w-1/2 xl:w-2/3">
            <h1 className='text-3xl xl:text-4xl 2xl:text-5xl my-10'>Our Story</h1>
        </div>
        <div className="content md:w-1/2 xl:w-1/3">
            <h1 className='text-xl font-extralight my-5'>Led by the belief that <br /> anyone can grow</h1>
            <p className='font-extralight text-sm my-5 leading-7'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
      </div>
    </div>
  )
}

export default About
