import React, { useContext } from 'react'
import { ThemeContext } from "../Theme/theme"

const Footer = () => {
    let theme = useContext(ThemeContext)
    let footer = {
        placeSelf: 'center center',
        width: '95%',
        display: "grid",
        girdTemplateRows: "10% 90%",
        gridTemplateColumns: "minmax(min-content, 0.5fr) minmax(min-content, 1fr) minmax(min-content, 0.5fr)",
        gridTemplateAreas:`
        "line line line"
        "logo links social"`,
        placeItems: "center center",
        rowGap: "5vh",
        paddingTop: "10vh",
        paddingBottom: '5vh'
    }
    let flex = {
        display: "flex",
        justifyItems: "space around",
        placeItems: "center center",
        gap: "5vw"
    }
    let hr = {
        gridArea: "line",
        width: "100%",
        borderTop: "0.5px solid #000000",
        placeSelf: "start center",
    }
    return (
        <footer style={footer}>
            <hr style={hr}/>
            <img src="https://raw.githubusercontent.com/LeonardoMussatto/Connecting/Pre-Release/connecting/src/Media/Icons/Social/Logo-01.png" width="125px"></img>
            <div style={flex}>
                <p style={{...theme.text.title.h3}}>Categories</p>
                <p style={{...theme.text.title.h3}}>Authors</p>
            </div>
            <div style={flex}>
                <p style={{...theme.text.body}}>link1</p>
                <p style={{...theme.text.body}}>lin2</p>
                <p style={{...theme.text.body}}>link3</p>
            </div>
        </footer>
    )
}

export default Footer
