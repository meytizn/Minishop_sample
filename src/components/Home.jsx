import React from 'react'
import useFetch from './useFetch'

export default function Home() {
  let{datas,errors,isloading}=useFetch("https://jsonplaceholder.typicode.com/posts")

  if (isloading) {
    return (<>data is loading ... </>)
  }
  if (isloading) {
    return (<>Error </>)
  }

  return (
    <>
    <div className='bg-indigo-800'>
    <br/>
    <div className=' flex flex-col justify-center items-center w-[90%] m-auto gap-[30px] '>
    <div className=' text-white '>{datas.map((data,index)=><h1 key={index}>{data.id}-{data.title}</h1>)} </div>
    </div>
    </div>
  </>
  )
}
