import { CREATE_ACCOUNT } from '../actions/actionTypes';

const initialState = {
  users: [],
  loading: true,
  msg: null
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return {
        ...state, 
        users: action.user,
        // checked: action.checked,
        msg: action.msg
      }
    default:
      return state
  }
}