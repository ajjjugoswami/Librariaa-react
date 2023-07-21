import React from 'react'
import { Link } from 'react-router-dom'

export default function Studentnavbar() {
    var time = `${new Date().getHours()}${new Date().getMinutes()}`



    return (
        <>
            <div class="sb2-12">
                <ul>
                    <li><img src={sessionStorage.getItem("img")} alt="" />
                    </li>
                    <li>
                        <h5>Libraria<span></span></h5>
                    </li>
                    <li></li>
                </ul>
            </div>

            <div class="sb2-13">
                <ul data-collapsible="accordion">
                    {/* <li><a href="admin.html" class="menu-active"><i class="fa fa-bar-chart" aria-hidden="true"></i> Dashboard</a>
                    </li> */}
                    <li><Link to="/"><i class="fa fa-book" aria-hidden="true"></i>Log Out</Link>
                    </li>
                    {/* <li><Link to={`/${sessionStorage.getItem("fl")}`} ><i class="fa fa-user" aria-hidden="true"></i>Student Admission</Link></li>
                    <li><Link to="/Uplodgallery" ><i class="fa fa-image" aria-hidden="true"></i>Gallery Upload</Link></li>
                    <li><Link to="/Allstudentdetails"><i class="fas fa-user-edit" aria-hidden="true"></i>Allstudentdetails</Link></li>
                    <li><Link to="/" ><i class="fa fa-user" aria-hidden="true"></i>Login</Link></li> */}
                    {/* <li><a href="javascript:void(0)" class="collapsible-header"><i class="fa fa-user" aria-hidden="true"></i> Users</a>
                            <div class="collapsible-body left-sub-menu">
                                <ul>
                                    <li><a href="admin-user-all.html">All Users</a>
                                    </li>
                                    <li><a href="admin-user-add.html">Add New user</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="javascript:void(0)" class="collapsible-header"><i class="fa fa-bookmark-o" aria-hidden="true"></i>All Pages</a>
                            <div class="collapsible-body left-sub-menu">
                                <ul>
                                    <li><a href="admin-page-all.html">Pages</a>
                                    </li>
                                    <li><a href="admin-page-add.html">Create New Page</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="javascript:void(0)" class="collapsible-header"><i class="fa fa-bars" aria-hidden="true"></i> Menu</a>
                            <div class="collapsible-body left-sub-menu">
                                <ul>
                                    <li><a href="admin-main-menu.html">Main menu</a></li>
									<li><a href="admin-about-menu.html">About menu</a></li>
									<li><a href="admin-admission-menu.html">Admission menu</a></li>
									<li><a href="admin-all-menu.html">All page menu</a></li>
                                </ul>
                            </div>
                        </li>
						<li><a href="admin-slider.html"><i class="fa fa-image" aria-hidden="true"></i> Slider</a>
                        </li>
						<li><a href="admin-quick-link.html"><i class="fa fa-external-link-square" aria-hidden="true"></i> Slider quick link</a>
                        </li>
                        <li><a href="javascript:void(0)" class="collapsible-header"><i class="fa fa-calendar" aria-hidden="true"></i> Events</a>
                            <div class="collapsible-body left-sub-menu">
                                <ul>
                                    <li><a href="admin-event-all.html">All Events</a>
                                    </li>
                                    <li><a href="admin-event-add.html">Create New Events</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="javascript:void(0)" class="collapsible-header"><i class="fa fa-bullhorn" aria-hidden="true"></i> Seminar</a>
                            <div class="collapsible-body left-sub-menu">
                                <ul>
                                    <li><a href="admin-seminar-all.html">All Seminar</a>
                                    </li>
                                    <li><a href="admin-seminar-add.html">Create New Seminar</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="javascript:void(0)" class="collapsible-header"><i class="fa fa-graduation-cap" aria-hidden="true"></i> Job Vacants</a>
                            <div class="collapsible-body left-sub-menu">
                                <ul>
                                    <li><a href="admin-job-all.html">All Jobs</a>
                                    </li>
                                    <li><a href="admin-job-add.html">Create New Job</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="javascript:void(0)" class="collapsible-header"><i class="fa fa-pencil" aria-hidden="true"></i> Exam time table</a>
                            <div class="collapsible-body left-sub-menu">
                                <ul>
                                    <li><a href="admin-exam-all.html">All Exams</a></li>
                                    <li><a href="admin-exam-add.html">Add New Exam</a></li>
                                    <li><a href="admin-exam-group-all.html">All Groups</a></li>
                                    <li><a href="admin-exam-group-add.html">Create New Groups</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="javascript:void(0)" class="collapsible-header"><i class="fa fa-users" aria-hidden="true"></i> Students</a>
                            <div class="collapsible-body left-sub-menu">
                                <ul>
                                    <li><a href="admin-user-all.html">All Students</a>
                                    </li>
                                    <li><a href="admin-user-add.html">Add New Students</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="javascript:void(0)" class="collapsible-header"><i class="fa fa-commenting-o" aria-hidden="true"></i> Enquiry</a>
                            <div class="collapsible-body left-sub-menu">
                                <ul>
                                    <li><a href="admin-all-enquiry.html">All Enquiry</a></li>
									<li><a href="admin-course-enquiry.html">Course Enquiry</a></li>
									<li><a href="admin-admission-enquiry.html">Admission Enquiry</a></li>
									<li><a href="admin-seminar-enquiry.html">Seminar Enquiry</a></li>
									<li><a href="admin-event-enquiry.html">Event Enquiry</a></li>
									<li><a href="admin-common-enquiry.html">Common Enquiry</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="javascript:void(0)" class="collapsible-header"><i class="fa fa-cloud-download" aria-hidden="true"></i> Import & Export</a>
                            <div class="collapsible-body left-sub-menu">
                                <ul>
                                    <li><a href="admin-export-data.html">Export all datas</a>
                                    </li>
                                    <li><a href="admin-import-data.html">Import all datas</a>
                                    </li>
                                </ul>
                            </div>
                        </li> */}
                </ul>
            </div>
        </>
    )
}
