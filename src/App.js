// work using https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en-US
import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import PlaylistsListContainer from './components/PlaylistsListContainer'
import CreatePlaylistFormContainer from './components/CreatePlaylistFormContainer'
import PlaylistDetailsContainer from './components/PlaylistDetailsContainer'
import CreateSongFormContainer from './components/CreateSongFormContainer'

//import LoginFormContainer from './components/LoginFormContainer'
//           <Route path="/login" component={LoginFormContainer} />

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
           <Route path="/" exact component={PlaylistsListContainer} />
           <Route path="/" exact component={CreatePlaylistFormContainer} />
           <Route path="/playlists/:id" component={PlaylistDetailsContainer} />
           <Route path="/playlists/:id" component={CreateSongFormContainer} />

        </div>
      </Provider>
    );
  }
}

export default App;