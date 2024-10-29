import React from 'react'

const Sidebar = () => {
    const panelAttributes = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "5pt solid #186553",
        borderRadius: "5pt",
        padding: "25pt",
        backgroundColor: "#cefad0",
        width: "55%"
    }
    
    const titleAttributes = {
        textAlign: "center",
        color: "#682c5d",
        fontSize: "25pt",
        fontWeight: "bold",

    }

    const textAttributes = {
        fontSize: "15pt",
        fontWeight: "bold",
        textAlign: "justify"
    }

  return (
    <div  style={panelAttributes}>
        <div >
            <p style={titleAttributes}>
                Üdvözlöm a 
                Comnica Signature-ben!
            </p>
            <p style={textAttributes}>A következőkben végigvezetjük dokumentumai elfogadásában és aláírásán.
                A folyamat több percet is igénybe vehet, ezért kérjük, csak akkor kezdje el, ha készen áll rá.
            </p>
        </div>
    </div>
  )
}

export default Sidebar