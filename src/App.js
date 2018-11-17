// work using https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en-US
import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
//import Home from './components/Home'
import EventsListContainer from './components/EventsListContainer'
import CreateEventFormContainer from './components/CreateEventFormContainer'
import EventDetailsContainer from './components/EventDetailsContainer'
//import LoginFormContainer from './components/LoginFormContainer'
//           <Route path="/login" component={LoginFormContainer} />

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={EventsListContainer} />
          <Route path="/" exact component={CreateEventFormContainer} />
          <Route path="/events/:id" component={EventDetailsContainer} />

        </div>
      </Provider>
    );
  }
}

export default App;