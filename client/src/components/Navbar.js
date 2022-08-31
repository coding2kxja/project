import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className ="navbar">
        <Link to="/" className="site-title">
        📋What's Your Agenda?
        </Link>

        <ul>

            <li>
                <Link to="/create">Create A Task
                </Link>
            </li>

            <li>
                <Link to ="/" className="navbar">
                    View To Do List
                </Link>
            </li>

            <li>
                <Link to ="/form" className="navbar">
                    Sign Up
                </Link>
            </li>
        </ul>

        </nav>
    )
}
export default Navbar;
