import React, { useEffect, useState } from 'react'
import Fire from '../../Fire'
 

export default function EventDataUser() {

    var [fetcheventdata,setfetcheventdata]=useState({})
    var [fetcheventdata2,setfetcheventdata2]=useState([])
      useEffect(()=>{
      Fire.child("events").on("value",datsa=>{
      if(datsa.val()==null||datsa.val()==""){

        setfetcheventdata({})
      }else{

        setfetcheventdata(datsa.val())
      }
      })
    },[])
    function modelbox(datafetch){
      Fire.child(`events/${datafetch}`).on("value",datsa=>{
        console.log(datsa.val())
      setfetcheventdata2([datsa.val()])
    })}
  return (
    <div>
        {
       fetcheventdata2.map(datas=>{
        console.log(datas)
        return(
            <div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

   
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">{`${datas.Event_name} (Event Date: ${datas.eventdate})`}</h4>
      </div>
      <div class="modal-body">
        <center><img src={datas.Image} alt="" /></center>
        <br />
        <hr />
        <p>{datas.Event_Descriptions}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
        )
       })
    }
       <ul>
                                    {
                                        Object.keys(fetcheventdata).map(datafetch=>{
                                            return(
                                                <>
                                                <li>
                                        <div class="ho-ev-date pg-eve-date"><span></span><span>{fetcheventdata[datafetch].uploaddate}</span>
                                        </div>
                                        <div class="ho-ev-link pg-eve-desc">
                                            <a href="event-register.html">
                                                <h4 title={fetcheventdata[datafetch].uploaddate}>{fetcheventdata[datafetch].Event_name} </h4>
                                            </a>
                                            <p>{fetcheventdata[datafetch].Event_Descriptions}</p>
                                            <span>Upload event {fetcheventdata[datafetch].uploaddate}</span>
                                            <span>({fetcheventdata[datafetch].uploadtime})</span>
                                        </div>
                                        <div class="pg-eve-reg">
                                            <a  class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" onClick={()=>{modelbox(datafetch)}}>Read more</a>
                                            
                                        </div>
                                    </li>
                                                </>
                                            )
                                        })
                                    }
                                    
                                   
                                </ul>
    </div>
  )
}
