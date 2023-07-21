import React from 'react'
import Studentnavbar from './Studentnavebar'
import Studentsdatapenal from './Studentsdatapenal'

const Studentsdata = () => {
  return (
    <div>
   <>
      <div class="container-fluid sb2">
        <div class="row">
        <div class="sb2-1">
        <Studentnavbar /></div>
          <div class="sb2-2">
            <Studentsdatapenal />
          </div>
        </div></div>
    </>
    </div>
  )
}

export default Studentsdata
