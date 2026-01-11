import '@/assets/styles/style.css';
import React from 'react';
// import { FiSearch, FiBell } from "react-icons/fi";

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div className="navbar-title">
                <h2>{props.title}</h2>
            </div>

            <div className="navbar-actions">
                <button className="icon-button">
                    {/* <FiSearch size={20} /> */}
                </button>

                <button className="icon-button">
                    {/* <FiBell size={20} /> */}
                </button>

                <button className="user-button">
                    Anabelmo Feijó
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
