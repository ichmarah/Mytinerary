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
      cities: ""          
  }

  handleChange = (event) => {
    this.setState({
      cities: event.target.value 
    })
  }


  render() {
    return(
      <div>
        <h4>Explore cities of the world:</h4>
        <InputGroup className="mb-3">
          <FormControl placeholder="Type a city or country..."
            aria-describedby="basic-addon2" value={ this.state.cities } onChange={ this.handleChange } />
          <InputGroup.Append>
            <Button variant="outline-secondary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </div> 
    )
  }
      
    
}
export default Filter;
