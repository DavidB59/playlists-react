import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'


import PlaylistsListContainer from './PlaylistsListContainer'
//import CreatePlaylistFormContainer from './CreatePlaylistFormContainer'
import PlaylistDetailsContainer from './PlaylistDetailsContainer'
//import CreateSongFormContainer from './CreateSongFormContainer'
import CreateUserFormContainer from './CreateUserFormContainer'
import LoginFormContainer from './LoginFormContainer'

function Routes(props) {
  console.log(props.authenticated)
  return (<div> 
    {!props.authenticated &&
     <Switch>
<Route path="/login" component={LoginFormContainer} />   
<Route path="/signup" exact component={CreateUserFormContainer} />
<Route path="" render={() => <Redirect to="/login" />} />
     </Switch>}

    {props.authenticated &&
     <Switch>
     <Route path="/" exact component={PlaylistsListContainer} />
     <Route path="/playlists/:id"  component={PlaylistDetailsContainer} />
     <Route path="" render={() => <Redirect to="/" />} />

     </Switch>}
  </div>
  
  )
}
const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

export default withRouter(connect(mapStateToProps)(Routes))