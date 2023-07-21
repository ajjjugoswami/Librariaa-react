import React from 'react'
import Adminnavbar from '../adminComponant/Adminnavbar'
import Student from '../Admindata/Student'
import Studentdetailsanddata from '../Admindata/Studentdetailsanddata'

export default function AdminHome() {
  return (
    <>
      <div class="container-fluid sb2">
        <div class="row">
        <div class="sb2-1">
        <Adminnavbar /></div>
          {/* <div class="sb2-2"> */}
            <Studentdetailsanddata />
          {/* </div> */}
        </div></div>
    </>
  )
}
