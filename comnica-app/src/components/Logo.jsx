import React from 'react'
import logo from "../img/logo.png"

const Logo = () => {

  const transform = {
    height: "75pt",
    width: "105pt",
    top: "-15pt",
  }

  return (
    <>
      <img src={logo} style={transform}  alt="Logo"/>
    </>
  )
}

export default Logo;