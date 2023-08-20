import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

function Search({ data }) {
    const [searchResults, setSearchResults] = useState(null);

    const handleSearch = (searchTerm) => {
        const results =  searchTerm === null ? null : data.filter(item =>
            item && item.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
    };

    return (
        <div className='Search'>
            <SearchBar onSearch={handleSearch} />
            <SearchResult results={searchResults} />
        </div>
    );
}

export default Search;

// import React, { useState } from 'react';
// import SearchBar from './SearchBar';
// import SearchResult from './SearchResult';

// function Search({ data }) {
//     const [searchResults, setSearchResults] = useState(null);

//     const handleSearch = (searchTerm) => {
//         const results = searchTerm === null ? null : data.filter(item =>
//             item.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setSearchResults(results);
//     };

//     return (
//         <div>
//             <SearchBar onSearch={handleSearch} />
//             {searchResults !== null && <SearchResult results={searchResults} />}
//         </div>
//     );
// }

// export default Search;