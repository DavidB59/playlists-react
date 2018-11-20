import React from 'react'
import {loadPlaylists} from '../actions/playlists'
import {connect} from 'react-redux'
import PlaylistList from './PlaylistsList'
import CreatePlaylistFormContainer from './CreatePlaylistFormContainer'

class PlaylistListContainer extends React.Component {
  
  componentDidMount() {
    this.props.loadPlaylists(this.props.token)
  }
  render() {
    return (
    <>  
    <PlaylistList playlists={this.props.playlists} />
    <CreatePlaylistFormContainer></CreatePlaylistFormContainer>
    </>  

    )
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
  token:state.currentUser
})

export default connect(mapStateToProps, {loadPlaylists})(PlaylistListContainer)  