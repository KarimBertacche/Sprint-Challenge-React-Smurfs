import React from 'react';
import { Route } from 'react-router-dom';

import styled from 'styled-components';
import Smurf from './Smurf';

const StylesVillage = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-top: 3px solid #1F85C7;
  border-left: 3px solid #1F85C7;
  margin-top: -100px;
  width: 80%;
  height: 83.5vh;
  overflow: scroll;
  border-top-left-radius: 20px;

  &::-webkit-scrollbar {
    height: 0;
    width: 0;
  }
`;

export default function Smurfs(props) {
  return (
    <StylesVillage>
        {props.smurfs.map(smurf => {
          return (
            <Route 
              key={smurf.id}
              path='/' 
              render={() => <Smurf
                              name={smurf.name}
                              id={smurf.id}
                              age={smurf.age}
                              height={smurf.height}
                              img={smurf.img}
                              key={smurf.id}
                              deleteRequestHandler={props.deleteRequestHandler}
                              updateRequestHandler={props.updateRequestHandler}
                            />}
            />
          );
        })}
    </StylesVillage>
  );
}

Smurf.defaultProps = {
 smurfs: [],
};