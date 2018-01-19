import React from 'react';

import img from '../img/avatar.png';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="user">
        <img src={img} alt="user"/>
        <input type="text" placeholder="Github user"/>
      </div>
    )
  }
}

export default UserProfile;
