import React from 'react'
import Adminnavbar from '../adminComponant/Adminnavbar'
import StudentdetailsShow from '../Admindata/StudentdetailsShow'

export default function AdminAlluserShow() {
  return (
    <>
      <div class="container-fluid sb2">
        <div class="row">
          <div class="sb2-1">
            <Adminnavbar /></div>
          <div class="sb2-2">
            <StudentdetailsShow />
          </div>
        </div>
        </div>
    </>
  )
}
