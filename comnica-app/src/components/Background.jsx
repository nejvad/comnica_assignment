import React from 'react'
import background from "../img/background.png"

const Background = () => {
    const backgroundPosition = {
        position: "absolute",
        zIndex: "-1",
        height: "100vh",
        width: "100vw"
    }

  return (
    <img src={background} style={backgroundPosition}/>
  )
}

export default Background