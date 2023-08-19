import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

function Search({ data }) {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (searchTerm) => {
    const results = data.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    };

    return (
    <div>
        <SearchBar onSearch={handleSearch} />
        <SearchResult results={searchResults} />
    </div>
    );
}

export default Search;
