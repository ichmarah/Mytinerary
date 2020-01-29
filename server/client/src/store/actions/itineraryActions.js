import fetch from 'cross-fetch';
import { GET_ITINERARIES } from './actionTypes';

// When fetching itineraries, there will be no option for filtering.
export function getItineraries(name) {
  return async dispatch => {
    return await fetch(`/itineraries/${name}`, {
      method: "GET",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(data => {
      console.log('Itineraries fetched in itineraryActions: ', data)
      dispatch({
        type: GET_ITINERARIES,
        itineraries: data,
        loading: true
      })
    })
    .catch(error => console.error(error))
  }
}

