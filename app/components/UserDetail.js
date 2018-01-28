import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import UserRepos from './UserRepos';
import UserFollowers from './UserFollowers';
import UserFollowing from './UserFollowing';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.match.params.detail);
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

        {detail == 'repos' && <UserRepos user={user}/>}
        {detail == 'followers' && <UserFollowers user={user}/>}
        {detail == 'following' && <UserFollowing user={user}/>}
      </div>
    )
  }
}

export default UserDetail;