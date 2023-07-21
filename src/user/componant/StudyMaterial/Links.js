import React from 'react'
import Header from '../Header'
import  Footer from '../Footer'
import OnCourses from './OnCourses'
import  SocialMediaLinks from '../SocialMediaLinks'


const Links = () => {
  return (
    <div>
      <Header/>
        <OnCourses/>
        <SocialMediaLinks/>
      <Footer/>
    </div>
  )
}

export default Links
