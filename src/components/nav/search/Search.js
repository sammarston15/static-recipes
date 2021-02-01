import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div className='search'>
            <input type="text" placeholder='Search for recipes...' name="" id=""/>
            <button className='search-icon'><i class="fas fa-search"></i></button>
            {/* <i class="fas fa-search search-icon"></i> */}
        </div>
    )
}

export default Search
