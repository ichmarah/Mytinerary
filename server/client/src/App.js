import React, { Component } from 'react';
// import '../../server/node_modules/node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import Cities from './components/Cities';
import Itineraries from './components/Itineraries';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path='/' component={ Landing } />
            <Route path='/cities' component={ Cities } />
            <Route path='/itineraries/:name' component={ Itineraries } />
            <Route path='/users/login' component={ Login } />
            <Route path='/users' component={ CreateAccount } />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
      
    );
  }
}

export default App;