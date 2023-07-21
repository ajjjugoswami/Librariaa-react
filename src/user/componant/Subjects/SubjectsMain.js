import React from 'react'
import Header from '../Header'
import SocialMediaLinks from '../SocialMediaLinks'
import Footer from '../Footer'
import SubjectPages from './SubjectPages'

const SubjectsMain = () => {
  return (
    <div>
      <Header/>
      <SubjectPages/>
      <SocialMediaLinks/>
      <Footer/>
    </div>
  )
}

export default SubjectsMain
