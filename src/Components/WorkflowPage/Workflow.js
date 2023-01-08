import React from 'react'
import PortraitImage from '../../Assets/phoneportrait2.webp'
import LandscapeImg from '../../Assets/phonelandscape.webp'

function Workflow() {
  return (
    <div className='w-full min-h-[100vh] md:min-h-[10vh] bg-white p-5 md:p-8 font-jost container mx-auto'>
        <div className="content-1 w-full h-full flex flex-col md:flex-row md:justify-between lg:items-center">
            <div className="para md:w-1/3 ">
                <h1 className='text-3xl mb-5 xl:text-4xl'>How the App Works</h1>
                <h1 className='font-extralight my-3 text-lg'>/01</h1>
                <h1 className='font-extralight my-3 text-lg'>Personalized <br /> Expirience</h1>
                <h3 className='text-sm font-extralight my-3'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</h3>
            </div>
            <div className="card w-1/2 mx-auto my-8  md:w-full ">
                <img src={PortraitImage} alt="" className='md:w-1/3 md:ml-auto border-8 border-black rounded-2xl xl:w-1/5'/>
            </div>            
        </div>
        <div className="content-2 w-full h-full flex flex-col my-7 md:flex-row md:justify-between lg:items-center">
            <div className="card order-2 my-12 border-8 border-black rounded-2xl md:w-2/4 md:order-1 xl:w-1/3">
                <img src={LandscapeImg} alt=""  className='rounded-xl'/>
            </div>
            <div className="para order-1 md:w-1/3 md:order-2">
                <h1>/02</h1>
                <h1 className='font-extralight my-3 text-lg'>Cloud Based <br /> Technology</h1>
                <h3 className='text-sm font-extralight my-3'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</h3>
            </div>
        </div>      
    </div>
  )
}

export default Workflow
