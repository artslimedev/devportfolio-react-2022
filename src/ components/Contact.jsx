import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form netlify action='https://getform.io/f/bd36a41b-ca45-4488-8621-6c59dc893a46' method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-blue-400 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form or shoot me an email - <span className='hover:border-b-2 hover:border-[#47b2ff] hover:pb-2'><a href='mailto:artslimedev@gmail.com'>artslimedev@gmail.com</a></span></p>
            </div>
            <input className='my-2 p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
            <input className='my-2 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='my-2 p-2 bg-[#ccd6f6]' name="message" placeholder='Message' cols="30" rows="10"></textarea>
            <button className='text-white border-2 hover:bg-[#47b2ff] hover:border-[#47b2ff] px-4 py-3 my-8 mx-auto flex items-center'>Lets Collaborate</button>
        </form>
    </div>
  )
}

export default Contact