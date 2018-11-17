import React from 'react'
import {loadPlaylists} from '../actions/playlists'
import {connect} from 'react-redux'
import PlaylistList from './PlaylistsList'

class PlaylistListContainer extends React.Component {
  componentDidMount() {
    this.props.loadPlaylists()
  }

  render() {
    return <PlaylistList playlists={this.props.playlists} />
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
})

export default connect(mapStateToProps, {loadPlaylists})(PlaylistListContainer)  