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

    <div className='w-[100%] flex flex-row justify-arround items-center flex-wrap text-center content-center'>
    {products.map(
      
      (product,index)=>(

      <div className='w-[50%] boarder-[2px] flex flex-col justify-arround items-center flex-wrap' key={index}>
        <img className='w-[80px]' src={product.image} />
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <Link to={`/productdetail/${product.id}`}><p className='w-[100%] bg-green-400 text-white' >view </p></Link>
        </div>
    
    )
      )}
</div>
    </>
  )
}
