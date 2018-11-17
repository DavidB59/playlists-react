/*import request from 'superagent'

const baseUrl = 'http://localhost:4000'


export const login = (email,password) => dispatch =>  {
  console.log(email,password)
  request
  .put(`${baseUrl}/logins`)
  .send(email,password)
  .then(() => {
    dispatch({
      type: "LOGIN",
      event :{email, password}
    })
  })
  } 
  
  */
 import request from 'superagent'

 export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
 
 const baseUrl = 'http://localhost:4000'
 
 const loginSuccess = jwt => ({
   type: LOGIN_SUCCESS,
   jwt
 })
 
 export const login = (email, password) => dispatch => {
   request
     .post(`${baseUrl}/logins`)
     .send({ email, password })
     .then(response => {
       dispatch(loginSuccess(response.body.jwt))
     })
     .catch(console.error)
 }

 