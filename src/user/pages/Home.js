import React from 'react'
import Coursces from '../componant/Coursces'
import Footer from '../componant/Footer'
import Header from '../componant/Header'
import Login from '../componant/Login'
import Newsevents from '../componant/Newsevents'
import UserHomebarslider from '../componant/UserHomebarslider'
import QuickLinks from '../componant/QuickLinks'
import DiscoverMore from '../componant/DiscoverMore'
import SocialMediaLinks from '../componant/SocialMediaLinks'

export default function Home() {
  document.title = 'Home';
  return (
    <div>
     <Header/>
      <UserHomebarslider/>
      <QuickLinks/>
      <DiscoverMore/>
     <Coursces/>
      <Newsevents/>
      <Login/>
    <Footer/>
    <SocialMediaLinks/>
    </div>
  )
}
