import fetch from 'cross-fetch';
import { CREATE_ACCOUNT } from './actionTypes';

export function createUser() {
  return async dispatch => {
    return await fetch('/users/register', {
      method: "POST",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then(data => 
      (dispatch({
        type: CREATE_ACCOUNT,
        users: data,
        // checked: false,
        msg: null
      }))
    )
    .catch(error => console.error(error))
  }
}