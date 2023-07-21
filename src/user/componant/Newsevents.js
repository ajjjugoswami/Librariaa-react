import React, { useEffect, useState } from 'react'
import Fire from '../../Fire'
 

export default function Newsevents() {
    var [fetcheventdata,setfetcheventdata]=useState({})
    var [fetcheventdata2,setfetcheventdata2]=useState([])
      useEffect(()=>{
      Fire.child("events").on("value",datsa=>{
        if(datsa.val()==null||datsa.val()==""){
            setfetcheventdata({})
        }
        else{

            setfetcheventdata(datsa.val())
        }
      })
    },[])
    function modelbox(datafetch){
      Fire.child(`events/${datafetch}`).on("value",datsa=>{
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
        <center><img src={datas.Image} alt="" width={"100%"} /></center>
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
       <section>
        <div class="container com-sp">
            <div class="row">
                <div class="con-title">
                    <h2>News and <span>Events</span></h2>
                    <p>Here we cover all newses and events which is realated to our college.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="bot-gal h-gal ho-event-mob-bot-sp">
                        <h4>Photo Gallery</h4>
                        <ul>
                            <li><img class="materialboxed" data-caption="Education master image captions" src="images/ami/8.jpg" alt=""/>
                            </li>
                            <li><img class="materialboxed" data-caption="Education master image captions" src="images/ami/9.PNG" alt=""/>
                            </li>
                            <li><img class="materialboxed" data-caption="Education master image captions" src="images/ami/10.jpg" alt=""/>
                            </li>
                            <li><img class="materialboxed" data-caption="Education master image captions" src="images/ami/11.PNG" alt=""/>
                            </li>
                            <li><img class="materialboxed" data-caption="Education master image captions" src="images/ami/1.jpg" alt=""/>
                            </li>
                            <li><img class="materialboxed" data-caption="Education master image captions" src="images/ami/2.PNG" alt=""/>
                            </li>
                            <li><img class="materialboxed" data-caption="Education master image captions" src="images/ami/3.PNG" alt=""/>
                            </li>
                            <li><img class="materialboxed" data-caption="Education master image captions" src="images/ami/4.PNG" alt=""/>
                            </li>
                            <li><img class="materialboxed" data-caption="Education master image captions" src="images/ami/5.PNG" alt=""/>
                            </li>
                            <li><img class="materialboxed" data-caption="Education master image captions" src="images/ami/6.jpg" alt=""/>
                            </li>
                            <li><img class="materialboxed" data-caption="Education master image captions" src="images/ami/7.jpg" alt=""/>
                            </li>
                            <li><img class="materialboxed" data-caption="Education master image captions" src="images/ami/8.jpg" alt=""/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="bot-gal h-vid ho-event-mob-bot-sp">
                        <h4>Video Gallery</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/GHMq_HEfBCQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h5>Maecenas sollicitudin lacinia</h5>
                        <p>The Vaish College of Engg. Affiliated with M.D. University, Rohtak is a premiere institute in the region offering B.Tech, M.Tech, MBA, BBA, BCA courses within an environment rich in resources. The college established in 1995 is one of the First Self-Financing Colleges of Haryana. The campus is delightfully planned and landscape with impressive buildings, lawns, playgrounds and shaded avenues.</p>
           
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="bot-gal h-blog ho-event">
                        <h4>News & Event</h4>
                        <div class="ho-event">
                        <ul>
                                    {
                                        Object.keys(fetcheventdata).map(datafetch=>{
                                            return(
                                                <>
                                                <li>
                                        <div class="ho-ev-date pg-eve-date"><span></span>{fetcheventdata[datafetch].uploaddate}<span></span>
                                        </div>
                                        <div class="ho-ev-link pg-eve-desc">
                                            <a data-toggle="modal" data-target="#myModal" onClick={()=>{modelbox(datafetch)}}>
                                                <h4   title={fetcheventdata[datafetch].uploaddate}>{fetcheventdata[datafetch].Event_name} </h4>
                                            </a>
                                            <p>{fetcheventdata[datafetch].Event_Descriptions}</p>
                                            <span>Upload event {fetcheventdata[datafetch].uploaddate}</span>
                                            <span>({fetcheventdata[datafetch].uploadtime})</span>
                                        </div>
                                        
                                    </li>
                                                </>
                                            )
                                        })
                                    }
                                    
                                   
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
