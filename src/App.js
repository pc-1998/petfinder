import './App.css';
import React, { Component } from 'react';
import ValidationForm from './ValidationForm';
import img from './img/blue.png';

class App extends Component {
  state = {
    visible: true,
    zip: '',
    animal: '',
    breed: '',
    age: ''
  };

  render() {
    return (
      <div className='App' style={{backgroundImage: `url(${img})`}}>
        <ValidationForm />
      </div>
    )
  }
}

export default App;