import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__title">
                    <h1>Movie Database</h1>
                </div>
                <div className="header__searchInput">
                    <input type="text" placeholder="Type a movie name"/>
                    <div className="header__searchIcon">
                         <SearchIcon />
                    </div>

                </div>
                <div className="header__SignIn">
                    <span>Sign In</span>
                </div>
            </div>
        </div>
    )
}

export default Header
