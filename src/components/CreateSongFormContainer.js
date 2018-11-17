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
    playlistId:Number(this.props.match.params.id)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    //pomevent.preventDefault()
    this.setState({
      title: '',
      artist:'',
      album:''
    }
  )
    this.props.createSong(this.state,Number(this.props.match.params.id))
    //this.props.loadPlaylist(Number(this.props.match.params.id))
  }

  render() {
    return (<SongForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {createSong,loadPlaylist})(CreateSongFormContainer)