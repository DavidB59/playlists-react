// work using https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en-US
import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import Routes from './components/Routes'
//import PlaylistsListContainer from './components/PlaylistsListContainer'
//import CreatePlaylistFormContainer from './components/CreatePlaylistFormContainer'
// import PlaylistDetailsContainer from './components/PlaylistDetailsContainer'
// import CreateSongFormContainer from './components/CreateSongFormContainer'
// import CreateUserFormContainer from './components/CreateUserFormContainer'
// import LoginFormContainer from './components/LoginFormContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Routes></Routes>
        </div>
      </Provider>
    );
  }
}

export default App;