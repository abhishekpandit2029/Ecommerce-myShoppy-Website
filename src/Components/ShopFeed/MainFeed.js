import React from 'react'
import GirlsPanel from './GirlsField/GirlsPanels/GirlsPanel'
import BoysPanel from "./BoysField/BoysPanels/BoysPanel"



function MainFeed() {
  return (
    <div>
        <GirlsPanel/>
        <BoysPanel/>
    </div>
  )
}

export default MainFeed