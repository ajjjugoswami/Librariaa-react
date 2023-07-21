import React from 'react'
import Header from '../../user/componant/Header'

export default function AminLogin() {
    function logindata(){
        var data2="ajay"
        var data1=`${new Date().getHours()}${new Date().getMinutes()}`
        console.log(data1)
    var rendom="ghrtgjregn4g6354e65rfg4regf1er56g74tykjhrnthg65th87yrty4y6t8j6jtykhjnr"
    var data=""
    if(document.getElementById("Username").value==data2 && document.getElementById("Pasword").value==data1){
        for( var i=0;i<30;i++){
            data +=rendom.charAt(Math.floor(Math.random()*(rendom.length)))
            }
            sessionStorage.setItem("fl",data)
     alert(`Welcome\n${data2}`)
            window.location.replace(`/${data}`)
    }

}
    return (
        <div>
            <Header />
            <div className="box-inn-sp ">
                <div className="inn-title " style={{ backgroundColor: "rgb(9, 125, 125)" }}>
                    <h4>Admin Login</h4>
                    <p>Here you can edit your website basic details URL, Phone, Email, Address, User and password and more</p>
                </div>
                <div className="container border mt-5">
                   

                        <div className="border ">
                            <label htmlFor="Username" className="mt-5">User Name</label>
                            <input id="Username" style={{fontSize:"large"}} type="text" className="validate" required />

                        </div>

                        <div className="border">
                            <label htmlFor="Pasword" className="">Password</label>
                            <input id="Pasword" type="password" style={{fontSize:"large"}}  className="validate" required />


                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <a onClick={logindata}><i style={{fontSize:"large"}} className="waves-effect waves-light btn-large waves-input-wrapper" >Login</i></a>
                            </div>
                        </div>
               
                </div>
            </div>
        </div>

    )
}
