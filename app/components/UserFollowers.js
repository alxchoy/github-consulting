import React from 'react';
import axios from 'axios';

class UserFollowers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.props.user}/followers`)
      .then(res => {
        if (res.status == 200) {
          console.log(res);
          this.setState({repos: res.data})
        }
      })
  }

  render() {
    return (
      <div>
        <p>FOLLOWERS</p>
      </div>
    )
  }
}

export default UserFollowers;