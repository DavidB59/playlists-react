import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_FETCHED = 'EVENT_FETCHED'
export const EVENT_DELETE_SUCCESS= 'EVENT_DELETE_SUCCESS'

const baseUrl = 'http://localhost:4000'
const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

export const loadEvents = () => (dispatch, getState) => {
  if (getState().events) return 
  console.log('yeah mean')
  request(`${baseUrl}/playlists`)
    .then(response => {
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}

export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
})

export const createEvent = (data) => dispatch => {
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}


// my load event function

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
})


export const loadEvent = (id) => dispatch => {
  request
    .get(`${baseUrl}/events/${id}`)
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

export const deleteEvent = (id) => dispatch => {
  request
    .delete(`${baseUrl}/events/${id}`)
//.send(id)
    .then(() => {
      dispatch(eventDeleted(id))
    })
    .catch(console.error)
}

//export const deleteEvent = () => { console.log('bla')}
const updatedEvent = id => ({
  type: "UPDATE",
  id
})
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
export const updateEvent = (id, data) => dispatch => {
  request
    .patch(`${baseUrl}/events/${id}`)
    .send(data)
    .then(response => {
      dispatch(updatedEvent(response.body))
    })
    .catch(console.error)
}