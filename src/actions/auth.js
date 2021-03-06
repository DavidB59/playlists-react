
 import request from 'superagent'
 export const baseUrl = 'http://localhost:4000'

 export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
 
//const baseUrl = 'https://tranquil-scrubland-12046.herokuapp.com/'

 const loginSuccess = (jwt) => ({
   type: LOGIN_SUCCESS,
jwt
 })

 const currentUser =  (userId) => ({
type : "CURRENT_USER",
userId})

 export const login = (email, password) => dispatch => {

//  request.get(`${baseUrl}/users`).then(response => {
//     response.body.users.filter(user => user.email===email)
//    }
//  ).then(res => {(currentUSer(res))})

// request.get(`${baseUrl}/users`).then(res=>
//   {const currentEmail =  res.body.users.filter(user => user.email === email)
//   dispatch(currentUser(currentEmail))
//   }
//   // console.log(res.body)
//   )
request
     .post(`${baseUrl}/tokens`)
     .send({ email, password })
     .then(response => {
      dispatch(loginSuccess(response.body.jwt))
     })
     .catch(console.error)
 }



