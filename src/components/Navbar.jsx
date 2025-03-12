import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  

  return (
    <>
     <div className='flex flex-row justify-around w-[100%] m-auto bg-indigo-500 text-white text-center text-[20px] '>
<div><Link to="/home">home</Link></div>
<div><Link to="/">Miniproject</Link></div>
<div><Link to="/about">about</Link></div>
     </div>


    
    </>
  )
}

