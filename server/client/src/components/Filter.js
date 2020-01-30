import React, { Component } from 'react';
import {
  InputGroup,
  FormControl, 
 
 } from 'react-bootstrap';

class Filter extends Component {

 state = {
      filterCities: ""          
  }
  

  handleChange = (event) => {
    // console.log(this.props)
    let filteredCities = this.props.cities.filter(city => city.name.toLowerCase().match('^' + event.target.value.toLowerCase()));
    this.props.onFilterCities(filteredCities);
  };


  render() {
    return(
      <div>
        <h4>Explore cities of the world:</h4>
        <InputGroup className="mb-3">
          <FormControl placeholder="Search a city..."
            aria-describedby="basic-addon2" value={ this.filerCities } onChange={ this.handleChange } />
        </InputGroup>
      </div> 
    )
  }
      
    
}

export default Filter;
