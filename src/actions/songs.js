import request from 'superagent'
import {baseUrl} from './auth'


//const baseUrl = 'https://tranquil-scrubland-12046.herokuapp.com/'
//const baseUrl = 'http://localhost:4000'


export const CREATE_SONG = 'CREATE_SONG'

const eventCreateSuccess = song => ({
  type: CREATE_SONG,
  song
})

export const createSong = (data,id,token) => dispatch => {
  request
    .post(`${baseUrl}/playlists/${id}/songs`).set('Authorization',`Bearer ${token}`) 
    .send(data)
  //  .then(response => {
  //    dispatch(eventCreateSuccess(response.body))
  //  })
    .catch(console.error)
}


