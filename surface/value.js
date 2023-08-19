import React from "react";
import ChangeColor from "../components/changeColor";

const Value = ()=>{
    return(
        <>
            <h1>この本を色で評価するなら何色ですか。</h1>
            <ChangeColor color="赤"/>
            <ChangeColor color="橙"/>
            <ChangeColor color="黄"/>
            <ChangeColor color="緑"/>
            <ChangeColor color="青"/>
            <ChangeColor color="藍"/>
            <ChangeColor color="紫"/>
        </>
    );
}

export default Value;