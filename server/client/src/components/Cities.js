import React, { Component } from 'react';
import {
  Card,
  Container
 } from 'react-bootstrap';

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
      loading: true
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
          loading: false
        })
      })
      .catch(error => console.log(error))
  }
  

 
    
  render() {
    const {cities, loading} = this.state;
    if (loading) {
      return( <Container>Loading...</Container>)
    } 
    return (
      <Container style ={containerStyle}>
        {cities.map(city => {
          return(
            <Card key={city._id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={city.img} alt={`${city.name}, ${city.country}`} />
              <Card.Body>
                <Card.Title>{city.name}, {city.country}</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum cumque eum ex aliquam, beatae esse temporibus qui. Quam, magnam corporis? Fuga at reprehenderit reiciendis maiores et quisquam quasi molestiae neque.
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