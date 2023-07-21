 import React from 'react'
import { Link } from 'react-router-dom'
 
 export default function DiscoverMore() {
   return (
   <div>
  <section>
    <div className="container com-sp pad-bot-70">
      <div className="row">
        <div className="con-title">
          <h2>Discover <span>More</span></h2>
          {/* <p>Discover more about your college.........</p> */}
        </div>
      </div>
      <div className="row">
        <div className="ed-course">
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="ed-course-in">
              <Link className="course-overlay" to="http://www.vesrohtak.org/" target='-'>
                <img src="images/h-about.PNG
                " alt />
                <span>Vaish Society</span>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="ed-course-in">
              <Link className="course-overlay" to="https://vcertk.com/wp-content/uploads/2022/05/admission-form-2022-23.pdf" target='-'>
                <img src="images/h-adm1.jpg" alt />
                <span>Admission Form</span>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="ed-course-in">
              <Link className="course-overlay" to="https://vcertk.com/admission-helpline/" target='-'>
                <img src="images/h-res.PNG" alt />
                <span>Admission Helpline</span>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="ed-course-in">
              <Link className="course-overlay" to="https://vcertk.com/campus/" target='-'>
                <img src="images/h-res.PNG" alt />
                <span>Vaish Campus</span>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="ed-course-in">
              <Link className="course-overlay" to="https://vcertk.com/auditorium/">
                <img src="images/h-about1.jpg" alt />
                <span>Auditoriam</span>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="ed-course-in">
              <Link className="course-overlay" to="https://vcertk.com/syllabus/" target='-'>
                <img src="images/h-adm.PNG" alt />
                <span>Download Syllabus</span>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="ed-course-in">
              <Link className="course-overlay" to="http://result.mdurtk.in/postexam/result.aspx" target='-'>
                <img src="images/h-cam1.jpg" alt />
                <span>Results</span>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="ed-course-in">
              <Link className="course-overlay" to="https://vcertk.com/tp-cell/" target='-'>
                <img src="images/h-res1.jpg" alt />
                <span>Training &amp; Placement</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

   )
 }
 