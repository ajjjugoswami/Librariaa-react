import React, { useEffect, useState } from 'react'
import Fire from '../../Fire'

export default function Eventadddata() {
    var arrays = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var [datacolectfrominput, setdatacolectfrominput] = useState({})
    var [fakestate, setfakestate] = useState("")
function chnagedatafetchfrominputdec(e){
    let data =e.target.value
    var substrings=data.substring(0,20)
    setdatacolectfrominput({ ...datacolectfrominput, [e.target.name]: data,"Short_dis":substrings+"..." })

}
    function chnagedatafetchfrominput1(e) {
        var valueofdate = e.target.value
        var Months = new Date(valueofdate).getMonth()
        var Monthsandyear = `${arrays[Months]}, ${new Date(valueofdate).getFullYear()}`
        var Dates = new Date(valueofdate).getDate() + 1
        setdatacolectfrominput({ ...datacolectfrominput, "Event_date": Dates, "Event_Monthandyear": Monthsandyear })

    }
    function chnagedatafetchfrominput(e) {
        setdatacolectfrominput({ ...datacolectfrominput, [e.target.name]: e.target.value })
    }
    function imagetobase64(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {

            setdatacolectfrominput({ ...datacolectfrominput, "Image": reader.result })
        }
        reader.readAsDataURL(file);

    }

    function Saveeventinfirebase() {
        var submitdate = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
        var submittime = `${new Date().getHours()}:${new Date().getMinutes()}`

        setdatacolectfrominput({
            ...datacolectfrominput, "uploaddate": submitdate, "uploadtime": submittime
        })

        setfakestate("1")
    }


    useEffect(() => {
        if(fakestate!==""){

        
        Fire.child("events").push(datacolectfrominput, err => {
            if (err) alert(err)
else alert("save")
        })}
    }, [fakestate])

    return (
        <div>
            <div class="sb2-2-3">
                <div class="row">
                    <div class="col-md-12">
                        <div class="box-inn-sp admin-form">
                            <div class="inn-title">
                                <h4>Add Event</h4>
                                <p>Here you can edit your website basic details URL, Phone, Email, Address, User and password and more</p>
                            </div>
                            <div class="tab-inn">
                                <form onSubmit={Saveeventinfirebase}>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <input  onChange={chnagedatafetchfrominput} name='Event_name' type="text" class="validate" required />
                                            <label tabIndex={1} class="">Event name</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <textarea onChange={chnagedatafetchfrominputdec} name='Event_Descriptions'></textarea>
                                            <label class="">Event Descriptions</label>
                                        </div>
                                    </div>

                                    
                                  
                                    <div class="row">
                                        <div class="file-field input-field col s12">
                                            <div class="btn admin-upload-btn">
                                                <span>File</span>
                                                <input onChange={imagetobase64} type="file" />
                                            </div>
                                            <div class="file-path-wrapper">
                                                <input class="file-path validate" disabled type="text" placeholder="Event image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <input onChange={chnagedatafetchfrominput1} name='eventdate' type="date" title='Event Date' class="validate" />
                                        </div>
                                       
                                    </div>
                                <div class="row">
                                    <div class=" col s12">
                                        <button onClick={Saveeventinfirebase} className="btn btn-outline-success" >Save</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}
