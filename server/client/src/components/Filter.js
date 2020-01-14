import React, { Component } from 'react';
import {
  InputGroup,
  FormControl, 
  Button
 } from 'react-bootstrap';

class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterCities: ""          
    }
  }

  handleChange = (ev) => {
    // console.log(this.props)
    let filteredCities = this.props.cities.filter(city => city.name.toLowerCase().indexOf(ev.target.value) !== -1);
    this.props.onFilterCities(filteredCities);
    // this.setState({
    //   filterCities: event.target.value 
    // })
    // this.props.onChange(event.target.value)


  };


  render() {
    return(
      <div>
        <h4>Explore cities of the world:</h4>
        <InputGroup className="mb-3">
          <FormControl placeholder="Type a city or country..."
            aria-describedby="basic-addon2" value={ this.state.filerCities } onChange={ this.handleChange } />
          <InputGroup.Append>
            <Button variant="outline-secondary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </div> 
    )
  }
      
    
}

export default Filter;
