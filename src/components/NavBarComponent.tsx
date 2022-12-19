import * as React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import styled from "styled-components";



export const NavBarComponent: React.FC<{}> = () => {
    return(
        <Container className="nav-bar-page">
            <Navbar.Brand>
            <Link to="tickets">Tickets</Link>  |
            </Navbar.Brand>
            <Navbar.Brand>
            <Link to="agents">Agents</Link>  |
            </Navbar.Brand>
            <Navbar.Brand>
            <Link to="statistics">Statistics</Link>
            </Navbar.Brand>
        </Container>
    )
}

const Container  = styled(Navbar)`
{
    display: flex;
    justify-content: center;
}
a{
    text-decoration: none;
    color: #A66B56;
}

a:hover{
    
    color: #133340;
}
`