import React from 'react'
import GirlsPanel from './GirlsField/GirlsPanels/GirlsPanel'
import BoysPanel from "./BoysField/BoysPanels/BoysPanel"
import TWAnimation from '../TypeWriter/TWAnimation'



function MainFeed() {
  return (
    <div>
        <GirlsPanel/>
        <TWAnimation/>
        <BoysPanel/>
    </div>
  )
}

export default MainFeed