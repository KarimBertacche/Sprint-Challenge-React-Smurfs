import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StylesSmurfsTab = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .aside-links{
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #1F85C7;
        border: 3px solid #1F85C7;
        border-radius: 10px;
        padding: 5px;
        margin-bottom: 10px;
        text-decoration: none;
        font-weight: bold;
        color: #fff;
    }
`;

export default function SmurfsTab(props) {
    return(
        <StylesSmurfsTab>
            {
              props.smurfs.map(smurf => {
                return(
                  <NavLink key={smurf.id} className="aside-links" to={`/${smurf.id}`}>{smurf.name}</NavLink>
                )
              })
            }
        </StylesSmurfsTab>
    )
}