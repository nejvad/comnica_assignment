import React from 'react'
import logo from "../files/logo.png"

const Logo = () => {

  const transform = {
    position: "absolute",
    height: "75pt",
    width: "105pt",
    top: "-15pt",
    zIndex: "1",
  }

  return (
    <>
      <img src={logo} style={transform}  alt="Logo"/>
    </>
  )
}

export default Logo;