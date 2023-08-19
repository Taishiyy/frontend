import React from "react";
import "../css/ColorPages.css";

const Book = (props) => {
    return (
        <div className="flex-item">
            <div className="image-wrap">
                <a><img src={props.url}></img></a>
            </div>
        </div>
    );
}

const ColorPage = (props) => {

    const colorPageStyle = {
        background: props.color
    }
    return (
        <>
            <div className="color-page" id={`${props.message}-page`}>
                <h1 style={colorPageStyle}>{props.message}</h1>
                <div className="flex-container">
                    <Book url="https://cover.openbd.jp/9784167110079.jpg" />
                    <Book url="https://cover.openbd.jp/9784065278734.jpg" />
                    <Book url="https://cover.openbd.jp/9784043718061.jpg" />
                    <Book url="https://cover.openbd.jp/9784088812120.jpg" />
                    <Book url="https://cover.openbd.jp/9784088707815.jpg" />
                    <Book url="https://cover.openbd.jp/9784785320546.jpg" />
                    <Book url="https://cover.openbd.jp/9784785310462.jpg" />
                    <Book url="https://cover.openbd.jp/9784065288894.jpg" />
                    <Book url="https://cover.openbd.jp/9784785306014.jpg" />
                </div>
            </div>
        </>
    );
}

const ColorPages = () => {
    return (
        <>
            <div className="color-pages">
                <ColorPage color="#F38181" message="red"/>
                <ColorPage color="#f9a980" message="orange"/>
                <ColorPage color="#fce38a" message="yellow"/>
                <ColorPage color="#9fca99" message="green"/>
                <ColorPage color="#95e1d3" message="blue"/>
                <ColorPage color="#8490c8" message="indigo"/>
                <ColorPage color="#a888be" message="violet"/>
            </div>
        </>
    );
}
export default ColorPages