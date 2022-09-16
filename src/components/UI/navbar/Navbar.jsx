import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => { 
    return ( 
        <div className="navbar">
                <div className="navbar-links">
                    <Link to="" className="a">О сайте</Link>
                    <Link to="/posts" className="a">Задачи</Link>
                </div>
        </div>
    )
} 
export default Navbar;