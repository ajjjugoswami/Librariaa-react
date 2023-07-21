import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
       <section class="wed-hom-footer">
        <div class="container">
          
            <div class="row wed-foot-link">
                <div class="col-md-6 foot-tc-mar-t-o">
                    <h4>Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        {/* <li><Link to="https://vcertk.com/admission-2018-19/">Admission</Link></li> */}
                        <li><Link to="/Eventuser">Events</Link></li>
                        <li><Link to="/Contact">Contact Us</Link></li>
                         
                    </ul>
                </div>
                
                <div class="col-md-6">
                    <h4>HELP & SUPPORT</h4>
                    <ul>
                        <li><a href="#">  Live help</a>
                        </li>
                        <li><Link to="/Contact">Contact us</Link>
                        </li>
                        <li><Link to="https://www.aicte-india.org/feedback/index.php" target='-'>Feedback</Link>
                        </li>
                         
                        
                    </ul>
                </div>
            </div>
            <div class="row wed-foot-link-1">
                <div class="col-md-6 foot-tc-mar-t-o">
                    <h4>Get In Touch</h4>
                    <a href="https://goo.gl/maps/yFst8D2qmfquqyEm9" target={'_blank'}><p>Address: Near Railway Station</p></a>
                    <p>Phone: <a href="tel:+(91) 01262 – 248443">+(91) 01262 – 248443</a></p>
                    <p>Email: <a href="mailto:vcengg1995@gmail.com">vcengg1995@gmail.com</a></p>
                </div>
               
                <div class="col-md-6">
                    <h4>SOCIAL MEDIA</h4>
                    <ul>
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        </li>
                        <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                        </li>
                        <li><a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                        </li>
                        <li><a href="#"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>  
            </div>
        </div>
    </section>

    </div>
  )
}
