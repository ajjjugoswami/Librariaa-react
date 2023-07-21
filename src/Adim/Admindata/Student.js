// import Classarr from '../adminComponant/ClassApi';
// import React, { useState } from 'react'
// import { Countries, States, Cities } from 'countries-states-cities-service'
// import Firedb from '../../Fire';
// export default function Student() {

//   var [datastore, setdatastore] = useState({})
//   var [Changestate, setChangestate] = useState({})
//   var states = States.getStates({
//     filters: {
//       country_code: 'IN',
//     },
//   })
//   function changestatedata() {
//     alert("sdhroi")
//   }

//   const cities = Cities.getCities({
//     filters: {
//       country_code: 'IN',
//       state_code: Changestate,
//     },
//   })
//   console.log(cities)
//   var cleardata1 = (e) => {
//     var file = e.target.files[0]
//     var reader = new FileReader(file)
//     reader.readAsDataURL(file);
//     reader.onload = function () {
//       setdatastore({ ...datastore, "img": reader.result })

//     }
//   }
//   var addstatedata = (e) => {

//     setdatastore({ ...datastore, [e.target.name]: e.target.value })

//   }
//   function savedatainfiredb() {
//     var className = document.getElementById("Class").value
//     var States = document.getElementById("State")
//     setdatastore({ ...datastore, "State": States.value })
// console.log(datastore)
//     Firedb.child("Students").child(`class${className}`).push(datastore, (err) => {
//       if (err) { alert("Error") }
//       else { alert("DataSave") }
//     })
//   }

//   console.log(cities)

//   return (
//     <>
//       <section>
//         <div className="sb2-2-3">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="box-inn-sp admin-form">
//                 <div className="inn-title">
//                   <h4>Student Admission</h4>
//                   <p>Here you can edit your website basic details URL, Phone, Email, Address, User and password and more</p>
//                 </div>
//                 <div className="tab-inn">
//                   <form>
//                     <div className="row">
//                       <div className="input-field col s12">
//                         <input onChange={cleardata1} type="file" accept='image/*' className="validate form-control " />

//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="input-field col s6">
//                         <input onChange={addstatedata} type="text" name='First' className="validate" required />
//                         <label className="">First name</label>
//                       </div>
//                       <div className="input-field col s6">
//                         <input onChange={addstatedata} type="text" name='Last' className="validate" />
//                         <label className="">Last name</label>
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="input-field col s6">
//                         <input onChange={addstatedata} type="number" name='Phone' className="validate" required />
//                         <label className="">Phone number</label>
//                       </div>
//                       <div className="input-field col s6">

//                         <select onClick={changestatedata} required id="State" >
//                           <option selected >Choose State</option>
//                           {states.map((States) => { return (<option value={States.state_code} >{States.name}</option>) })}
//                         </select>

//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="input-field col s6">
//                         <input onChange={addstatedata} type="text" name='city' className="validate" required />
//                         <label className="">City</label>
//                       </div>
//                       <div className="input-field col s6">
//                         <input onChange={addstatedata} type="email" name='email' className="validate" required />
//                         <label className="">Email is</label>

//                       </div>
//                     </div>

//                     <div className="row">
//                       <div className="input-field col s6">
//                         <input onChange={addstatedata} type="text" name='Father' minLength={1} className="validate" />
//                         <label className="">Father Name</label>

//                       </div>
//                       <div className="input-field col s6">
//                         <input onChange={addstatedata} type="text" name='Mother' className="validate" />
//                         <label className="">Mother Name</label>
//                       </div>
//                     </div>

//                     <div className="row">
//                       <div className="input-field col s6">
//                         <input onChange={addstatedata} type="date" name='DOB' className="validate" />

//                       </div>
//                       <div className="input-field col s6">
//                         <input onChange={addstatedata} type="text" name='Address' className="validate" />
//                         <label className="">Address</label>
//                       </div>
//                     </div>
                  
//                     <div className="row">
//                       <div className="input-field col s6">
//                         <select onChange={addstatedata} id="Class" name="Class"  >
//                           <option selected  >Choose...</option>
//                           {
//                             Classarr.map((classdata) => {
//                               return (
//                                 <option value={classdata}>{classdata}</option>

//                               )
//                             })
//                           }
//                         </select>
//                       </div>
//                     </div>
//                  </form>
//                   <button type='submit' onClick={savedatainfiredb} className='btn btn-primary form-control mt-5'>Admission</button>

//                   <div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


//     </>
//   )
// }
