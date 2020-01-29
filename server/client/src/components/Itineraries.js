// import Activity from './Activity'; // Activity is nested in Itinerary
import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
import { getItineraries } from '../store/actions/itineraryActions';
import { connect } from 'react-redux';
// import Itinerary from './Itinerary';




/*
inline component styling:
<Container style ={containerStyle}></Container>
*/
const containerStyle = {
  'color': 'red',
  'width': '20rem'
}

class Itinerary extends Component {
    state = {
      itineraries: '',
      loading: true
    }


componentDidMount() {
  const name = this.props.match.params.name;
  console.log()
  this.props.getItineraries(name[0].toUpperCase() + name.substr(1)) //Make first letter of the name a small letter
}

  render() {
    const {loading, itineraries} = this.props;
    console.log(itineraries)
    if (loading) {
      return( <Container>Loading itineraries...</Container>)
    } 
    return (
      <Container>
        <h4>Itinerary</h4>
   
        {this.props.itineraries.map(itinerary => {
          return(
            <Card key={ itinerary._id } style={containerStyle}>
              <Card.Img variant="top" src={ itinerary.img } alt={ `${itinerary.name}, ${itinerary.country}` } />
              <Card.Body>
                <Card.Title>{ itinerary.activity }</Card.Title>
                <Card.Text>Price: { itinerary.price }, Rating { itinerary.rating } out of 5</Card.Text>
                <Card.Text>{ itinerary.summary }</Card.Text>
              </Card.Body>
            </Card>
          )
        })}        
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    itineraries: state.itineraries.itineraries,
    loading: state.itineraries.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getItineraries: (name) => dispatch(getItineraries(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);