import React from 'react'
import { Link } from 'react-router-dom'

const SubjectPages = () => {
  return (
    <div>
        <section class="pop-cour">
        <div class="container com-sp pad-bot-70">
            <div class="row">
                <div class="con-title">
                    <h2>Study<span>Material</span></h2>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div>
                        
                        <div class="home-top-cour">
                            
                            <div class="col-md-3"> <img src="images/course/ajay2/Ai.jpg" alt=""/> </div>
                            
                            <div class="col-md-9 home-top-cour-desc">
                                <Link to="/">
                                    <h3>Artificial Intelligence</h3>
                                </Link>
                                  <div class="hom-list-share">
                                    <ul>
                                        <li><Link to="https://drive.google.com/drive/u/4/folders/1PYV5H5tto7SzNrxO1rhrg-2-tFyochsS" target='-' ><i class="fa fa-bar-chart"  aria-hidden="true"></i>PDF</Link> </li>
                                        <li><a href="https://drive.google.com/file/d/1goRIQq26XO3F_wTqn6sseBJ2fvGnMOyA/view" target='-' ><i class="fa fa-file-text-o" style={{color:'green'}} aria-hidden=" "></i>Links</a> </li>

                                        {/* <a href="course-details.html"><i class="fa fa-share-alt" aria-hidden="true"></i> 570</a> </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="home-top-cour">
                            
                            <div class="col-md-3"> <img src="images/course/ajay2/MWC.jpg" alt=""/> </div>
                            
                            <div class="col-md-9 home-top-cour-desc">
                                <a href="course-details.html">
                                    <h3>Wireless & Mobile Communication</h3>
                                </a>
                            
                                 <div class="hom-list-share">
                                    <ul>
                                        <li><Link to="https://vcertk.com/departments/#ece" target='-'><i class="fa fa-bar-chart" aria-hidden="true"></i>PDF</Link> </li>
                                        <li><a href="course-details.html"  ><i class="fa fa-file-text-o" style={{color:'green'}} aria-hidden=" "></i>Links</a> </li>

                                        {/* <li><a href="course-details.html"><i class="fa fa-eye" aria-hidden="true"></i>40 Aavailable</a> </li>
                                        <li><a href="course-details.html"><i class="fa fa-share-alt" aria-hidden="true"></i> 320</a> </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="home-top-cour">
                            
                            <div class="col-md-3"> <img src="images/course/ajay2/CG.PNG" alt=""/> </div>
                            
                            <div class="col-md-9 home-top-cour-desc">
                                <a href="course-details.html">
                                    <h3>Computer Graphics</h3>
                                </a>
                                
                                 <div class="hom-list-share">
                                    <ul>
                                    <li><Link to="https://vcertk.com/departments/#ece" target='-'><i class="fa fa-bar-chart" aria-hidden="true"></i>PDF</Link> </li>
                                        <li><a href="course-details.html"  ><i class="fa fa-file-text-o" style={{color:'green'}} aria-hidden=" "></i>Links</a> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div class="col-md-6">
                    <div>
                        
                        <div class="home-top-cour">
                            
                            <div class="col-md-3"> <img src="images/course/ajay2/Ds.jpg" alt=""/> </div>
                            
                            <div class="col-md-9 home-top-cour-desc">
                                <a href="course-details.html">
                                    <h3>Data Science</h3>
                                </a>
                                 <div class="hom-list-share">
                                    <ul>
                                    <li><Link to="https://vcertk.com/departments/#ece" target='-'><i class="fa fa-bar-chart" aria-hidden="true"></i>PDF</Link> </li>
                                        <li><a href="course-details.html"  ><i class="fa fa-file-text-o" style={{color:'green'}} aria-hidden=" "></i>Links</a> </li>
                                     </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="home-top-cour">
                            
                            <div class="col-md-3"> <img src="images/course/ajay2/Aj.jpg" alt=""/> </div>
                            
                            <div class="col-md-9 home-top-cour-desc">
                                <a href="course-details.html">
                                    <h3>Advanced Java</h3>
                                </a>
                                 <div class="hom-list-share">
                                    <ul>
                                    <li><Link to="https://vcertk.com/departments/#ece" target='-'><i class="fa fa-bar-chart" aria-hidden="true"></i>PDF</Link> </li>
                                        <li><a href="course-details.html"  ><i class="fa fa-file-text-o" style={{color:'green'}} aria-hidden=" "></i>Links</a> </li>
                                     </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="home-top-cour">
                            
                            <div class="col-md-3"> <img src="images/course/ajay2/CD.PNG" alt=""/> </div>
                            
                            <div class="col-md-9 home-top-cour-desc">
                                <a href="course-details.html">
                                    <h3>Compiler Design</h3>
                                </a>
                               
                                 <div class="hom-list-share">
                                    <ul>
                                    <li><Link to="https://vcertk.com/departments/#ece" target='-'><i class="fa fa-bar-chart" aria-hidden="true"></i>PDF</Link> </li>
                                        <li><a href="course-details.html"  ><i class="fa fa-file-text-o" style={{color:'green'}} aria-hidden=" "></i>Links</a> </li>
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

export default SubjectPages
