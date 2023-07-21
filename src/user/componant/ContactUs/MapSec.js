import React,{useState} from 'react'
import Fire from '../../../Fire'

const MapSec = () => {

    const[all,setall]=useState()
    const[pj,setpj]=useState(all)
    function ajay(e){
      setall(
        {
          ...all,[e.target.name]:e.target.value
  
        }
      )
    }
  
    function goswami(){
      Fire.child("ContactInfo").push(all,err=>{
        if(err){
          alert("sorry")
         
        }else{
          alert("saved") 
          window.location.reload()  
        }
      })
  
    }
  return (
   <div>
  <section id="map">
    <div className="row contact-map">
      {/* IFRAME: GET YOUR LOCATION FROM GOOGLE MAP */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55894.88322843295!2d76.50649125820314!3d28.885561600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d850555555555%3A0xc88cfe5dc9080473!2sVaish%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1681659975817!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6290413.804893654!2d-93.99620524741552!3d39.66116578737809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois%2C+USA!5e0!3m2!1sen!2sin!4v1469954001005" allowFullScreen /> */}
      <div className="container">
        <div className="overlay-contact footer-part footer-part-form">
          <div className="map-head">
            <p>Send Us Now</p>
            <h2>GetIn Touch</h2> <span className="footer-ser-re">Service Request Form</span> </div>
          {/* ENQUIRY FORM */}
          <form id="contact_form" name="contact_form" action="  ">
            <ul>
              <li className="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                <input type="text"     onChange={ajay} placeholder="Name" name='name' required /> </li>
              <li className="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                <input type="text"    onChange={ajay} placeholder="last-name" name="lastname" required /> </li>
              <li className="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                <input type="email"   onChange={ajay} placeholder="E-mail" name="email" required /> </li>
              <li className="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                <input type="text"   onChange={ajay} placeholder="Phone"   name="phone"required /> </li>
              <li className="col-md-12 col-sm-12 col-xs-12 contact-input-spac">
                <textarea    onChange={ajay} name='subject' placeholder='subject' required defaultValue={""} />
              </li>
              <li className="col-md-6">
                <input type="submit" onClick={goswami} defaultValue="SUBMIT" /> </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default MapSec
