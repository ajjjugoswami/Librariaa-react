import React, { useEffect, useState } from 'react'
import Fire from '../../Fire'
export default function UploadGal() {

    var [galimg, setgalimg] = useState({})
    var [all, setall] = useState({})
var [previews,setpreviews]=useState()


    function change(e) {
        var file = e.target.files[0]
        var reader = new FileReader(file)
        reader.readAsDataURL(file);
        reader.onload = function () {
            setpreviews(reader.result)
            setgalimg({ ...galimg, "img": reader.result, "Name": file.name, "dis": (`${new Date().toLocaleDateString()} (${new Date().getHours()}:${new Date().getMinutes()})`) })

            // setgalimg({ ...galimg,})
        }
    }


    function uploadimg() {
        var selecter=document.getElementById("selecter").value

        Fire.child(selecter).push(galimg, err => {
            if (err) alert(err)
            else alert("data save")
        })
    }
  
    useEffect(() => {

        Fire.child("galery").on("value", datas => {
            setall(datas.val())
        })
    }, [])
    function deletedata(datas) {
        Fire.child(`galery/${datas}`).remove(err => {
            if (err) alert(err)
            else alert("seccuss")
        })
    }
    return (
        <>

            <div>

                <div class="inn-title">
                    <h4>Photo Gallery</h4>
                    <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                </div>
                <div className='row bor ' style={{display:'flex',justifyContent:'space-between'}}>

                    <div class="input-group col ">
                    <select name="" id="selecter" style={{marginTop:"100px"}}>
                                <option value="gallery">Gallery</option>
                                <option value="Document">Document</option>
                            </select>
                            <input type="file" onChange={change} className='p-5' style={{fontSize:"30px"}} name="" id="upload" />
                            
                            <button onClick={uploadimg} className="btn btn-success " style={{marginTop:"30px"}} >Save</button>
                            
                        
                    </div>

                    <div className='col'><img src={previews} width={"150px"} height={"120px"} alt="" /></div></div>

                <div className="sb2-2-3" >
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box-inn-sp">
                                <div className="inn-title">
                                    <h4>Images  </h4><br />

                                    <p>All about students like name, student id, phone, email, country, city and more</p>
                                </div>

                                <div className="tab-inn" >
                                    <div id='tablepenal' style={{ overflow: "scroll", maxHeight: "550px" }} className="table-responsive table-desi">

                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Index No.</th>
                                                    <th>Image</th>
                                                    <th>Image Name</th>
                                                    <th>Upload Time</th>
                                                    <th>Button</th>

                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    Object.keys(all).map((datas, index) => {

                                                        return (
                                                            <>
                                                                <tr>
                                                                    <td><span>{index + 1}</span></td>
                                                                    <td><a href={all[datas].img} target={'_blank'}><span className="list-img"><img src={all[datas].img} alt="" /></span></a>
                                                                    </td>
                                                                    <td><span>{all[datas].Name}</span>
                                                                    </td>
                                                                    <td><span>{all[datas].dis}</span>
                                                                    </td>

                                                                    <td><button className=' btn btn-info py-2' onClick={() => deletedata(datas)}>Delete</button>
                                                                        <a href={all[datas].img} target={'_blank'}><button className=' btn btn-success' >view</button></a></td>
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
        </>
    )
}
