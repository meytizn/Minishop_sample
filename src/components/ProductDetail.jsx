import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
    <div>{product.title}</div>
  )
}
