import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import NavBar from './components/NavBar';
import SmurfForm from './components/SmurfForm';
import SmurfsTab from './components/SmurfsTab';
import Smurfs from './components/Smurfs';

import Logo from './smurfVillage.png';

const StylesHeader = styled.div`
  header {
    position: sticky;
    top: 0;
    display: flex;
    height: 100px;
  }

  img {
    width: 200px;
    height: 200px;
    margin-left: 30px;
  }

  section {
    margin-top: 100px;
    display: flex;

    aside {
      width: 19%;
      height: 69vh;
      display: flex;
      flex-direction: column;
      /* border: 3px solid red; */
      overflow: scroll;
    }
  }

`;

const smurfsAPI = 'http://localhost:3333/smurfs'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      errorMessage: '',
      loading: false,
      btnText: 'Add to the village'
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

  updateRequestHandler = (id) => {
    axios.put(`${smurfsAPI}/${id}`, {
      name: '',
      age: '',
      height: ''
    })
      .then(response => {
        this.setState({ smurfs: response.data })
      })
  }

  render() {
    return (
      <StylesHeader>
        <header>
          <img src={Logo} alt="logo" />
          <NavBar/>
          <Route path="/SmurfForm"
            render={() => <SmurfForm 
            smurfsAPI={smurfsAPI} 
            btnText={this.state.btnText}
            postRequestHandler={this.postRequestHandler} 
            id={this.state.smurfs}/>} 
          />
        </header>
        <section>
          <aside>
            <SmurfsTab smurfs={this.state.smurfs}/>
          </aside>
            <Smurfs 
              smurfs={this.state.smurfs} 
              deleteRequestHandler={this.deleteRequestHandler}
              updateRequestHandler={this.updateRequestHandler}
            />      
        </section>
      </StylesHeader>
    );
  }
}

export default App;

