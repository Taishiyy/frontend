import React, { useState, useEffect } from "react";
import "../css/ColorPages.css";

const Book = (props) => {
    return (
        <div className="flex-item">
            <div className="image-wrap">
                <a><img src={props.url}></img></a>
                <div>{props.title}</div>
            </div>
            <div className="title">{props.title}</div>
        </div>
    );
}

const ColorPage = (props) => {
    const [array, setArray] = React.useState([]);
	const fastapi = "https://grant_back-1-s6313601.deta.app/books";

	useEffect(() => {
    fetch(fastapi)  // FastAPIのエンドポイントに合わせて変更してください
      .then(response => response.json())
      .then(data => {
        setArray(data);
        console.log(data);
      })
      .catch(error => console.error("Error fetching data:", error));
    }, []);

    const colorPageStyle = {
        background: props.color
    }
    return (
        <>
            <div className="color-page" id={`${props.message}-page`}>
                <h1 style={colorPageStyle}>{props.message}</h1>
                <div className="flex-container">
                    {array.map((item, index) => (
                        item.color === props.message ?
                        <Book key={index} url={item.uri} title={item.title}/> : null
                    ))}
                </div>
            </div>
        </>
    );
}

const ColorPages = () => {
    return (
        <>
            <div className="color-pages">
                <ColorPage color="#F38181" message="赤"/>
                <ColorPage color="#f9a980" message="橙"/>
                <ColorPage color="#fce38a" message="黄"/>
                <ColorPage color="#9fca99" message="緑"/>
                <ColorPage color="#95e1d3" message="青"/>
                <ColorPage color="#8490c8" message="藍"/>
                <ColorPage color="#a888be" message="紫"/>
            </div>
        </>
    );
}
export default ColorPages