// import fetch from 'cross-fetch';
// import { GET_USER } from './actionTypes';

// export function getUser() {
//   return async dispatch => {
//     return await fetch('/all', {
//       method: "GET",
//       headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//     })
//     .then(data => 
//       (dispatch({
//         type: GET_USER,
//         users: data,
//         loading: false
//       }))
//     )
//     .catch()
//   }
// }