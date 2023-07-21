import React, { useEffect, useState } from 'react'
import Fire from '../../Fire'
import Classarr from '../../Adim/adminComponant/ClassApi'

export default function Login() {
    var [courseselector, setcourseselector] = useState("")
    var [userandpassword, setuserandpassword] = useState("")
    var [matchroll, setmatchroll] = useState("")
    var [matchimg, setmatchimg] = useState("")
    var [matchimg1, setmatchimg1] = useState("")
    var [matchpass, setmatchpass] = useState("")
    console.log(matchpass)
    var data = new Date(matchpass).getMonth()
    console.log(data)
    function loginuserandpass() {
        var passworddata = document.getElementById("passworddata").value
        var userba = document.getElementById("userba").value
        console.log(passworddata)
        if (userba == "" || userba == null || userba !== matchroll) {
            if (passworddata !== matchpass || passworddata == "" || passworddata == null) {
                alert("please enter Username and password")
            } else {
                alert("please enter username")
            }
        }
        else if (passworddata == "" || passworddata !== matchpass || passworddata == null) {
            if (userba !== matchroll || userba == "" || userba == null) {
                alert("please enter username")
            }
            else {
                alert("please enter  password")
            }

        }
        else if (userba == matchroll) {
            if (passworddata == matchpass) {
                alert("welocome")
                sessionStorage.setItem("img",matchimg)
                sessionStorage.setItem("roll",matchroll)
                window.location.replace("/Studentsdata")
            }


        }
    }


    function username(e) {
        var values = e.target.value
        Fire.child("studentdata").child(courseselector).child(values).on("value", sanap => {
            if (sanap.val() == null || sanap.val() == "") {
                setuserandpassword([])
            }
            else {
                setuserandpassword(sanap.val())
            }
        })
    }
    // passworddata
    useEffect(() => {
        if (userandpassword !== "") {
            Object.keys(userandpassword).map(datas => {
                setmatchroll(userandpassword[datas].RollNo)
                setmatchpass(userandpassword[datas].DOB)
                setmatchimg(userandpassword[datas].Image)
            })
        }
    }, [userandpassword])

    function submitcourese() {
        var selector = document.getElementById("selector").value
        console.log(selector)
        if (selector == null || selector == "choose class" || selector == "") {
            alert("please select class/course")
        }
        else {
            setcourseselector(selector)
            document.getElementById("userandpasswrod").style.display = "block"
            document.getElementById("loginuserandpass").style.display = "block"
            document.getElementById("courseandsubmit").style.display = "none"
            document.getElementById("submitbtns").style.display = "none"
        }
    }

    return (
        <div>
            <div id="modal1" class="modal fade" role="dialog">
                <div class="log-in-pop">
                    <div class="log-in-pop-left"  style={{width:'300px' ,height:'500px',border:'none'}} >
                        <img src='https://images.unsplash.com/photo-1555116505-38ab61800975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxpYnJhcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' style={{maxWidth:'100%',maxHeight:'100%',display:'block'}}/> 
                        
                        {/* <p>Don't have an account? Create your account. It's take less then a minutes</p> */}
                        
                    </div>
                    <div class="log-in-pop-right">
                        <a href="#" class="pop-close" data-dismiss="modal"><img src="images/cancel.png" alt="" />
                        </a>
                        <h4>Login</h4>
                        <p>Don't have an account? Create your account. It's take less then a minutes</p>
                        <form class="s12">
                            <div id='courseandsubmit'>
                                <div>
                                    <div class="input-field s12">

                                        <select id="selector">
                                            {
                                                Classarr.map(data => {
                                                    return (
                                                        <>
                                                            <option value={data}>{data}</option>
                                                        </>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div style={{ display: "none" }} id='userandpasswrod'>
                                <div>
                                    <div class="input-field s12">
                                        <input onChange={username} type="text" data-ng-model="name" class="validate" id='userba' />
                                        <label>User name</label>
                                    </div>
                                </div>
                                <div>
                                    <div class="input-field s12">
                                        <input id='passworddata' type="password" class="validate" />
                                        <label>Password (YYYY-MM-DD)</label>
                                    </div>
                                </div>
                                {/* <div >
                                    <div class="s12 log-ch-bx">
                                        <p>
                                            <input type="checkbox" id="test5" />
                                            <label for="test5">Remember me</label>
                                        </p>
                                    </div>
                                </div> */}
                                {/* <div>
                                    <div class="input-field s12"> <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#modal3">Forgot password</a> | <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#modal2">Create a new account</a>
                                    </div>
                                </div> */}
                            </div>

                        </form>
                        <div id='submitbtns'>
                            <div class="input-field s4">
                                <button onClick={submitcourese} className='btn btn-outline-success'>save</button></div>
                        </div>
                        <div style={{ display: "none" }} id='loginuserandpass'>
                            <div class="input-field s4">
                                <input type="submit" onClick={loginuserandpass} value="Login" class="waves-effect waves-light log-in-btn" /> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
