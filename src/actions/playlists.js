import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_FETCHED = 'EVENT_FETCHED'
export const EVENT_DELETE_SUCCESS= 'EVENT_DELETE_SUCCESS'

const baseUrl = 'https://tranquil-scrubland-12046.herokuapp.com/'
const eventsFetched = playlists => ({
  type: EVENTS_FETCHED,
  playlists
})

export const loadPlaylists = () => (dispatch, getState) => {
  if (getState().playlists) return 
  console.log('loading playlistS')
  console.log(process.env.DATABASE_URL)
  console.log(baseUrl)
  request(`${baseUrl}/playlists`)
    .then(response => {
      dispatch(eventsFetched(response.body.playlists))
    })
    .catch(console.error)
}

export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'

const eventCreateSuccess = playlist => ({
  type: EVENT_CREATE_SUCCESS,
  playlist
})

export const createPlaylist = (data) => dispatch => {
  request
    .post(`${baseUrl}/playlists`)
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


export const loadPlaylist = (id) => dispatch => {
  console.log('loading playlist O')

  request
    .get(`${baseUrl}/playlists/${id}`)
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

export const deletePlaylist = (id) => dispatch => {
  request
    .delete(`${baseUrl}/playlists/${id}`)
//  .send(id)
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