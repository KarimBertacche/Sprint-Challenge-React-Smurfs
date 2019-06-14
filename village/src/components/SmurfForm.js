import React, { Component } from 'react';
import styled from 'styled-components';

const StylesSmurfForm = styled.div`
    transform: translateX(-5%);
    display: flex;
    justify-content: center;
    width: 600px;
    margin: 0 auto;

    form {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    input {
      width: 190px;
      height: 25px;
      border: 2px solid #1F85C7;
      margin-bottom: 10px;
      text-align: center;
      outline: none;
      font-size: 1.1rem;

      &:first-child {
        border-bottom-left-radius: 10px;
        border-right: 2px solid dodgerblue;
      }

      &:nth-child(3) {
        border-bottom-right-radius: 10px;
        border-left: 2px solid dodgerblue;
      }

      &:invalid {
        border: 2px solid green;
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 230px;
      height: 40px;
      border: 3px solid #1F85C7;
      border-radius: 20px;
      padding: 8px 0;
      font-size: 1.1rem;
      outline: none;
    }


`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      smurfId: null
    };
  }

  addSmurf = event => {
    event.preventDefault();

    this.props.postRequestHandler(this.props.smurfsAPI, { 
      name: this.state.name,
      age: this.state.age,
      height: `${this.state.height}cm`
    })

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <StylesSmurfForm>
        <form onSubmit={this.addSmurf}>
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            min="1"
            max="100"
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            min="1"
            max="10"
          />
          <button type="submit">{this.props.btnText}</button>
        </form>
      </StylesSmurfForm>
    );
  }
}

export default SmurfForm;
