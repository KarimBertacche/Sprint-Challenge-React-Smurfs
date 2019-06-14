import React from 'react';
import { Route } from 'react-router-dom';
import SmurfCard from './SmurfCard';

const Smurf = props => {
  return (
    <div>
      <Route 
        exact
        path='/'
        render={() => <SmurfCard
                        name={props.name}
                        age={props.age}
                        id={props.id}
                        updateRequestHandler={props.updateRequestHandler}
                        deleteRequestHandler={props.deleteRequestHandler}
                      />}
      />
      <Route 
        path={`/${props.id}`}
        render={() => <SmurfCard
                        name={props.name}
                        age={props.age}
                        id={props.id}
                        updateRequestHandler={props.updateRequestHandler}
                        deleteRequestHandler={props.deleteRequestHandler}
                      />}
      />
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;