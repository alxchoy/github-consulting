import React from 'react';

import {Link} from 'react-router-dom';

import img from '../img/avatar.png';

import UserProfile from './UserProfile';
import UserDetail from './UserDetail';

import store from '../store';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {user: ''}
    this.handleChange = this.handleChange.bind(this);

    store.subscribe(() => {
      this.setState({
        user: store.getState().user
      })
    })
  }

  handleChange(event) {
    store.dispatch({
      type: 'ADD_USER',
      user: event.target.value
    })
  }

  render() {
    return (
      <div className="user-default">
        <img src={img} alt="user"/>
        <div>
          <input type="text" placeholder="github username" value={this.state.user} onChange={this.handleChange}/>
          {this.state.user != '' && <Link to={`/user/${this.state.user}/repos`} className="search">Search</Link>}
        </div>
      </div>
    )
  }
}

export default Home;