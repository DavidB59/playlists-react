import React from 'react'
import {connect} from 'react-redux'
import {createSong} from '../actions/songs'
import SongForm from './SongForm'
import {loadPlaylist} from '../actions/playlists'

class CreateSongFormContainer extends React.Component {
  state = {
    title: '',
    artist:'',
    album:'',
    playlistId:Number(this.props.id)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault() // need to prevent so that state doesnt refresh at the moment
    this.setState({
      title: '',
      artist:'',
      album:''
    }

  )
    this.props.createSong(this.state,Number(this.props.id),this.props.token)
    this.props.loadPlaylist(Number(this.props.id),this.props.token)
    console.log(this.props)
  }

  render() {
    return (<SongForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}
const mapStateToProps = state => ({
  token:state.currentUser
})
export default connect(mapStateToProps, {createSong,loadPlaylist})(CreateSongFormContainer)