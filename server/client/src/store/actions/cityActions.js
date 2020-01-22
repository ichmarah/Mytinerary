import fetch from 'cross-fetch';
import {GET_CITIES} from './actionTypes'

export function getCities(cities) {
  return async dispatch => {
    return await fetch('http://localhost:5000/cities/all', {
      method: "GET",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(cities)
    })
      .then(response => response.json())
      .then(data => 
        
        (dispatch({
          type: GET_CITIES,
          cities: data,
          loading: true,
          filteredCities: []
        }),
        console.log(data))
      )
      .catch(error => console.error(error))
    } 
}