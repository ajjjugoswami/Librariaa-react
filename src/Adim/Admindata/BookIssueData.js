import React, { useEffect, useState } from 'react'
import Fire from '../../Fire'
import Classarr, { sem } from '../adminComponant/ClassApi'
export default function BookIssueData() {
var arrays=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    
    var dates=new Date().getDate()
    var months=arrays[new Date().getMonth()]
    var years=new Date().getFullYear()


    var [coursess, setcoursess] = useState("")
    var [semsss, setsemsss] = useState({})
    var [studentbook, setstudentbook] = useState({})
    const [rol, setrol] = useState({})
    const [rol1, setrol1] = useState("")
    var [checkdata, setcheckdata] = useState(0)
    
    function changenamedata(e) {

    }

    function refresh() {

        window.location.reload()
    }

    function bookis() {
        setstudentbook({ ...studentbook, "issuedatess": dates,"months":months,"years":years,"totalbook":checkdata+1 })
        // 
        if (studentbook.book == "Not any books") {
            alert("please select minimum one book")
        }
        else if (studentbook.book !== "Not any books") {
            var t5_n1 = document.getElementById("t5-n1").value
            alert("You Have Selected " + checkdata + " Books")
            Fire.child("booksissues").child(t5_n1).remove()
            
            Fire.child("booksissues").child(t5_n1).push(studentbook, err => {
                if (err) alert(err)
                else alert("save")
            })
        }

    }
    

    function boxdata(e) {


        var keyss = e.target.title
        var checkorunchecked = e.target.checked
        if (checkorunchecked == true) {
            setcheckdata(checkdata + 1)
            
            setstudentbook({ ...studentbook, [e.target.name]: keyss, "issuedatess": dates,"months":months,"years":years,"totalbook":checkdata+1 })

        }

        else if (checkorunchecked == false) {
            setcheckdata(checkdata - 1)
            delete studentbook[e.target.name]
        }
    }
    useEffect(() => {
        if (checkdata == 5) {
            document.getElementById("box").checked = true

        }
        if (checkdata !== 5) {
            document.getElementById("box").checked = false

        }
    }, [checkdata])
    // 
    function box1(e) {
        var checkorunchecked = e.target.checked

        if (checkorunchecked == true) {
            setcheckdata(5)

            var box1 = document.getElementById("box1")
            box1.checked = true

            var box2 = document.getElementById("box2")
            box2.checked = true

            var box3 = document.getElementById("box3")
            box3.checked = true

            var box4 = document.getElementById("box4")
            box4.checked = true

            var box5 = document.getElementById("box5")
            box5.checked = true

            setstudentbook({
                [box1.name]: box1.title,
                [box2.name]: box2.title,
                [box3.name]: box3.title,
                [box4.name]: box4.title,
                [box5.name]: box5.title,
                "issuedatess": dates,"months":months,"years":years,"totalbook":checkdata+1
            })
        }
        else if (checkorunchecked == false) {
            setcheckdata(0)
            var box1 = document.getElementById("box1")
            box1.checked = false

            var box2 = document.getElementById("box2")
            box2.checked = false

            var box3 = document.getElementById("box3")
            box3.checked = false

            var box4 = document.getElementById("box4")
            box4.checked = false

            var box5 = document.getElementById("box5")
            box5.checked = false

            setstudentbook({
                "book": "Not any books",
            })
        }
    }

    function courseandsemfetch() {
        var classs = document.getElementById("class").value
        var sems = document.getElementById("sems").value

        if (classs == null || classs == "" || classs == "choose class") {
            if (sems == null || sems == "" || sems == "semchoose") {
                alert("Please select Courese and semester")
            }
            else (
                alert("please select Course")
            )
        }
        else if (classs !== "choose class") {
            if (sems == null || sems == "" || sems == "semchoose") {
                alert("Please select semester")
            } else {
                setcoursess(classs)
                document.getElementById("data").style.display = "block"
                document.getElementById("subbtn").style.display = "none"
                document.getElementById("rolbtn").style.display = "block"

                Fire.child("studentdata").child(classs).on("value", datafetch => {

                })
            }

        }


    }

    function rolnumberchange() {

        var datas = document.getElementById("t5-n1").value
        Fire.child("studentdata").child(coursess).child(datas).on("value", rollfetch => {
            if (rollfetch.val() !== null) {
                setrol(rollfetch.val())
                document.getElementById("studentnames").style.display = "block"
                document.getElementById("rolbtn").style.display = "none"
                document.getElementById("refresh").style.display = "block"
                document.getElementById("bookbtn").style.display = "block"

            }
            else if (rollfetch.val() == null) {
                Fire.child("studentdata").child(coursess).push(datas, err => {
                    if (err) alert(err)
                    else {
                        var name = {
                            Name: "No data"
                        }
                        Fire.child("studentdata").child(coursess).child(datas).push(name, err => {
                            if (err) alert(err)
                            else {
                                Fire.child("studentdata").child(coursess).child(datas).on("value", rollfetch1 => {
                                    setrol(rollfetch1.val())
                                })
                            }
                        })
                    }
                })
            }
        })
    }

    function booksfinde() {
        var sems = document.getElementById("sems").value
        var classs = document.getElementById("class").value

        if (classs == null || classs == "") {
            if (sems == null || sems == "") {
                alert("Please select Courese and semester")
            }
            else (
                alert("please select Course")
            )
        }
        else {

            Fire.child("CourseDetails").child(classs).child(sems).on("value", data => {
                if (data.val() == null || data.val() == "") {
                    var fakedatas = { Book1: "nodata" }
                    Fire.child("CourseDetails").child(classs).child(sems).push(fakedatas)
                }
                else {
                    setsemsss(data.val())
                    document.getElementById("bookbtn").style.display = "none"
                    document.getElementById("bookselector").style.display = "block"
                }
            })
        }
    }


    return (
        <div>
            <form>

                <div class="row">
                    <div class="row">
                        <div class="input-field col s12">
                            <select id='class'>
                                {Classarr.map((dataclass) => {
                                    return (
                                        <option value={dataclass}>{dataclass}</option>
                                    )
                                })}
                            </select>
                            <select id='sems'>
                                {sem.map(values => {
                                    return (
                                        < option value={`sem${values}`}  >{`sem${values}`}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>

                </div>

            </form>
            <div class="row" id='subbtn'>
                <div class="input-field col s12">
                    <i class="waves-effect waves-light btn-large waves-input-wrapper" ><input type="submit" class="waves-button-input" style={{ fontSize: "large" }} value="Submit" onClick={courseandsemfetch} /></i>
                </div>
            </div>
            <form>
                <div class="row" id="data" style={{ display: "none" }}>
                    <div class="input-field col s6">
                        <input id="t5-n1" type="text" class="validate" />
                        <label for="t5-n1">Roll Number</label>
                    </div>
                    <div class="input-field col s6" id='studentnames' style={{ display: "none" }}>
                        {
                            Object.keys(rol).map(data => {

                                return (
                                    <input id="t5-n2" type="text" onChange={() => {
                                        setrol1("1")
                                    }} value={rol[data].Name} disabled class="validate" />
                                )
                            })
                        }

                    </div>

                </div>
            </form>
            <div className='row' >
                <div class="input-field col s12" style={{ display: "none" }} id="rolbtn">
                    <i class="waves-effect waves-light btn-large waves-input-wrapper" ><input type="submit" class="waves-button-input" style={{ fontSize: "large" }} value="Find Roll No" onClick={rolnumberchange} /></i>
                </div>

            </div>
            <div className='row' >
                <div class="input-field col s6" style={{ display: "none" }} id="bookbtn">
                    <i class="waves-effect waves-light btn-large waves-input-wrapper" ><input type="submit" class="waves-button-input" style={{ fontSize: "large" }} value="Find Books" onClick={booksfinde} /></i>
                </div>
                <div class="input-field col s6" style={{ display: "none" }} id="refresh">
                    <i class="waves-effect waves-light btn-large waves-input-wrapper" ><input type="submit" class="waves-button-input" style={{ fontSize: "large" }} value="Refresh" onClick={refresh} /></i>
                </div>
            </div>

            <div className='row' style={{ display: "none" }} id='bookselector' >
                <div class="input-field col s12 " >
                    <table className='table table-striped' >
                        <tr>
                            <input type="checkbox" onClick={box1} name="" id="box" />
                            <label style={{ fontSize: "large" }} htmlFor="box">Select All</label>
                        </tr>
                        <hr />
                        <tbody>
                            {
                                Object.keys(semsss).map((datas, index) => {
                                    return (
                                        <>
                                            <tr>

                                                <td>
                                                    <input type="checkbox" onClick={boxdata} title={semsss[datas].Book1URL} name={"Book1"} id={"box1"} value={semsss[datas].Book1} />
                                                    <label className='border' style={{ fontSize: "large" }} htmlFor={"box1"}>{semsss[datas].Book1}</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="checkbox" onClick={boxdata} name={"Book2"} id={"box2"} title={semsss[datas].Book2URL} value={semsss[datas].Book2} />
                                                    <label style={{ fontSize: "large" }} htmlFor={"box2"}>{semsss[datas].Book2}</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="checkbox" onClick={boxdata} name={"Book3"} id={"box3"} title={semsss[datas].Book3URL} value={semsss[datas].Book3} />
                                                    <label style={{ fontSize: "large" }} htmlFor={"box3"}>{semsss[datas].Book3}</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="checkbox" onClick={boxdata} name={"Book4"} id={"box4"} title={semsss[datas].Book4URL} value={semsss[datas].Book4} />
                                                    <label style={{ fontSize: "large" }} htmlFor={"box4"}>{semsss[datas].Book4}</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="checkbox" onClick={boxdata} name={"Book5"} id={"box5"} title={semsss[datas].Book5URL} value={semsss[datas].Book5} />
                                                    <label style={{ fontSize: "large" }} htmlFor={"box5"}>{semsss[datas].Book5}</label>
                                                </td>
                                            </tr>

                                        </>
                                    )
                                })
                            }
                        </tbody>
                        <hr />
                    </table>
                </div>

                <div class="input-field col s12" style={{ display: "block" }} id="savebtndata">
                    <i class="waves-effect waves-light btn-large waves-input-wrapper " ><input type="submit" class="waves-button-input" style={{ fontSize: "large" }} value="Book Issues" onClick={bookis} /></i>
                </div>

            </div>
            <div className='row' >

            </div>
        </div>
    )
}
