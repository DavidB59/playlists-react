import request from 'superagent'


const baseUrl = 'postgres://qzieokwmdtvowh:188f62abfbf6a7451b3ddc03c3386b09865b69edb4de8afc8f2204ee2681cab8@ec2-54-75-231-3.eu-west-1.compute.amazonaws.com:5432/ddbn56g37im49d' || 'http://localhost:4000'


export const CREATE_SONG = 'CREATE_SONG'

const eventCreateSuccess = song => ({
  type: CREATE_SONG,
  song
})

export const createSong = (data,id) => dispatch => {
  request
    .post(`${baseUrl}/playlists/${id}/songs`)
    .send(data)
  //  .then(response => {
  //    dispatch(eventCreateSuccess(response.body))
  //  })
    .catch(console.error)
}


