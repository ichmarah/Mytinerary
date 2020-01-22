import React, { Component } from 'react';
import {
  Card,
  Container, 
 } from 'react-bootstrap';
import Filter from './Filter';
import { connect } from "react-redux";
import { getCities } from '../store/actions/cityActions';
// import * as citiesActions from '../store/actions/cityActions';




//inline component styling:
//<Container style ={containerStyle}></Container>
 const containerStyle = {
  'color': 'red'
}

class Cities extends Component {
  state = {
    cities: [],          
    loading: true,
    filteredCities: []
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cities: [],          
  //     loading: true,
  //     filteredCities: []
  //   }
  // }

  // async componentDidMount() {
  //   await fetch('/cities/all', {
  //     method: "GET"
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         cities: data,
  //         loading: false,
  //         filteredCities: data
  //       })
  //       console.log(data);
  //     })
  //     .catch(error => console.error(error))
  // }

  componentDidMount() {
    this.props.getCities()
  }

  filterCities = (filteredCities) => {
    this.setState({
      filteredCities: filteredCities
    })
  }

  render() {
    const {loading} = this.props;
    if (loading) {
      return( <Container>Loading cities...</Container>)
    } 
    return (
      <Container style ={containerStyle}>
        <Filter onFilterCities={this.filterCities} cities={this.props.cities}/>
        {this.state.filteredCities.map((city) => {
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

const mapStateToProps = state => ({
  cities: state.cities
})

const mapDispatchToProps = dispatch => {
  type: dispatch(getCities())
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);