import React, { Component } from 'react';

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],          
      loading: true
    }
  }

  async componentDidMount() {
    await fetch('./cities/all', {
      method: "GET"
    })
      .then(response => {console.log(response)}
        // response.json)
      // .then(json => {
      //   console.log(json)
      // }
        // this.setState({
        // cities: json,
        // loading: false
      // })
      )
      .catch(error => console.log(error))
  }
  

    
  render() {
    const {cities, loading} = this.state;
    if (loading) {
      return( <div>Loading...</div>)
    } 
    return (
      <div>
        {cities.map(city => {
          return(
            <div key={city._id}>
              <h4>{city.name}, {city.country}</h4>
              <img src={city.url} alt={`${city.name} + ', ' + ${city.country}`} />
            </div>
          ) 
        })}
      </div>   
    );
  }
}

export default Cities;