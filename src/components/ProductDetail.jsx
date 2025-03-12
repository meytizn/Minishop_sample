import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default  function ProductDetail() {
  let {id} = useParams()
  let [product,setproduct]=useState([])
  useEffect(()=>{
     fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response=>response.json())
    .then(data=>setproduct(data))
    .catch(e=>console.log(e))
  },[])



  return (

    <>

    <div className='w-[100%] my-5 md:w-[100%] boarder-[2px] flex flex-col justify-arround items-center flex-wrap px-5 ' >
        <img className='w-[50%] md:w-[18%]' src={product.image} />
        <h3 className=''>{product.title}</h3>
        <h3 className=''>{product.description}</h3>
        <p>${product.price}</p>
        <Link to="/"><p className='w-[150px] text-center rounded-md my-10 bg-blue-500 text-white' >back to store  </p></Link>
        </div>
    
    
    </>
  )
}
