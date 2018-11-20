import request from 'superagent'
import {baseUrl} from './auth'
export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_FETCHED = 'EVENT_FETCHED'
export const EVENT_DELETE_SUCCESS= 'EVENT_DELETE_SUCCESS'

//const baseUrl = 'https://tranquil-scrubland-12046.herokuapp.com/'
//const baseUrl = 'http://localhost:4000'

const eventsFetched = playlists => ({
  type: EVENTS_FETCHED,
  playlists
})

export const loadPlaylists = (token) => (dispatch, getState) => {
  if (getState().playlists) return 
    console.log(token) 
   request.get(`${baseUrl}/playlists`).set('Authorization',`Bearer ${token}`) 
    .then(response => {
      console.log(response)
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error);
}

export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'

const eventCreateSuccess = playlist => ({
  type: EVENT_CREATE_SUCCESS,
  playlist
})

export const createPlaylist = (data,token) => dispatch => {
  request
    .post(`${baseUrl}/playlists`).set('Authorization',`Bearer ${token}`) 

    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}


// my load event function

const eventFetched = playlist => ({
  type: EVENT_FETCHED,
  playlist
})


export const loadPlaylist = (id,token) => dispatch => {
  request
    .get(`${baseUrl}/playlists/${id}`).set('Authorization',`Bearer ${token}`) 

//.send(id)
    .then(response => {
      dispatch(eventFetched(response.body))
    })
    .catch(console.error)
}





const eventDeleted = id => ({
  type: EVENT_DELETE_SUCCESS,
  id
})

export const deletePlaylist = (id,token) => dispatch => {
  request
    .delete(`${baseUrl}/playlists/${id}`).set('Authorization',`Bearer ${token}`) 

//  .send(id)
    .then(() => {
      dispatch(eventDeleted(id))
    })
    .catch(console.error)
}

//export const deleteEvent = () => { console.log('bla')}
// const updatedEvent = id => ({
//   type: "UPDATE",
//   id
// })
/*
export const update = (id,data) => dispatch => {
  request
    .patch(`${baseUrl}/events/${id}`)
//.send(id)
    .then(() => {
      dispatch(updatedEvent(id))
    })
    .catch(console.error)
}*/

// double arrow function is an higher order function.
/*
export const updateEvent = (id, data) => dispatch => {
  request
    .patch(`${baseUrl}/playlists/${id}`)
    .send(data)
    .then(response => {
      dispatch(updatedEvent(response.body))
    })
    .catch(console.error)
}

*/