import React, { useState } from 'react';
import "../css/SearchBar.css"

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
    <form onSubmit={handleSearchSubmit} action="#" className='search-form-003'>
        <label>
            <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="本のタイトルを入力"
            />
        </label>
        <button type="submit" aria-label='検索'></button>
    </form>
    );
}

export default SearchBar;
