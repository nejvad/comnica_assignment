import React from 'react'
import background from "../img/background.png"

const Background = () => {
    const backgroundPosition = {
        position: "absolute",
        zIndex: "-1",
        backgroundSize: "cover",
        backgroundRepeat: "no-repear",
        backgroundPosition: "center center"
    }

  return (
    <img src={background} style={backgroundPosition}/>
  )
}

export default Background