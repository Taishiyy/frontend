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
            <Square color="#F38181" message="赤"/>
            <Square color="#f9a980" message="橙"/>
            <Square color="#fce38a" message="黄"/>
            <Square color="#9fca99" message="緑"/>
            <Square color="#95e1d3" message="青"/>
            <Square color="#8490c8" message="藍"/>
            <Square color="#a888be" message="紫"/>
        </div>
        </>
    );
}

export default ColorSelect