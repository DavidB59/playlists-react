import request from 'superagent'


const baseUrl = 'http://localhost:4000'


export const CREATE_SONG = 'CREATE_SONG'

const eventCreateSuccess = song => ({
  type: CREATE_SONG,
  song
})

export const createSong = (data) => dispatch => {
  request
    .post(`${baseUrl}/songs`)
    .send(data)
  //  .then(response => {
  //    dispatch(eventCreateSuccess(response.body))
  //  })
    .catch(console.error)
}


