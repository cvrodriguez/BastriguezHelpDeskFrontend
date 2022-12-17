import * as React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

import '../style/nav-bar.css'

export const NavBarComponent: React.FC<{}> = () => {
    return(
        <Navbar className="nav-bar-page">
            <Navbar.Brand>
            <Link to="tickets">Tickets</Link>  |
            </Navbar.Brand>
            <Navbar.Brand>
            <Link to="agents">Agents</Link>  |
            </Navbar.Brand>
            <Navbar.Brand>
            <Link to="statistics">Statistics</Link>
            </Navbar.Brand>
        </Navbar>
    )
}

