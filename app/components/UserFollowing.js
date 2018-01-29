import React from 'react';
import axios from 'axios';

import store from '../store';

class UserFollowing extends React.Component {
  constructor(props) {
    super(props);

    this.state ={following: []}

    store.subscribe(() => {
      this.setState({
        following: store.getState().following
      })
    })
  }

  componentDidMount() {
    const user = store.getState().user;
    axios.get(`https://api.github.com/users/${user}/following`)
      .then(res => {
        if (res.status == 200) {
          store.dispatch({
            type: 'ADD_USER_FOLLOWING',
            following: res.data
          })
        }
      })
  }

  render() {
    const following = this.state.following;
    return (
      <div className="user-following">
        {following.length == 0 ? <p>LOADING...</p> : 
          following.map((item) => (
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

export default UserFollowing;