import React from 'react';
import styled from 'styled-components';
import BrainySmurf from '../images/brainy.png';
import Smurfette from '../images/smurfette.png';

const smurfsImg = [BrainySmurf, Smurfette];

const StylesSmurf = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  margin-bottom: 20px;

  section {
    position: absolute;
    bottom: -5%;
    left: -15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 130px;
    background-color: #1F85C7;
    border: 3px solid #1F85C7;
    border-radius: 20px;
    color: #fff;

    h3 {
      font-size: 1.4rem;
      margin-top: 0;
      margin-bottom: 5px;
    }

    p {
      margin-top: 5px;
    }
    
  }

`;

export default function SmurfCard(props) {
    return(
        <StylesSmurf>
            <img src={BrainySmurf} alt="smurf"/>
            <section>
                <h3>{props.name}</h3>
                <strong>{props.height} tall</strong>
                <p>{props.age} smurf years old</p>
                {/* BUTTONS WILL APPEAR ONLY ON HOVER */}
                <div>
                <button onClick={() => props.updateRequestHandler(props.id)}>EDIT</button>
                <button onClick={() => props.deleteRequestHandler(props.id)}>DEL</button>
                </div>   
            </section>  
      </StylesSmurf>
    )
}