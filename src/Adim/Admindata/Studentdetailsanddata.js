import React, { useEffect, useState } from 'react'
import Classarr from '../adminComponant/ClassApi'
import Addcourse from './Addcourse'
import Fire from '../../Fire'
import BookIssueData from './BookIssueData'
export default function Studentdetailsanddata() {

    const [ajay, setajay] = useState({})
    const [fetchcourse, setfetchcourse] = useState([])

    const [pankaj, setpankaj] = useState(
        ""
    )
    useEffect(() => {
        Fire.child("CourseDetails").on("value", datas => {
            if (datas.val() == null || datas.val() == "") {
                setfetchcourse([])
            }
            else {
                setfetchcourse(datas.val())
            }
        })
    }, [])
    var [classdata, setclassdata] = useState([])
    useEffect(() => {
        Object.keys(fetchcourse).map(datas => {
            setclassdata(datas)
        })
    }, [fetchcourse])
    function studentdetailsave() {
        var names = document.getElementById("names").value
        var selecterclass = document.getElementById("selecterclass").value
        setajay({ ...ajay, "class": selecterclass })
        if (selecterclass == null || selecterclass == ""||selecterclass=="choose class") {
            alert("Plese select course")
        } else {

            Fire.child("studentdata").child(selecterclass).child(names).remove(err => {
                if (err) console.log(err)
                else {
                    Fire.child("studentdata").child(selecterclass).child("datas").push(ajay, err => {
                        if (err) {
                            alert("Error")
                        }
                    })
                    Fire.child("studentdata").child(selecterclass).child(names).push(ajay, err => {
                        if (err) {
                            alert("Error")
                        } else {
                            alert("Success")
                            window.location.reload()
                        }
                    })
                }
            })

        }

    }
    console.log(classdata);
    function photouploAD(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            console.log('RESULT', reader.result)
            setajay({ ...ajay, "Image": reader.result })
        }
        reader.readAsDataURL(file);
    }

    function StudentsD(e) {
        setajay({
            ...ajay, [e.target.name]:e.target.value
        })
    }
    return (
        <div>

            <div className="sb2-2">

                <div className="sb2-2-2">
                    <ul>
                        <li><a href="index-2.html"><i className="fa fa-home" aria-hidden="true"></i> Home</a>
                        </li>
                        <li className="active-bre"><a href="#"> Add new course</a>
                        </li>
                        <li className="page-back"><a href="index-2.html"><i className="fa fa-backward" aria-hidden="true"></i> Back</a>
                        </li>
                    </ul>
                </div>


                <div className="sb2-2-3">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box-inn-sp admin-form">
                                <div className="sb2-2-add-blog sb2-2-1">
                                    <h2>Libraria</h2>
 
                                    <ul className="nav nav-tabs tab-list">
                                        {/* <li className="active"><a data-toggle="tab" href="#home" aria-expanded="true"><i className="fa fa-info" aria-hidden="true"></i> <span>Detail</span></a></li> */}
                                        <li className=""><a data-toggle="tab" href="#menu1" aria-expanded="true"><i className="fa fa-bed" aria-hidden="true"></i> <span>New student</span></a>
                                        </li>
                                        <li className=""><a data-toggle="tab" href="#menu2" aria-expanded="false"><i className="fa fa-picture-o" aria-hidden="true"></i> <span>Create courese </span></a>
                                        </li>
                                        <li className="active"><a data-toggle="tab" href="#menu3" aria-expanded="false"><i className="fa fa-facebook" aria-hidden="true"></i> <span>Book Issue</span></a>
                                        </li>
                                        {/* <li className=""><a data-toggle="tab" href="#menu4" aria-expanded="false"><i className="fa fa-phone" aria-hidden="true"></i> <span>Contact Info</span></a></li> */}
                                    </ul>

                                    <div className="tab-content">
                                        <div id="home" className="tab-pane fade active in">
                                            {/* <div className="box-inn-sp">
                                                <div className="inn-title">
                                                    <h4>Course Information</h4>

                                                </div>
                                                <div className="bor">
                                                    <form>
                                                        <div className="row">
                                                            <div className="input-field col s12">
                                                                <input id="list-title" type="text" className="validate" />
                                                                <label for="list-title" className="">Course Name</label>
                                                            </div>
                                                            <div className="input-field col s12">
                                                                <input id="list-name" type="text" className="validate" />
                                                                <label for="list-name">Contact Person</label>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="input-field col s12">
                                                                <textarea className="materialize-textarea"></textarea>
                                                                <label>Course Descriptions:</label>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="input-field col s12">
                                                                <select>
                                                                    <option value="" disabled selected>Select Status</option>
                                                                    <option value="1">Active</option>
                                                                    <option value="2">De-Active</option>
                                                                    <option value="3">Delete</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="input-field col s12">
                                                                <i className="waves-effect waves-light btn-large waves-input-wrapper" ><input type="submit" className="waves-button-input" value="Submit" /></i>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div id="menu1" className="tab-pane fade">
                                            <div className="inn-title">
                                                <h4>Requirements, feese, student profile and how to apply</h4>
                                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                                            </div>
                                            <div className="bor ad-cou-deta-h4">
                                                <form>
                                                    <h4>Requirements:</h4>


                                                    <div className="row">
                                                        <div className="input-field col s12">
                                                            <input type="text" className="validate" required onChange={StudentsD} name='Name' />
                                                            <label>Name</label>
                                                        </div>
                                                        <div className="input-field col s12">
                                                            <input type="number" className="validate" required onChange={StudentsD} id='names' name='RollNo' />
                                                            <label>RollNo.</label>
                                                        </div>
                                                        <div className="input-field col s12">
                                                            <input type="file" className="validate form-control" onChange={photouploAD} required />

                                                        </div>
                                                        <div className="input-field col s12">
                                                            <select name="Class" id="selecterclass" className="validate" required   >
                                                                {
                                                                    Classarr.map((classdata) => {
                                                                        return (
                                                                            < option value={classdata}>{classdata}</option>)
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                        <div className="input-field col s12">
                                                            <input type="text" className="validate" required onChange={StudentsD} name='Fathername' />
                                                            <label>Father Name</label>
                                                        </div>
                                                        <div className="input-field col s12">
                                                            <input type="date" className="validate" required onChange={StudentsD} name='DOB' />

                                                        </div>
                                                    </div>
                                                    {/* <h4>Student Profile:</h4>
                                                    <div className="row">
                                                        <div className="input-field col s12">
                                                            <textarea className="materialize-textarea"></textarea>
                                                            <label>Student Profile Descriptions:</label>
                                                        </div>
                                                    </div> */}
                                                    {/* <h4>How to apply this course:</h4> */}
                                                    {/* <div className="row">
                                                        <div className="input-field col s12">
                                                            <input type="text" className="validate" required />
                                                            <label>Step 1 Descriptions:</label>
                                                        </div>
                                                        <div className="input-field col s12">
                                                            <input type="text" className="validate" required />
                                                            <label>Step 2 Descriptions:</label>
                                                        </div>
                                                        <div className="input-field col s12">
                                                            <input type="text" className="validate" required />
                                                            <label>Step 3 Descriptions:</label>
                                                        </div>
                                                        <div className="input-field col s12">
                                                            <input type="text" className="validate" required />
                                                            <label>Step 4 Descriptions:</label>
                                                        </div>
                                                        <div className="input-field col s12">
                                                            <input type="text" className="validate" required />
                                                            <label>Step 5 Descriptions:</label>
                                                        </div>
                                                    </div>*/}
                                                </form>
                                                <div className="row">
                                                    <div className="input-field col s12">
                                                        <i className="waves-effect waves-light btn-large waves-input-wrapper" ><input type="submit" className="waves-button-input" value="Submit" onClick={studentdetailsave} /></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="menu2" className="tab-pane fade">
                                            <div className="inn-title">
                                                <h4>Add Course</h4>
                                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                                            </div>
                                            <div className="bor">
                                                <Addcourse />
                                            </div>
                                        </div>
                                        <div id="menu3" className="tab-pane fade active in">
                                            <div className="inn-title">
                                                <h4>Book Issue</h4>

                                            </div>
                                            <div className="bor ad-cou-deta-h4">
                                                <BookIssueData />
                                            </div>
                                        </div>
                                        {/* <div id="menu4" className="tab-pane fade">
                                            <div className="inn-title">
                                                <h4>Contact Info</h4>
                                                
                                            </div>
                                            <div className="bor">
                                                <form>
                                                    <div className="row">
                                                        <div className="input-field col s6">
                                                            <input id="t5-n1" type="text" className="validate" />
                                                            <label for="t5-n1">Contact Name</label>
                                                        </div>
                                                        <div className="input-field col s6">
                                                            <input id="t5-n2" type="text" className="validate" />
                                                            <label for="t5-n2">Alter Contact Name</label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="input-field col s6">
                                                            <input id="t5-n3" type="number" className="validate" />
                                                            <label for="t5-n3">Phone</label>
                                                        </div>
                                                        <div className="input-field col s6">
                                                            <input id="t5-n4" type="number" className="validate" />
                                                            <label for="t5-n4">Mobile</label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="input-field col s12">
                                                            <input id="t5-n5" type="email" className="validate" />
                                                            <label for="t5-n5">Email</label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="input-field col s12">
                                                            <textarea id="t5-n6" className="materialize-textarea"></textarea>
                                                            <label for="t5-n6">Listing Descriptions:</label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="input-field col s12">
                                                            <i className="waves-effect waves-light btn-large waves-input-wrapper" ><input type="submit" className="waves-button-input" value="Upload" /></i>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
