import React from 'react'
import Adminnavbar from '../adminComponant/Adminnavbar'
import UploadGal from '../Admindata/UploadGal'


export default function UploadGalary() {
  return (
    <div>
      <div class="container-fluid sb2">
        <div class="row">
          <div class="sb2-1">
            <Adminnavbar /></div>
          <div class="sb2-2">
            <UploadGal/>
          </div>
        </div>
      </div>
    </div>
  )
}
