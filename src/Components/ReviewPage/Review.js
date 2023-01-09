import React from 'react'

function Review() {
  return (
    <div className='w-full min-h-[100vh] md:min-h-[50vh] bg-[rgb(248,248,248)] font-jost  myb-5 p-4 2xl:pt-28'>
      <div className="heading container mx-auto">
        <h1 className='text-3xl xl:text-4xl 2xl:text-5xl'>Satisfied <br /> Cutomers</h1>
      </div>
      <div className="reviewers mt-20 2xl:mt-24 h-full md:grid md:grid-cols-2 md:gap-10  lg:grid-cols-3 lg:gap-14 2xl:gap-48 container mx-auto">
        <div className="review-card-1 min-h-[40vh] mb-10 md:min-h-[30vh] lg:min-h-[40vh] rounded-2xl shadow-2xl w-full p-7 flex bg-white flex-col justify-between" style={{boxShadow:'0px 0px 20px 2px rgb(0,0,0,.1)'}}>
            <h1 className='text-3xl text-second'><i class="fa-solid fa-quote-left"></i></h1>
            <p className='font-extralight '>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</p>            
            <div className="icons">
              <h1 className='mb-1'>Joan Marks</h1>
              <i class="fa-solid fa-star text-second text-sm"></i>
              <i class="fa-solid fa-star text-second text-sm"></i>
              <i class="fa-solid fa-star text-second text-sm"></i>
              <i class="fa-solid fa-star text-second text-sm"></i>
              <i class="fa-solid fa-star text-second text-sm"></i>
            </div>
        </div>                   
        <div className="review-card-1 min-h-[40vh] mb-10 md:min-h-[30vh] lg:min-h-[40vh] rounded-2xl shadow-2xl w-full flex bg-white flex-col justify-between p-7" style={{boxShadow:'0px 0px 20px 2px rgb(0,0,0,.1)'}}>
            <h1 className='text-3xl text-second'><i class="fa-solid fa-quote-left"></i></h1>
            <p className='font-extralight '>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</p>            
            <div className="icons">
              <h1 className='mb-1'>Raymond Souza</h1>
              <i class="fa-solid fa-star text-second text-sm"></i>
              <i class="fa-solid fa-star text-second text-sm"></i>
              <i class="fa-solid fa-star text-second text-sm"></i>
              <i class="fa-solid fa-star text-second text-sm"></i>
              <i class="fa-solid fa-star text-second text-sm"></i>
            </div>
        </div>                   
        <div className="review-card-1 min-h-[40vh] mb-10 md:min-h-[30vh] lg:min-h-[40vh] md:mx-[50%] lg:mx-0 p-7 flex bg-white flex-col justify-between  rounded-2xl shadow-2xl w-full" style={{boxShadow:'0px 0px 20px 2px rgb(0,0,0,.1)'}}>
            <h1 className='text-3xl text-second'><i class="fa-solid fa-quote-left"></i></h1>
            <p className='font-extralight '>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</p>            
            <div className="icons">
              <h1 className='mb-1'>Maggie Stalk</h1>
              <i class="fa-solid fa-star text-second text-sm"></i>
              <i class="fa-solid fa-star text-second text-sm"></i>
              <i class="fa-solid fa-star text-second text-sm"></i>
              <i class="fa-solid fa-star text-second text-sm"></i>
              <i class="fa-solid fa-star text-second text-sm"></i>
            </div>
        </div>                   
      </div>      
    </div>
  )
}

export default Review
