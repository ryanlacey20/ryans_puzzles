// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="Header">
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li>Word Guess</li>
                    <li><Link to="/wordsearch">Word Search</Link></li>
                    <li>Place holder</li>
                    <li>Place holder</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
