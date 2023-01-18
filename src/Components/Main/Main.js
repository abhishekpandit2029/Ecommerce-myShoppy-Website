import React from 'react'
import Carousel from '../Carousel/Carousel'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import MainFeed from '../ShopFeed/MainFeed/MainFeed'
import "./Main.css"


function Main() {
  return (
    <div>
        <Navbar/>
        <Carousel/>
        <MainFeed/>
        <Footer/>
    </div>
  )
}

export default Main