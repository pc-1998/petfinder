import React from 'react';
import './index.css';
import { FetchData } from './FetchData';
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Dropdown, DropdownButton } from 'react-bootstrap';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

let styles = {
  marginTop: '20px'
};

const defineArr = [{type: 'Cat', breeds: ['American Bobtail','American Wirehair','Burmese']}, {type: 'Dog', breeds: ["Mixed Breed"
,'Pug','Golden Retriever','Border Collie']}];

const animalTypes = ['Dog', 'Cat', 'Rabbit', 'Small & Furry', 'Horse', 'Bird', 'Scales, Fins & Other', 'Barnyard'];

const ageTypes = ['Baby', 'Young', 'Adult', 'Senior'];

const initialState = {
  zip: '',
  zipError: '',
  animal: defineArr[0].type,
  breed: defineArr[0].breeds[0],
  age: ageTypes[0]
} 

export default class ValidationForm extends React.Component {
  state = initialState; 

  constructor(props){
    super(props);
    this.state = initialState;
  };

  changeType(e) {
    this.setState({ animal: e.target.value });
    defineArr.map((item, index) => {
      if(e.target.value === item.type) {
        this.setState({ breed: item.breeds[0] });
      }
      return true;
    })
  };

  changeBreeds(e) {
    this.setState({ breed: e.target.value });
  };

  changeAge(e) {
    this.setState({ age: e.target.value });
  };

  handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox 
        ? event.target.checked
        : event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState); // clear form
    }
  };

  validate =()=> {
    let zipError = '';

    if (!((/^[0-9]{5}(?:-[0-9]{4})?$/).test(this.state.zip))) {
      zipError = 'invalid zip';
    }

    if (zipError) {
      this.setState({ zipError });
      return false;
    }
    return true;
  }

  render() {

    const types = defineArr.map((item, index) => {
      return <option key={index}>{item.type}</option>
    });
    
    const breeds = defineArr.map((item, index) => {
      if(this.state.animal === item.type) {
        return item.breeds.map((item, index) =>
          <option key={index}>{item}</option>
        )
      }
      return true;
    });

    return (
      <form onSubmit={this.handleSubmit}>
  
        <div style={styles}>
          <input 
            name='zip'
            placeholder='Zip code'
            value={this.state.zip}
            onChange={this.handleChange}
          />
          <div style={{fontSize: 12, color: 'red'}}>
            {this.state.zipError}
          </div>
        </div>

        <div style={styles}>
          <select value={this.state.animal} onChange={this.changeType.bind(this)}>{types}</select>
          <select value={this.state.breed} onChange={this.changeBreeds.bind(this)}>{breeds}</select>
          <select id="age" value={this.state.age} onChange={this.changeAge.bind(this)}>
            <option value="baby">Baby</option>
            <option value="young">Young</option>
            <option value="adult">Adult</option>
            <option value="senior">Senior</option>
          </select>
        </div>

        <div style={styles}>
          <button type='submit'>submit</button>
        </div>

        <div style={styles}>
          <FetchData obj={{'animal': this.state.animal, 'breed': this.state.breed, 'age': this.state.age}} />
        </div>

      </form>
    )
  }
}