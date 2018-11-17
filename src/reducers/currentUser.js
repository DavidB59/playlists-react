export default (state = null, action = {}) => {
  switch (action.type) {
      case "LOGIN":
      console.log(action.jwt)
      return action.jwt      
    default:
      return state
  }

}
/*
import {LOGIN_SUCCESS} from '../actions/auth'

export default function (state = null, action) {
  if (action.type === LOGIN_SUCCESS) return action.jwt
  return state
}*/