import React, { useContext, useEffect, useState } from 'react'
import { datacontext } from './Createcontext'


export default function Third() {
    var [more,setmore]= useState({})
    var {user} = useContext(datacontext);
    useEffect(()=>{
        setmore({user,"jioj":"pakij"})

    },[])
  return (
    <datacontext.Provider value={{more}}>
      <h1>pankaj{user}</h1>
      </datacontext.Provider>
  )
}
