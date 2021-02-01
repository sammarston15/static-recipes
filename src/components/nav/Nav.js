import React from 'react';
import './Nav.css';

// COMPONENTS
import Search from './search/Search';

const Nav = () => {
    return (
        <div className='nav-container'>
            <div className="logo"><i class="far fa-building"></i> RecipeDigital</div>
            <div className="search-container">
                <Search />
            </div>
        </div>
    )
}

export default Nav
