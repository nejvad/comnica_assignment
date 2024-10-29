import React from 'react'
import logo from "../img/logo.png"

const Logo = () => {

  const transform = {
    height: "100pt",
    width: "105pt",
  }

  return (
    <>
      <img src={logo} style={transform}  alt="Logo"/>
    </>
  )
}

export default Logo;