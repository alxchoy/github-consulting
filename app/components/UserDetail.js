import React from 'react';

import UserRepos from './UserRepos';

class UserDetail extends React.Component {
  render() {
    return (
      <div className="user-detail">
        <nav>
          <ul>
            <li>Repositories</li>
            <li>Followers</li>
            <li>Following</li>
          </ul>
        </nav>

        <UserRepos user={this.props.user}/>
      </div>
    )
  }
}

export default UserDetail;