// import  {sem} from '../adminComponant/ClassApi';
import Classarr, { sem } from '../adminComponant/ClassApi';
import React, { useEffect, useState } from 'react'

import Fire from '../../Fire';

export default function Addcourse() {

    var [semcreate, setsemcreate] = useState({})
    function Courseadd(e) {
        setsemcreate({ ...semcreate, [e.target.name]: e.target.value })
    }

    var [newstate, setnewstate] = useState("")


    function save() {
        var Course = document.getElementById('course').value
        var Sem = document.getElementById('sem').value

        if (Course == null || Course == "") {

            if (Sem == null || Sem == "") {
                alert("please enter Course and sem")
            } else alert("please enter sem")
        } else {
            
            Fire.child('CourseDetails').child(Course).child(Sem).remove(err=>{
                if(err){
                    alert(err)
                }
                else{
                    Fire.child('CourseDetails').child(Course).child(Sem).push(semcreate, err => {
                        if (err) {
                            alert(err)
                        } else {
                            alert("success")
                            window.location.reload()
                        }
                    })
                }
            })

        }
        setnewstate("1")


    }
    useEffect(() => {

    }, [newstate])
    console.log(semcreate)
    // console.log(shangedatasave)
    return (
        <div>
            <form >
                <div class="file-field input-field">
                    <div class="row">
                        <div class="input-field col s12">
                            <select name="" id="course" class="validate" required >
                                {
                                    Classarr.map((classdata) => {
                                        return (
                                            < option value={classdata}  >{classdata}</option>)
                                    })
                                }
                            </select>
                        </div>
                        {/* <div class="input-field col s12">
                            <input onChange={Courseadd} id='Courese2' name='Courese2' type="text" onChange={chna} class="validate" required />
                            <label>How many sem. in this courese </label>
                        </div> */}
                        <div class="input-field col s12">
                            <select name="" id="sem" class="validate" required >
                                {/* <option value="pankaj">pankaj</option> */}
                                {
                                    sem.map(values => {


                                        return (
                                            < option value={`sem${values}`}  >{`sem${values}`}</option>
                                        )
                                    })

                                }
                            </select>


                        </div>
                        <div class="input-field col s12">
                            <input onChange={Courseadd} id='Courese4' name='Book1' type="text" class="validate" required />
                            <label>Book1 Name</label>
                        </div>
                        <div class="input-field col s12">
                            <input onChange={Courseadd} id='Courese5' name='Book1URL' type="text" class="validate" required />
                            <label>Book1 Image URL</label>
                        </div>
                        <div class="input-field col s12">
                            <input onChange={Courseadd} id='Courese4' name='Book2' type="text" class="validate" required />
                            <label>Book2 Name</label>
                        </div>
                        <div class="input-field col s12">
                            <input onChange={Courseadd} id='Courese5' name='Book2URL' type="text" class="validate" required />
                            <label>Book2 Image URL</label>
                        </div>
                        <div class="input-field col s12">
                            <input onChange={Courseadd} id='Courese4' name='Book3' type="text" class="validate" required />
                            <label>Book3 Name</label>
                        </div>
                        <div class="input-field col s12">
                            <input onChange={Courseadd} id='Courese5' name='Book3URL' type="text" class="validate" required />
                            <label>Book3 Image URL</label>
                        </div>
                        <div class="input-field col s12">
                            <input onChange={Courseadd} id='Courese4' name='Book4' type="text" class="validate" required />
                            <label>Book4 Name</label>
                        </div>
                        <div class="input-field col s12">
                            <input onChange={Courseadd} id='Courese5' name='Book4URL' type="text" class="validate" required />
                            <label>Book4 Image URL</label>
                        </div>
                        <div class="input-field col s12">
                            <input onChange={Courseadd} id='Courese4' name='Book5' type="text" class="validate" required />
                            <label>Book5 Name</label>
                        </div>
                        <div class="input-field col s12">
                            <input onChange={Courseadd} id='Courese5' name='Book5URL' type="text" class="validate" required />
                            <label>Book5 Image URL</label>
                        </div>
                    </div>
                    {/* <div class="file-path-wrapper">
                                                            <input  class="file-path validate" type="text" placeholder="Upload course banner image" />
                                                        </div> */}
                </div>

            </form>
            <div class="row">
                <div class="input-field col s12">
                    <i class="waves-effect waves-light btn-large waves-input-wrapper" ><input onClick={save} type="submit" class="waves-button-input" value="Save" /></i>
                </div>
            </div>
        </div>
    )
}
