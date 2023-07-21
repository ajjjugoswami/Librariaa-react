import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <section>
                <div class="ed-mob-menu">
                    <div class="ed-mob-menu-con">
                        <div class="ed-mm-left">
                            <div class="wed-logo">
                                <a href="index-2.html"><img src="images/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div class="ed-mm-right">
                            <div class="ed-mm-menu">
                                <a href="#!" class="ed-micon"><i class="fa fa-bars"></i></a>
                                <div class="ed-mm-inn">
                                     
                                    <h4>User Account</h4>
                                    <ul>
                                        <li><Link to="#!" data-toggle="modal" data-target="#modal1">Log In</Link></li>
                                        <li><Link to="/AdminLogin" data-toggle="modal" data-target="#modal2">Admin Login</Link></li>
                                    </ul>
                                    <h4>All Pages</h4>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                         
                                        <li><Link to="/about">About us</Link></li>
                                        {/* <li><a href="admission.html">Admission</a></li> */}
                                        {/* <li><a href="/Courses">All courses</a></li> */}
                                        {/* <li><a href="course-details.html">Course details</a></li> */}
                                        {/* <li><a href="awards.html">Awards</a></li> */}
                                        {/* <li><a href="seminar.html">Seminar</a></li> */}
                                        <li><Link to="/Eventuser">Events</Link></li>
                                        
                                        
                                        <li><Link to="/Contact">Contact us</Link></li>
                                    </ul>
                                     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>

                <div class="ed-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="ed-com-t1-left">
                                    <ul>
                                        <li><a href="https://goo.gl/maps/9UBdx9pSnKXsWKzL6" target={'_blank'}>Location:Behind Railway station,Rohtak</a>
                                        </li>
                                        <li><a href="tel:+918571892019">Phone: +91-8571892019</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="ed-com-t1-right">
                                    <ul>
                                        <li><a href="#!" data-toggle="modal" data-target="#modal1">Log In</a>
                                        </li>
                                       
                                        <li className=''><Link to="/AdminLogin"  >Admin Login</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="ed-com-t1-social">
                                    <ul>
                                        <li><Link to="https://vcertk.com/" target='-'><i class="fa fa-facebook" aria-hidden="true"></i></Link>
                                        </li>
                                        <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                                        </li>
                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="top-logo" data-spy="affix" data-offset-top="250">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="wed-logo">
                                    <Link to="/"><img src="images/logo.png" alt="" />
                                    </Link>
                                </div>
                                <div class="main-menu">
                                    <ul>
                                        <li><Link to="/">Home</Link>
                                        </li>
                                        <li class="about-menu">
                                         
                                            <Link to="/about" class="mm-arr">About us</Link>

                                           
                                        </li>
                        
                                        {/* <li><a href="/Courses">All Courses</a></li> */}
                                        {/* <li><Link class='dropdown-button ed-sub-menu' Link to='https://vcertk.com/departments/' data-activates='dropdown1'>Departments</Link></li> */}
                                         
                                        <li><Link to="/Eventuser">Events</Link>
                                        </li>
                                       
                                        <li><Link to="/Contact">Contact us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="all-drop-down-menu">

                            </div>

                        </div>
                    </div>
                </div>
                <div class="search-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="search-form">
                                    <form>
                                        {/* <div class="sf-type">
                                            <div class="sf-input" />
                                            <input type="text" id="sf-box" placeholder="Search course and discount courses" />
                                        </div> */}
                                        <div class="sf-list">
                                             
                                        </div>
                            </form>
                                </div>
                                {/* <div class="sf-submit">
                                    <input type="submit" value="Search Course" />
                                </div> */}
                        </div>
                    </div>
                </div>
        </div>
       
    </section >
    </div >
    


  )
}
