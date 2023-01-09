import React from 'react'

function Contact() {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" className='w-full min-h-[50vh] p-5 md:p-10 bg-gradient-to-br from-[rgb(104,116,212)] to-[rgb(13,21,41)]' style={{boxShadow:'inset 0px 10px 300px 10px black'}}>
        <div className="content w-full h-full container mx-auto my-5 font-jost text-white lg:flex lg:justify-between lg:items-start xl:px-20">
            <div className="heading my-5 lg:w-1/2 xl:w-2/3">
                <h1 className='text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>For any Assistance <br /> Required Please <br />Reach Out</h1>
            </div>
            <div className="contact-form mt-20 lg:mt-0 lg:w-1/2 xl:w-1/3">
                <form action="">
                    <label className='block w-full font-extralight mb-2' htmlFor="">First Name *</label>
                    <input className='block w-full font-extralight mb-6 bg-transparent border-b focus:outline-none' type="text" />
                    <label className='block w-full font-extralight mb-2' htmlFor="">Last Name *</label>
                    <input className='block w-full font-extralight mb-6 bg-transparent border-b focus:outline-none' type="text" />
                    <label className='block w-full font-extralight mb-2' htmlFor="">Email *</label>
                    <input className='block w-full font-extralight mb-6 bg-transparent border-b focus:outline-none' type="text" />
                    <label className='block w-full font-extralight mb-2' htmlFor="">Leave a message</label>
                    <textarea className='block w-full font-extralight mb-6 bg-transparent border-b focus:outline-none' cols={20} rows={4}></textarea>                    
                </form>
                <button className='px-12 py-2 border rounded-lg mt-7 text-xl font-light'>Submit</button>
            </div>   
        </div>   
    </div>
  )
}

export default Contact
