import React from 'react'
import Carousel from '../Carousel/Carousel'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import MainFeed from '../ShopFeed/MainFeed'
import "./Main.css"
// import TWGirl from '../Typewriter/Forgirls/TWGirl'


function Main() {
  return (
    <div>
        <Navbar/>
        <Carousel/>
        <MainFeed/>
        {/* <TWGirl/> */}
        <Footer/>
    </div>
  )
}

export default Main