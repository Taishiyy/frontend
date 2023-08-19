import React, { useState } from "react";
import "../css/ColorSelect.css";

const Square = (props) => {
    const contentStyle = {
        background: props.color
    }
    
    return (
        <a href={`#${props.message}-page`}><button style={contentStyle} className="color-button">{props.message}</button></a>
    );
}

const ColorSelect = () => {

    return (
        <>
        <div className="container">
            <Square color="#F38181" message="red"/>
            <Square color="#f9a980" message="orange"/>
            <Square color="#fce38a" message="yellow"/>
            <Square color="#9fca99" message="green"/>
            <Square color="#95e1d3" message="blue"/>
            <Square color="#8490c8" message="indigo"/>
            <Square color="#a888be" message="violet"/>
        </div>
        </>
    );
}

export default ColorSelect