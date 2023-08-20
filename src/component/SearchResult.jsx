import React from 'react';
import { Link } from 'react-router-dom'
import "../css/SearchResult.css"


function SearchResult({ results }) {
    return (
            <ul>
                {results === null ? (
                    <li className='none'>Loading...</li>
            ) : 
                results.length === 0 ? ( 
                <li className="none">検索結果:0件</li>
            ) : (
                results.map((result, index) => (
                <li key={index} className='book'>
                    <Link to={`${result}`} className="bookName">{result}</Link>
                    <br />
                </li>
                ))
            )}
            </ul>
    );
}

export default SearchResult;
