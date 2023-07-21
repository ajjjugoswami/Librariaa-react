import React, { useEffect, useState } from 'react'
import Classarr from '../adminComponant/ClassApi'
import fireDb from '../../Fire'
export default function StudentdetailsShow() {
    var [all, setAll] = useState({})
    var [all1, setAll1] = useState([])
    var [all2, setAll2] = useState([])
    var [classdata, setclassdata] = useState("")

    function addstatedata(e) {
        setclassdata(e.target.value)
        fireDb.child("studentdata").child(e.target.value).child("datas").on("value", da => {
            setAll(da.val())
        })

    }

    function deletedata(key) {
        fireDb.child("studentdata").child(classdata).child("datas").child(key).remove(err => {
            if (err) alert(err)
            else alert("delete")
        })
    }

    return (
        <div>


            <div className="sb2-2-3" >
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-inn-sp">
                            <div className="inn-title">
                                <h4>Student Details  </h4><br />
                                <span className=''>
                                    <select onChange={addstatedata} style={{ display: "block" }} id="Class" name="Class"  >

                                        {
                                            Classarr.map((classdata) => {
                                                return (
                                                    <option value={classdata}>{classdata}</option>

                                                )
                                            })
                                        }
                                    </select></span>
                                <p>All about students like name, student id, phone, email, country, city and more</p>
                            </div>

                            <div className="tab-inn" >
                                <div id='tablepenal' style={{ overflow: "scroll", maxHeight: "550px" }} className="table-responsive table-desi">

                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>User</th>
                                                <th>Name</th>
                                                <th>Roll.No</th>
                                                <th>FatherName</th>
                                                <th>D.O.B</th>

                                                <th>Class</th>
                                                <th>View</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                Object.keys(all).map(datas => {
                                                    console.log(datas)
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td><span className="list-img"><img src={all[datas].Image} alt="" /></span>
                                                                </td>
                                                                <td><a href="#"><span className="list-enq-name">{`${all[datas].Name}  `}</span> </a>
                                                                </td>

                                                                <td>{all[datas].RollNo}</td>
                                                                <td>{all[datas].Fathername}</td>

                                                                <td>{all[datas].DOB}</td>
                                                                <td>
                                                                    <span className="label label-success">{classdata}</span>
                                                                </td>
                                                                <td><button className=' btn btn-info' onClick={() => deletedata(datas)}>Delete</button></td>
                                                            </tr>


                                                        </>


                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
