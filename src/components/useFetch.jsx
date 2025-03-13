import React, { useEffect, useState } from 'react'

export default function useFetch(url) {
  let [datas,setDatas]=useState(null)
  let [errors,setErrors]=useState(null)
  let [isloading,setIsLoading] = useState(true)


  useEffect(()=>{

    fetch(url)
    .then(response=>response.json())
    .then(data=>setDatas(data))
    .catch(error=>setErrors(error))
    .finally(()=>setIsLoading(false))

  },[url])


  return {datas,errors,isloading}
}
