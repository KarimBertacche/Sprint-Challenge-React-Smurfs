import React from 'react';

import Smurf from './Smurf';

export default function Smurfs(props) {
  return (
    <div>
        {props.smurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
              deleteRequestHandler={props.deleteRequestHandler}
            />
          );
        })}
    </div>
  );
}

Smurf.defaultProps = {
 smurfs: [],
};
