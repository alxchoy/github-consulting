import React from 'react';

import {Link} from 'react-router-dom';

import UserRepos from './UserRepos';

class UserDetail extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="user-detail">
        <nav>
          <ul>
            <li><Link to="/repos">Repositories</Link></li>
            <li><Link to="/followers">Followers</Link></li>
            <li>Following</li>
          </ul>
        </nav>

        {this.props.children}
      </div>
    )
  }
}

export default UserDetail;