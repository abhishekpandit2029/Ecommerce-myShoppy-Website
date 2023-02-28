import React from 'react'
import Carousel from '../Carousel/Carousel'
import Footer from '../Footer/Footer'
import MainFeed from '../ShopFeed/MainFeed'
import "./Main.css"

function Main() {
  return (
    <div>
        <Carousel/>
        <MainFeed/>
        <Footer/>
    </div>
  )
}

export default Main