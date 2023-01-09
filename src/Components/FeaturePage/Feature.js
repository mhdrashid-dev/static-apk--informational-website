import React from 'react'

function Feature() {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" className='features w-full min-h-[100vh] md:min-h-[50vh] bg-gradient-to-tr from-third to-second text-white font-jost py-5 px-4 ' style={{boxShadow:'inset 0px 0px 5000px 100px black'}}>
        <div className="heading my-5 md:px-5  lg:px-14 container mx-auto">
            <h1 className='text-3xl my-6 lg:text-5xl font-normal'>Features</h1>
            <h1 className='font-extralight my-5'>I'm title.Click here to add <br className='lg:hidden'/> your own text and edit me</h1>
        </div>
        <div className="cards my-16 md:grid md:grid-cols-3 lg:px-10 container mx-auto">
            <div className="card-1 my-10 md:px-5 ">
                <i class="fa-solid fa-heart my-2 text-2xl"></i>
                <h1 className='text-xl font-extralight my-4'>High speed <br /> Performance</h1>
                <h1 className='text-sm font-extralight lg:w-2/3'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</h1>
            </div>
            <div className="card-1 my-10 md:px-5">            
                <i class="fa-solid fa-user my-2 text-2xl"></i>
                <h1 className='text-xl font-extralight my-4'>24/7 Online <br /> Support</h1>
                <h1 className='text-sm font-extralight lg:w-2/3'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</h1>
            </div>
            <div className="card-1 my-10 md:px-5">            
                <i class="fa-solid fa-lock my-2 text-2xl"></i>
                <h1 className='text-xl font-extralight my-4'>Airtight <br /> Security</h1>
                <h1 className='text-sm font-extralight lg:w-2/3'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</h1>
            </div>
        </div>
      
    </div>
  )
}

export default Feature
