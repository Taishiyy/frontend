import React,{useState} from "react";
import RecommendBook from "./recommendBook";
import SearchResult from "./SearchResult";

    const BookDetail =({result})=>{
    return(
        <>
            <h2>本の内容</h2>
            <RecommendBook result={result}/>
        </>
    );
}

export default BookDetail;

//この上に詳細をかく
//本の推薦を書く