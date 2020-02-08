import fetch from 'cross-fetch';
import { CREATE_ACCOUNT } from './actionTypes';

export function createUser(newUser) {
  // console.log('Log in BE: ', newUser)
  return async dispatch => {
    return await fetch('/users/register', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      //body is necessary to pass along data that was sent here as an argument
      body: JSON.stringify(newUser) // x-www-form-urlencoded ??
    })
    .then(res => {
      console.log(res) 
      return res.json()
    })
    .then(data => 
      (dispatch({
        type: CREATE_ACCOUNT,
        users: data
        // checked: false,
      }))
    )
    .catch(error => console.error(error))
  }
}