import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
import Filter from './Filter';
import { connect } from 'react-redux';
import { getCities } from '../store/actions/cityActions';

/*
inline component styling:
<Container style ={containerStyle}></Container>
*/
const containerStyle = {
  'color': 'red'
}

class Cities extends Component {
  state = {
    cities: [],          
    loading: true,
    filteredCities: []
  }

/* When Redux is not used:
  constructor(props) {
    super(props);
    this.state = {
      cities: [],          
      loading: true,
      filteredCities: []
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
          filteredCities: data
        })
        console.log(data);
      })
      .catch(error => console.error(error))
  }
  */
 

  /*
  Get cities data, then set data as part of the onFilterCities props in render(). 
  This props will go to the Filter.js. Filter.js returns filteredCities.
  */
  async componentDidMount() {
    await this.props.getCities()
    this.filterCities(this.props.cities)
  }

  //This data comes from FIlter.js
  filterCities = (filteredCities) => {
    this.setState({
      filteredCities: filteredCities
    })
  }

  render() {
    const {loading, cities} = this.props;
    console.log(cities)
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
              </Card.Body>
            </Card>  
          ) 
        })}
      </Container>   
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities.cities,
    loading: state.cities.loading,
    filteredCities: state.cities.filteredCities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCities: () => dispatch(getCities())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);