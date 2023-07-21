import React, { useEffect, useState } from 'react'
import Fire from '../../Fire'
import EventDataUser from './EventDataUser'
import SocialMediaLinks from './SocialMediaLinks'
export default function Event() {
   

    return (

<div>
     <SocialMediaLinks/>
       <section>
        <div class="container com-sp">
            <div class="row">
                <div class="cor about-sp">
                    <div class="ed-about-tit">
                        <div class="con-title">
                            <h2>College <span> Events</span></h2>
                            <hr />
                           
                        </div>
                        <div>
                            <div class="ho-event pg-eve-main">
                                <EventDataUser/>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
