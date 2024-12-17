import React from 'react'
import {Link} from 'react-router-dom'
import {FaFacebook,FaInstagram,FaLinkedin,FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className='flex justify-center items-center p-5 border-t border-gray-500 gap-6'>
        <Link className='text-blue-500 text-2xl' to=''><FaFacebook/></Link>
        <Link className='text-red-500 text-2xl' to=''><FaYoutube/></Link>
        <Link className='text-blue-500 text-2xl' to=''><FaLinkedin/></Link>
        <Link className='text-pink-500 text-2xl' to=''><FaInstagram/></Link>
      </footer>
    </>
  )
}

export default Footer