import React from 'react';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import UserProfile from './UserProfile';
import UserDetail from './UserDetail';
import UserFollowers from './UserFollowers';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1>GitHub Consulting</h1>
          <Route exact path="/" component={Home}/>
          <Route path="/user/:id" component={UserProfile}/>
        </div>
      </Router>
    )
  }
}

export default App;