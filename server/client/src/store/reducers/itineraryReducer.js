import { GET_ITINERARIES } from '../actions/actionTypes';

const initialState = {
  itineraries: [],
  loading: true
}

export default function itinerariesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITINERARIES:
      return {
        ...state,
        itineraries: action.itineraries,
        loading: false
      }
    default:
      return state
  }
}