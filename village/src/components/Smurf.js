import React from 'react';
import styled from 'styled-components';
import BrainySmurf from '../images/brainy.png';

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
    height: 150px;
    background-color: #1F85C7;
    border: 3px solid #1F85C7;
    border-radius: 20px;
    color: #fff;
    
  }

`;

const Smurf = props => {
  return (
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
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;