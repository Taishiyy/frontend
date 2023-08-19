import React, { useState } from 'react';

const SearchBar=({ onSearch }) =>{
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    };

    return (
    <form onSubmit={handleSearchSubmit}>
        <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="探したい本の名前"
        />
        <button type="submit" >本を検索する</button>
    </form>
    );
}

export default SearchBar;
