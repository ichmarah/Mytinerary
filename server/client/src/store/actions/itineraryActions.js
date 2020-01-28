import fetch from 'cross-fetch';
import { GET_ITINERARIES } from './actionTypes';

// When fetching itineraries, there will be no option for filtering.
export function getItineraries(name) {
  return async dispatch => {
    return await fetch(`http://localhost:5000/itineraries/${name}`, {
      method: "GET",
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json)
    .then(data => 
      (dispatch({
        type: GET_ITINERARIES,
        itineraries: data,
        loading: true
      }),
      console.log('Itineraries fetched in itineraryActions: ', data)) //Data is not logged in console at all. Postman test: itineraries of a city are being fetched.
    )
    .catch(error => console.error(error))
  }
}