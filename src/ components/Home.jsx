import React, {useState} from 'react' 
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {HiOutlineMail, HiArrowNarrowRight } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Home = () => {
  const [nav, setNave] = useState(false)
  const handleClick = () => setNave(!nav)
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-2xl text-[#47b2ff]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Paolo Joseph.</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full-Stack Developer.</h2>
            <p className='text-gray-300 max-w-[700px] my-4'>I value creating aestheticaly pleasing and responsive full-stack web applications. No matter the project, the first thing users will see is how it looks, so I make it a priority for your users to have a smooth & functional experience with whatever project we need to build.</p>
            <div className='flex flex-col'>
            <div className='mb-5'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#47b2ff] hover:border-[#47b2ff]'>View Work 
                
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                </span>

                </button>

              </Link>
              </div>

              {/* Social Icons */}
              <div className='lg:hidden'>
                  <ul className='flex gap-4'>
                      <li className='w-[52px] h-[52px] flex justify-between items-center bg-blue-600 sm:hover:scale-125 duration-500'>
                          <a className='flex justify-between items-center w-full text-white'
                          href="https://www.linkedin.com/in/artslimedev/">
                          <FaLinkedin size={30} />
                          </a>
                      </li>
                      <li className='w-[52px] h-[52px] flex justify-between items-center bg-[#333333] sm:hover:scale-125 duration-500'>
                          <a className='flex justify-between items-center w-full text-white'
                          href="https://github.com/artslimedev">
                          <FaGithub size={30} />
                          </a>
                      </li>
                      <li className='w-[52px] h-[52px] flex justify-between items-center bg-[#47b2ff] sm:hover:scale-125 duration-500'>
                          <a className='flex justify-between items-center w-full text-white'
                          href="https://twitter.com/artslimedev?s=21&t=-G6QTY-5RQnPXb2EcoVo-w">
                          <FaTwitter size={30} />
                          </a>
                      </li>
                      <li className='w-[52px] h-[52px] flex justify-between items-center bg-[#565f69] sm:hover:scale-125 duration-500'>
                          <a className='flex justify-between items-center w-full text-white'
                          href="https://drive.google.com/file/d/1EN2_Y7-cubdXhL4fML5wZRDRGFXoBbL6/view?usp=sharing">
                          <BsFillPersonLinesFill size={30} />
                          </a>
                      </li>
                      <li className='w-[52px] h-[52px] flex justify-between items-center bg-[#6fc2ba] sm:hover:scale-125 duration-500'>
                          <a className='flex justify-between items-center w-full text-white'
                          href="mailto:artslimedev@gmail.com">
                          <HiOutlineMail size={30} />
                          </a>
                      </li>
                  </ul>
              </div>


            </div>

        </div>
    </div>
  )
}

export default Home