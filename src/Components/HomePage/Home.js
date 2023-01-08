import React from 'react'
import IphoneIcon from '../../Assets/applebadge.webp'
import PlaystoreIcon from '../../Assets/playstorebadge.webp'
import PhonePortrait from '../../Assets/phoneportarait.webp'
import TabPortrait from '../../Assets/tabportrait.webp';


function Home() {
  return (
    <div className='min-h-[100vh] w-full bg-gradient-to-tl from-second to-third flex flex-col p-4 mt-12 md:mt-[5.5rem] lg:mt-11 2xl:mt-[5rem] lg:flex-row lg:items-center lg:justify-between'>
        <div className="info h-2/5 pt-10 font-jost md:flex flex-col items-center lg:items-start lg:w-1/2 lg:pl-40 2xl:pl-72">
            <h1 className='text-3xl mb-3 text-white font-normal xl:text-5xl 2xl:text-6xl'>Discover New <br /> Possiblities</h1>
            <h1 className='text-white text-xl font-extralight 2xl:text-2xl'>Try it your self, Download now.</h1>
            <div className="icons mt-5 lg:flex justify-center 2xl:mt-12">
                <img src={IphoneIcon} alt=""  className='w-[100px] 2xl:w-[130px] my-3 lg:my-0 '/>
                <img src={PlaystoreIcon} alt="" className='w-[100px] 2xl:w-[130px] my-3 lg:my-0 lg:mx-5'/>
            </div>
        </div>
        <div className="photo min-h-[70vh] mt-5 relative md:mt-16 lg:w-1/2 xl:mt-28 2xl:mt-10">
            <div className="phone-sec w-1/2 md:w-1/4 border-8 rounded-2xl border-black absolute top-20 left-10 md:left-[20%] md:top-[23%] 2xl:top-[34%] z-20">
                <img src={PhonePortrait} alt=""  className='w-full rounded-xl'/>
            </div>
            <div className="tab-sec absolute z-0 w-5/6 md:w-1/2  top-5 right-0 border-8 border-black rounded-2xl md:right-[17%]">
                <img src={TabPortrait} alt="" className='w-full rounded-2xl'/>
            </div>
        </div>      
    </div>
  )
}

export default Home
