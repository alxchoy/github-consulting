import React from 'react';
import axios from 'axios';

class UserFollowers extends React.Component {
  constructor(props) {
    super(props);

    this.state ={followers: []} 
  }

  componentDidMount() {
    const user = this.props.match.params.id;
    axios.get(`https://api.github.com/users/${user}/followers`)
      .then(res => {
        if (res.status == 200) {
          console.log(res);
          this.setState({followers: res.data})
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