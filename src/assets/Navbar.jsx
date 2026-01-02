import React from 'react'

const Navbar = () => {
  return (
    <div className='flex border bg-red-900'>
        <h1 className='text-yellow-600'>Logo</h1>
        <ul>
            <li>Home </li> 
            <li>About </li> 
            <li>Contact Us </li> 
        </ul>
        <p>Login</p>
    </div>
  )
}

export default Navbar
