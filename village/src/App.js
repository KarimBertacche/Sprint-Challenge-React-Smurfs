import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const smurfsAPI = 'http://localhost:3333/smurfs'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      errorMessage: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.getRequestHandler();

    console.log(this.state.smurfs);
    console.log(this.state.errorMessage);
  }

  getRequestHandler = () => {
    axios.get(smurfsAPI)
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(reject => {
        this.setState({ errorMessage: reject.message })
      })
  } 

  getRequestHandler = () => {
    axios.get(smurfsAPI)
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(reject => {
        this.setState({ errorMessage: reject.message })
      })
  } 

  postRequestHandler = (Url, newSmurf) => {
    axios.post(Url, newSmurf)
      .then(response => {
        this.setState({ smurfs: response.data })
      })
  }

  deleteRequestHandler = (id) => {
    axios.delete(`${smurfsAPI}/${id}`)
      .then(response => {
        this.setState({ smurfs: response.data })
      })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm 
          smurfsAPI={smurfsAPI} 
          btnText={this.state.btnText}
          postRequestHandler={this.postRequestHandler} 
          id={this.state.smurfs} 
        />
        <Smurfs 
          smurfs={this.state.smurfs} 
          deleteRequestHandler={this.deleteRequestHandler}
        />
      </div>
    );
  }
}

export default App;
