import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import UserRepos from './UserRepos';
import UserFollowers from './UserFollowers';
import UserFollowing from './UserFollowing';

import store from '../store';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      followers: []
    }
  }

  componentWillMount() {
    store.subscribe(() => {
      this.setState({
        repos: store.getState().userRepos,
        followers: store.getState().userFollowers
      })
    })
  }

  render() {
    console.log(this.state.repos);
    const user = this.props.match.params.id;
    const detail = this.props.match.params.detail;
    return (
      <div className="user-detail">
        <nav>
          <ul>
            <li><NavLink activeClassName="active" to={`/user/${user}/repos`}>Repositories</NavLink></li>
            <li><NavLink activeClassName="active" to={`/user/${user}/followers`}>Followers</NavLink></li>
            <li><NavLink activeClassName="active" to={`/user/${user}/following`}>Following</NavLink></li>
          </ul>
        </nav>

        {detail == 'repos' && <UserRepos data={this.state.repos}/>}
        {detail == 'followers' && <UserFollowers data={this.state.followers}/>}
        {detail == 'following' && <UserFollowing />}
      </div>
    )
  }
}

export default UserDetail;