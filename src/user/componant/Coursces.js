import React from 'react'
import { Link } from 'react-router-dom'

export default function Coursces() {
  return (
    <div>
        <section class="pop-cour">
        <div class="container com-sp pad-bot-70">
            <div class="row">
                <div class="con-title">
                    <h2><span>Resources</span></h2>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div>
                        
                        <div class="home-top-cour">
                            
                            <div class="col-md-3"> <img src="images/course/CS.jpg" alt=""/> </div>
                            
                            <div class="col-md-9 home-top-cour-desc">
                                <Link to="/">
                                    <h3>B.Tech</h3>
                                </Link>
                                <h4>Computer Science</h4>
                                <p>Classes started from coming friday(21 jun 2023),total seats 100 and available seats 10</p> <span class="home-top-cour-rat">5.0</span>
                                <div class="hom-list-share">
                                    <ul>
                                        <li><Link to="/Links"  ><i class="fa fa-bar-chart" aria-hidden="true"></i>Click Here</Link> </li>
                                        {/* <a href="course-details.html"><i class="fa fa-share-alt" aria-hidden="true"></i> 570</a> </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="home-top-cour">
                            
                            <div class="col-md-3"> <img src="images/course/EC.jpg" alt=""/> </div>
                            
                            <div class="col-md-9 home-top-cour-desc">
                                <a href="course-details.html">
                                    <h3>B.Tech</h3>
                                </a>
                                <h4>Electronics & Communication</h4>
                                <p>Classes started from coming friday(21 jun 2023),total seats 100 and available seats 10</p> <span class="home-top-cour-rat">4.2</span>
                                <div class="hom-list-share">
                                    <ul>
                                        <li><Link to="/Links" target='-'><i class="fa fa-bar-chart" aria-hidden="true"></i> Click Here</Link> </li>
                                        {/* <li><a href="course-details.html"><i class="fa fa-eye" aria-hidden="true"></i>40 Aavailable</a> </li>
                                        <li><a href="course-details.html"><i class="fa fa-share-alt" aria-hidden="true"></i> 320</a> </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="home-top-cour">
                            
                            <div class="col-md-3"> <img src="images/course/MS.jpg" alt=""/> </div>
                            
                            <div class="col-md-9 home-top-cour-desc">
                                <a href="course-details.html">
                                    <h3>Management Studies</h3>
                                </a>
                                
                                <p>Classes started from coming friday(21 jun 2023),total seats 100 and available seats 10</p> <span class="home-top-cour-rat">4.2</span>
                                <div class="hom-list-share">
                                    <ul>
                                        <li><Link to="/Links" target='-'><i class="fa fa-bar-chart" aria-hidden="true"></i>Click Here</Link> </li>
                                        {/* <  <li><a href="course-details.html"><i class="fa fa-share-alt" aria-hidden="true"></i> 1020</a> </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div class="col-md-6">
                    <div>
                        
                        <div class="home-top-cour">
                            
                            <div class="col-md-3"> <img src="images/course/ME.jpg" alt=""/> </div>
                            
                            <div class="col-md-9 home-top-cour-desc">
                                <a href="course-details.html">
                                    <h3>B.Tech</h3>
                                </a>
                                <h4>Mechanical Engineering</h4>
                                <p>Classes started from coming friday(21 jun 2023),total seats 100 and available seats 10</p> <span class="home-top-cour-rat">4.2</span>
                                <div class="hom-list-share">
                                    <ul>
                                        <li><Link to="/Links" target='-'><i class="fa fa-bar-chart" aria-hidden="true"></i> Click Here</Link> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="home-top-cour">
                            
                            <div class="col-md-3"> <img src="images/course/EE.jpg" alt=""/> </div>
                            
                            <div class="col-md-9 home-top-cour-desc">
                                <a href="course-details.html">
                                    <h3>B.Tech</h3>
                                </a>
                                <h4>Electrical Engineering</h4>
                                <p>Classes started from coming friday(21 jun 2023),total seats 100 and available seats 10</p> <span class="home-top-cour-rat">4.2</span>
                                <div class="hom-list-share">
                                    <ul>
                                        <li><Link to="/Links" target='-'><i class="fa fa-bar-chart" aria-hidden="true"></i> Click Here</Link> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="home-top-cour">
                            
                            <div class="col-md-3"> <img src="images/course/BCA.JPEG" alt=""/> </div>
                            
                            <div class="col-md-9 home-top-cour-desc">
                                <a href="course-details.html">
                                    <h3>BCA</h3>
                                </a>
                               
                                <p>Classes started from coming friday(21 jun 2023),total seats 100 and available seats 10</p> <span class="home-top-cour-rat">4.2</span>
                                <div class="hom-list-share">
                                    <ul>
                                        <li><a href="course-details.html" target='-'><i class="fa fa-bar-chart" aria-hidden="true"></i>Click Here</a> </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                         
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
