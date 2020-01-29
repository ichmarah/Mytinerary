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
// const containerStyle = {
//   'color': 'red'
// }

class Itinerary extends Component {
  constructor(props) {
    super(props)
      // this.state = {
      //   itineraries: [
      //     {
      //       name: []
      //     }
      //   ],
      //   loading: true
      // }

  }

componentDidMount() {
  const name = this.props.match.params.name;
  console.log()
  // If city.name from Cities.js in <Link> matches itineraries.name, only show itinerraies with that matching name
 this.props.getItineraries(name[0].toUpperCase() + name.substr(1))
  // .filter(itinerary => {
  //   return name === itinerary.name 
  // })
  // this.setState({
  //   itineraries: [{
  //     name: name
  //   }],
  //   loading: this.props.loading
  // })
  // this.setState({
  //   itineraries: this.props.itineraries,
  //   loading: this.props.loading
  // })

  
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
            <Card key={ itinerary._id } style={{ width: '20rem' }}>
              <Card.Img variant="top" src={ itinerary.img } alt={ `${itinerary.name}, ${itinerary.country}` } />
              <Card.Body>
                <h4>{ itinerary.name } ({ itinerary.country }) Itinerary</h4>
                <Card.Title>{ itinerary.activity }</Card.Title>
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