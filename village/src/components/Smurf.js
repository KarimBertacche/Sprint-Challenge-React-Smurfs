import React from 'react';

const Smurf = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      {/* BUTTONS WILL APPEAR ONLY ON HOVER */}
      <button>EDIT</button>
      <button onClick={() => props.deleteRequestHandler(props.id)}>DEL</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

