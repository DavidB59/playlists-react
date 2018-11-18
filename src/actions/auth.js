
 import request from 'superagent'

 export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
 
 const baseUrl = 'postgres://qzieokwmdtvowh:188f62abfbf6a7451b3ddc03c3386b09865b69edb4de8afc8f2204ee2681cab8@ec2-54-75-231-3.eu-west-1.compute.amazonaws.com:5432/ddbn56g37im49d' || 'http://localhost:4000'
 
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

request.get(`${baseUrl}/users`).then(res=>
  {const currentEmail =  res.body.users.filter(user => user.email === email)
  dispatch(currentUser(currentEmail))
  }
  // console.log(res.body)
  )
   request
     .post(`${baseUrl}/logins`)
     .send({ email, password })
     .then(response => {
      dispatch(loginSuccess(response.body.jwt))
     })
     .catch(console.error)
 }



