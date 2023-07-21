import React from 'react'
import Adminnavbar from '../adminComponant/Adminnavbar'
import Eventadddata from '../Admindata/Eventadddata'

export default function Eventadmin() {
  return (
    <>
      <div class="container-fluid sb2">
        <div class="row">
        <div class="sb2-1">
        <Adminnavbar /></div>
       < div class="sb2-2">
               
            <Eventadddata />
          {/* </div> */}
        </div></div>
        </div>
    </>
  )
}
