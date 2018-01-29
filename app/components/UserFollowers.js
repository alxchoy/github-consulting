import React from 'react';
import axios from 'axios';

import store from '../store';

class UserFollowers extends React.Component {
  constructor(props) {
    super(props);

    this.state ={followers: []}

    store.subscribe(() => {
      this.setState({
        followers: store.getState().followers
      })
    })
  }

  componentDidMount() {
    const user = store.getState().user;
    axios.get(`https://api.github.com/users/${user}/followers`)
      .then(res => {
        if (res.status == 200) {
          store.dispatch({
            type: 'ADD_USER_FOLLOWERS',
            followers: res.data
          })
        }
      })
  }

  render() {
    const followers = this.state.followers;
    return (
      <div className="user-followers">
        {followers.length == 0 ? <p>LOADING...</p> : 
          followers.map((item) => (
            <div className="follower" key={item.id}>
              <img src={item.avatar_url} alt={`Avatar de ${item.login}`}/>
              <span>@{item.login}</span>
            </div>
          ))
        }
      </div>
    )
  }
}

export default UserFollowers;