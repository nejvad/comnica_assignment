import React from 'react'

const Title = () => {
    const panelAttributes = {
        position: "relative",
        left: "35%",
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        border: "5pt solid #186553",
        borderRadius: "5pt",
        padding: "35pt",
        backgroundColor: "rgba(206, 250, 208, 0.5)",
        marginTop: "30pt",
    }

    const titleTheme = {
        color: "#186553",
        fontWeight: "bold",
        fontSize: "25pt",
        textAlign: "center"
    }

    const textTheme = {
        fontSize: "15pt",
        fontWeight: "bold",
        textAlign: "center",
        color: "#31363c"
    }

  return (
    <div style={panelAttributes}>
        <div>
            <p style={titleTheme}>
                Comnica Signature
            </p>
            <p style={textTheme}>
                Digitális aláríró szolgaltatás a Comnicától
            </p>
        </div>
    </div>
  )
}

export default Title