import React, { Component } from 'react';
import {
  Card,
  Container, 
  InputGroup,
  FormControl, 
  Button
 } from 'react-bootstrap';
  // import Filter from './Filter';

//inline component styling:
//<Container style ={containerStyle}></Container>
 const containerStyle = {
  'color': 'red'
}

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],          
      loading: true,
      filterCities: ""
    }
  }

  async componentDidMount() {
    await fetch('/cities/all', {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          cities: data,
          loading: false,
          filterCities: this.state.cities
        })
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    this.setState({
      filterCities: event.target.value
    })
  }

  render() {
    const {loading} = this.state;
    const {filteredCities} = this.state.cities.filter(
      (city) => {
        return  city.name.indexOf(this.state.filterCities) !== -1;
      }
    );
    if (loading) {
      return( <Container>Loading cities...</Container>)
    } 

    return (
      <Container style ={containerStyle}>
        <div>
          <h4>Explore cities of the world:</h4>
          <InputGroup className="mb-3">
            <FormControl placeholder="Type a city or country..."
              aria-describedby="basic-addon2" value={this.filterCities} onChange={ this.handleChange } />
            <InputGroup.Append>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </div> 
        {filteredCities.map((city) => {
          return(
            <Card key={city._id} style={{ width: '20rem' }}>
              <Card.Img variant="top" src={city.img} alt={`${city.name}, ${city.country}`} />
              <Card.Body>
                <Card.Title>{city.name}, {city.country}</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum cumque eum ex aliquam, beatae esse
                  temporibus qui. Quam, magnam corporis? Fuga at reprehenderit reiciendis maiores et quisquam quasi
                  molestiae neque.
                </Card.Text>
              </Card.Body>
            </Card>  
          ) 
        })}
      </Container>   
    );
  }
}

export default Cities;