import React from 'react'
import Button from "./Button"

const Sidebar = () => {
    const panelAttributes = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "5pt solid #186553",
        borderRadius: "5pt",
        padding: "35pt",
        backgroundColor: "rgba(206, 250, 208, 0.5)",
        margin: "30pt 700pt 0pt 700pt", 
    }
    
    const titleAttributes = {
        textAlign: "center",
        color: "#682c5d",
        fontSize: "20pt",
        fontWeight: "bold",
        paddingBottom: "10pt"
    }

    const textAttributes = {
        fontSize: "15pt",
        fontWeight: "bold",
        textAlign: "justify",
        paddingBottom: "20pt"
    }

  return (
    <div style={panelAttributes}>
        <div>
            <p style={titleAttributes}>
                Üdvözlöm a 
                Comnica Signature-ben!
            </p>
            <p style={textAttributes}>A következőkben végigvezetjük dokumentumai elfogadásában és aláírásán.
                A folyamat több percet is igénybe vehet, ezért kérjük, csak akkor kezdje el, ha készen áll rá.
            </p>
            < Button/>
        </div>
    </div>
  )
}

export default Sidebar