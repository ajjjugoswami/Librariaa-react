import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AminLogin from './Adim/adminComponant/AminLogin'
import AdminAlluserShow from './Adim/Adminpages/AdminAlluserShow'
import AdminHome from './Adim/Adminpages/AdminHome'
import UploadGalary from './Adim/Adminpages/UploadGalary'
import Allcourses from './user/componant/Allcourses'
import About from './user/pages/About'
import GallerysUser from './user/pages/GallerysUser'
import Home from './user/pages/Home'
import Eventadddata from './Adim/Admindata/Eventadddata'
import Eventadmin from './Adim/Adminpages/Eventadmin'
import Eventuser from './user/pages/Eventuser'
import Contact from './user/componant/ContactUs/Contact'
import Ist from './testing/Ist'
import StudentdetailsShow from './Adim/Admindata/StudentdetailsShow'
import Studentsdata from './user/StudentPannel.js/Studentsdata'
import Links from './user/componant/StudyMaterial/Links'
import SubjectsMain from './user/componant/Subjects/SubjectsMain'

export default function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/Courses' element={<Allcourses/>}></Route>
    <Route path='/Gallerys' element={<GallerysUser/>}></Route>
    <Route path={`/AdminLogin`} element={<AminLogin/>}></Route>
    <Route path={`/${sessionStorage.getItem("fl")}`} element={<AdminHome/>}></Route>
    <Route path={`/Allstudentdetails`} element={<AdminAlluserShow/>}></Route>
    <Route path='/Uplodgallery' element={<UploadGalary/>}></Route>
    <Route path='/Eventadddata' element={<Eventadmin/>}></Route>
    <Route path='/Eventuser' element={<Eventuser/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Studentsdata' element={<Studentsdata/>}></Route>
    <Route path='/Links' element={<Links/>}></Route>
    <Route path='/SubjectsMain' element={<SubjectsMain/>}></Route>
 
  
    </Routes>
    </BrowserRouter>
    </>
  )
}
