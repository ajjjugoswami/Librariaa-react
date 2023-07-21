import React from 'react'
import Header from '../Header'
import StartSec from './StartSec'
import MapSec from './MapSec'
import Footer from '../Footer'
import SocialMediaLinks from '../SocialMediaLinks'

const Contact = () => {
  document.title = 'Contact';
  return (
    <div>
      <Header/>
      <StartSec/>
      <MapSec/>
      <Footer/>
      <SocialMediaLinks/>
    </div>
  )
}

export default Contact
