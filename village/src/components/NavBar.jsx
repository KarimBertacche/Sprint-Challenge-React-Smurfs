import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StylesNavBar = styled.nav`
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-left: 50px;

    .nav-links {
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 20px 5px;
        margin: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        color: #000;

        &.active {
            background-color: #1F85C7;
            color: #fff;
        }
    }

`;

export default function NavBar() {
    return(
        <StylesNavBar>
            <NavLink className="nav-links" exact to="/">Smurfs</NavLink>
            <NavLink className="nav-links" to={`/SmurfForm`}>Add Smurf</NavLink>
        </StylesNavBar>
    )
}