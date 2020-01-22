import { GET_CITIES } from '../actions/actionTypes';

const initialState = {
  cities: [],
  loading: true,
  filteredCities: []
}

export default function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
        cities: action.cities, 
        loading: false,
        filteredCities: action.cities
      }
    default: 
      return state
  }
}