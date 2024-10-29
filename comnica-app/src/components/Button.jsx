import React from 'react'

const Button = () => {

    const theme = {
        backgroundColor: "#20876f",
        color: "white",
        padding: "10pt",
        borderRadius: "35pt",
        fontWeight: "bold"
    }

    function handleMouseEnter(e) {
        e.target.style.backgroundColor = "#29a98b"
    }

    function handleMouseLeave(e) {
        e.target.style.backgroundColor = "#20876f"
    }

    function handleMouseDown(e) {
        console.log("The Emperor protects!")
    }

  return (
    <button style={theme} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        >KEZDHETJÜK</button>
  )
}

export default Button