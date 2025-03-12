import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Minishop() {
 
  let[products,setProducts]=useState([])

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(response=>response.json())
    .then(data=>setProducts(data))
    .catch(e=>console.log(e))
  },[])

  return (
    <>

    <div className='w-[100%] flex flex-row justify-arround items-center flex-wrap text-center content-center my-5 gap-5 '>
    {products.map(
      
      (product,index)=>(

      <div className='w-[45%] md:w-[15%] boarder-[2px] flex flex-col justify-arround items-center flex-wrap  ' key={index}>
        <img className='w-[80px]' src={product.image} />
        <h3 className='overflow-hidden whitespace-nowrap text-ellipsis w-24'>{product.title}</h3>
        <p>${product.price}</p>
        <Link to={`/productdetail/${product.id}`}><p className='w-[100px] rounded-md bg-green-400 text-white' >view </p></Link>
        </div>
    
    )
      )}
</div>
    </>
  )
}
