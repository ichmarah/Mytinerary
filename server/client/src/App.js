import React, { Component } from 'react';
// import '../../server/node_modules/node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Create from './components/Create';
import Cities from './components/Cities';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path='/' component={ Landing } />
            <Route path='/cities' component={ Cities } />
            <Route path='/login' component={ Login } />
            <Route path='/create' component={ Create } />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
      
    );
  }
}

export default App;