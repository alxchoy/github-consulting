import React from 'react';
import axios from 'axios';

import store from '../store';
import { getUserData } from '../service';

import {Link} from 'react-router-dom';

class UserFollowers extends React.Component {
  constructor(props) {
    super(props);

    this.state ={followers: []}
    this.changeData = this.changeData.bind(this);
  }

  // componentDidMount() {
  //     store.subscribe(() => {
  //       this.setState({
  //         followers: store.getState().userFollowers
  //       })
  //     })
  // }

  changeData() {
    getUserData('kevinrodbe').then(res => {
      store.dispatch({
        type: 'CHANGE_USER_DATA',
        data: res
      })
    });
  }

  render() {
    const followers = this.props.data;
    return (
      <div className="user-followers">
        {followers.length == 0 ? <p>LOADING...</p> : 
          followers.map((item) => (
            <div className="follower" key={item.id}>
              <img src={item.avatar_url} alt={`Avatar de ${item.login}`}/>
              <span>@{item.login}</span>
              <Link to={`/user/${this.state.user}/repos`} onClick={this.changeData}>@{item.login}</Link>
            </div>
          ))
        }
      </div>
    )
  }
}

export default UserFollowers;