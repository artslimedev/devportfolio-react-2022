import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#47b2ff]'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div>
                    <p className='sm:text-right text-4xl font-bold'>Hi. I'm Paolo, your next Fullstack Developer! Lets build out your idea in style!</p>
                </div>
                <div>
                    <p>I have always had an interest in two things that have shaped my life into who I am today: Art & Technology. I've had a fondness for understanding how the technology worked as well as an inclination toward all types of visual aesthetics. To this day I have applied these two passions and have become a prominent creator in the field. Utilizing my skills with React, Javascript, HTML/CSS, and MongoDB, I am aptly prepared to build a full service solution from front-end to back-end.</p>
                </div>
            </div>
        </div> 
    </div>
  );
};

export default About